    'use client'
    import React, { useState } from 'react';
    import styles from '../social-media-audit/style.module.css'
                            import { Montserrat } from 'next/font/google';
                            
                                const monsterfont = Montserrat({
                                  subsets: ["latin"],
                                  weight: "500",
                                });
                            
                                const monsterfont1 = Montserrat({
                                  subsets: ["latin"],
                                  weight: "100",
                                });


    const AmazonRevenueSection = () => {
    const [activeTab, setActiveTab] = useState("scale-strategy");
    const [isAnimating, setIsAnimating] = useState(false);
    

    const content = {
        "scale-strategy": {
        mainTitle: "High Trust",
        boxTitle: "High Trust",
        description: "Amazon’s reputation for fast shipping and dependable returns has built a strong foundation of trust among shoppers. In fact, 89% of buyers prefer Amazon over other e-commerce platforms, making it the go-to choice for most online purchases. With our experienced Amazon SEO consultants, we help your products leverage this trust for optimal results.",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7z"/>
            <path d="M14 3v2h3.59l-7.29 7.29 1.41 1.41L19 6.41V10h2V3h-7z"/>
            </svg>
        )
        },
        "high-converting": {
        mainTitle: "Market Share",
        boxTitle: "Capture Market Share", 
        description: "Amazon holds a dominant share of the e-commerce market—accounting for nearly half of all online purchases. If your products aren’t on Amazon, you’re missing a substantial portion of potential sales. We target the right audiences with sponsored products and Amazon SEO strategies to ensure your listings are competitive and highly visible.",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7z"/>
            <path d="M14 3v2h3.59l-7.29 7.29 1.41 1.41L19 6.41V10h2V3h-7z"/>
            </svg>
        )
        },
        "sync-strategy": {
        mainTitle: "Exposure",
        boxTitle: "Enhanced Brand  Exposure",
        description: "While driving sales is our primary focus, we also emphasize the importance of brand building. With our expertise as an Amazon SEO agency, we work to enhance your brand’s visibility, build awareness, and foster customer loyalty, securing long-term growth for your business on Amazon.",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7z"/>
            <path d="M14 3v2h3.59l-7.29 7.29 1.41 1.41L19 6.41V10h2V3h-7z"/>
            </svg>
        )
        },
        
    };
    const handleTabChange = (key) => {
        if (key !== activeTab) {
            setIsAnimating(true);
            setActiveTab(key);
            setTimeout(() => setIsAnimating(false), 300);
        }
    };
    
    const contentClasses = `
        transform transition-all duration-300 ease-in-out
        ${isAnimating ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`;

    return (
        <div className='p-4 md:p-8 bg-black text-white md:min-h-screen flex items-center justify-center'>
        <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-8 md:mb-12">
            <div className="text-blue-400 font-['Helvetica'] leading-[18px] text-[18px]   text-center">HOW WE</div>
            <h1 className={`leading-[40px] text-[36px] md:text-[56px] mt-[20px]  text-center  ${monsterfont1.className} `}>DRIVE REVENUE</h1>
            </div>

            <div className="border border-red-500 w-full h-auto md:h-[500px] max-w-[900px] mx-auto">
            {/* Mobile Layout */}
            <div className="md:hidden flex flex-col h-full">
                <div className="overflow-x-auto p-4 border-b border-red-500">
                <div className="flex space-x-6 min-w-min">
                    {Object.entries(content).map(([key, value]) => (
                    <button
                        key={key}
                        className={`flex items-center gap-2 transition-colors duration-300 whitespace-nowrap ${
                        activeTab === key ? "text-red-500" : "text-gray-400"
                        }`}
                        onClick={() => handleTabChange(key)}
                    >
                        <span className="w-6 h-6">{value.icon}</span>
                        <span className='font-[Helvetica] text-[15px] leading-[22px] '>{value.mainTitle}</span>
                    </button>
                    ))}
                </div>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                <div key={activeTab} className={contentClasses}>
                <h3 className={`text-[34px] leading-[42px] ${monsterfont.className} mb-5`}>{content[activeTab].boxTitle}</h3>
                    <div className={`${styles["box-title"]} text-semi-white whitespace-pre-line`}>
                    {content[activeTab].description}
                </div>
                </div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex h-full p-4">
                {/* Left Section */}
                <div className=" flex flex-col space-y-8 pr-14 justify-center">
                {Object.entries(content).map(([key, value]) => (
                    <button
                    key={key}
                    className={`flex items-center gap-2 transition-colors duration-300 text-left ${
                        activeTab === key ? "text-red-500" : "text-gray-400"
                    }`}
                    onClick={() => handleTabChange(key)}
                    >
                    <span className="w-6 h-6">{value.icon}</span>
                    <span className='font-[Helvetica] text-[15px] leading-[22px] '>{value.mainTitle}</span>
                    </button>
                ))}
                </div>

                <div className="relative w-px bg-gray-800 h-full flex items-center justify-center">
                <div
                    className="absolute w-1 bg-red-500 transition-all duration-300"
                    style={{
                    top: `${Object.keys(content).indexOf(activeTab) * 5}rem`,
                    height: "4rem",
                    }}
                />
                </div>

                {/* Right Content Section */}
                <div className="flex-1 pl-6 overflow-hidden">
                <div className="h-full overflow-y-auto pr-4">
                <div key={activeTab} className={contentClasses}>
                    <div className="transition-all duration-500 transform">
                    <h3 className={`text-[34px] leading-[42px] ${monsterfont.className} mb-5`}>{content[activeTab].boxTitle}</h3>
                    <div className={`${styles["box-title"]} text-semi-white whitespace-pre-line`}>
                        {content[activeTab].description}
                    </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default AmazonRevenueSection;