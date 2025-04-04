'use client'
import React, { useEffect, useRef, useState } from 'react';

const StackCardAnimation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  
  const cards = [
    { 
      id: 1, 
      title: "Identifying the Issue", 
      description: "Our journey begins with a thorough assessment of your current technology infrastructure. We analyze your existing systems, processes, and IT landscape to identify areas that require improvement. The review includes an evaluation of performance bottlenecks, security vulnerabilities, and scalability limitations."
    },
    { 
      id: 2, 
      title: "Strategic Planning", 
      description: "Based on our findings, we develop a comprehensive strategic plan tailored to your specific needs and business goals. This roadmap outlines the technological changes required, along with timelines and resource allocations."
    },
    { 
      id: 3, 
      title: "Implementation", 
      description: "Our expert team executes the transformation plan with precision, implementing new systems, migrating data, and optimizing processes while ensuring minimal disruption to your ongoing operations."
    },
    { 
      id: 4, 
      title: "Training & Support", 
      description: "We provide comprehensive training for your team to ensure smooth adoption of new technologies and processes. Our ongoing support ensures that you can maximize the benefits of your transformed digital environment."
    },
    { 
      id: 5, 
      title: "Continuous Improvement", 
      description: "Digital transformation is not a one-time event but a continuous journey. We establish monitoring mechanisms and feedback loops to help you adapt to changing market conditions and technological advancements."
    },
    { 
      id: 6, 
      title: "Business Integration", 
      description: "We help integrate the new technologies with your existing business processes, ensuring a seamless transition and maximum benefit realization across departments."
    },
    { 
      id: 7, 
      title: "Performance Analytics", 
      description: "Our advanced analytics tools provide real-time insights into your systems' performance, helping you make data-driven decisions to optimize operations and resource allocation."
    },
    { 
      id: 8, 
      title: "Future Roadmapping", 
      description: "We work with you to develop a forward-looking technology roadmap, anticipating future challenges and opportunities to keep your business competitive in the digital landscape."
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const calculateCardPosition = (index) => {
    if (isMobile) return {}; // No sticky positioning on mobile

    const baseOffset = 150; // Starting position for cards
    const cardHeight = 200; // Approximate height of a card
    const cardGap = 300; // Consistent gap between cards (reduced from 500)
    const scrollThreshold = baseOffset + (index * (cardHeight + cardGap));
    
    // Distance to move up before becoming sticky
    const visibilityThreshold = 150;
    
    if (scrollPosition < scrollThreshold - visibilityThreshold) {
      // Card is still below viewport, maintain full offset
      return { transform: `translateY(${scrollThreshold - scrollPosition}px)` };
    } else if (scrollPosition < scrollThreshold) {
      // Card is entering viewport but not yet sticky - gradually move up
      const progress = (scrollThreshold - scrollPosition) / visibilityThreshold;
      return { transform: `translateY(${progress * visibilityThreshold}px)` };
    } else {
      // Card is sticky
      return { transform: 'translateY(0)' };
    }
  };

  const calculateFirstCardOffset = () => {
    if (isMobile) return {}; // No animation on mobile
    
    const maxOffset = 80; // Maximum amount the first card moves up
    const startOffset = 600; // When first card starts moving up
    const endOffset = 1400; // When first card reaches maximum up position
    
    if (scrollPosition < startOffset) {
      return { transform: 'translateY(0)' };
    } else if (scrollPosition > endOffset) {
      return { transform: `translateY(-${maxOffset}px)` };
    } else {
      const progress = (scrollPosition - startOffset) / (endOffset - startOffset);
      return { transform: `translateY(-${progress * maxOffset}px)` };
    }
  };

  return (
    <div className="bg-black text-white min-h-screen w-full" ref={containerRef}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row px-6 pt-16">
        {/* Left side content - becomes sticky only on desktop */}
        <div className={`md:w-1/2 ${!isMobile ? 'sticky top-32' : ''} h-fit md:pr-12 mb-12 md:mb-0`}>
          <h1 className="text-4xl font-bold mb-6">Stack Card Animation</h1>
          <p className="text-lg mb-6">
            This demonstration shows a stack card animation where cards come up one by one as you scroll and stick to each other.
            The left side remains fixed while the right side animates.
          </p>
          <p className="text-lg">
            Keep scrolling to see all cards stack up. Once the last card appears, the whole page will continue scrolling normally.
          </p>
        </div>
        
        {/* Right side with stacking cards */}
        <div className="md:w-1/2 relative pt-32 pb-32">
          <div className="pt-16">
          {cards.map((card, index) => (
  <div
    key={card.id}
    className={`bg-black border-[1px] border-red-500 rounded-xl p-8 shadow-lg w-full h-[300px] ${
      index !== cards.length - 1 ? 'mb-[20px]' : ''
    } overflow-hidden flex flex-col justify-center ${!isMobile ? 'sticky top-[150px]' : ''}`}
    style={calculateCardPosition(index)}
  >
    <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
    <p className="text-gray-300">{card.description}</p>
  </div>
))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default StackCardAnimation;