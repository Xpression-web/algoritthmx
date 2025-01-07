import React from 'react';

const InsightSection = () => {
  return (
    <div className="w-full bg-black mx-auto px-4 py-6">
      <div className="relative bg-black rounded-3xl border border-gray-800 overflow-hidden max-w-6xl mx-auto">
        {/* Purple accent line */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-16 bg-purple-800 rounded-r md:h-24" />
        
        {/* Content container */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 gap-4 md:gap-8">
          {/* Text content */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <h2 className="text-xl md:text-2xl font-bold text-white whitespace-nowrap">
              Get an Insight
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl">
              We assure you the consultation is completely free. Let us understand the depths of your Idea and get the suggestion on how you can proceed further about growing it.
            </p>
          </div>
          
          {/* Connect button */}
          <button className="px-6 py-2 bg-black border border-gray-700 rounded-full text-white text-sm md:text-base hover:bg-gray-900 transition-colors whitespace-nowrap">
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsightSection;
