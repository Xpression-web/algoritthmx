import React from 'react';

const SEOStrategy = () => {
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
            Turn Opportunities into Wins with a Tailored SEO Strategy
          </h1>
          <p className="text-gray-400 mb-8">
            Maximize your SEO potential with our comprehensive analysis. We thoroughly
            assess your site's current SEO performance, benchmarking it against
            competitors. Through in-depth research, we identify the best keywords for your
            business, strategically mapping them to create a website plan aimed at delivering
            measurable results. Our SEO audit includes:
          </p>

          {/* SEO Services Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24">
                <path fill="currentColor" d="M21 3L3 21l18-18z" />
              </svg>
              <span className="text-gray-400">Keyword Research</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24">
                <path fill="currentColor" d="M21 3L3 21l18-18z" />
              </svg>
              <span className="text-gray-400">Keyword Mapping</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24">
                <path fill="currentColor" d="M21 3L3 21l18-18z" />
              </svg>
              <span className="text-gray-400">Competitor Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24">
                <path fill="currentColor" d="M21 3L3 21l18-18z" />
              </svg>
              <span className="text-gray-400">Onsite SEO</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24">
                <path fill="currentColor" d="M21 3L3 21l18-18z" />
              </svg>
              <span className="text-gray-400">Site Crawler Review</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24">
                <path fill="currentColor" d="M21 3L3 21l18-18z" />
              </svg>
              <span className="text-gray-400">Site Architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24">
                <path fill="currentColor" d="M21 3L3 21l18-18z" />
              </svg>
              <span className="text-gray-400">Google Analytics Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24">
                <path fill="currentColor" d="M21 3L3 21l18-18z" />
              </svg>
              <span className="text-gray-400">Google Search Console</span>
            </div>
          </div>

          <p className="text-gray-400">
            Each element in our process is crafted to enhance visibility, optimize your digital
            footprint, and drive meaningful outcomes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SEOStrategy;