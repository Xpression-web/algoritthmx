'use client';
import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import { Montserrat } from 'next/font/google';

const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"700",
})
const monsterfont2 = Montserrat ({
  subsets : ["latin"],
  weight :"800",
})
const monsterfont3 = Montserrat ({
  subsets : ["latin"],
  weight :"200",
})


const TechGrid = () => {
  const [isInView, setIsInView] = useState(false);
  const scalableRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 } // Trigger animation when 50% of the component is in view
    );

    if (scalableRef.current) {
      observer.observe(scalableRef.current);
    }

    return () => {
      if (scalableRef.current) {
        observer.unobserve(scalableRef.current);
      }
    };
  }, [isInView]);

  const technologies = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <circle cx="18" cy="5" r="3"/>
          <circle cx="6" cy="12" r="3"/>
          <circle cx="18" cy="19" r="3"/>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
        </svg>
      ),
      title: "BIG DATA",
      isGrey: false,
      animationClass: "slide-in-left"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
          <line x1="4" y1="22" x2="4" y2="15"/>
        </svg>
      ),
      title: "INTERNET OF THINGS",
      isGrey: true,
      animationClass: "fade-in"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="16"/>
          <line x1="8" y1="12" x2="16" y2="12"/>
        </svg>
      ),
      title: "BLOCKCHAIN",
      isGrey: false,
      animationClass: "slide-in-right"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <circle cx="12" cy="12" r="3"/>
          <circle cx="19" cy="12" r="2"/>
          <circle cx="5" cy="12" r="2"/>
          <line x1="12" y1="5" x2="12" y2="19"/>
        </svg>
      ),
      title: "AUGMENTED REALITY (AR)",
      isGrey: true,
      animationClass: "slide-in-left"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
          <path d="M15 12c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z"/>
        </svg>
      ),
      title: "VIRTUAL REALITY (VR)",
      isGrey: false,
      animationClass: "fade-in"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 16v-4"/>
          <path d="M12 8h.01"/>
        </svg>
      ),
      title: "ARTIFICIAL INTELLIGENCE",
      isGrey: true,
      animationClass: "slide-in-right"
    }
  ];

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16 relative pt-20 pb-15 w-full">
          {/* Background "MULTIFACETED" text with zoom-in effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              ref={scalableRef}
              className={`multi-title ${monsterfont1.className} text-gray-600/20 select-none transform transition-transform duration-700 ${
                isInView ? 'scale-110 opacity-100' : 'scale-75 opacity-0'
              }`}
            >
             ADVANCED TECHNOLOGIES
            </span>
          </div>

          {/* Main titles */}
          <div className="relative z-10 mt-20">
            <h2 className={`tech-subtitle ${monsterfont3.className} text-white`}>
             WE'RE
            </h2>
            <h3 className={`tech-subtitle ${monsterfont2.className} text-white`}>
             SKILLED IN
            </h3>
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {technologies.map((tech) => (
          
            <div
            key={tech.title}
            className={`${
              isInView ? tech.animationClass : ''} ${tech.isGrey ? 'bg-gray-800' : 'bg-black'} w-full h-60 p-8 rounded-lg border border-gray-800 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out transform hover:translate-y-[-5px] `}
          >
            <div className="text-blue-400 mb-4">{tech.icon}</div>
            <h3 className="text-white text-center text-sm font-bold">{tech.title}</h3>
          </div>
          
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechGrid;
