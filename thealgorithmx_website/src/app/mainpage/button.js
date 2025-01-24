import React from 'react';

const firstRowIcons = [
  { name: "Image1", colStart: "md:col-start-1", imgSrc: "images/11.png" },
  { name: "Icon2", colStart: "md:col-start-3", imgSrc: "images/brew.png" },
  { name: "Icon3", colStart: "md:col-start-5", imgSrc: "Images/gg.jpg" },
  { name: "Icon4", colStart: "md:col-start-7", imgSrc: "Images/gg.jpg" },
  { name: "Icon5", colStart: "md:col-start-9", imgSrc: "Images/gg.jpg" },
  { name: "Icon6", colStart: "md:col-start-11", imgSrc: "Images/gg.jpg" }
];

const secondRowIcons = [
  { name: "Icon7", colStart: "md:col-start-2", imgSrc: "Images/gg.jpg" },
  { name: "Icon8", colStart: "md:col-start-4", imgSrc: "Images/gg.jpg" },
  { name: "Icon9", colStart: "md:col-start-6", imgSrc: "Images/gg.jpg" },
  { name: "Icon10", colStart: "md:col-start-8", imgSrc: "Images/gg.jpg" },
  { name: "Icon11", colStart: "md:col-start-10", imgSrc: "Images/gg.jpg" },
  { name: "Icon12", colStart: "md:col-start-12", imgSrc: "Images/gg.jpg" }
];

const PlatformPerformance = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-6 flex items-center justify-center">
      <div className="max-w-6xl w-full border border-gray-700 md:border-2 rounded-lg p-6 md:p-12 shadow-[0_0_4px_2px_rgba(0,0,255,0.7)]">
        <div className="space-y-12">
          {/* Header Section */}
          <div className="space-y-8 pb-12 border-b border-gray-700">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <h1 className="text-4xl md:text-6xl font-bold">
                Better platform performance
              </h1>
              <p className="text-gray-400 text-lg">
                Achieving better performance on the platforms that matter involves
                optimizing key aspects of your digital presence. This includes enhancing
                speed, reliability, and user experience to ensure you meet the needs of
                your audience and stay competitive in the market.
              </p>
            </div>
          </div>

          {/* Icons Grid */}
          <div className="space-y-8">
            {/* First row - odd columns */}
            <div className="grid grid-cols-2 md:grid-cols-12 gap-8">
              {firstRowIcons.map((item, index) => (
                <div 
                  key={`row1-${index}`} 
                  className={`flex items-center justify-center ${item.colStart}`}
                >
                  <div className="w-14 h-14 md:w-16 md:h-16   overflow-hidden flex items-center justify-center ">
                    <img
                      src={item.imgSrc}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Second row - even columns */}
            <div className="grid grid-cols-2 md:grid-cols-12 gap-8">
              {secondRowIcons.map((item, index) => (
                <div 
                  key={`row2-${index}`} 
                  className={`flex items-center justify-center ${item.colStart}`}
                >
                   <div className="w-14 h-14 md:w-16 md:h-16   overflow-hidden flex items-center justify-center ">
                    <img
                      src={item.imgSrc}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformPerformance;
