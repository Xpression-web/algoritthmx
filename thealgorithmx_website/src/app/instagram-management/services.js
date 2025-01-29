'use client'
import React, { useEffect, useRef, useState } from 'react';
import styles from '../graphics/styles.module.css'
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
subsets: ['latin'],
weight: '700',
});
const monsterfont1 = Montserrat({
subsets: ["latin"],
weight: "200",
});

const InstagramMarketingSection = () => {
const [activeTab, setActiveTab] = useState('organic');
const [hoverTab, setHoverTab] = useState(null);
const [isInView, setIsInView] = useState(false);
const boostRef = useRef(null);

const content = {
    organic: {
    text: "Our organic Instagram marketing services are crafted to enhance audience engagement, strengthen connections, and drive meaningful actions. From visually compelling posts to strategic hashtag use, we cover all aspects of organic growth to build a thriving community around your brand.",
    extraText: "Our comprehensive organic Instagram services include:",
    features: [
        "Creation of engaging, visually appealing posts.",
        "Custom social media strategy tailored to your brand.",
        "Detailed audience analysis and insights.",
        "Consistent performance tracking and reporting.",
        "Strategic hashtag use for increased visibility.",
        "Community management to foster meaningful relationships."
    ]
},
    paid: {
    text: "Our paid Instagram marketing services help you reach new audiences and attract potential customers. With highly targeted advertising, we design ads that captivate attention and drive engagement, expanding your reach on one of the world’s most dynamic platforms.",
    extraText: "Our Instagram paid services include:",
    features: [
        "Creation of visually captivating and engaging ads",
        "Precise audience targeting to connect with potential customers",
        "Mobile-optimized ad design for seamless viewing",
        "Installation of tracking pixels to monitor performance",
        "Detailed ad performance reports",
        "Strategic ad placement for maximum visibility",
        "Continuous ad optimization for improved results"
    ]
    }
};

useEffect(() => {
    const observer = new IntersectionObserver(
    ([entry]) => {
        if (entry.isIntersecting && !isInView) {
        setIsInView(true);
        }
    },
    { threshold: 0.5 }
    );

    if (boostRef.current) {
    observer.observe(boostRef.current);
    }

    return () => {
    if (boostRef.current) {
        observer.unobserve(boostRef.current);
    }
    };
}, [isInView]);

const splitContent = (text) => {
    const parts = text.split("\n");
    return parts;
};

return (
    <div className="min-h-screen bg-black text-gray-300 p-4">
    <div className="max-w-[1200px] mx-auto p-8">
        <div className="mb-16 text-center space-y-2">
        <h2
            ref={boostRef}
            className={`-mb-6 leading-[1.1] text-[36px] md:text-[90px] text-[#151515] transform transition-transform duration-700 ${monsterfont.className} ${
            isInView ? `${styles["scale-110"]} ${styles["opacity-100"]}` : `${styles["scale-75"]} ${styles["opacity-0"]}`
            }`}
        >
            SERVICES
        </h2>
        <div className="relative z-10">
            <h2 className={`${styles["description"]} ${monsterfont1.className} mt-6 md:mt-0 text-white`}>
            ORGANIC INSTAGRAM
            </h2>
            <h2 className={`${styles["description"]} ${monsterfont.className} text-white -mt-2`}>
            MARKETING SERVICES
            </h2>
        </div>
        </div>

        <div className="relative mb-12">
        <div className="flex rounded-full border border-green-500 p-1 relative">
            <div
            className="absolute h-[calc(100%-8px)] transition-all duration-300 ease-in-out rounded-full"
            style={{
                width: hoverTab || activeTab === 'paid' ? '50%' : '45%',
                left: hoverTab
                ? hoverTab === 'paid'
                    ? '50%'
                    : '0'
                : activeTab === 'paid'
                ? '50%'
                : '0',
                background: 'linear-gradient(90deg, rgba(22,163,74,0.95) 0%, rgba(21,128,61,0.95) 100%)',
                boxShadow: '0 0 15px rgba(34,197,94,0.3)',
                backdropFilter: 'blur(4px)',
            }}
            />
            <button
            className="flex-1 rounded-full py-2 px-6 transition-all duration-300 relative z-10"
            onClick={() => setActiveTab('organic')}
            onMouseEnter={() => setHoverTab('organic')}
            onMouseLeave={() => setHoverTab(null)}
            >
            <span
                className={`flex items-center justify-center gap-2 ${hoverTab === 'organic' || (!hoverTab && activeTab === 'organic') ? 'text-white' : 'text-green-500'}`}
            >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 19h20L12 2zm0 3.8L18.5 17H5.5L12 5.8z" />
                </svg>
                ORGANIC
            </span>
            </button>

            <button
            className="flex-1 rounded-full py-2 px-6 transition-all duration-300 relative z-10"
            onClick={() => setActiveTab('paid')}
            onMouseEnter={() => setHoverTab('paid')}
            onMouseLeave={() => setHoverTab(null)}
            >
            <span
                className={`flex items-center justify-center gap-2 ${hoverTab === 'paid' || (!hoverTab && activeTab === 'paid') ? 'text-white' : 'text-green-500'}`}
            >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 19h20L12 2zm0 3.8L18.5 17H5.5L12 5.8z" />
                </svg>
                PAID
            </span>
            </button>
        </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="space-y-4">
    <p className="text-[#FFFFFFB3] text-[16px] leading-[26px] font-[300] font-['Helvetica']">{splitContent(content[activeTab].text)[0]}</p>
</div>
<div className="space-y-4">
    <p className="text-[#FFFFFFB3] text-[16px] leading-[26px] font-[300] font-['Helvetica']">{splitContent(content[activeTab].extraText)[0]}</p>
    {activeTab === 'paid' && (
        <ul className="space-y-2 mt-4">
            {content.paid.features.map((feature, index) => (
                <li key={index} className="flex items-center text-[#FFFFFFB3] text-[16px] leading-[26px] font-[300] font-['Helvetica'] gap-2">
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                    {feature}
                </li>
            ))}
        </ul>
    )}
    {activeTab === 'organic' && (
        <ul className="space-y-2 mt-4">
            {content.organic.features.map((feature, index) => (
                <li key={index} className="flex items-center text-[#FFFFFFB3] text-[16px] leading-[26px] font-[300] font-['Helvetica'] gap-2">
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                    {feature}
                </li>
            ))}
        </ul>
    )}
</div>
</div>

    </div>
    </div>
);
};

export default InstagramMarketingSection;
