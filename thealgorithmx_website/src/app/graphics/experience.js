import React from 'react';

const ResponsiveHero = () => {
  return (
    <div className="bg-black">
      <div className=" flex items-center justify-center p-4 md:p-8 pt-20  md:mt-0">
        {/* Outer container with red border */}
        <div className="w-full max-w-3xl rounded-3xl border border-red-500 relative pt-40 pb-8 px-8 md:p-16">
          {/* Image container - overlapping top border on mobile, left border on desktop */}
          <div className="absolute w-64 h-64 md:w-72 md:h-72 overflow-hidden border
                        left-1/2 -translate-x-1/2 -top-32
                        md:left-[-5%] md:top-1/2 md:-translate-y-1/2 md:translate-x-0 
                        z-10">
            <img
              src="images/Graphics.webp"
              alt="placeholder"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content section */}
          <div className="w-full md:ml-80 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-xl font-bold text-white mb-6">
              Experience AlgorithmX Today
            </h2>
            <p className="text-gray-400 text-l mb-10 md:max-w-sm">
              We're your full-stack solution for everything digital. Bring us your idea and we'll make it a success.
            </p>
            <button className="px-12 py-4 rounded-full bg-transparent border border-white/20 text-white text-lg hover:bg-white/10 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveHero;