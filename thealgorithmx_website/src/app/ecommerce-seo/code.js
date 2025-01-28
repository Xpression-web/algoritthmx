import React from 'react';

const EcommerceCodeSection = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-[1200px] mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Section - Content */}
          <div className="w-full lg:w-1/2 space-y-2">
            <h1 className="text-xl lg:text-3xl font-bold">
              Code, content and context
            </h1>

            <p className="text-gray-300 text-md">
              At AlgorithmX, we leave no stone unturned. Our comprehensive approach covers code, content, and
              context, making sure every part of your eCommerce site is optimized for maximum impact.
            </p>

            <div className="py-6">
              <div className="grid grid-cols-3 items-left">
                {/* 1/3 Section */}
                <div className="col-span-1 flex justify-left">
                  <span className="text-6xl font-bold text-amber-400">89%</span>
                </div>
                {/* 2/3 Section */}
                <div className="col-span-2">
                  <span className="text-lg text-amber-400">
                    of consumers using organic search to make purchase decisions, you can’t afford to miss out on the SEO game.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <img
              src="images/Code, content and context.webp"
              alt="Local SEO visualization showing map interface across devices"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceCodeSection;
