import Image from "next/image";

interface QuestionCardProps {
    question: {
        id: string;
        text: string;
        date: string;
        likes: number;
        comments: number;
    };
    variant?: 'default' | 'hero';
}

export default function QuestionCard({ question, variant = 'default' }: QuestionCardProps) {
    if (variant === 'hero') {
        return (
            <div className="rounded-3xl p-6 box-shadow mb-4 bg-[#000000]">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500 font-medium">Question of the Day</span>
                    <span className="text-sm text-gray-500">{question.date}</span>
                </div>
                <h1 className="text-2xl font-bold text-white mb-6 leading-tight">
                    {question.text}
                </h1>
                <div className="flex items-center justify-between text-gray-400">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5">
                            <a className="cursor-pointer flex items-center gap-1 transition-transform hover:scale-[1.05] active:scale-[0.95] duration-500 ease-in-out">
                                <Image src="/img/like.svg" alt="like" width={24} height={24} />
                            </a>
                            <span className="text-sm font-medium">{question.likes}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <a className="cursor-pointer flex items-center gap-1 transition-transform hover:scale-[1.05] active:scale-[0.95] duration-500 ease-in-out">
                                <Image src="/img/comment.svg" alt="comment" width={24} height={24} />
                            </a>
                            <span className="text-sm font-medium">{question.comments}</span>
                        </div>
                        <a className="cursor-pointer flex items-center gap-1 transition-transform hover:scale-[1.05] active:scale-[0.95] duration-500 ease-in-out">
                            <Image src="/img/share.svg" alt="share" width={24} height={24} />
                        </a>
                    </div>
                    <span className="text-sm font-medium text-gray-500 hover:text-gray-300 cursor-pointer transition-colors">Comment</span>
                </div>
            </div>
        );
    }

    return (
        <div className="rounded-3xl p-4 box-shadow hover:border-[#3a3a3a] transition-transform hover:scale-[1.02] active:scale-[0.98] duration-500 ease-in-out mb-3">
            <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500">Question of the Day</span>
                <span className="text-xs text-gray-500">{question.date}</span>
            </div>
            <p className="text-sm text-white font-medium mb-3 line-clamp-2">
                {question.text}
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                    <a className="cursor-pointer flex items-center gap-1 transition-transform hover:scale-[1.05] active:scale-[0.95] duration-500 ease-in-out">
                        <Image src="/img/like.svg" alt="like" width={24} height={24} />
                    </a>
                    <span>{question.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                    <a className="cursor-pointer flex items-center gap-1 transition-transform hover:scale-[1.05] active:scale-[0.95] duration-500 ease-in-out">
                        <Image src="/img/comment.svg" alt="comment" width={24} height={24} />
                    </a>
                    <span>{question.comments}</span>
                </div>
                <a className="cursor-pointer flex items-center gap-1 transition-transform hover:scale-[1.05] active:scale-[0.95] duration-500 ease-in-out">
                    <Image src="/img/share.svg" alt="share" width={24} height={24} />
                </a>
            </div>
        </div>
    );
}
