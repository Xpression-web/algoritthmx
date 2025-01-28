import React from 'react';

const SEOStrategyGrid = () => {
  return (
    <div className="bg-black text-white p-4 flex flex-col items-center justify-center min-h-screen">
      {/* Header Text */}
      <div className='max-w-[1200px] mx-auto'>
      <div className="text-center mb-24 relative pt-20 pb-8 w-full">
        {/* Background text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl sm:text-6xl md:text-8xl font-thin text-gray-600/20 select-none">
            TECH-STACK
          </span>
        </div>

        {/* Main titles */}
        <div className="relative z-10 mt-8">
          <h2 className="text-2xl md:text-3xl text-white mb-2">
            POWERING
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-white">
            OUR SERVICES 
          </h3>
        </div>
      </div>

      {/* Grid Container */}
      <div className="w-full max-w-[1200px] px-4">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
          <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72   transition-colors duration-300">
            <span className="text-sm">Automotive</span>
            <img src="images/lead-generation.png" alt="Lead Generation" className="w-8 h-8" />
          </div>
          
          <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72   transition-colors duration-300">
            <span className="text-sm">Communications</span>
            <img src="images/lead-generation.png" alt="Sales Enablement" className="w-8 h-8" />
          </div>
          
          <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72   transition-colors duration-300">
            <span className="text-sm">Constructions</span>
            <img src="images/lead-generation.png" alt="Nurturing Customers" className="w-8 h-8" />
          </div>
          
          <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72   transition-colors duration-300">
            <span className="text-sm">Govt. Education</span>
            <img src="images/lead-generation.png" alt="Social Engagement" className="w-8 h-8" />
          </div>
        </div>
        {/* MID ROW  */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
          <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72   transition-colors duration-300">
            <span className="text-sm">Energy & Power</span>
            <img src="images/lead-generation.png" alt="Lead Generation" className="w-8 h-8" />
          </div>
          
          <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72   transition-colors duration-300">
            <span className="text-sm">Financial Service</span>
            <img src="images/lead-generation.png" alt="Sales Enablement" className="w-8 h-8" />
          </div>
          
          <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72   transition-colors duration-300">
            <span className="text-sm">Food & Beverage</span>
            <img src="images/lead-generation.png" alt="Nurturing Customers" className="w-8 h-8" />
          </div>
          
          <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72   transition-colors duration-300">
            <span className="text-sm">Life Science</span>
            <img src="images/lead-generation.png" alt="Social Engagement" className="w-8 h-8" />
          </div>
        </div>

        {/* Bottom Row - Centered and Spaced */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72   transition-colors duration-300">
            <span className="text-sm">Media & Entertainment</span>
            <img src="images/lead-generation.png" alt="Thought Leadership" className="w-8 h-8" />
          </div>
          
          <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72   transition-colors duration-300">
            <span className="text-sm">Travel Agency</span>
            <img src="images/lead-generation.png" alt="Conversions" className="w-8 h-8" />
          </div>
          
          <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72   transition-colors duration-300">
            <span className="text-sm">Public Safety</span>
            <img src="images/lead-generation.png" alt="SEO" className="w-8 h-8" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SEOStrategyGrid;
