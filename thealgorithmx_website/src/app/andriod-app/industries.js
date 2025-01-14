import React from 'react';
import { Montserrat } from 'next/font/google';
import './style.css';

const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"300",
})
const monsterfont = Montserrat ({
  subsets : ["latin"],
  weight :"700",
})


const IndustriesGrid = () => {
  const industries = [
    'Healthcare', 'Logistics', 'Education',
    'Retail', 'Finance', 'Real Estate',
    'Restaurant', 'Government', 'Travel',
    'Social Network', 'Aviation', 'Agriculture'
  ];

  return (
    <div className="bg-black p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className={`industries-title ${monsterfont1.className} text-white `}>
            Industries
          </h1>
          <p className={`text-semi-white ${monsterfont1.className} industries-subtitle`}>
            Designing Customized
          </p>
          <p className={`text-semi-white ${monsterfont.className} industries-subtitle text-xl md:text-2xl font-semibold`}>
            Android Solutions
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-3 gap-3 md:gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="relative borderd transition-all duration-300
                        flex  "
            >
              <span className="text-white industries">
                {industry}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesGrid;