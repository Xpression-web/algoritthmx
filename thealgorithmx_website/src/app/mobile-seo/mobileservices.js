'use client';
import { useState } from 'react';

const MobileServices = () => {
    const [activeTab, setActiveTab] = useState('on-page');
    const [isHovered, setIsHovered] = useState(false); // Track if any tab is hovered

    const tabs = [
        { id: 'on-page', label: 'Responsive Design', icon: '□', content: { title: 'Responsive Web Design', 
        text: "The first step towards quality UI has to be responsive web and app designs. Your website should be as flexible as your users. We create websites that automatically adjust to all devices, such as smartphones, tablets, and laptops. Your website will work perfectly no matter where it's viewed thanks to a responsive design in play.",
        
        }},

        { id: 'off-page', label: 'Page Optimization', icon: '◇', content: { title: 'Lightning-Fast Mobile Page Speed Optimization', 
            text: "If your mobile site is slow, your users will leave. We enhance your website's speed by reducing image sizes, improving code quality, and optimizing all technical aspects for faster loading times. A speedier website brings joy to your users and improves your Google rankings.", 
        
        }},

        { id: 'technical', label: 'Content ', icon: '◈', content: { title: 'Mobile-Friendly Content Optimization',
            text: 'We make sure your content is tailored for mobile devices—simple to read, brief, and captivating. Our strategy focused on mobile devices guarantees that your content is both easy to use and designed to perform well in mobile search engine results.',
        
        }},

        { id: 'report', label: 'Keyword ', icon: '▢', content: { title: 'Mobile-Specific Keyword Optimization', 
        text: 'Mobile users search differently than desktop users. We conduct in-depth research to find mobile-specific keywords and optimize your content for those queries. By aligning with how users search on their phones, we help your site rank higher and attract more mobile traffic.',
            
        }},
        { id: 'implementation', label: 'Local SEO ', icon: '▣', content: { title: 'Local SEO for Mobile', 
            text: 'Mobile searches often come with local intent (think "near me"). We make sure your business shows up when nearby users are looking for products or services. From optimizing your Google My Business profile to tweaking location-based keywords, we help your brand be the first to show up in local mobile searches.', 
            
        }},
        { id: 'testing', label: 'Testing ', icon: '▣', content: { title: 'Comprehensive Mobile SEO Audits', 
            text: 'We perform a full audit of your mobile site, identifying and fixing issues like slow loading speeds and unoptimized code. The result? A fast, smooth site that ranks higher on mobile search results.', 
            
        }},
        
    ];

    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-6xl text-center mb-4">Services</h1>
                <div className="text-center mb-12">
                    <p className="text-gray-400">Locate SEO issues </p>
                    <p className="text-2xl">Impacting your Ranking</p>
                </div>

                {/* Tabs Container - Mobile scrollable, Desktop grid */}
                <div className="w-full overflow-x-auto pb-4 p-2 mb-8">
                    <div
                        className="flex md:grid md:grid-cols-6 min-w-max md:min-w-0 max-w-3xl mx-auto bg-black/50 rounded-lg border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                        onMouseEnter={() => setIsHovered(true)} // Activate hover state for any tab
                        onMouseLeave={() => setIsHovered(false)} // Deactivate hover state
                    >
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-shrink-0 min-w-fit flex flex-col items-center py-6  transition-all ${
                                    isHovered
                                        ? 'text-gray-400 hover:bg-white/5' // Hover state for all tabs
                                        : activeTab === tab.id
                                        ? 'bg-white/10 text-white' // Active tab when no hover
                                        : 'text-gray-400 hover:bg-white/5' // Default non-active tab
                                }`}
                            >
                                <span className="text-2xl mb-2">{tab.icon}</span>
                                <span className="text-sm whitespace-nowrap">{tab.label}</span>
                            </button> 
                        ))}
                    </div>
                </div>

                
                {/* Content Section */}
<div className="w-full overflow-x-hidden mt-[50px]">
    {tabs.map((tab) => (
        <div
            key={tab.id}
            className={`transition-all duration-300 ${
                activeTab === tab.id ? 'block' : 'hidden'
            }`}
        >
            <div className="text-center max-w-4xl mx-auto px-4">
                <h2 className="text-3xl mb-6">{tab.content.title}</h2>
                <p className="mb-8">{tab.content.text}</p>
            </div>
        </div>
    ))}
</div>
            </div>
        </div>
    );
};

export default MobileServices;
