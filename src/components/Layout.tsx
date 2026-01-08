import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MeetNewPeopleBanner from "./MeetNewPeopleBanner";

interface LayoutProps {
    children: React.ReactNode;
    leftSidebar: React.ReactNode;
    universesSidebar: React.ReactNode;
    rightSidebar: React.ReactNode;
    feedRef?: React.RefObject<HTMLDivElement | null>;
    showMeetBanner?: boolean;
}

export default function Layout({
    children,
    leftSidebar,
    universesSidebar,
    rightSidebar,
    feedRef,
    showMeetBanner = false,
}: LayoutProps) {
    return (
        <div className="h-screen bg-[#000000] text-white overflow-hidden">
            <Header />

            {/* Main Content */}
            <div className="flex w-full h-[calc(100vh-56px)] pt-14">
                {/* Navigation */}
                <aside className="w-[13.333%] h-full p-4 overflow-hidden">
                    {leftSidebar}
                </aside>

                {/* universes*/}
                <aside className="w-[20%] h-full p-4">
                    {universesSidebar}
                </aside>

                {/* feed */}
                <main ref={feedRef} className="w-[33.333%] h-full overflow-y-auto scrollbar-hide">
                    {children}
                </main>

                {/* qotd */}
                <aside className="w-[33.333%] h-full p-4 overflow-y-auto scrollbar-hide">
                    {rightSidebar}
                </aside>
            </div>

            <Footer />

            {/* Floating Join Banner */}
            <MeetNewPeopleBanner isVisible={showMeetBanner} />
        </div>
    );
}
