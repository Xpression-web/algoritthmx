'use client'
import React, { useEffect, useRef, useState } from 'react';
import styles from './style.module.css';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '300',
});
const monsterfont1 = Montserrat({
  subsets: ['latin'],
  weight: '100',
});
const monsterfont2 = Montserrat({
  subsets: ['latin'],
  weight: '600',
});

const solutions = [
  {
    title: 'BIG DATA',
    description: 'Advanced software that efficiently manages and processes huge volumes of data at a fast pace.',
    icon: '/api/placeholder/50/50',
    direction: 'left',
  },
  {
    title: 'ARTIFICIAL INTELLIGENCE',
    description: 'Powerful software that examines historical and real-time data to provide insights and spur decisions.',
    icon: '/api/placeholder/50/50',
    direction: 'right',
  },
  {
    title: 'DATA SCIENCE',
    description: 'Intelligent software that unveils intricate data and boosts precision via consistent learning.',
    icon: '/api/placeholder/50/50',
    direction: 'left',
  },
  {
    title: 'INTERNET OF THINGS',
    description: 'Software capable of quickly sorting, analyzing, and mining data obtained from physical items connected over the internet.',
    icon: '/api/placeholder/50/50',
    direction: 'right',
  },
  {
    title: 'COMPUTER VISION',
    description: 'Unique software that analyzes videos and digital images to identify and categorize objects and patterns.',
    icon: '/api/placeholder/50/50',
    direction: 'right',
  },
  {
    title: 'AUGMENTED REALITY',
    description: 'Software that has the capability to superimpose virtual objects onto the actual environments.',
    icon: '/api/placeholder/50/50',
    direction: 'left',
  },
  {
    title: 'VIRTUAL REALITY',
    description: 'Software technology that creates simulated virtual environments with 3D objects and realistic audio effects.',
    icon: '/api/placeholder/50/50',
    direction: 'right',
  },
  {
    title: 'BLOCKCHAIN',
    description: 'Software with highly protected storage of decentralized data making it easy to transact between points.',
    icon: '/api/placeholder/50/50',
    direction: 'left',
  },
];

const BusinessSolutions = () => {
  const [visibleBoxes, setVisibleBoxes] = useState(new Set());
  const boxRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleBoxes((prev) => new Set(prev).add(entry.target));
          }
        });
      },
      { threshold: 0.2 }
    );
  
    // Observe only valid elements
    boxRefs.current.forEach((box) => {
      if (box) observer.observe(box); // Check if box is not null/undefined
    });
  
    return () => {
      boxRefs.current.forEach((box) => {
        if (box) observer.unobserve(box); // Check before unobserving
      });
    };
  }, []);
  

  const numberOfColumns = 4; // Number of items per row

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className={`${styles["solution-text"]} ${monsterfont.className}`}>SOLUTIONS</p>
          <h1 className={`${styles["solution-title"]} ${monsterfont1.className}`}>SOFTWARES FOR</h1>
          <h2 className={`${styles["solution-title"]} ${monsterfont.className}`}>ADVANCED BUSINESS PURPOSES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {solutions.map((solution, index) => {
            const rowIndex = Math.floor(index / numberOfColumns); // Row index
            const colIndex = index % numberOfColumns; // Column index
            const isVisible = visibleBoxes.has(boxRefs.current[index]);

            // Alternate background colors
            const bgColor =
              (rowIndex + colIndex) % 2 === 0 ? 'bg-black' : 'bg-[#0f0f0f]';

            return (
              <div
                key={solution.title}
                ref={(el) => (boxRefs.current[index] = el)}
                className={`relative overflow-hidden ${styles["box-design"]} transform transition-all duration-500 ${
                  isVisible
                    ? solution.direction === 'left'
                      ? styles['slide-in-left']
                      : styles['slide-in-right']
                    : 'opacity-0'
                } ${bgColor}`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <img
                    src={solution.icon}
                    alt={solution.title}
                    className="w-12 h-12 text-blue-500"
                  />
                  <h3 className={`${styles["solution-subtitle"]} ${monsterfont2.className} text-white`}>{solution.title}</h3>
                  <p className={`${styles["solution-description"]} text-semi-white`}>{solution.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BusinessSolutions;
