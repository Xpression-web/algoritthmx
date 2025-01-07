import React from 'react';
import './styless.css';

const TechnologyToolbox = () => {
  const tools = [
    { id: 'ps', name: 'Photoshop', image: 'images/Adobe.png' },
    { id: 'ai', name: 'Illustrator', image: 'images/illustrator.png' },
    { id: 'ae', name: 'After Effects', image: 'images/after-effects.png' },
    { id: 'id', name: 'InDesign', image: 'images/indesign.png' },
    { id: 'canva', name: 'Canva', image: 'images/canva.png' },
    { id: 'figma', name: 'Figma', image: 'images/figma.png' },
    { id: 'cs', name: 'Creative Suite', image: 'images/creative-suite.png'},
    { id: 'stock', name: 'Stock', image: 'images/stock.png' },
    { id: 'sketch', name: 'Sketch', image: 'images/sketch.png'},
  ];

  return (
    <div className="bg-black text-white py-8 px-2 sm:py-16 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-light text-center mb-3 sm:mb-4">
          TECHNOLOGY TOOLBOX
        </h1>
        
        <div className="w-12 h-1 bg-blue-500 mx-auto mb-4 sm:mb-8"></div>
        
        <p className="text-gray-400 text-center text-sm sm:text-sm mb-8 sm:mb-16 max-w-5xl mx-auto px-2">
          Explore our comprehensive toolbox of cutting-edge graphics technologies designed to elevate your visual projects.
        </p>
        <div className="container justify-center justify-items-center">
          <div className="grid grid-cols-4 gap-2 sm:gap-2">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className="background rounded-lg py-5 px-3  md:p-6 flex items-center hover:bg-gray-900 transition duration-300"
              >
                <div className="w-full h-full sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg flex items-center">
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
                  />
                </div>
                <span className="hidden md:block text-xs sm:text-sm md:text-base font-light ml-2 sm:ml-3 mb-0">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyToolbox;