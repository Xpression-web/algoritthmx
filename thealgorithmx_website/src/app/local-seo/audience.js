    import React from 'react';

    const LocalAudienceSection = () => {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="container max-w-[1200px] mx-auto ">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left Section - Image */}
            <div className="w-full lg:w-1/2">
                <img 
                src="images/local-seo-audience-1.webp"
                alt="Local SEO visualization showing map interface across devices"
                className="w-full h-auto"
                />
            </div>

            {/* Right Section - Content */}
            <div className="w-full lg:w-1/2 space-y-2">
                <h1 className="text-xl lg:text-3xl font-bold">
                Attract the appropriate local audience.
                </h1>
                
                <p className="text-gray-300 text-md">
                With AlgorithmX's Local SEO services, your business will capture high-intent, 
                ready-to-convert customers right in your area. Our expert approach boosts 
                your visibility, helping you climb to the top of local search results and 
                outperform competitors. Make it easy for customers to find you.
                </p>

                <div className="py-6">
  <div className="grid grid-cols-3 items-center gap-4">
    {/* 1/3 Section */}
    <div className="col-span-1 flex justify-center">
      <span className="text-6xl font-bold text-amber-400">78%</span>
    </div>
    {/* 2/3 Section */}
    <div className="col-span-2">
      <span className="text-lg text-amber-400">
      of local mobile searches result in offline purchases.
      </span>
    </div>
  </div>
</div>

                <div className="space-y-4">
                <p className="text-gray-300">
                    Don't miss out on the easiest wins—customers actively searching for your 
                    services nearby.
                </p>
                <p className="text-gray-300">
                    Looking for an affordable local SEO company that delivers? We offer 
                    solutions that fit your budget, without sacrificing quality.
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default LocalAudienceSection;