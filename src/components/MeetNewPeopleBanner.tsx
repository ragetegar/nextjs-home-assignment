interface MeetNewPeopleBannerProps {
    isVisible?: boolean;
}

export default function MeetNewPeopleBanner({ isVisible = true }: MeetNewPeopleBannerProps) {
    return (
        <div
            className={`fixed bottom-6 w-[33.33%] right-1/2 translate-x-1/2 z-50 rounded-3xl p-4 box-shadow flex items-center gap-4 bg-[#000000] justify-between transition-all duration-500 ease-in-out ${isVisible
                ? 'opacity-100 translate-y-0 duration-500 ease-in-out'
                : 'opacity-0 translate-y-full pointer-events-none duration-500 ease-in-out'
                }`}
        >
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center">
                    <img src="/boo.png" alt="" />
                </div>
                <div>
                    <p className="text-white font-medium text-xs">Meet New People</p>
                    <div className="relative w-min mt-1">
                        <div className="w-3 absolute left-0 top-0">
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.46 52.43">
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="bg">
                                        <path fill="#eeb528" d="M13.54 0c.05 2.87-2.7 6.34-5.17 6.59C8 4.2 10.52.88 13.54 0ZM4.26 15.93A5.8 5.8 0 0 1 2.8 9a5.72 5.72 0 0 1 1.46 6.93ZM27.31 49.15A5.92 5.92 0 0 1 23.83 43c2.27.53 4.17 3.85 3.48 6.15ZM.77 15.22A5.69 5.69 0 0 1 3.7 21.6C1.58 21 0 17.54.77 15.22ZM19.92 40.76a5.69 5.69 0 0 1 2.29 6.64c-2.05-.8-3.21-4.21-2.29-6.64ZM21.27 48.39c-1.37 1.85-4.74 2.14-6.76.57 1.78-1.85 5.15-2.14 6.76-.57ZM16.39 38c2 1.91 2.47 5.16 1.1 7-1.88-1.38-2.41-4.54-1.1-7ZM5.58 27.37C5 25.06 7 22.09 9.4 21.43a5.76 5.76 0 0 1-3.82 5.94ZM4.06 27.3c.46-2.34-1.61-5.23-4-5.79a5.78 5.78 0 0 0 4 5.79ZM4.9 21.72a5.57 5.57 0 0 1 4.86-5 5.41 5.41 0 0 1-4.86 5ZM5.94 33c-2.31.11-4.49-1.88-5.19-4.61 2.09-.47 4.94 2.02 5.19 4.61ZM10 37.48a5.73 5.73 0 0 1 1.28-7 5.89 5.89 0 0 1-1.28 7ZM13.5 34.58c1.63 2.24 1.63 5.59.05 7.12-1.62-1.48-1.68-4.92-.05-7.12ZM10.83 11.63c-.63 2.73-3.09 4.8-5.29 4.52.07-2.24 2.46-4.35 5.29-4.52ZM7.35 32.56c-1-2 .37-5.38 2.59-6.48.83 2.33-.52 5.72-2.59 6.48ZM26.66 50a5.31 5.31 0 0 1-6.53 2c1.23-2.15 4.55-3.19 6.53-2ZM5.92 10.45c-1.7-1.58-1.91-4.94-.44-7 1.79 1.55 2.03 5.28.44 7ZM9.71 45.08a5.35 5.35 0 0 1 6.81.85c-1.69 1.52-5.03 1.13-6.81-.85ZM2.7 34.48A5.33 5.33 0 0 1 8.55 38c-2.07.74-5.21-1.13-5.85-3.52ZM7.05 11.1c.22-2.34 3.09-4.47 5.49-4.1-.68 2.45-3.22 4.41-5.49 4.1ZM5.81 40.24a5.17 5.17 0 0 1 6.37 2.13c-1.68 1.26-5.18.11-6.37-2.13Z" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="px-3">
                            <p className="font-budokan whitespace-pre-line leading-none text-center text-xs">50,000,000+</p>
                            <p className="font-budokan whitespace-pre-line leading-none text-center text-[8px]">DOWNLOADS</p>
                        </div>
                        <div className="w-3 right-0.5 absolute top-0">
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.45 52.39">
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="bg">
                                        <path fill="#eeb528" d="M14 0c2.69.52 5.39 3.87 5.23 6.48C16.81 6.51 13.85 2.84 14 0ZM22 3.29c1.5 2.36 1.25 5.7-.49 7.1a5.8 5.8 0 0 1 .49-7.1ZM11.08 38a5.86 5.86 0 0 1-.91 6.91c-1.63-1.2-1.1-5.27.91-6.91ZM20.16 32.55c-2.16-.94-3.44-4.23-2.63-6.55a5.68 5.68 0 0 1 2.63 6.55ZM22.05 16.1c-2.36.27-5-2-5.33-4.48a5.59 5.59 0 0 1 5.33 4.48ZM21.6 32.86c.08-2.31 2.55-4.62 5-4.68-.08 2.43-2.79 4.95-5 4.68ZM14.93 6.86c2.63-.16 5.26 1.86 5.53 4.16-2.13.45-4.79-1.52-5.53-4.16ZM17.53 37.41c-2-1.4-2.58-4.56-1.38-7a5.74 5.74 0 0 1 1.38 7ZM7.57 40.63c.91 2.48-.15 5.63-2.22 6.77-1.08-1.95-.08-5.12 2.22-6.77ZM13.93 41.69a5.72 5.72 0 0 1 .07-7.08c1.61 1.94 1.61 5.39-.07 7.08ZM23.39 27.31c-.47-2.19 1.59-5.07 4-5.63.29 2.5-1.8 5.42-4 5.63ZM3.67 42.88c.23 2.78-1.23 5.37-3.43 6.19-.9-1.94.87-5.22 3.43-6.19ZM13 48.88c-2.17 1.59-5.5 1.29-6.82-.56 1.72-1.5 4.82-1.27 6.82.56ZM24.82 34.39A5.33 5.33 0 0 1 19 38c.17-2.09 3.16-4 5.82-3.61ZM21.91 27.23c-2.21-.39-4-3.15-3.86-5.82 2.35.48 4.43 3.59 3.86 5.82ZM23.23 15.88a5.78 5.78 0 0 1 1.43-7 5.76 5.76 0 0 1-1.43 7ZM23.8 21.61a5.79 5.79 0 0 1 2.88-6.44c.88 2.08-.62 5.51-2.88 6.44ZM22.44 21.7c-2.28-.14-4.4-2.33-4.79-4.94 2.42-.1 5.25 2.82 4.79 4.94ZM.84 50c1.77-1.26 5.06-.31 6.5 1.89A5.16 5.16 0 0 1 .84 50ZM17.71 45.09c-1.69 1.88-5 2.29-6.69.84 1.22-1.93 4.8-2.35 6.69-.84ZM21.71 40.17c-1.41 2.28-4.52 3.33-6.42 2.22.87-2.07 4-3.19 6.42-2.22Z" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <button className="bg-[#4EDCD8] text-black font-semibold py-2 px-6 rounded-full hover:bg-[#6BE3DF] transition-colors text-sm shadow-animation cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98] duration-500 ease-in-out">
                JOIN NOW
            </button>
        </div>
    );
}
