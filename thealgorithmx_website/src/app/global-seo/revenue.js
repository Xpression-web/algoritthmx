    'use client'
    import React, { useState } from 'react';


    const GlobalRevenueSection = () => {
    const [activeTab, setActiveTab] = useState("scale-strategy");
    const [isAnimating, setIsAnimating] = useState(false);
    

    const content = {
        "scale-strategy": {
        mainTitle: "Targeted Content",
        boxTitle: "Localized Content  that Resonates",
        description: "Speak your audience’s language. We help you craft content that resonates with the cultural nuances and preferences of each market. By localizing blogs, product pages, and marketing materials, we ensure your brand speaks the language of your international customers. This builds trust, engagement, and conversions.",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7z"/>
            <path d="M14 3v2h3.59l-7.29 7.29 1.41 1.41L19 6.41V10h2V3h-7z"/>
            </svg>
        )
        },
        "high-converting": {
        mainTitle: "Geotargeted Keyword",
        boxTitle: "Geotargeted Keyword Optimization", 
        description: "Different countries, different search habits. We target geospecific keywords for every region, helping you rank for the terms that matter most in each location. With targeted optimization, your website will rise to the top of search results wherever your audience is searching.",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7z"/>
            <path d="M14 3v2h3.59l-7.29 7.29 1.41 1.41L19 6.41V10h2V3h-7z"/>
            </svg>
        )
        },
        "sync-strategy": {
        mainTitle: "Link&Authority",
        boxTitle: "International Link Building for Authority",
        description: "Building global authority means earning backlinks from relevant, respected websites around the world. We connect with influencers, bloggers, and publishers across various markets to build a diverse and authoritative link profile that boosts your rankings and credibility ",
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

    export default GlobalRevenueSection;