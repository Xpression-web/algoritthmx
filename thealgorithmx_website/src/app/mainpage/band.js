import React from 'react';

const ResultsRow = () => {
  return (
    <div className="flex w-full h-auto md:h-24 lg:h-32 bg-gradient-to-r from-black via-black to-rose-500">
      <div className="flex flex-col md:flex-row w-full justify-center md:justify-between items-center py-8 md:py-0 px-4 sm:px-8 md:px-12 lg:px-16 gap-4 md:gap-0">
        <div className="text-white text-6xl sm:text-4xl md:text-4xl lg:text-6xl ">
          Results
        </div>
        <div className="text-rose-500 text-6xl sm:text-6xl md:text-6xl lg:text-8xl font-light">
          90%
        </div>
      </div>
    </div>
  );
};

export default ResultsRow;