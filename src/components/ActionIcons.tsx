import Image from "next/image";

interface ActionIconsProps {
    likes: number;
    comments: number;
}

export default function ActionIcons({ likes, comments }: ActionIconsProps) {
    return (
        <div className="flex items-center gap-4 text-gray-400">
            {/* like */}
            <a className="cursor-pointer flex items-center gap-1  transition-transform hover:scale-[1.05] active:scale-[0.95] duration-500 ease-in-out">
                <Image src="/img/like.svg" alt="like" width={24} height={24} />
                {likes > 0 && <span className="text-xs">{likes}</span>}
            </a>

            {/* commend */}
            <a className="cursor-pointer flex items-center gap-1  transition-transform hover:scale-[1.05] active:scale-[0.95] duration-500 ease-in-out">
                <Image src="/img/comment.svg" alt="comment" width={24} height={24} />
                {comments > 0 && <span className="text-xs">{comments}</span>}
            </a>

            {/* share */}
            <a className="cursor-pointer transition-transform hover:scale-[1.05] active:scale-[0.95] duration-500 ease-in-out">
                <Image src="/img/share.svg" alt="share" width={24} height={24} />
            </a>

            {/* bookmark */}
            <a className="cursor-pointer transition-transform hover:scale-[1.05] active:scale-[0.95] duration-500 ease-in-out">
                <Image src="/img/award.svg" alt="bookmark" width={24} height={24} />
            </a>
        </div>
    );
}
