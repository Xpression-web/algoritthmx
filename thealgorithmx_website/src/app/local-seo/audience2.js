import React from 'react';

const LocalBusinessSection = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-[1200px] mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Section - Content */}
          <div className="w-full lg:w-1/2 space-y-2">
            <h1 className="text-xl lg:text-3xl font-bold">
              Empower Your Business with Local SEO Excellence
            </h1>
            <p className="text-gray-300 text-md">
              Our dedicated SEO team works relentlessly to boost your business’s growth. We maximize your visibility through
              optimized local listings and enhanced map presence, ensuring your customers find you first. Unlock insights and
              drive superior performance with the support of our in-house experts.
            </p>

            <div className="py-6">
              <div className="grid grid-cols-3 items-center gap-4">
                {/* 1/3 Section */}
                <div className="col-span-1 flex justify-center">
                  <span className="text-6xl font-bold text-amber-400">97%</span>
                </div>
                {/* 2/3 Section */}
                <div className="col-span-2">
                  <span className="text-lg text-amber-400">
                    of people learn more about a local company online than anywhere else.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="images/local-seo-experts-1.webp"
              alt="Local SEO visualization showing map interface across devices"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalBusinessSection;
