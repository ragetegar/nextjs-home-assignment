import { useState, useRef, useEffect } from "react";
import { universes, Universe } from "@/pages/api/mockData";

export default function Header() {
    const [isFocused, setIsFocused] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsFocused(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#000000]">
            <div className="max-w-[100%] mx-auto px-4 h-14 flex items-center justify-between">

                <div className="flex items-center gap-4">
                    <button className="text-gray-400 hover:text-white">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <span className="text-xl font-bold text-white">BOO</span>
                </div>

                <div ref={searchRef} className="flex-1 mx-4 relative">
                    <div className={`relative z-50 bg-black rounded-t-3xl ${isFocused ? 'rounded-b-none' : 'rounded-full'} transition-all duration-200`}>
                        <svg className={`w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${isFocused ? 'text-[#4EDCD8]' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search"
                            onFocus={() => setIsFocused(true)}
                            className={`w-full bg-transparent border-none py-2.5 pl-12 pr-4 rounded-3xl text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-0 box-shadow`}
                        />
                    </div>

                    {/* Search Dropdown */}
                    {isFocused && (
                        <div className="absolute top-full left-0 w-full bg-[#000000] rounded-b-3xl box-shadow overflow-hidden z-40 max-h-[60vh] overflow-y-auto scrollbar-hide border-t border-[#1a1a1a]">
                            <div className="py-2">
                                {universes.map((u: Universe) => (
                                    <div key={u.tag} className="px-4 py-3 hover:bg-[#4EDCD8] cursor-pointer flex items-center justify-between group transition-colors">
                                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors font-medium">{u.tag}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex items-center gap-4">
                    <button className="bg-[#4EDCD8] text-black text-lg font-semibold py-2 px-6 rounded-full hover:bg-[#6BE3DF] transition-transform hover:scale-[1.05] active:scale-[0.95] duration-500 ease-in-out shadow-animation">
                        sign in
                    </button>
                </div>
            </div>
        </header>
    );
}
