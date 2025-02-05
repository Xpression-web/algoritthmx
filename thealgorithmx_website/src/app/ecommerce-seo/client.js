    import React from 'react';
    import { Montserrat } from 'next/font/google';
            
            const monsterfont = Montserrat({
              subsets: ['latin'],
              weight: '400',
            });
            const monsterfont1 = Montserrat({
                subsets: ['latin'],
                weight: '700',
              });

    const DeliverablesSection = () => {
    return (
        <div className="min-h-screen bg-black p-4 md:p-8">
        <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
            <h1 className={`text-[40px] md:text-[64px] leading-[68px] ${monsterfont.className} `}>Deliverables</h1>
            <h2 className={`text-[40px] md:text-[64px] ${monsterfont1.className} `}>To Clients</h2>
            </div>

            <div className="bg-[#030c0d] rounded-[2.5rem]  p-6 md:p-8">
            <h3 className={`text-[25px] leading-[1.1] font-[Helvetica] text-white mt-[20px] mb-[20px] `}>Details</h3>
            <div className="relative space-y-4 pl-4">
                {/* Continuous vertical line */}
                <div className="hidden md:block absolute top-0 left-0 w-px h-full bg-white "></div>

                <div>
                <ul className="space-y-3 md:space-y-4">
                    <li className="flex items-start">
                    <svg
                        className="w-5 h-5 text-white mt-1 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span className={`text-[16px] leading-[22px] font-[Helvetica] text-white  `}>Keyphrase Optimization</span>
                    </li>
                    <li className="flex items-start">
                    <svg
                        className="w-5 h-5 text-white mt-1 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span className={`text-[16px] leading-[22px] font-[Helvetica] text-white  `}>Optimized Pages</span>
                    </li>
                    <li className="flex items-start">
                    <svg
                        className="w-5 h-5 text-white mt-1 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span className={`text-[16px] leading-[22px] font-[Helvetica] text-white  `}>Technical Website Analysis</span>
                    </li>
                    <li className="flex items-start">
                    <svg
                        className="w-5 h-5 text-white mt-1 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span className={`text-[16px] leading-[22px] font-[Helvetica] text-white  `}>Keyword research & selection</span>
                    </li>
                    <li className="flex items-start">
                    <svg
                        className="w-5 h-5 text-white mt-1 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span className={`text-[16px] leading-[22px] font-[Helvetica] text-white  `}>Keyword mapping to target pages</span>
                    </li>
                    <li className="flex items-start">
                    <svg
                        className="w-5 h-5 text-white mt-1 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span className={`text-[16px] leading-[22px] font-[Helvetica] text-white  `}>Title Tags & Meta descriptions</span>
                    </li>
                    <li className="flex items-start">
                    <svg
                        className="w-5 h-5 text-white mt-1 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                        />
                    </svg >
                    <span className={`text-[16px] leading-[22px] font-[Helvetica] text-white  `}>Robots.txt optimization</span>
                    </li>
                    <li className="flex items-start">
                    <svg
                        className="w-5 h-5 text-white mt-1 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span className={`text-[16px] leading-[22px] font-[Helvetica] text-white  `}>XML sitemap creation & submission</span>
                    </li>
                    <li className="flex items-start">
                    <svg
                        className="w-5 h-5 text-white mt-1 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span className={`text-[16px] leading-[22px] font-[Helvetica] text-white  `}>Google Business Profile optimization (if needed)</span>
                    </li>
                    <li className="flex items-start">
                    <svg
                        className="w-5 h-5 text-white mt-1 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span className={`text-[16px] leading-[22px] font-[Helvetica] text-white  `}>Information architecture audit</span>
                    </li>
                    <li className="flex items-start">
                    <svg
                        className="w-5 h-5 text-white mt-1 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span className={`text-[16px] leading-[22px] font-[Helvetica] text-white  `}>Canonicalization analysis</span>
                    </li>
                    <li className="flex items-start">
                    <svg
                        className="w-5 h-5 text-white mt-1 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span className={`text-[16px] leading-[22px] font-[Helvetica] text-white  `}>Link redirect audit</span>
                    </li>
                    <li className="flex items-start">
                    <svg
                        className="w-5 h-5 text-white mt-1 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span className={`text-[16px] leading-[22px] font-[Helvetica] text-white  `}>Internal linking restructuring & optimization</span>
                    </li>
                    <li className="flex items-start">
                    <svg
                        className="w-5 h-5 text-white mt-1 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <span className={`text-[16px] leading-[22px] font-[Helvetica] text-white  `}>Duplicate content analysis</span>
                    </li>
                    
                </ul>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default DeliverablesSection;
