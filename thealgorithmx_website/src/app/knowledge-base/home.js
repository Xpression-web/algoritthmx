'use client'
import { useState, useRef, useEffect } from 'react';

export default function AlphabeticalGlossary() {
  const [activeAlphabet, setActiveAlphabet] = useState('A');
  const sectionRefs = useRef({});
  const scrollingByClick = useRef(false);
  const alphabetSidebarRef = useRef(null);
  const mobileAlphabetBarRef = useRef(null);
  
  // Generate alphabet array A-Z
  const alphabets = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  
  // Data structure for our glossary
  const glossaryData = {
    A: [
      { title: 'Acquisition', link: '#' },
      { title: 'App Engagement Glossary', link: '#' },
      { title: 'App Store', link: '#' },
      { title: 'ASO (App Store Optimization)', link: '#' },
      { title: 'Average Revenue per Daily Active User (ARPDAU)', link: '#' },
      { title: 'App Analytics', link: '#' },
      { title: 'App Inbox Notifications', link: '#' },
      { title: 'Artificial Intelligence (AI)', link: '#' },
      { title: 'Attribution', link: '#' },
      { title: 'Average Revenue Per User (ARPU)', link: '#' },
    ],
    B: [
      { title: 'Backlinks', link: '#' },
      { title: 'Boost engagement with deep links', link: '#' },
      { title: 'Banner Ad', link: '#' },
      { title: 'Bounce Rate', link: '#' },
    ],
    C: [
      { title: 'Campaign', link: '#' },
      { title: 'Cohort Analysis Glossary', link: '#' },
      { title: 'CTA', link: '#' },
      { title: 'Customer Journey', link: '#' },
      { title: 'Churn Rate', link: '#' },
      { title: 'Conversion Rate Glossary', link: '#' },
      { title: 'CTR', link: '#' },
      { title: 'Customer Lifecycle Glossary', link: '#' },
    ],
    D: [
      { title: 'Data-Driven Marketing', link: '#' },
      { title: 'Deep Linking', link: '#' },
    ],
    E: [
      { title: 'Engagement', link: '#' },
      { title: 'Email Marketing', link: '#' },
    ],
    // Placeholder empty arrays for F-Z
    F: [], G: [], H: [], I: [], J: [], K: [], 
    L: [], M: [], N: [], O: [], P: [], Q: [], 
    R: [], S: [], T: [], U: [], V: [], W: [], 
    X: [], Y: [], Z: []
  };

  const handleAlphabetClick = (alphabet) => {
    setActiveAlphabet(alphabet);
    scrollingByClick.current = true; 
  
    const element = sectionRefs.current[alphabet];
    if (element) {
      const yOffset = -200; // Offset for navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    
    // Sync both desktop and mobile alphabet navigation
    syncAlphabetNavigation(alphabet);
  
    setTimeout(() => {
      scrollingByClick.current = false;
    }, 1000);
  };
  
  // Setup intersection observer to update active letter based on scroll position
  useEffect(() => {
    // Create an observer that better emphasizes the middle of the viewport
    // We'll adjust the rootMargin to create an "active zone" near the top-middle
    const observer = new IntersectionObserver(
      (entries) => {
        if (scrollingByClick.current) return;
        
        // Filter for elements that are intersecting
        const intersectingEntries = entries.filter(entry => entry.isIntersecting);
        
        if (intersectingEntries.length > 0) {
          // Find the element closest to 1/3 of the way down the screen (better than top edge)
          // This creates a more natural feeling when scrolling
          const viewportHeight = window.innerHeight;
          const targetPosition = viewportHeight * 0.33; // Target position at 1/3 down
          
          let bestMatch = intersectingEntries[0];
          let smallestDistance = Infinity;
          
          intersectingEntries.forEach(entry => {
            const rect = entry.boundingClientRect;
            const elementMiddle = rect.top + (rect.height / 2);
            const distanceFromTarget = Math.abs(elementMiddle - targetPosition);
            
            if (distanceFromTarget < smallestDistance) {
              smallestDistance = distanceFromTarget;
              bestMatch = entry;
            }
          });
          
          const newActiveAlphabet = bestMatch.target.id;
          setActiveAlphabet(newActiveAlphabet);
          
          // Sync both desktop and mobile alphabet navigation
          syncAlphabetNavigation(newActiveAlphabet);
        }
      },
      { 
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5], // Multiple thresholds for smoother detection
        rootMargin: "-15% 0px -50% 0px" // Prioritize upper-middle area of viewport
      }
    );

    Object.keys(sectionRefs.current).forEach((key) => {
      if (sectionRefs.current[key]) {
        observer.observe(sectionRefs.current[key]);
      }
    });

    return () => {
      Object.keys(sectionRefs.current).forEach((key) => {
        if (sectionRefs.current[key]) {
          observer.unobserve(sectionRefs.current[key]);
        }
      });
    };
  }, [alphabets]);
  
  // Helper function to sync alphabet navigation in both desktop and mobile views
  const syncAlphabetNavigation = (alphabet) => {
    // Sync desktop sidebar
    if (alphabetSidebarRef.current) {
      const alphabetIndex = alphabets.findIndex(a => a === alphabet);
      if (alphabetIndex !== -1) {
        const buttonHeight = 40; // Approximate height of each alphabet button
        const scrollPosition = Math.max(0, alphabetIndex * buttonHeight - 150);
        alphabetSidebarRef.current.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
    
    // Sync mobile horizontal alphabet bar
    if (mobileAlphabetBarRef.current) {
      const alphabetIndex = alphabets.findIndex(a => a === alphabet);
      if (alphabetIndex !== -1) {
        const buttonWidth = 42; // Approximate width of each alphabet button including margins
        const scrollPosition = Math.max(0, alphabetIndex * buttonWidth - (window.innerWidth / 2) + (buttonWidth / 2));
        mobileAlphabetBarRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div className="flex justify-center bg-black text-white pt-[100px] pb-[100px] min-h-screen">
      <div className="flex flex-col md:flex-row w-full max-w-screen-xl">
        {/* Alphabet sidebar - enhanced with better styling */}
        <div className="hidden md:flex flex-col sticky top-[100px] h-[500px] pt-[80px] pr-4  bg-opacity-70 backdrop-blur-sm rounded-r-lg shadow-lg">
          <div 
            ref={alphabetSidebarRef}
            className="flex flex-col space-y-1 overflow-y-auto h-full pr-2 scrollbar-thin"
          >
            {alphabets.map((alphabet) => (
              <button
                key={alphabet}
                onClick={() => handleAlphabetClick(alphabet)}
                className={`py-2 px-4 text-center font-medium transition-all duration-300 ${
                  activeAlphabet === alphabet
                    ? 'text-red-500  rounded-md shadow-md transform scale-105'
                    : 'text-gray-300 hover:text-red-400 hover:bg-gray-800 hover:bg-opacity-50 rounded-md'
                }`}
              >
                {alphabet}
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal alphabet bar for mobile */}
        <div 
          ref={mobileAlphabetBarRef}
          className="md:hidden sticky top-0 z-10 pt-[100px] bg-black bg-opacity-90 backdrop-blur-sm px-4 py-3 overflow-x-auto whitespace-nowrap shadow-md scrollbar-thin-x"
        >
          {alphabets.map((alphabet) => (
            <button
              key={alphabet}
              onClick={() => handleAlphabetClick(alphabet)}
              className={`inline-block mx-1 min-w-[36px] py-2 px-3 text-center font-medium transition-all duration-200 ${
                activeAlphabet === alphabet
                  ? 'text-red-500 rounded-md shadow-md'
                  : 'text-gray-300 hover:text-red-400 rounded-md'
              }`}
            >
              {alphabet}
            </button>
          ))}
        </div>

        {/* Main content area with custom scrollbar */}
        <div className="flex-1 p-4 md:p-8 overflow-y-auto scrollbar-custom">
          {alphabets.map((alphabet) => (
            <section
              key={alphabet}
              id={alphabet}
              ref={(el) => (sectionRefs.current[alphabet] = el)}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold border-b-2 border-red-500 border-opacity-40 pb-3 mb-8 text-red-500 flex items-center">
                <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">{alphabet}</span>
                <div className="ml-4 h-px flex-grow bg-gradient-to-r from-red-500 to-transparent"></div>
              </h2>
              
              {glossaryData[alphabet] && glossaryData[alphabet].length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {glossaryData[alphabet].map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="text-gray-300 hover:text-red-400 transition-colors block p-3 rounded-lg "
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic p-4 bg-gray-800 bg-opacity-20 rounded-lg border border-gray-800">No entries for this letter yet.</p>
              )}
            </section>
          ))}
        </div>
      </div>

      {/* Add global styles for custom scrollbars */}
      <style jsx global>{`
        /* Custom scrollbar styles */
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-track {
          background: rgba(31, 31, 31, 0.5);
          border-radius: 10px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(220, 38, 38, 0.5);
          border-radius: 10px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(220, 38, 38, 0.7);
        }

        .scrollbar-thin-x::-webkit-scrollbar {
          height: 4px;
        }
        
        .scrollbar-thin-x::-webkit-scrollbar-track {
          background: rgba(31, 31, 31, 0.5);
        }
        
        .scrollbar-thin-x::-webkit-scrollbar-thumb {
          background: rgba(220, 38, 38, 0.5);
          border-radius: 10px;
        }

        .scrollbar-custom::-webkit-scrollbar {
          width: 8px;
        }
        
        .scrollbar-custom::-webkit-scrollbar-track {
          background: rgba(31, 31, 31, 0.3);
          border-radius: 10px;
        }
        
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: rgba(220, 38, 38, 0.4);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: rgba(220, 38, 38, 0.6);
        }
      `}</style>
    </div>
  );
}