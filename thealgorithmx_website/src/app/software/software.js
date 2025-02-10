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
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    direction: 'left',
  },
  {
    title: 'ARTIFICIAL INTELLIGENCE',
    description: 'Powerful software that examines historical and real-time data to provide insights and spur decisions.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
        <path d="M12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2Z" stroke="#3B82F6" strokeWidth="2"/>
        <path d="M5 8C6.10457 8 7 8.89543 7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8Z" stroke="#3B82F6" strokeWidth="2"/>
        <path d="M19 8C20.1046 8 21 8.89543 21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8Z" stroke="#3B82F6" strokeWidth="2"/>
        <path d="M12 18C13.1046 18 14 18.8954 14 20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20C10 18.8954 10.8954 18 12 18Z" stroke="#3B82F6" strokeWidth="2"/>
        <path d="M12 6V18M5 12L19 12M5.5 11L12 20M18.5 11L12 20" stroke="#3B82F6" strokeWidth="2"/>
      </svg>
    ),
    direction: 'right',
  },
  {
    title: 'DATA SCIENCE',
    description: 'Intelligent software that unveils intricate data and boosts precision via consistent learning.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
        <circle cx="12" cy="12" r="10" stroke="#3B82F6" strokeWidth="2"/>
        <path d="M8 12H16M12 8V16" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 9L15 15M15 9L9 15" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    direction: 'left',
  },
  {
    title: 'INTERNET OF THINGS',
    description: 'Software capable of quickly sorting, analyzing, and mining data obtained from physical items connected over the internet.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
        <circle cx="12" cy="12" r="3" stroke="#3B82F6" strokeWidth="2"/>
        <path d="M3 9C3 9 6 3 12 3C18 3 21 9 21 9" stroke="#3B82F6" strokeWidth="2"/>
        <path d="M21 15C21 15 18 21 12 21C6 21 3 15 3 15" stroke="#3B82F6" strokeWidth="2"/>
      </svg>
    ),
    direction: 'right',
  },
  {
    title: 'COMPUTER VISION',
    description: 'Unique software that analyzes videos and digital images to identify and categorize objects and patterns.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
        <circle cx="12" cy="12" r="3" stroke="#3B82F6" strokeWidth="2"/>
        <path d="M2 12H7M17 12H22M12 2V7M12 17V22" stroke="#3B82F6" strokeWidth="2"/>
        <path d="M4.93 4.93L8.17 8.17M15.83 15.83L19.07 19.07M19.07 4.93L15.83 8.17M8.17 15.83L4.93 19.07" stroke="#3B82F6" strokeWidth="2"/>
      </svg>
    ),
    direction: 'right',
  },
  {
    title: 'AUGMENTED REALITY',
    description: 'Software that has the capability to superimpose virtual objects onto the actual environments.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="#3B82F6" strokeWidth="2"/>
        <path d="M12 8V16M8 12H16" stroke="#3B82F6" strokeWidth="2"/>
        <path d="M6 8L18 8" stroke="#3B82F6" strokeWidth="2"/>
      </svg>
    ),
    direction: 'left',
  },
  {
    title: 'VIRTUAL REALITY',
    description: 'Software technology that creates simulated virtual environments with 3D objects and realistic audio effects.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
        <path d="M4 6H20C21.1046 6 22 6.89543 22 8V16C22 17.1046 21.1046 18 20 18H4C2.89543 18 2 17.1046 2 16V8C2 6.89543 2.89543 6 4 6Z" stroke="#3B82F6" strokeWidth="2"/>
        <path d="M12 10V14M8 10V14M16 10V14" stroke="#3B82F6" strokeWidth="2"/>
      </svg>
    ),
    direction: 'right',
  },
  {
    title: 'BLOCKCHAIN',
    description: 'Software with highly protected storage of decentralized data making it easy to transact between points.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
        <path d="M7 10H17L12 4L7 10Z" stroke="#3B82F6" strokeWidth="2"/>
        <path d="M7 14H17L12 20L7 14Z" stroke="#3B82F6" strokeWidth="2"/>
      </svg>
    ),
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
  
    boxRefs.current.forEach((box) => {
      if (box) observer.observe(box);
    });
  
    return () => {
      boxRefs.current.forEach((box) => {
        if (box) observer.unobserve(box);
      });
    };
  }, []);

  const numberOfColumns = 4;

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
            const rowIndex = Math.floor(index / numberOfColumns);
            const colIndex = index % numberOfColumns;
            const isVisible = visibleBoxes.has(boxRefs.current[index]);
            const bgColor = (rowIndex + colIndex) % 2 === 0 ? 'bg-black' : 'bg-[#0f0f0f]';

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
                  {solution.icon}
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