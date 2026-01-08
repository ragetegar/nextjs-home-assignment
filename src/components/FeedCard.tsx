import { Post } from "@/pages/api/mockData";
import Avatar from "./Avatar";
import Badge from "./Badge";
import ActionIcons from "./ActionIcons";

interface FeedCardProps {
    post: Post;
}

export default function FeedCard({ post }: FeedCardProps) {
    return (
        <div className="rounded-3xl p-4 box-shadow transition-transform hover:scale-[1.02] active:scale-[0.98] duration-500 ease-in-out">
            {/* head */}
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                    <Avatar alt={post.username} level={post.level} />
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="font-medium text-white">{post.username}</span>
                            <span className={`text-xs px-1.5 py-0.5 rounded capitalize ${post.level === 'diamond' ? 'bg-purple-500 text-white' :
                                post.level === 'gold' ? 'bg-yellow-500 text-black' :
                                    post.level === 'silver' ? 'bg-gray-400 text-black' :
                                        'bg-amber-700 text-white'
                                }`}>
                                {post.level}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <Badge type="mbti" value={post.mbtiType} />
                            <Badge type="zodiac" value={post.zodiacSign} />
                        </div>
                    </div>
                </div>
                <span className="text-xs text-gray-500">{post.timestamp}</span>
            </div>

            {/* Content text */}
            <p className="text-gray-200 text-sm mb-3 leading-relaxed">{post.content}</p>

            {/* i have and image */}
            {post.hasImage && (
                <div className="mb-3 rounded-lg overflow-hidden bg-[#2a2a2a] h-48 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Image placeholder</span>
                </div>
            )}

            {/* action */}
            <div className="flex items-center justify-between pt-3 border-t border-[#2a2a2a]">
                <ActionIcons likes={post.likes} comments={post.comments} />
                <button className="text-xs text-gray-400 hover:text-[#4EDCD8] transition-colors cursor-pointer">
                    Reply
                </button>
            </div>
        </div>
    );
}
