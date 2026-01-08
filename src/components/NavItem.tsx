import { JSX } from "react";

interface NavItemProps {
    icon: string;
    label: string;
    href: string;
    isActive?: boolean;
}

const iconMap: { [key: string]: JSX.Element } = {
    home: (
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
            <circle cx="500.3" cy="504.1" r="290.8" fill="#4EDCD8"></circle>
            <path fill="currentColor" d="M500.8 881.8c-51 0-100.4-10-147-29.7-45-19-85.3-46.2-120-80.9s-61.9-75-80.9-120c-19.7-46.6-29.7-96-29.7-147s10-100.4 29.7-147c19-45 46.2-85.3 80.9-120s75-61.9 120-80.9c46.6-19.7 96-29.7 147-29.7s100.4 10 147 29.7c45 19 85.3 46.2 120 80.9s61.9 75 80.9 120c19.7 46.6 29.7 96 29.7 147s-10 100.4-29.7 147c-19 45-46.2 85.3-80.9 120s-75 61.9-120 80.9c-46.6 19.7-96 29.7-147 29.7zm0-715.1c-186.1 0-337.5 151.4-337.5 337.5s151.4 337.5 337.5 337.5 337.5-151.4 337.5-337.5-151.4-337.5-337.5-337.5z"></path>
            <path fill="currentColor" d="M98.1 685.1c-11.8 0-22.6-.5-32.2-1.4-13.8-1.4-55.8-5.5-64.4-35.1-8.6-29.6 24.8-55.5 35.8-64 22.6-17.6 56.1-37 99.6-57.9l17.3 36.1C64 606.2 45 630.3 41.2 637.2c6.9 3.8 35.8 14.1 135.3 2.6 93.8-10.8 215.2-36.9 341.8-73.4 127.1-36.7 244-79.5 329.2-120.5 89.6-43.1 108.4-67.1 112.3-73.9-6.9-3.8-35.6-14-134.2-2.7l-4.5-39.8c47.6-5.4 86-6.7 114.4-3.9 13.7 1.4 55.5 5.5 64 35s-24.6 55.3-35.5 63.8c-22.5 17.5-55.8 36.9-99 57.7-87.1 41.9-206.2 85.5-335.4 122.8-128.7 37.1-252.4 63.7-348.3 74.7-32 3.7-59.8 5.5-83.2 5.5z"></path>
        </svg>
    ),
    heart: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
    ),
    message: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
    ),
    user: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
    ),
    database: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
    ),
    test: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
    ),
    book: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
    ),
};

export default function NavItem({ icon, label, href, isActive = false }: NavItemProps) {
    return (
        <a
            href={href}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${isActive
                ? "text-[#4EDCD8]"
                : "text-gray-400 hover:text-[#4EDCD8] hover:bg-[#1a1a1a]"
                }`}
        >
            {iconMap[icon] || iconMap.home}
            <span className="text-sm font-medium">{label}</span>
        </a>
    );
}
