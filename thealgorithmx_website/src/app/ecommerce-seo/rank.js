    import React from 'react';

    const EcommerceRankSection = () => {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="container max-w-[1200px] mx-auto ">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left Section - Image */}
            <div className="w-full lg:w-1/2">
                <img 
                src="images/Entire Product Line.webp"
                alt="Local SEO visualization showing map interface across devices"
                className="w-full h-auto"
                />
            </div>

            {/* Right Section - Content */}
            <div className="w-full lg:w-1/2 space-y-2">
                <h1 className="text-xl lg:text-3xl font-bold">
                Rank Your Entire Product Line
                </h1>
                
                <p className="text-gray-300 text-md">
                Whether you’re searching for the best eCommerce SEO company or 
                looking for affordable eCommerce SEO services, we’ve got the right strategy for you.
                </p>

                <div className="py-6">
  <div className="grid grid-cols-3 items-start ">
    {/* 1/3 Section */}
    <div className="col-span-1 flex justify-start">
      <span className="text-6xl font-bold text-amber-400">44%</span>
    </div>
    {/* 2/3 Section */}
    <div className="col-span-2">
      <span className="text-lg text-amber-400">
      of consumers begin product discovery with a search engine.
      </span>
    </div>
  </div>
</div>

                <div className="space-y-4">
                <p className="text-gray-300">
                Got a massive inventory? No problem. We optimize every product, 
                ensuring that no matter what your customers are searching for, they find you first.
                </p>
                <p className="text-gray-300">
                From eCommerce SEO consultants to affordable eCommerce SEO services, 
                we know how to rank your products across multiple search engines.
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default EcommerceRankSection;