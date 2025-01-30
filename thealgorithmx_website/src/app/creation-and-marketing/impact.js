'use client';
import React, { useEffect, useRef, useState } from 'react';

const ContentMarketingImpact = () => {
  const [isInView, setIsInView] = useState(false);
  const scalableRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
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

  const impactData = [
    {
      title: "ENHANCED BRAND VISIBILITY",
      description: "Content marketing allows you to increase your brand's visibility and reach a wider audience by creating valuable, relevant content that resonates with your target market.",
      accentColor: "rgb(239, 68, 68)", // red
      icon: "📱"
    },
    {
      title: "INCREASED WEBSITE TRAFFIC",
      description: "By publishing high-quality content consistently, you can attract more visitors to your website, leading to increased traffic and potential leads for your business.",
      accentColor: "rgb(234, 179, 8)", // yellow
      icon: "🔲"
    },
    {
      title: "IMPROVED SEARCH ENGINE RANKINGS",
      description: "Content optimized for search engines helps improve your website's visibility in search engine results pages (SERPs), making it easier for potential customers to find you online.",
      accentColor: "rgb(34, 197, 94)", // green
      icon: "📊"
    },
    {
      title: "ESTABLISHED AUTHORITY & THOUGHT LEADERSHIP",
      description: "Consistently publishing insightful and valuable content positions your brand as an authority in your industry, earning trust and credibility from your audience.",
      accentColor: "rgb(59, 130, 246)", // blue
      icon: "📑"
    },
    {
      title: "GREATER ENGAGEMENT AND INTERACTIONS",
      description: "Engaging content encourages interactions with your audience, such as likes, shares, comments, and clicks, fostering a sense of community and loyalty around your brand.",
      accentColor: "rgb(236, 72, 153)", // pink
      icon: "🔄"
    },
    {
      title: "LEAD GENERATION AND CONVERSION",
      description: "Content marketing is an effective lead generation tool, attracting prospects through informative content and nurturing them through the sales funnel with targeted messaging.",
      accentColor: "rgb(88, 9, 134)", // purple
      icon: "💻"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-6">
      <div className="max-w-[1200px] mx-auto p-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
          <h1 className="text-4xl md:text-5xl font-bold md:w-1/2">
            Impact of Our Content Marketing Agency
          </h1>
          <p className="md:w-1/2 text-gray-300">
            Our content marketing agency drives impactful results by creating tailored strategies
            that boost brand visibility, engage target audiences, and enhance conversion rates.
            We deliver compelling content that fosters brand loyalty and generates sustainable
            growth for your business.
          </p>
        </div>

        {/* Impact Cards Grid */}
        <div 
          ref={scalableRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {impactData.map((item, index) => (
            <div
            key={index}
            className={`relative p-10 min-h-[200px]  rounded-lg bg-black transition-all duration-700 transform
              ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
            `}
            style={{
              transitionDelay: `${index * 200}ms`,
              border: `1px solid ${item.accentColor}`,
            }}
          >
            {/* Accent Bar */}
            <div
              className="absolute w-[26px] h-[90px] right-[-2px] top-[calc(50%-45px)] rounded-l-2xl"
              style={{ backgroundColor: item.accentColor }}
            />
          
            {/* Content */}
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-md font-bold w-4/5">{item.title}</h3>
              <span className="text-3xl">{item.icon}</span>
            </div>
            <p className="text-gray-400 text-base hover:text-white">
              {item.description}
            </p>
          </div>
          
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentMarketingImpact;