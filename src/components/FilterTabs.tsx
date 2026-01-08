interface FilterTabsProps {
    activeTab?: 'best' | 'new';
    onTabChange?: (tab: 'best' | 'new') => void;
}

export default function FilterTabs({ activeTab = 'best', onTabChange }: FilterTabsProps) {
    return (
        <div className="flex justify-center mb-4">
            <div className="bg-[#1a1a1a] rounded-full p-1 flex">
                <button
                    onClick={() => onTabChange?.('best')}
                    className={`px-4 py-1 rounded-full text-xs font-medium transition-all duration-300 ${activeTab === 'best'
                            ? 'bg-[#4EDCD8] text-black shadow-sm'
                            : 'text-gray-400 hover:text-white'
                        }`}
                >
                    best
                </button>
                <button
                    onClick={() => onTabChange?.('new')}
                    className={`px-4 py-1 rounded-full text-xs font-medium transition-all duration-300 ${activeTab === 'new'
                            ? 'bg-[#4EDCD8] text-black shadow-sm'
                            : 'text-gray-400 hover:text-white'
                        }`}
                >
                    new
                </button>
            </div>
        </div>
    );
}
