    import React from 'react';

    const NationalStrategy = () => {
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
                    src="images/i2.webp"
                    alt="SEO Team Meeting"
                    className="rounded-lg w-full h-[224px] object-cover"
                />
                </div>
                
                {/* Second Image */}
                <div className="w-1/2">
                <img
                    src="images/i1.webp"
                    alt="SEO Strategy Diagram"
                    className="rounded-lg w-full h-[202px] object-cover mt-3"
                />
                </div>
            </div>
            
            {/* Bottom Image - Full Width */}
            <div className="w-full flex justify-center items-center">
                <img
                src="images/i3.webp"
                alt="SEO Analytics"
                className="rounded-lg w-full h-[251px] object-cover"
                />
            </div>
            </div>

            {/* Right Section with Content */}
            <div className="md:w-1/2 flex flex-col justify-center">
            <div className="text-pink-500 mb-2">KEY POINT</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Seize every opportunity with Expert National SEO
            </h1>
            <p className="text-gray-400 mb-2">
            Our goal is to help your business get top ranking in the national SEO of a particular country no matter where you’re from. 
            Imagine having customers all over the country find your business first when they search for what you offer. That’s the power 
            of nationwide SEO services —and we’re here to make that happen.
            </p>
            <p className="text-gray-400 mb-2">
            Here’s what we focus on:
                </p>

            {/* SEO Services Grid */}
            <div className="grid grid-cols-2 gap-4 mb-2">
                <div className="flex items-start  ">
                <span className="text-gray-400">Targeted Long-Tail Keywords</span>
                </div>
                <div className="flex items-center  ">
                <span className="text-gray-400">Engaging Content Creation</span>
                </div>
                <div className="flex items-center  ">
                <span className="text-gray-400">Data-Driven Keyword Strategies</span>
                </div>
                <div className="flex items-center  ">
                <span className="text-gray-400">Google Maps Integration</span>
                </div>
                </div>
            </div>
        </div>
        </div>
    );
    };

    export default NationalStrategy;