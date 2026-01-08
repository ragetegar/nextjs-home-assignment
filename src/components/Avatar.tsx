import { UserLevel } from "@/pages/api/mockData";

interface AvatarProps {
    src?: string;
    alt: string;
    size?: "sm" | "md" | "lg";
    level?: UserLevel;
}

const levelColors: Record<UserLevel, string> = {
    diamond: "from-purple-500 to-pink-500",
    gold: "from-yellow-400 to-amber-500",
    silver: "from-gray-300 to-gray-500",
    bronze: "from-amber-600 to-amber-800",
};

export default function Avatar({
    src,
    alt,
    size = "md",
    level,
}: AvatarProps) {
    const sizeClasses = {
        sm: "w-8 h-8",
        md: "w-10 h-10",
        lg: "w-12 h-12",
    };

    const gradientClass = level ? levelColors[level] : "from-purple-500 to-pink-500";

    return (
        <div className="relative inline-block">
            <div
                className={`${sizeClasses[size]} rounded-full bg-gradient-to-br ${gradientClass} flex items-center justify-center overflow-hidden`}
            >
                {src ? (
                    <img src={src} alt={alt} className="w-full h-full object-cover" />
                ) : (
                    <span className="text-white font-semibold text-sm">
                        {alt.charAt(0).toUpperCase()}
                    </span>
                )}
            </div>
        </div>
    );
}
