    'use client'
    import React, { useState } from 'react';

    const EcommerceImplementation = () => {
    const [activeTab, setActiveTab] = useState("scale-strategy");
    const [isAnimating, setIsAnimating] = useState(false);

    const content = {
        "scale-strategy": {
        mainTitle: "High-Value Shoppers",
        boxTitle: "Reach High-Value Shoppers",
        description: (
            <>
            <p>
            Your potential customers are ready to invest, but without the right visibility, they may never find your store.
            Our eCommerce SEO services ensure your store stands out, driving traffic and maximizing profits. As an eCommerce SEO agency,
            we specialize in connecting you with shoppers who are ready to buy.
            </p>
            </>
        ),
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
            </svg>
        )
        },
        "high-converting": {
        mainTitle: "Optimize Product Line",
        boxTitle: "Optimize Your Product Line",
        description: "Whether you manage an extensive product range or a curated selection, visibility is essential. Our advanced eCommerce SEO strategies meticulously optimize each product, making it easy for your target audience to find what they’re looking for. As a certified eCommerce SEO expert, we cover every detail to bring your products to the forefront.",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7z"/>
            <path d="M14 3v2h3.59l-7.29 7.29 1.41 1.41L19 6.41V10h2V3h-7z"/>
            </svg>
        )
        },
        "sync-strategy": {
        mainTitle: "Online Visibility",
        boxTitle: "Enhance Online Visibility",
        description: (
            <>
            <p className="mt-4">
            Our eCommerce SEO services improve your online presence, elevating your website from page two to a top position on page one
            of search results. This increased visibility boosts discoverability, helping potential customers find your store. For businesses
            seeking affordable, high-quality support, our affordable eCommerce SEO services ensure a competitive advantage without sacrificing quality.
            </p>
            </>
        ),
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
            </svg>
        )
        },
        "cost-effective": {
        mainTitle: "Cost-Effective Marketing",
        boxTitle: "Cost-Effective Marketing",
        description: (
            <>
            <p className="mt-4">
            Compared to traditional methods, eCommerce SEO services provide exceptional cost-effectiveness. By targeting keywords your
            audience is searching for, we fine-tune your site for efficient, impactful results. Whether you’re looking for an eCommerce
            SEO consultant or the best eCommerce SEO agency to handle all aspects of your optimization, our approach maximizes your return on investment.
            </p>
            </>
        ),
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
            </svg>
        )
        },
        "long-term": {
        mainTitle: "Long-Term Revenue",
        boxTitle: "Build Long-Term Revenue",
        description: (
            <>
            <p className="mt-4">
            With an average close rate nearing 15%, SEO outperforms traditional marketing, which averages just 1.7%. This dependable
            revenue stream is why many choose the best eCommerce SEO company to sustain long-term growth. Although results build over
            time, the outcome is consistent new business and steady growth, making enterprise eCommerce SEO a smart choice for forward-looking brands.
            </p>
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
            <h1 className="text-3xl md:text-4xl font-bold mb-2">DRIVE RESULTS</h1>
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
            <div className="hidden md:flex h-full p-6">
                {/* Left Section */}
                <div className=" flex flex-col space-y-8 pr-6 justify-center">
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
                    <div className="transition-all duration-500 transform">
                    <div key={activeTab} className={contentClasses}>
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

    export default EcommerceImplementation;