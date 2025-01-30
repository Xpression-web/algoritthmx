'use client'
import React, { useState } from 'react';
 import styles from '../social-media-audit/style.module.css'
    import { Montserrat } from 'next/font/google';

    const monsterfont = Montserrat({
      subsets: ["latin"],
      weight: "500",
    });

    const monsterfont1 = Montserrat({
      subsets: ["latin"],
      weight: "100",
    });
    const monsterfont2 = Montserrat({
        subsets: ["latin"],
        weight: "700",
      });
      const monsterfont3 = Montserrat({
        subsets: ["latin"],
        weight: "300",
      });


const ConsultingImplementation = () => {
const [activeTab, setActiveTab] = useState("scale-strategy");
const [isAnimating, setIsAnimating] = useState(false);

const content = {
    "scale-strategy": {
    mainTitle: "Real-Time Engagement",
    boxTitle: "Live-Tweeting and Social Media Content Creation",
    description: (
        <>
        <p>
        Engage your audience instantly with real-time social media strategies like live-tweeting and custom contests. Our team creates tailored posts and campaigns to amplify your social reach, including live-tweeting events to grow your Twitter following organically. Through social media contests, we attract and convert followers, enhancing lead generation and engagement in real time.

        </p>
        </>
    ),
    icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
        </svg>
    )
    },
    "high-converting": {
    mainTitle: "Social Media Audits and Reporting",
    boxTitle: "Social Media Audits and Reporting",
    description: (
        <>
        <p>
        Our social media audits go beyond surface-level insights. Using tools like Sprout Social, Google Analytics, and BuzzSumo, your dedicated strategist creates detailed reports on campaign performance, highlighting what’s effective and why. Each report guides our next steps, ensuring every strategy is based on data-driven insights.

        </p>
        </>
    ),
    icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7z"/>
        <path d="M14 3v2h3.59l-7.29 7.29 1.41 1.41L19 6.41V10h2V3h-7z"/>
        </svg>
    )
},

    "sync-strategy": {
    mainTitle: "Online Advertising",
    boxTitle: "Online Advertising",
    description: (
        <>
        <p className="mt-4">
        From social media advertising to pay-per-click (PPC) campaigns, we drive brand awareness and conversions across platforms. Our services cover Facebook ads, display ads, text search ads, and more, tailored to reach your target audience. AlgorithmX’s advertising expertise ensures your campaigns generate meaningful results, whether on social media or your website.
        </p>
        </>
    ),
    icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
        </svg>
    )
    },
    "cost-effective": {
    mainTitle: "EMAIL MARKETING",
    boxTitle: "EMAIL MARKETING",
    description: (
        <>
        <p className="mt-4">
        Boost your digital strategy with email marketing and promotional newsletters designed to strengthen brand recognition and cross-channel engagement. Our email campaigns foster connections with your audience, creating a reliable platform for engagement and a seamless public relations channel to enhance your overall social media presence.
        </p>
        </>
    ),
    icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
        </svg>
    )
    },

};
const handleTabChange = (key) => {
    if (key !== activeTab) {
        setIsAnimating(true);
        setActiveTab(key);
        setTimeout(() => setIsAnimating(false), 300);
    }
};
const contentClasses = `
transform transition-all duration-300 ease-in-out
${isAnimating ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`;


return (
    <div className='p-4 md:p-8 bg-black text-white md:min-h-screen flex items-center justify-center'>
    <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-8 md:mb-12">
            <h1 className={`leading-[40px] text-[36px] md:text-[56px] mt-[20px]  text-center  ${monsterfont1.className} `}>
            Customized Services
            </h1>
            <p className={`text-[21px] leading-[26px] text-semi-white mt-[35px]  ${monsterfont3.className}`}>WE PROVIDE CUSTOMIZABLE SOCIAL MEDIA MANAGEMENT</p>
            <p className={`text-[21px] leading-[26px] text-semi-white  ${monsterfont2.className}`}>SERVICES TO ENHANCE YOUR PRESENCE</p>
        </div>

        <div className="border border-red-500 w-full h-auto md:h-[550px] max-w-[900px] mx-auto">
        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col h-full">
            <div className="overflow-x-auto p-4 border-b border-red-500">
            <div className="flex space-x-6 min-w-min">
                {Object.entries(content).map(([key, value]) => (
                <button
                    key={key}
                    className={`flex items-center gap-2 transition-colors duration-300 whitespace-nowrap ${
                    activeTab === key ? "text-red-500" : "text-gray-400"
                    }`}
                    onClick={() => handleTabChange(key)}
                >
                    <span className="w-6 h-6">{value.icon}</span>
                    <span className={`${styles["box-title"]}`}>{value.mainTitle}</span>
                </button>
                ))}
            </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
            <div key={activeTab} className={contentClasses}>
            <h3 className={`text-[34px] leading-[42px] ${monsterfont.className} mb-5`}>{content[activeTab].boxTitle}</h3>
            <div className={`${styles["box-title"]} text-semi-white `}>
                {content[activeTab].description}
            </div>
            </div>
            </div>
        </div>

{/* Desktop Layout */}
<div className="hidden md:flex h-full p-6">
  {/* Left Section */}
  <div className="flex flex-col space-y-8 pr-6 justify-center w-[30%]">
    {Object.entries(content).map(([key, value]) => (
      <button
        key={key}
        className={`flex items-start gap-2 transition-colors duration-300 text-left ${
          activeTab === key ? "text-red-500" : "text-gray-400"
        }`}
        onClick={() => handleTabChange(key)}
      >
        <span className="w-6 h-6 flex-shrink-0">{value.icon}</span>
        <span className={`${styles["box-title"]}`}>{value.mainTitle}</span>
      </button>
    ))}
  </div>

  {/* Divider */}
  <div className="relative w-px bg-gray-800 h-full flex items-center justify-center">
    <div
      className="absolute w-1 bg-red-500 transition-all duration-300"
      style={{
        top: `${Object.keys(content).indexOf(activeTab) * 5}rem`,
        height: "4rem",
      }}
    />
  </div>

  {/* Right Content Section */}
  <div className="flex-1 pl-2 overflow-hidden w-[70%]">
    <div className="h-full overflow-y-auto pr-4">
      <div className="transition-all duration-500 transform">
        <div key={activeTab} className={contentClasses}>
          <h3 className={`text-[36px] leading-[42px] ${monsterfont.className} mb-5`}>{content[activeTab].boxTitle}</h3>
          <div className={`${styles["box-title"]} text-semi-white `}>
            {content[activeTab].description}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    </div>
    </div>
);
};

export default ConsultingImplementation;