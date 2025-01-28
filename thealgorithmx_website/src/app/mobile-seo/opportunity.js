    import React from 'react';

    const MobileStrategy = () => {
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
                    src="images/mobile1.webp"
                    alt="SEO Team Meeting"
                    className="rounded-lg w-full h-[224px] object-cover"
                />
                </div>
                
                {/* Second Image */}
                <div className="w-1/2">
                <img
                    src="images/mobile2.webp"
                    alt="SEO Strategy Diagram"
                    className="rounded-lg w-full h-[202px] object-cover mt-3"
                />
                </div>
            </div>
            
            {/* Bottom Image - Full Width */}
            <div className="w-full flex justify-center items-center">
                <img
                src="images/mobile3.webp"
                alt="SEO Analytics"
                className="rounded-lg w-full h-[251px] object-cover"
                />
            </div>
            </div>

            {/* Right Section with Content */}
            <div className="md:w-1/2 flex flex-col justify-center">
            <div className="text-pink-500 mb-2">KEY POINT</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Seize every opportunity with our Expert Mobile SEO services.
            </h1>
            <p className="text-gray-400 ">
            Your customers are searching on mobile—are they finding you? Let us help you boost your mobile rankings,
            increase traffic, and drive more conversions with our expert Mobile SEO services. Whether you need a quick
            audit or a full-scale mobile SEO strategy, AlgorithmX is here to take your website to the next level.
            </p>
            <p className="text-gray-400 mb-2">
            Here’s what we offer:
                </p>

            {/* SEO Services Grid */}
            <div className="grid grid-cols-2 gap-4 mb-2">
                <div className="flex items-start  ">
                <span className="text-gray-400">Analyzing site's current mobile SEO health</span>
                </div>
                <div className="flex items-center  ">
                <span className="text-gray-400">Proactively monitoring mobile performance</span>
                </div>
                <div className="flex items-center  ">
                <span className="text-gray-400">Developing mobile-first strategies from the ground up</span>
                </div>
                <div className="flex items-center  ">
                <span className="text-gray-400">Optimizing site to enable a seamless mobile web browsing experience</span>
                </div>
                <div className="flex items-center  ">
                <span className="text-gray-400">Increase mobile site loading speed</span>
                </div>
                <div className="flex items-center  ">
                <span className="text-gray-400">Ensure website is bug-free in all mobile environments
                </span>
                </div>
                </div>
            </div>
        </div>
        </div>
    );
    };

    export default MobileStrategy;