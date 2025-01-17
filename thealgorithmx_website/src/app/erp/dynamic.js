import React from 'react';

const DynamicSolutionsHero = () => {
  return (
    <div className=" bg-black p-8 flex items-center justify-center">
      <div className="relative w-full max-w-4xl mx-auto mt-20">
        {/* Top gradient border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 via-purple-500 via-blue-500 to-teal-500"></div>
        
        {/* Main content */}
        <div className="px-8 py-16">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-8 tracking-wide">
            DYNAMIC SOLUTIONS
          </h1>
          
          {/* Decorative line under title */}
          <div className="w-24 h-1 bg-gradient-to-l from-white via-white to-blue-500  mb-8"></div>


          
          <p className="text-gray-400 text-xl leading-relaxed max-w-3xl">
            Drive progress seamlessly. Transform your processes with agile ERP solutions 
            that elevate performance, enhance collaboration, and scale with your vision.
          </p>
        </div>
        
        {/* Bottom gradient border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 via-purple-500 via-blue-500 to-teal-500"></div>
      </div>
    </div>
  );
};

export default DynamicSolutionsHero;