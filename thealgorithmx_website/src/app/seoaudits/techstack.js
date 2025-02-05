import React from 'react';
import { Montserrat } from "next/font/google";


const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "200",
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

const SEOStrategyGrid = () => {
  return (
    <div className="bg-black text-white p-4 flex flex-col items-center justify-center min-h-screen">
      {/* Header Text */}
      <div className='max-w-[1200px] mx-auto'>
      <div className="text-center mb-24 relative pt-20 pb-8 w-full">
        {/* Background text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-[46px] md:text-[100px] leading-[1.1] ${monsterfont1.className} text-gray-600/20 select-none`}>
            TECH-STACK
          </span>
        </div>

        {/* Main titles */}
        <div className="relative z-10 mt-8">
          <h2 className={`text-[40px] leading-[48px] ${monsterfont.className}  text-white `}>
            POWERING
          </h2>
          <h3 className={`text-[40px] leading-[48px] ${monsterfont.className}  text-white `}>
            OUR SERVICES 
          </h3>
        </div>
      </div>

      {/* Grid Container */}
      <div className="w-full max-w-[1200px] px-4">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
          <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72   transition-colors duration-300">
            <span className={`text-[15px]  leading-[24px] font-[Helvetica] font-[500] text-white`}>Automotive</span>
            <img src="images/lead-generation.png" alt="Lead Generation" className="w-8 h-8" />
          </div>
          
          <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72   transition-colors duration-300">
            <span className={`text-[15px]  leading-[24px] font-[Helvetica] font-[500] text-white`}>Communications</span>
            <img src="images/lead-generation.png" alt="Sales Enablement" className="w-8 h-8" />
          </div>
          
          <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72   transition-colors duration-300">
            <span className={`text-[15px]  leading-[24px] font-[Helvetica] font-[500] text-white`}>Constructions</span>
            <img src="images/lead-generation.png" alt="Nurturing Customers" className="w-8 h-8" />
          </div>
          
          <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72   transition-colors duration-300">
            <span className={`text-[15px]  leading-[24px] font-[Helvetica] font-[500] text-white`}>Govt. Education</span>
            <img src="images/lead-generation.png" alt="Social Engagement" className="w-8 h-8" />
          </div>
        </div>
        {/* MID ROW  */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
          <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72   transition-colors duration-300">
            <span className={`text-[15px]  leading-[24px] font-[Helvetica] font-[500] text-white`}>Energy & Power</span>
            <img src="images/lead-generation.png" alt="Lead Generation" className="w-8 h-8" />
          </div>
          
          <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72   transition-colors duration-300">
            <span className={`text-[15px]  leading-[24px] font-[Helvetica] font-[500] text-white`}>Financial Service</span>
            <img src="images/lead-generation.png" alt="Sales Enablement" className="w-8 h-8" />
          </div>
          
          <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72   transition-colors duration-300">
            <span className={`text-[15px]  leading-[24px] font-[Helvetica] font-[500] text-white`}>Food & Beverage</span>
            <img src="images/lead-generation.png" alt="Nurturing Customers" className="w-8 h-8" />
          </div>
          
          <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72   transition-colors duration-300">
            <span className={`text-[15px]  leading-[24px] font-[Helvetica] font-[500] text-white`}>Life Science</span>
            <img src="images/lead-generation.png" alt="Social Engagement" className="w-8 h-8" />
          </div>
        </div>

        {/* Bottom Row - Centered and Spaced */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72   transition-colors duration-300">
            <span className={`text-[15px]  leading-[24px] font-[Helvetica] font-[500] text-white`}>Media & Entertainment</span>
            <img src="images/lead-generation.png" alt="Thought Leadership" className="w-8 h-8" />
          </div>
          
          <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72   transition-colors duration-300">
            <span className={`text-[15px]  leading-[24px] font-[Helvetica] font-[500] text-white`}>Travel Agency</span>
            <img src="images/lead-generation.png" alt="Conversions" className="w-8 h-8" />
          </div>
          
          <div className="bg-[#222] rounded-md p-6 flex items-center justify-between md:w-72   transition-colors duration-300">
            <span className={`text-[15px]  leading-[24px] font-[Helvetica] font-[500] text-white`}>Public Safety</span>
            <img src="images/lead-generation.png" alt="SEO" className="w-8 h-8" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SEOStrategyGrid;
