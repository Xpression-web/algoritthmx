    import React from 'react';

    const LocalStrategy = () => {
    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8 flex items-center justify-center  ">
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
            <div className="w-full">
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
            Maximize Every Opportunity with Local SEO
            </h1>
            <p className="text-gray-400 mb-8">
            Before reaching for the stars, remember one thing— marketing begins at home. 
            Your local online presence can either drive your business to new heights or leave you in the dust.
            
            </p>
            <p className="text-gray-400">
            1) Speak Their Language: Sprinkle in location-specific keywords throughout your content so the right people—your
            local audience—can easily find you.
            </p>
            <p className="text-gray-400">
            2) Be Where They Are: Make sure your business shows up in all the right places, like Google Maps and other essential
            platforms. The rule is simple – Be where your customers are!
            </p>
            <p className="text-gray-400">
            3) Tailor Your Strategy: We’ll help craft an SEO game plan that perfectly fits your goals and budget,
            so you’re not just competing locally—you’re dominating.
            </p>
            </div>
        </div>
        </div>
    );
    };

    export default LocalStrategy;