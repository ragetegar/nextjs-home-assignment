interface BadgeProps {
    type: "mbti" | "zodiac";
    value: string;
}

export default function Badge({ type, value }: BadgeProps) {
    const baseClasses =
        "px-2 py-0.5 rounded-full text-xs font-medium inline-flex items-center";

    if (type === "mbti") {
        return (
            <span className={`${baseClasses} bg-[#4EDCD8] text-black`}>{value}</span>
        );
    }

    return (
        <span className={`${baseClasses} bg-horoscope text-white`}>
            {value}
        </span>
    );
}
