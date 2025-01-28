    'use client'
    import React, { useState } from 'react';


    const EnterpriseRevenueSection = () => {
    const [activeTab, setActiveTab] = useState("scale-strategy");
    const [isAnimating, setIsAnimating] = useState(false);
    

    const content = {
        "scale-strategy": {
        mainTitle: "Keyword",
        boxTitle: "Strategic Keyword Targeting For Maximum Impact",
        description: "We identify the keywords to drive the most value for your business. By optimizing for high-value keywords, we ensure you attract traffic that is more likely to convert into paying customers.",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7z"/>
            <path d="M14 3v2h3.59l-7.29 7.29 1.41 1.41L19 6.41V10h2V3h-7z"/>
            </svg>
        )
        },
        "high-converting": {
        mainTitle: "Content Optimize",
        boxTitle: "Content Optimization for Engagements & Conversions", 
        description: "Great content isn’t just about filling pages. We optimize your content to align with user intent, making sure it delivers the answers your customers need. Engaging, optimized content = more clicks, more engagement, and more conversions.",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7z"/>
            <path d="M14 3v2h3.59l-7.29 7.29 1.41 1.41L19 6.41V10h2V3h-7z"/>
            </svg>
        )
        },
        "sync-strategy": {
        mainTitle: "Technical SEO",
        boxTitle: "Technical SEO Optimization for Seamless Performance",
        description: "SEO success is beyond keywords and headings; it’s about how well your site runs. We leverage Enterprise SEO platforms and tools to optimize technical elements such as boosting site speed, improving mobile user experience, and ensuring smooth navigation. This enables your site to provide a seamless, user-friendly experience that search engines also appreciate. ",
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
            <div className="text-blue-500 mb-2">HOW WE</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">DRIVE REVENUE</h1>
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
                        <span>{value.mainTitle}</span>
                    </button>
                    ))}
                </div>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                <div key={activeTab} className={contentClasses}>
                <h3 className="text-2xl font-light mb-4">{content[activeTab].boxTitle}</h3>
                <div className="text-gray-400 leading-relaxed">
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
                    <span>{value.mainTitle}</span>
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
                    <h3 className="text-3xl font-light mb-8">{content[activeTab].boxTitle}</h3>
                    <div className="text-gray-400 leading-relaxed">
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

    export default EnterpriseRevenueSection;