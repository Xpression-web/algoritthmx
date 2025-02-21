    'use client'
    import React, { useState } from 'react';
    import styles from '../social-media-audit/style.module.css'
    import { Montserrat } from 'next/font/google';
    
        const monsterfont = Montserrat({
          subsets: ["latin"],
          weight: "500",
          fallback: ['sans-serif'],
        });
    
        const monsterfont1 = Montserrat({
          subsets: ["latin"],
          weight: "100",
          fallback: ['sans-serif'],
        });
    


    const SeoResults = () => {
    const [activeTab, setActiveTab] = useState("scale-strategy");
    const [isAnimating, setIsAnimating] = useState(false);

    const content = {
        "scale-strategy": {
        mainTitle: "Scale Strategy",
        boxTitle: "Scalable Local SEO Strategy",
        description: (
            <>
            <p>
                For local SEO, you require more than just an SEO specialist — you need an entire team. 
                That's precisely why our local SEO plans offer you a comprehensive digital marketing team, equipped with the diverse skill sets necessary to develop, implement, manage, and scale your SEO strategy.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div className="space-y-4">
                <p className="font-semibold">Your dedicated account manager will oversee an in-house team comprising:</p>
                <ul className="list-disc pl-6 text-gray-400">
                    <li>Local SEO experts</li>
                    <li>Content specialists</li>
                    <li>Copywriters</li>
                    <li>Web developers</li>
                    <li>Web designers</li>
                    <li>Business consultants</li>
                </ul>
                </div>
                <div className="space-y-4">
                <p className="font-semibold">When equipped with all the resources for local SEO, it becomes effortless to:</p>
                <ul className="list-disc pl-6 text-gray-400">
                    <li>Publish localized content</li>
                    <li>Manage local listings</li>
                    <li>Improve on-page SEO</li>
                    <li>Refine strategy</li>
                    <li>Pass competitors</li>
                    <li>And more</li>
                </ul>
                </div>
            </div>
            </>
        ),
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
            </svg>
        )
        },
        "high-converting": {
        mainTitle: "High Converting Keywords",
        boxTitle: "Focus on High Converting Keywords",
        description: "Leverage High-Converting Keywords\n Our local SEO strategy focuses on high-converting, intent-driven keywords. We prioritize targeting search terms that directly align with your business goals.\n We ensure traffic doesn't just visit your site, it converts.",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7z"/>
            <path d="M14 3v2h3.59l-7.29 7.29 1.41 1.41L19 6.41V10h2V3h-7z"/>
            </svg>
        )
        },
        "sync-strategy": {
        mainTitle: "Sync strategy",
        boxTitle: "Sync your local SEO Strategy with your Overall strategy",
        description: (
            <>
            <p className="mt-4">
                Like many businesses, yours likely invests in various digital marketing strategies such as local SEO, content marketing, and digital advertising to drive revenue. When partnering with an agency like AlgorithmX that can align your local SEO strategy with your overall approach, you optimize your ROI.
                As your partner, we'll synchronize your local SEO plan with your overarching campaigns by offering:
            </p>
            <ul className="list-disc pl-6 text-gray-400 leading-relaxed mt-4">
                <li> A dedicated team of specialized experts in digital marketing, business, and beyond.</li>
                <li> Full-funnel reporting to measure the bottom-line impact of all your strategies.</li>
                <li> And more.</li>
            </ul>
            </>
        ),
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
            </svg>
        )
        },
    };

    const handleTabChange = (key) => {
        if (key !== activeTab) {
        setIsAnimating(true);
        setActiveTab(key);
        setTimeout(() => setIsAnimating(false), 500);
        }
    };

    const contentClasses = `
        transform transition-all duration-500 ease-in-out
        ${isAnimating ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}
    `;

    return (
        <div className='p-4 md:p-8 bg-black text-white min-h-screen flex items-center justify-center'>
        <div className="max-w-6xl mx-auto w-full">
            <div className="text-center mb-8 md:mb-12">
            <div className="text-blue-400 font-['Helvetica'] leading-[18px] text-[18px]   text-center">HOW WE</div>
            <h1 className={`leading-[40px] text-[36px] md:text-[56px] mt-[20px]  text-center  ${monsterfont1.className} `}>DRIVE RESULTS</h1>
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
                        <span className='font-helveticaneue text-[15px] leading-[22px] '>{value.mainTitle}</span>
                    </button>
                    ))}
                </div>
                </div>
                <div className="flex-1 overflow-hidden p-4">
                <div key={activeTab} className={contentClasses}>
                    <h3 className={`text-[34px] leading-[42px] ${monsterfont.className} mb-5`}>{content[activeTab].boxTitle}</h3>
                    <div className={`${styles["box-title"]} text-semi-white whitespace-pre-line`}>
                    {content[activeTab].description}
                    </div>
                </div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex h-full p-6">
                {/* Left Section */}
                <div className="w-48 flex flex-col space-y-8 pr-6 justify-center">
                {Object.entries(content).map(([key, value]) => (
                    <button
                    key={key}
                    className={`flex items-center gap-2 transition-colors duration-300 text-left ${
                        activeTab === key ? "text-red-500" : "text-gray-400"
                    }`}
                    onClick={() => handleTabChange(key)}
                    >
                    <span className="w-6 h-6">{value.icon}</span>
                    <span className='font-helveticaneue text-[15px] leading-[22px] '>{value.mainTitle}</span>
                    </button>
                ))}
                </div>

                <div className="relative w-px bg-gray-800 h-full flex items-center justify-center">
                <div
                    className="absolute w-1 bg-red-500 transition-all duration-300"
                    style={{
                    top: `${Object.keys(content).indexOf(activeTab) * 6}rem`,
                    height: "4rem",
                    }}
                />
                </div>

                {/* Right Content Section */}
                <div className="flex-1 pl-6 overflow-hidden">
                <div className="h-full overflow-hidden pr-4">
                    <div key={activeTab} className={contentClasses}>
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
    );
    };

    export default SeoResults;