'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Montserrat } from "next/font/google";

const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "400",
});
const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "700",
});


const CopywritingMarketingImpact = () => {
  const [isInView, setIsInView] = useState(false);
  const scalableRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.2}
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
      title: "ENHANCED SEARCH ENGINE RANKINGS",
      description: "SEO copywriting agencies optimize content to improve search engine rankings, making your website more visible to potential customers and increasing organic traffic.",
      accentColor: "rgb(239, 68, 68)", // red
      icon: "📱"
    },
    {
      title: "INCREASED ORGANIC TRAFFIC",
      description: "By creating content that ranks well for targeted keywords, SEO copywriting agencies drive more organic traffic to your website, leading to higher engagement and potential conversions.",
      accentColor: "rgb(234, 179, 8)", // yellow
      icon: "🔲"
    },
    {
      title: "IMPROVED USER EXPERIENCE",
      description: "High-quality, well-structured content enhances user experience by providing valuable information that is easy to read and navigate, which can reduce bounce rates and increase time spent on your site.",
      accentColor: "rgb(34, 197, 94)", // green
      icon: "📊"
    },
    {
      title: "HIGHER CONVERSION RATES",
      description: "Targeted, persuasive content crafted by SEO copywriting agencies can effectively guide visitors through the buyer's journey, increasing the likelihood of conversions and sales.",
      accentColor: "rgb(59, 130, 246)", // blue
      icon: "📑"
    },
    {
      title: "STRENGTHENED BRAND AUTHORITY ",
      description: "Consistently publishing authoritative, well-researched content positions your brand as a leader in your industry, building trust and credibility with your audience.",
      accentColor: "rgb(236, 72, 153)", // pink
      icon: "🔄"
    },
    {
      title: "SUSTAINABLE LONG TERM GROWTH",
      description: "SEO copywriting agencies focus on creating evergreen content that continues to attract traffic and generate leads over time, supporting sustainable long-term growth for your business.",
      accentColor: "rgb(88, 9, 134)", // purple
      icon: "💻"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-6">
      <div className="max-w-[1200px] mx-auto p-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
        <h1 className={`text-[44px] leading-[48px]  ${monsterfont1.className} `}>
            Impact of Our SEO<span className={`text-[44px] leading-[48px]  ${monsterfont.className} `}>  Copywriting Agency </span>
          </h1>
          <p className={`md:w-full text-[15px] leading-[24px] font-[400] font-[Helvetica]  text-white`}>
          Our SEO copywriting agency enhances search engine rankings, drives organic traffic, and improves user experience. By crafting high-quality, optimized content, we boost conversion rates, strengthen brand authority, and support sustainable long-term growth for your business.
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
            className={`relative p-6 min-h-[200px]  rounded-lg bg-black transition-all duration-700 transform
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
              <h3 className={`text-[24px] leading-[28px] font-[500] font-[Helvetica]  text-white w-4/5`}>{item.title}</h3>
              <span className="text-3xl">{item.icon}</span>
            </div>
            <p className={`text-[15px] leading-[24px] font-[400] font-[Helvetica]  text-semi-white hover:text-white`}>
              {item.description}
            </p>
          </div>
          
          ))}
        </div>
      </div>
    </div>
  );
};

export default CopywritingMarketingImpact;