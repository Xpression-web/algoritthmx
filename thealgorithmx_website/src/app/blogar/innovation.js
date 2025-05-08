// src/app/page.js
"use client";
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const tabs = [
  {
    id: 'accessibility',
    name: 'Accessibility',
    items: [
      {
        title: 'Lightweight, grippable, and ready to go.',
        category: 'ACCESSIBILITY',
        image: '/images/post-column-01.jpg',
        link: '/products/accessibility/lightweight'
      },
      {
        title: 'Voice control for everyone.',
        category: 'ACCESSIBILITY',
        image: '/images/post-column-01.jpg',
        link: '/products/accessibility/voice-control'
      },
      {
        title: 'Adaptive technology solutions.',
        category: 'ACCESSIBILITY',
        image: '/images/adaptive-tech.png',
        link: '/products/accessibility/adaptive-tech'
      },
    ]
  },
  {
    id: 'android-dev',
    name: 'Android Dev',
    items: [
      {
        title: 'Build your first Android app.',
        category: 'ANDROID DEV',
        image: '/images/android-app.png',
        link: '/products/android/first-app'
      },
      {
        title: 'Kotlin first development.',
        category: 'ANDROID DEV',
        image: '/images/kotlin-dev.png',
        link: '/products/android/kotlin'
      },
      {
        title: 'Material You design system.',
        category: 'ANDROID DEV',
        image: '/images/material-design.png',
        link: '/products/android/material-design'
      },
    ]
  },
  {
    id: 'blockchain',
    name: 'Blockchain',
    items: [
      {
        title: 'Decentralized applications made easy.',
        category: 'BLOCKCHAIN',
        image: '/images/dapps.png',
        link: '/products/blockchain/dapps'
      },
      {
        title: 'Smart contracts for beginners.',
        category: 'BLOCKCHAIN',
        image: '/images/smart-contracts.png',
        link: '/products/blockchain/smart-contracts'
      },
      {
        title: 'Web3 integration solutions.',
        category: 'BLOCKCHAIN',
        image: '/images/web3.png',
        link: '/products/blockchain/web3'
      },
    ]
  },
  {
    id: 'gadgets',
    name: 'Gadgets',
    items: [
      {
        title: 'Creative Game With The New DJI Mavic Air 2',
        category: 'GADGETS',
        image: '/images/dji-mavic.png',
        link: '/products/gadgets/dji-mavic'
      },
      {
        title: 'Next-gen wearable technology.',
        category: 'GADGETS',
        image: '/images/wearables.png',
        link: '/products/gadgets/wearables'
      },
      {
        title: 'Smart home automation tools.',
        category: 'GADGETS',
        image: '/images/smart-home.png',
        link: '/products/gadgets/smart-home'
      },
    ]
  },
];

export default function Innovation() {
  const [activeTab, setActiveTab] = useState('accessibility');
  const [activeItems, setActiveItems] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const carouselRef = useRef(null);
  
  // Handle window resize for responsive design
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Set initial width
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Set up active items when tab changes
  useEffect(() => {
    const currentTabItems = tabs.find(tab => tab.id === activeTab)?.items || [];
    
    // For infinite carousel, we need to duplicate items
    if (currentTabItems.length > 0) {
      // Create a circular array for smooth infinite scrolling
      const circularItems = [...currentTabItems, ...currentTabItems, ...currentTabItems];
      setActiveItems(circularItems);
    } else {
      setActiveItems([]);
    }
  }, [activeTab]);
  
  // Calculate how many items to show based on screen width
  const getItemsToShow = () => {
    if (windowWidth < 768) {
      return 1; // Show 1 on mobile
    } else {
      return 3; // Show 3 on desktop
    }
  };
  
  const itemsPerView = getItemsToShow();
  const originalLength = tabs.find(tab => tab.id === activeTab)?.items.length || 0;
  
  // Calculate starting index to show items from the middle set of duplicated items
  const baseIndex = originalLength;
  const [currentIndex, setCurrentIndex] = useState(baseIndex);
  
  // Handle next/prev item navigation with animation
  const showNext = () => {
    if (isAnimating) return;
    
    setDirection('right');
    setIsAnimating(true);
    
    setTimeout(() => {
      setCurrentIndex(prevIndex => {
        const newIndex = prevIndex + 1;
        // If we've scrolled past the middle set, reset to the beginning of the middle set
        if (newIndex >= baseIndex + originalLength) {
          return baseIndex;
        }
        return newIndex;
      });
      setIsAnimating(false);
    }, 300);
  };
  
  const showPrev = () => {
    if (isAnimating) return;
    
    setDirection('left');
    setIsAnimating(true);
    
    setTimeout(() => {
      setCurrentIndex(prevIndex => {
        const newIndex = prevIndex - 1;
        // If we've scrolled back before the middle set, reset to the end of the middle set
        if (newIndex < baseIndex) {
          return baseIndex + originalLength - 1;
        }
        return newIndex;
      });
      setIsAnimating(false);
    }, 300);
  };
  
  // Calculate items to display
  const visibleItems = [];
  for (let i = 0; i < itemsPerView; i++) {
    const index = (currentIndex + i) % activeItems.length;
    visibleItems.push(activeItems[index]);
  }
  
  return (
    <main className="min-h-screen bg-black">
      {/* Innovation & Tech Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Banner Section */}
      <Link href="/graphics" className="block relative mb-[10px]">
        <div className="w-full h-[11rem] relative overflow-hidden">
          <Image 
            src="/images/banner-03.png" 
            alt="Kitchen Appliances" 
            fill 
            className="object-cover"
          />
        </div>
        
      </Link>


        <h1 className="text-4xl font-bold mb-8 text-white">Innovation & Tech</h1>
        
        {/* Tabs Navigation */}
        <div className="flex space-x-4 mb-8 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-md border transition-all ${
                activeTab === tab.id
                  ? 'border-white bg-transparent text-white'
                  : 'border-gray-700 text-gray-400 hover:border-gray-400'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
        
        {/* Tab Content with Carousel */}
        <div className="relative overflow-hidden" ref={carouselRef}>
          {/* Left Arrow - Always visible */}
          <button 
            onClick={showPrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/20 rounded-full p-2 shadow-lg z-10 hover:bg-white/40 transition"
            aria-label="Scroll left"
            disabled={isAnimating}
          >
            <ChevronLeft size={24} className="text-black" />
          </button>
          
          {/* Right Arrow - Always visible */}
          <button 
            onClick={showNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/20 rounded-full p-2 shadow-lg z-10 hover:bg-white/40 transition"
            aria-label="Scroll right"
            disabled={isAnimating}
          >
            <ChevronRight size={24} className="text-black" />
          </button>
          
          {/* Carousel Container with Animation */}
          <div 
            className={`flex transition-transform duration-300 ${
              isAnimating ? (direction === 'left' ? 'translate-x-[33%]' : '-translate-x-[33%]') : ''
            }`}
            style={{
              transform: `translateX(-${(currentIndex - baseIndex) * (100 / itemsPerView)}%)`
            }}
          >
            {activeItems.map((item, index) => (
              <Link 
                href={item.link} 
                key={`item-${index}`} 
                className={`flex-shrink-0 ${
                  itemsPerView === 1 ? 'w-full' : `w-1/${itemsPerView}`
                } px-3 transform transition-all duration-300`}
              >
                <div className="bg-white rounded-xl overflow-hidden h-full group">
    <div className="p-6 text-center">
      <p className="text-red-500 font-medium text-sm tracking-wide">{item.category}</p>
      <h3 className="text-black inline-block relative">
        <span className="relative inline-block text-center">
          {item.title}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-500"></span>
        </span>
      </h3>
    </div>
    <div className="h-64 relative overflow-hidden">
      {/* Semi-circle background effect */}
      <div className="absolute inset-x-0 bottom-0 w-full h-3/4 bg-gray-100 rounded-t-full scale-110 transform -translate-y-1/4 group-hover:scale-125 transition-all duration-500"></div>
      <div className="relative h-full transform group-hover:scale-105 transition duration-300">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-contain"
        />
      </div>
    </div>
  </div>
              </Link>
            ))}
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {Array.from({ length: originalLength }).map((_, i) => (
              <button
                key={`dot-${i}`}
                className={`h-2 rounded-full transition-all ${
                  (currentIndex - baseIndex) % originalLength === i
                    ? 'w-6 bg-white'
                    : 'w-2 bg-gray-600'
                }`}
                onClick={() => {
                  if (isAnimating) return;
                  setCurrentIndex(baseIndex + i);
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}