    import React from 'react';

    const EnterpriseStrategy = () => {
    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8  flex items-center justify-center">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8">
            {/* Left Section with Images */}
            <div className="md:w-1/2 flex flex-col gap-4">
            {/* Top Row with Two Images */}
            <div className="flex gap-4">
                {/* First Image */}
                <div className="w-1/2">
                <img
                    src="images/enterprise1.webp"
                    alt="SEO Team Meeting"
                    className="rounded-lg w-full h-[224px] object-cover"
                />
                </div>
                
                {/* Second Image */}
                <div className="w-1/2">
                <img
                    src="images/enterprise2.webp"
                    alt="SEO Strategy Diagram"
                    className="rounded-lg w-full h-[202px] object-cover mt-3"
                />
                </div>
            </div>
            
            {/* Bottom Image - Full Width */}
            <div className="w-full flex justify-center items-center">
                <img
                src="images/enterprise3.webp"
                alt="SEO Analytics"
                className="rounded-lg w-full h-[251px] object-cover"
                />
            </div>
            </div>

            {/* Right Section with Content */}
            <div className="md:w-1/2 flex flex-col justify-center">
            <div className="text-pink-500 mb-2">KEY POINT</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Ensure you seize every opportunity with our comprehensive Enterprise SEO services
            </h1>
            <p className="text-gray-400 mb-2">
            As a thriving brand navigating competitive landscapes, your company stands poised for substantial growth. In this environment, both search and SEO offer invaluable opportunities. By partnering with an experienced agency like AlgorithmX, you can fully harness the power of enterprise SEO, maximizing impact and achieving outstanding results. As your dedicated enterprise SEO firms, we help you with:
            </p>
            <div className="grid grid-cols-2 gap-4 mb-2">
                <div className="flex items-start  ">
                <span className="text-gray-400">Research</span>
                </div>
                <div className="flex items-center  ">
                <span className="text-gray-400">Optimization</span>
                </div>
                <div className="flex items-center  ">
                <span className="text-gray-400">Content</span>
                </div>
                <div className="flex items-center  ">
                <span className="text-gray-400">Keywords</span>
                </div>
                <div className="flex items-center  ">
                <span className="text-gray-400">Earned Media & Links</span>
                </div>
                <div className="flex items-center  ">
                <span className="text-gray-400">Testing
                </span>
                </div>
                </div>
            <p className="text-gray-400 mb-2">
            Unlock your brand’s full potential with enterprise SEO strategies designed to drive sustainable growth, boost visibility, and outperform competitors.
                </p>
            </div>
        </div>
        </div>
    );
    };

    export default EnterpriseStrategy;