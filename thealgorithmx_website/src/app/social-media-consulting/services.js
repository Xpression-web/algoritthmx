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

const MarketingSection = () => {
const [activeTab, setActiveTab] = useState('organic');
const [hoverTab, setHoverTab] = useState(null);
const [isInView, setIsInView] = useState(false);
const boostRef = useRef(null);

const content = {
    organic: {
    text: "Our social media consulting services offer expert guidance to elevate your online presence. With practical insights from seasoned social media consultants, we help craft customized social media strategies that foster genuine engagement. From optimizing profiles to creating compelling content, our team ensures your social media channels attract likes and followers while driving meaningful interactions. We focus on analytics-driven strategies and offer ongoing support to keep your approach effective and relevant. Perfect for businesses of all sizes, including small businesses and enterprises, our consultation empowers you to build a loyal audience through community-building techniques and targeted messaging.",
    features: [
    ]
},
    paid: {
    text: "Unlock the potential of social media marketing with AlgorithmX’s expert consultants. Our social media marketing consulting services include hands-on advice on every aspect of your ad campaigns— from precise audience targeting and persuasive ad copy to landing page optimization. Whether you're looking to partner with the best social media consulting companies in the US or exploring offshore social media consulting options, our team tailors solutions to your needs. Our strategies aim to increase engagement, boost followers, and drive measurable revenue growth, making us an ideal choice for both small businesses and enterprises alike.From San Diego to international markets, partner with AlgorithmX to maximize your return on investment with customized social media strategies that resonate with your target audience and produce real results.",
    features: [
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



return (
    <div className="min-h-screen bg-black text-gray-300 p-4">
    <div className="max-w-[1200px] mx-auto p-8">
        <div className="mb-16 text-center space-y-2">
        {/*<h2
            ref={boostRef}
            className={`-mb-6 leading-[1.1] text-[36px] md:text-[90px] text-[#151515] transform transition-transform duration-700 ${monsterfont.className} ${
            isInView ? `${styles["scale-110"]} ${styles["opacity-100"]}` : `${styles["scale-75"]} ${styles["opacity-0"]}`
            }`}
        >
            BOOST ENGAGEMENT
        </h2> */}
        <div className="relative z-10">
            <h2 className={`${styles["description"]} ${monsterfont1.className} mt-6 md:mt-0 text-white`}>
            SERVICES
            </h2>
            <h2 className={`${styles["description"]} ${monsterfont.className} text-white -mt-2`}>
            YOU NEED
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
                SOCIAL STRATEGY CONSULTING
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
                ADVERTISING STRATEGY
            </span>
            </button>
        </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-4">
    <p className="text-[#FFFFFFB3] text-[16px] leading-[26px] font-[300] font-['Helvetica']">{content[activeTab].text}</p>
</div>
<div className="space-y-4">
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
                    <span className="w-1 h-1 bg-green-500 rounded-full"></span>
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

export default MarketingSection;
