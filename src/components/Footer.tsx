export default function Footer() {
    return (
        <div className="fixed bottom-0 left-0 w-[13.333%] p-4 bg-[#000000] z-40">
            <div className="flex flex-col gap-y-5 mt-6 w-full">
                {/* app download buttons */}
                <div className="relative h-8">
                    {/* Google Play */}
                    <a
                        aria-label="Download from Google Play"
                        target="_blank"
                        href="https://play.google.com/store/apps/details?id=enterprises.dating.boo"
                    >
                        <div className="absolute bottom-0 left-0 box-shadow flex justify-center items-center h-8 w-8 rounded-full hover:scale-110 active:scale-99 duration-500">
                            <div className="w-4 h-4 ms-1">
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1903.7 1903.7">
                                    <linearGradient id="gp1" x1="-10.629" x2="-117.322" y1="1493.936" y2="1438.862" gradientTransform="matrix(11.64 0 0 -22.55 998.5 33804.27)" gradientUnits="userSpaceOnUse">
                                        <stop offset="0" style={{ stopColor: '#00A0FF' }} />
                                        <stop offset="0.007" style={{ stopColor: '#00A1FF' }} />
                                        <stop offset="0.26" style={{ stopColor: '#00BEFF' }} />
                                        <stop offset="0.512" style={{ stopColor: '#00D2FF' }} />
                                        <stop offset="0.76" style={{ stopColor: '#00DFFF' }} />
                                        <stop offset="1" style={{ stopColor: '#00E3FF' }} />
                                    </linearGradient>
                                    <path d="M33.7 29.2C12.3 52.2 0 87.6 0 133.6v1636.2c0 46 12.3 81.4 34.5 103.6l5.8 4.9 916.8-916.8v-20.6L39.5 24.3l-5.8 4.9z" style={{ fillRule: 'evenodd', clipRule: 'evenodd', fill: 'url(#gp1)' }} />
                                    <linearGradient id="gp2" x1="107.963" x2="-87.838" y1="1411.313" y2="1411.313" gradientTransform="matrix(9.145 0 0 -7.7 778.095 11818.852)" gradientUnits="userSpaceOnUse">
                                        <stop offset="0" style={{ stopColor: '#FFE000' }} />
                                        <stop offset="0.409" style={{ stopColor: '#FFBD00' }} />
                                        <stop offset="0.775" style={{ stopColor: '#FFA500' }} />
                                        <stop offset="1" style={{ stopColor: '#FF9C00' }} />
                                    </linearGradient>
                                    <path d="M1262.1 1268.3 956.3 962.4V941l305.9-305.9 6.6 4.1 361.8 205.6c103.6 58.4 103.6 154.6 0 213.8l-361.8 205.6c-.1 0-6.7 4.1-6.7 4.1z" style={{ fillRule: 'evenodd', clipRule: 'evenodd', fill: 'url(#gp2)' }} />
                                    <linearGradient id="gp3" x1="-14.277" x2="-126.403" y1="1420.311" y2="1274.846" gradientTransform="matrix(15.02 0 0 -11.5775 1313.25 17565.35)" gradientUnits="userSpaceOnUse">
                                        <stop offset="0" style={{ stopColor: '#FF3A44' }} />
                                        <stop offset="1" style={{ stopColor: '#C31162' }} />
                                    </linearGradient>
                                    <path d="M1268.7 1264.2 956.3 951.7 33.7 1874.3c33.7 36.2 90.4 40.3 153.8 4.9l1081.2-615" style={{ fillRule: 'evenodd', clipRule: 'evenodd', fill: 'url(#gp3)' }} />
                                    <linearGradient id="gp4" x1="-100.652" x2="-50.584" y1="1560.726" y2="1495.735" gradientTransform="matrix(15.02 0 0 -11.5715 1313.25 17544.863)" gradientUnits="userSpaceOnUse">
                                        <stop offset="0" style={{ stopColor: '#32A071' }} />
                                        <stop offset="0.069" style={{ stopColor: '#2DA771' }} />
                                        <stop offset="0.476" style={{ stopColor: '#15CF74' }} />
                                        <stop offset="0.801" style={{ stopColor: '#06E775' }} />
                                        <stop offset="1" style={{ stopColor: '#00F076' }} />
                                    </linearGradient>
                                    <path d="M1268.7 639.3 187.5 25.1C124.2-11.1 67.4-6.2 33.7 30l922.5 921.7 312.5-312.4z" style={{ fillRule: 'evenodd', clipRule: 'evenodd', fill: 'url(#gp4)' }} />
                                    <path d="M1262.1 1257.6 188.3 1867.7c-60 34.5-113.5 32.1-148 .8l-5.8 5.8 5.8 4.9c34.5 31.2 88 33.7 148-.8l1081.2-614.2-7.4-6.6z" style={{ opacity: 0.2, fillRule: 'evenodd', clipRule: 'evenodd' }} />
                                    <path d="m1630.5 1047.9-369.2 209.7 6.6 6.6 361.8-205.6c51.8-29.6 77.3-68.2 77.3-106.9-3.3 35.4-29.6 69.1-76.5 96.2z" style={{ opacity: 0.12, fillRule: 'evenodd', clipRule: 'evenodd' }} />
                                    <path d="m187.5 35.8 1443 819.8c46.9 26.3 73.2 60.8 77.3 96.2 0-38.6-25.5-77.3-77.3-106.9L187.5 25.1C83.9-34.1 0 15.2 0 133.6v10.7C0 25.9 83.9-22.6 187.5 35.8z" style={{ opacity: 0.25, fillRule: 'evenodd', clipRule: 'evenodd', fill: '#FFFFFF' }} />
                                </svg>
                            </div>
                        </div>
                    </a>

                    {/* App Store */}
                    <a
                        aria-label="Download from App Store"
                        target="_blank"
                        href="https://apps.apple.com/app/id1498407272"
                    >
                        <div className="absolute left-[3.25rem] bottom-0 box-shadow flex justify-center text-white items-center h-8 w-8 rounded-full hover:scale-110 active:scale-99 duration-500">
                            <div className="w-4 h-4 mb-0.5 ms-[0.175rem]">
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                                    <path fill="#ffffff" d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
                                </svg>
                            </div>
                        </div>
                    </a>
                </div>

                {/* Language Selector */}
                <button
                    className="box-shadow flex justify-center items-center h-8 rounded-full hover:scale-110 active:scale-99 duration-500"
                    style={{ width: '65px' }}
                >
                    <p className="text-xs whitespace-nowrap text-white font-medium">English</p>
                </button>

                {/* Footer Info */}
                <div className="flex flex-col gap-y-2 transition-opacity duration-500 ease-in-out opacity-100">
                    {/* Love Message */}
                    <div className="flex items-center">
                        <p className="text-xs text-gray-500 line-clamp-1 me-1">We stand for love. 💚</p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-x-3">
                        <a target="_blank" href="/terms-and-conditions">
                            <p className="text-xs text-gray-600 line-clamp-1 hover:text-gray-400">Terms</p>
                        </a>
                        <a target="_blank" href="/privacy-policy">
                            <p className="text-xs text-gray-600 line-clamp-1 hover:text-gray-400">Privacy</p>
                        </a>
                        <a target="_blank" href="/faq">
                            <p className="text-xs text-gray-600 line-clamp-1 hover:text-gray-400">FAQ</p>
                        </a>
                        <a target="_blank" href="/safety-tips">
                            <p className="text-xs text-gray-600 line-clamp-1 hover:text-gray-400">Safety Tips</p>
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-xs text-gray-600 line-clamp-1">© 2026 Boo Enterprises, Inc.</p>
                </div>
            </div>
        </div>
    );
}
