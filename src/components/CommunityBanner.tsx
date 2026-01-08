import { forwardRef } from 'react';

const CommunityBanner = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <div
            ref={ref}
            className="rounded-3xl p-6 box-shadow mb-4 flex flex-col items-start bg-[#000000]"
        >
            <h2 className="text-xl font-bold text-white mb-2">Questions Community</h2>
            <p className="text-gray-400 text-sm mb-4">The questions community, chat, and discussion.</p>
            <button className="bg-[#4EDCD8] text-black font-bold py-2 px-6 rounded-full hover:bg-[#6BE3DF] transition-transform hover:scale-[1.05] active:scale-[0.95] duration-500 ease-in-out text-sm shadow-animation">
                JOIN NOW
            </button>
        </div>
    );
});

CommunityBanner.displayName = 'CommunityBanner';

export default CommunityBanner;
