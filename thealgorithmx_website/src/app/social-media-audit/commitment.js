    'use client';
    import React, { useState } from 'react';
    import styles from './style.module.css'
    import { Montserrat } from 'next/font/google';

    const monsterfont = Montserrat({
      subsets: ["latin"],
      weight: "500",
    });

    const monsterfont1 = Montserrat({
      subsets: ["latin"],
      weight: "100",
    });

    const SocialCommitment = () => {
    const [activeTab, setActiveTab] = useState("scale-strategy");
    const [isAnimating, setIsAnimating] = useState(false);

    const content = {
        "scale-strategy": {
        mainTitle: "Purpose:Account",
        boxTitle: "Purpose:Account",
        description: [
            {
            title: " Organizational Structure:",
            text: " Create a streamlined account setup to ensure easy navigation and reporting consistency."
            },
            {
            title: "Budget Controls:",
            text: " Implement budget management and control processes to track spending and adjust allocations effectively."
            },
            {
            title: "Naming Standards:",
            text: " Use standardized naming conventions for campaigns, ads, and ad sets to maintain organization."
            },
            {
                title: "Data Tracking & Attribution:",
                text: " Set up accurate data tracking and attribution settings to measure the impact of each campaign."
            },
            {
                title: "Automated Processes:",
                text: " Leverage automation for routine processes to save time and increase efficiency."
            },
            {
                title: "System Integrations:",
                text: " Integrate necessary systems, including Facebook API, for seamless data flow and functionality."
            },
        ],
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7z" />
            <path d="M14 3v2h3.59l-7.29 7.29 1.41 1.41L19 6.41V10h2V3h-7z" />
            </svg>
        )
        },
        "high-converting": {
        mainTitle: "Method : Campaign",
        boxTitle: "Method : Campaign",
        description: [
            {
            title: " Ad Scheduling:",
            text: " Strategically plan ad schedules to maximize reach during peak engagement times."
            },
            {
            title: "Objective Definition:",
            text: " Clearly define campaign objectives, such as conversions, brand awareness, or lead generation, to guide ad strategy."
            },
            {
                title: "Naming Conventions:",
                text: " Develop a consistent naming strategy for behaviors, interests, and demographics for easy identification and analysis."
            },
            {
                title: "Bidding Strategies:",
                text: " Implement tailored bidding strategies to optimize ad spend across various campaigns."
            },
            {
                title: "Performance Management:",
                text: " Continuously monitor and adjust campaign settings for best results."
            },
            {
                title: "Budget Allocation:",
                text: " Assign budgets based on campaign priorities and adjust as necessary for performance optimization. "
            },
            {
                title: "Audience Targeting:",
                text: " Set specific audiences for each campaign to enhance relevancy and increase conversion rates. "
            },
        ],
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7z" />
            <path d="M14 3v2h3.59l-7.29 7.29 1.41 1.41L19 6.41V10h2V3h-7z" />
            </svg>
        )
        },
        "sync-strategy": {
        mainTitle: "Chance: Ads",
        boxTitle: "Chance: Ads",
        description: [
            {
                title: " Customized Audience Targeting:",
                text: "  Use custom and lookalike audiences for precise targeting and retargeting based on past interactions."
            },
            {
                title: "Demographic Targeting:",
                text: " Tailor ads to reach specific demographics, ensuring a targeted approach to audience engagement."
            },
            {
                title: "Video Content Development:",
                text: " Create and optimize video assets to boost engagement and capture audience attention.	"
            },
            {
                title: "Naming Strategies:",
                text: " Maintain clear, organized naming for easy tracking and reporting."
            },
            {
                title: "Placement Strategy:",
                text: "Strategize ad placements across social media platforms to ensure optimal performance based on audience behavior."
            },
            {
                title: "Lookalike Audiences:",
                text: " Utilize lookalike audiences to expand reach to individuals similar to existing customers."
            },
            {
                title: "Interest & Behavioral Targeting: ",
                text: " Use specific interests and behaviors to refine audience segments for higher relevance."
            },
            {
                title: "Ad Testing & Experimentation:",
                text: " Conduct regular testing of different ad creatives, formats, and copy to find high-performing variations."
            },
            {
                title: "CTA Effectiveness Evaluation: ",
                text: " Assess and adjust calls-to-action for maximum effectiveness in driving engagement and conversions."
            },
        ],
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7z" />
            <path d="M14 3v2h3.59l-7.29 7.29 1.41 1.41L19 6.41V10h2V3h-7z" />
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
        <div className="max-w-6xl mx-auto w-full ">
            <div className="text-center mb-8 md:mb-12">
            <h1 className={`${monsterfont1.className} text-[42px] md:leading-[68px] leading-[54px] md:text-[64px] `}>Social Media Audit</h1>
            <h1 className={`${monsterfont1.className} md:leading-[68px] leading-[54px] text-[42px] md:text-[64px] `}>Commitment</h1>
            </div>

            <div className="border border-red-500 w-full h-auto md:h-[600px] max-w-[900px] mx-auto">
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
                        <span className={`${styles["box-title"]}`}>{value.mainTitle}</span>
                    </button>
                    ))}
                </div>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                <div key={activeTab} className={contentClasses}>
                <h3 className={`text-[34px] leading-[42px] ${monsterfont.className} mb-5`}>{content[activeTab].boxTitle}</h3>
                        {content[activeTab].description.map((item, idx) => (
                        <div className={`${styles["box-title"]} text-semi-white `}key={idx}>
                            <strong>{item.title}:</strong> {item.text}
                            <br />
                        </div>
                    ))}
                </div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex h-full p-10">
                {/* Left Section */}
                <div className=" flex flex-col space-y-8 pr-6 justify-center ">
                {Object.entries(content).map(([key, value]) => (
                    <button
                    key={key}
                    className={`flex items-center gap-2 transition-colors duration-300 text-left ${
                        activeTab === key ? "text-red-500" : "text-gray-400"
                    }`}
                    onClick={() => handleTabChange(key)}
                    >
                    <span className="w-6 h-6">{value.icon}</span>
                    <span className={`${styles["box-title"]}`}>{value.mainTitle}</span>
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
                        <h3 className={`text-[36px] leading-[42px] ${monsterfont.className} mb-5`}>{content[activeTab].boxTitle}</h3>
                        {content[activeTab].description.map((item, idx) => (
                        <div className={`${styles["box-title"]} text-semi-white `}key={idx}>
                            <strong>{item.title}:</strong> {item.text}
                            <br />
                        </div>
                        ))}
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

    export default SocialCommitment;
