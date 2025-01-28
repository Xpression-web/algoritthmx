    import React from 'react';

    const LinkStrategy = () => {
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
                    src="images/link1.webp"
                    alt="SEO Team Meeting"
                    className="rounded-lg w-full h-[224px] object-cover"
                />
                </div>
                
                {/* Second Image */}
                <div className="w-1/2">
                <img
                    src="images/link2.webp"
                    alt="SEO Strategy Diagram"
                    className="rounded-lg w-full h-[202px] object-cover mt-3"
                />
                </div>
            </div>
            
            {/* Bottom Image - Full Width */}
            <div className="w-full flex justify-center items-center">
    <img
        src="images/link3.webp"
        alt="SEO Analytics"
        className="rounded-lg w-[495px] h-[251px] object-cover"
    />
</div>

            </div>

            {/* Right Section with Content */}
            <div className="md:w-1/2 flex flex-col justify-center">
            <div className="text-pink-500 mb-2">KEY POINT</div>
            <h1 className="text-2xl md:text-3xl font-bold mb-6">
            Maximize Your Reach with Comprehensive Link Building Services
            </h1>
            <p className="text-gray-400 ">
            Every business is unique, and we believe your link-building strategy should be too. That’s why we create custom link-building
            campaigns designed specifically for your goals—no generic templates here. Our approach helps you grow your authority, boost
            your rankings, and keep the momentum going. Our organic SEO team covers every aspect of link building to strengthen your online 
            presence. Our services include:
            </p>
            <p className="text-gray-400 ">
            Steering businesses toward growth with targeted link strategies.
            </p>
            <p className="text-gray-400 ">
            Submitting sites to reputable local directories, tailored by city and state.
            </p>
            <p className="text-gray-400 ">
            Securing links from trusted, relevant websites.
            </p>
            <p className="text-gray-400 ">
            Transforming data into visuals for easy sharing with your target audience.
            </p>
            </div>
        </div>
        </div>
    );
    };

    export default LinkStrategy;