import React from 'react';
const FranchiseStrategy = () => {
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
                src="images/g13.jpg"
                alt="SEO Strategy Diagram"
                className="rounded-lg w-full h-[202px] object-cover mt-3"
              />
            </div>
          </div>
          
          {/* Bottom Image - Full Width */}
          <div className="w-full flex justify-center items-center">
            <img
              src="images/g11.jpg"
              alt="SEO Analytics"
              className="rounded-lg w-full h-[251px] object-cover"
            />
          </div>
        </div>

        {/* Right Section with Content */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <div className= {`text-[12.8px] leading-[1.1] mb-[6px] font-[400] font-[Helvetica] text-[#f857a6] `}  >WHO RE WE?</div>
          <h1 className={`text-[30.4px] leading-[1.25] mb-6 mt-2 font-[400] font-[Helvetica] text-white `}>
          Fuel your success with our franchise SEO services
          </h1>
          <p className={`text-[15px] leading-[24px] mb-[6px] font-[400] font-[Helvetica] text-semi-white `}>
          Looking to improve your ranking on search engines, boost your presence, and outshine your competition? Join forces with AlgorithmX to get solutions for all your needs. Our franchise marketing agency offers outstanding franchise SEO marketing services which include:
          </p>

          {/* SEO Services Grid */}
          <div className="grid grid-cols-2  mb-8">
            <div className={`text-[15px] leading-[24px] font-[400] font-[Helvetica] text-semi-white flex`}>
              <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24">
                <path fill="currentColor" d="M21 3L3 21l18-18z" />
              </svg>
              <span className="text-gray-400">Tailor-made SEO strategies that cater to the specific requirements of your franchise.</span>
            </div>
            <div className={`text-[15px] leading-[24px]  font-[400] font-[Helvetica] text-semi-white flex`}>
              <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24">
                <path fill="currentColor" d="M21 3L3 21l18-18z" />
              </svg>
              <span className="text-gray-400">Numerous franchise SEO packages offer a balance of adaptability and value.</span>
            </div>
            <div className={`text-[15px] leading-[24px] mt-2 font-[400] font-[Helvetica] text-semi-white flex`}>
              <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24">
                <path fill="currentColor" d="M21 3L3 21l18-18z" />
              </svg>
              <span className="text-gray-400">Specialization in local SEO emphasizing on communities you serve.</span>
            </div>
            <div className={`text-[15px] leading-[24px] mt-2 font-[400] font-[Helvetica] text-semi-white flex `}>
              <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24">
                <path fill="currentColor" d="M21 3L3 21l18-18z" />
              </svg>
              <span className="text-gray-400">State-of-the-art multi-location marketing strategies to synchronize your franchisee’s efforts across all branches.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FranchiseStrategy;