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


const FacebookImplementation = () => {
const [activeTab, setActiveTab] = useState("scale-strategy");
const [isAnimating, setIsAnimating] = useState(false);

const content = {
    "scale-strategy": {
    mainTitle: "We’re a Meta Business Partner",
    boxTitle: "We’re a Meta Business Partner",
    description: (
        <>
        <p>
        When you invest in Facebook services for your business, you want to receive them from a skilled partner. At AlgorithmX, we’re a Meta Business Partner. That means we have extensive knowledge of crafting Facebook campaigns that help clients grow their businesses.
        </p>
        <p>
        Our skilled experts can help you do anything from launching ads to creating organic posts to selling on Marketplace. You can feel confident you’re working with a team that knows how to leverage Facebook’s platform to maximize revenue for your business.  
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
    mainTitle: "We know how to drive revenue that grows businesses",
    boxTitle: "We know how to drive revenue that grows businesses",
    description: (
        <>
        <p>
        If you invest in Facebook management services, you want to ensure those services help you achieve your desired results. When you choose AlgorithmX as your Facebook marketing company, you’ll work with a team of experts that knows how to drive results. In the past five years, we’ve achieved the following for our clients:
        </p>
        <ul className="mt-4 space-y-2">
            <li>Achieved significant revenue growth</li>
            <li>Secured numerous leads</li>
            <li>Handled countless phone calls</li>
            <li>Managed a vast number of campaigns</li>
        </ul>
        <p className="mt-4">
        Our team of experts has a proven track record of driving results that help clients grow their businesses.
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
    mainTitle: "We build custom campaigns for our clients",
    boxTitle: "We build custom campaigns for our clients",
    description: (
        <>
        <p className="mt-4">
        When you invest in Facebook business management services, you want to receive a strategy tailored to your business. Having a cookie-cutter strategy won’t produce your desired results. Many companies, however, rely on cookie-cutter strategies because they’re easy to implement.
        </p>
        <p>
        At AlgorithmX, we know our clients are unique, so we deliver a unique campaign for each. Our team takes the time to get to know your business and industry. We’ll analyze your market and competition to get a clearer picture of who you are and where you stand.
        </p>
        <p>
        Armed with that information, we create a custom campaign built for your business to help you maximize leads and revenue with your strategy.
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
    mainTitle: "We’re a “do-it-for-me” agency",
    boxTitle: "We’re a “do-it-for-me” agency",
    description: (
        <>
        <p className="mt-4">
        If there’s something there isn’t enough of, it’s time. Finding time to create, manage, and optimize campaigns is difficult, especially when you’re busy handling other business tasks.
        With some marketing companies, you’ll get all the resources and information you need, but they’ll leave you to implement them yourself. So, when you’re busy running your business, you may not have the time to implement their suggestions.
        </p>
        <p className="mt-4">
        That’s how AlgorithmX is different. We’re a “do-it-for-me” agency, meaning we’ll implement optimization tactics, monitor your campaigns, and more. You’ll reap all the benefits of having a Facebook marketing strategy in place without lifting a finger!
        </p>
        </>
    ),
    icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
        </svg>
    )
    },
    "long-term": {
    mainTitle: "We communicate openly",
    boxTitle: "We communicate openly",
    description: (
        <>
        <p className="mt-4">
        With an average close rate nearing 15%, SEO outperforms traditional marketing, which averages just 1.7%. This dependable
        revenue stream is why many choose the best eCommerce SEO company to sustain long-term growth. Although results build over
        time, the outcome is consistent new business and steady growth, making enterprise eCommerce SEO a smart choice for forward-looking brands.
        </p>
        <p className="mt-4">
        That’s why, at AlgorithmX, we communicate openly with all our clients. We provide you with a dedicated account manager that will handle all communications about your marketing.
        </p>
        <p className="mt-4">
        They’re your go-to person to contact with questions, concerns, or suggestions about your campaign.
        </p>
        <p className="mt-4">
        Your dedicated account manager will also provide you with monthly reporting of your campaign progress. They’ll break down your results and provide helpful insights on improving your campaigns and driving more revenue.
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
        <h2 className="text-blue-400 font-['Helvetica'] leading-[18px] font-[18px] font-[700]  text-center">Why Choose</h2>
            <h1 className={`leading-[40px] text-[36px] md:text-[56px] mt-[20px]  text-center  ${monsterfont1.className} `}>
              ALGORITHMX
            </h1>
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

export default FacebookImplementation;