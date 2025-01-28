'use client';
import { useState } from 'react';

const NationalServices = () => {
    const [activeTab, setActiveTab] = useState('on-page');
    const [isHovered, setIsHovered] = useState(false); // Track if any tab is hovered

    const tabs = [
        { id: 'on-page', label: 'Keyword Strategy', icon: '□', content: { title: 'In-Depth Keyword Research & Strategy', 
        text: 'We identify the high-volume, relevant keywords your target audience is searching for. Our keyword strategy ensures your business ranks for the terms that bring the most traffic—and the highest conversions.',
        
        }},

        { id: 'off-page', label: 'On-Page', icon: '◇', content: { title: 'On-Page Optimization', 
            text: "We optimize every detail on your site, from meta tags to headings, URLs, and internal links. Our goal? To help your site rank #1 with national search engine optimization.", 
        
        }},

        { id: 'technical', label: 'Content ', icon: '◈', content: { title: 'Content Creation and Optimization',
            text: 'Nothing works better than high-quality content tailored to your audience and optimized for SEO. The goal here is to boost your rankings and keep visitors engaged.',
        
        }},

        { id: 'report', label: 'Link Building ', icon: '▢', content: { title: 'Link Building', 
        text: 'Backlinks build your site’s credibility. We’ll secure quality links from trusted sites through outreach, guest posts, and content promotion—boosting your rankings and authority.',
            
        }},
        { id: 'implementation', label: 'Technical SEO ', icon: '▣', content: { title: 'Technical SEO Audit and Optimization', 
            text: 'We handle the technical side, ensuring fast load times and easy crawling for search engines. Our optimizations keep your site running smoothly and improve rankings.', 
            
        }},
        
    ];

    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-6xl text-center mb-4">Services</h1>
                <div className="text-center mb-12">
                    <p className="text-gray-400">Identify SEO Roadblock </p>
                    <p className="text-2xl">Limiting Your Growth</p>
                </div>

                {/* Tabs Container - Mobile scrollable, Desktop grid */}
                <div className="w-full overflow-x-auto pb-4 p-2 mb-8">
                    <div
                        className="flex md:grid md:grid-cols-5 min-w-max md:min-w-0 max-w-3xl mx-auto bg-black/50 rounded-lg border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
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

export default NationalServices;
