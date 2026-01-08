import { useState, useRef, useEffect } from "react";
import Layout from "@/components/Layout";
import LeftSidebar from "@/components/LeftSidebar";
import UniversesSidebar from "@/components/UniversesSidebar";
import RightSidebar from "@/components/RightSidebar";
import FeedCard from "@/components/FeedCard";
import CommunityBanner from "@/components/CommunityBanner";
import FilterTabs from "@/components/FilterTabs";
import QuestionCard from "@/components/QuestionCard";
import {
  Post,
  navItems,
  universes,
  questions,
  posts,
} from "@/pages/api/mockData";

const INITIAL_ITEMS = 4;

export default function Home() {
  const [visiblePosts, setVisiblePosts] = useState<Post[]>([]);
  const [currentCount, setCurrentCount] = useState(INITIAL_ITEMS);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'best' | 'new'>('best');
  const [showMeetBanner, setShowMeetBanner] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const feedRef = useRef<HTMLDivElement>(null);
  const communityBannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisiblePosts(posts.slice(0, INITIAL_ITEMS));
    // Set mounted after a small delay to ensure Layout has rendered
    const timer = setTimeout(() => setIsMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // IntersectionObserver to track CommunityBanner visibility
  useEffect(() => {
    if (!isMounted) return;

    const bannerElement = communityBannerRef.current;
    const feedContainer = feedRef.current;

    if (!bannerElement || !feedContainer) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Show MeetNewPeopleBanner when CommunityBanner is NOT visible
          setShowMeetBanner(!entry.isIntersecting);
        });
      },
      {
        root: feedContainer, // Use the feed container as the viewport
        threshold: 0, // Trigger when any part is visible/hidden
        rootMargin: '0px',
      }
    );

    observer.observe(bannerElement);

    return () => {
      observer.disconnect();
    };
  }, [isMounted]);

  const handleScroll = () => {
    const container = feedRef.current;
    if (!container) return;

    if (container.scrollTop + container.clientHeight >= container.scrollHeight - 50 && !isLoading) {
      loadMore();
    }
  };

  const loadMore = () => {

    if (visiblePosts.length >= posts.length) return;

    setIsLoading(true);
    setTimeout(() => {
      const nextCount = currentCount + 1;
      setVisiblePosts(posts.slice(0, nextCount));
      setCurrentCount(nextCount);
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    const container = feedRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [visiblePosts, isLoading]);

  const mainQuestion = questions[0];

  return (
    <Layout
      leftSidebar={<LeftSidebar navItems={navItems} />}
      universesSidebar={<UniversesSidebar universes={universes} />}
      rightSidebar={<RightSidebar questions={questions} />}
      feedRef={feedRef}
      showMeetBanner={showMeetBanner}
    >
      <div className="p-4">
        <QuestionCard question={mainQuestion} variant="hero" />
        <CommunityBanner ref={communityBannerRef} />
        <FilterTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="space-y-3">
          {visiblePosts.map((post) => (
            <FeedCard key={post.id} post={post} />
          ))}
        </div>
        {isLoading && (
          <div className="text-center py-4 text-gray-500 text-sm">
            Loading...
          </div>
        )}
        {!isLoading && visiblePosts.length >= posts.length && (
          <div className="text-center py-8 text-gray-600 text-sm">
            No more posts
          </div>
        )}
      </div>
    </Layout>
  );
}
