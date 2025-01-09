import React from 'react';
import './styless.css';
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "100",
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "300",
});

const TechnologyToolbox = () => {
  const tools = [
    { id: 'ps', name: 'Photoshop', image: 'images/Adobe.png' },
    { id: 'ai', name: 'Illustrator', image: 'images/Illustrator.png' },
    { id: 'ae', name: 'After Effects', image: 'images/After.png' },
    { id: 'id', name: 'InDesign', image: 'images/Indesign.png' },
    { id: 'canva', name: 'Canva', image: 'images/Canva.png' },
    { id: 'figma', name: 'Figma', image: 'images/Figma.png' },
    { id: 'cs', name: 'Creative Suite', image: 'images/creative.png'},
    { id: 'stock', name: 'Stock', image: 'images/Stock.png' },
    { id: 'sketch', name: 'Sketch', image: 'images/Sketch.png'},
  ];

  return (
    <div className="bg-black text-white py-8 px-2 sm:py-16 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className={`toolbox-title text-center  ${monsterfont.className} mb-3 sm:mb-4`}>
          TECHNOLOGY TOOLBOX
        </h1>
        
        <div className="w-12 h-1 bg-blue-500 mx-auto mb-4 sm:mb-8"></div>
        
        <p className={`text-semi-white text-center toolbox-description  ${monsterfont.className} mb-8 sm:mb-16 max-w-5xl mx-auto px-2`}>
          Explore our comprehensive toolbox of cutting-edge graphics technologies designed to elevate your visual projects.
        </p>
        <div className="container justify-center justify-items-center margin1">
          <div className="grid grid-cols-4 sm:gap-1">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className="background rounded-lg  flex items-center hover:bg-gray-900 transition duration-300"
              >
                {/* Flex container for image and text */}
                <div className="flex w-full items-center toolbox  ">
                  {/* Image part (1/3) */}
                  <div className="md:w-1/5 ">
                    <img
                      src={tool.image}
                      alt={tool.name}
                      className="w-12 h-12  object-contain md:ml-2"
                    />
                  </div>
                  
                  {/* Text part (2/3) */}
                  <div className="md:w-4/5 ">
                  <div>
                    <span className="hidden md:block toolbox ml-1 mb-0">
                      {tool.name}
                    </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyToolbox;
