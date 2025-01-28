'use client';
import { useState } from 'react';

const TechnicalServices = () => {
    const [activeTab, setActiveTab] = useState('on-page');
    const [isHovered, setIsHovered] = useState(false); // Track if any tab is hovered

    const tabs = [
        { id: 'on-page', label: 'Crawlability & Sitemaps', icon: '□', content: { title: 'Crawlability & Sitemaps', 
        text: 'We enhance crawlability by addressing indexing issues, optimizing site speed, and ensuring seamless page transitions. By organizing critical pages with XML and HTML sitemaps, we make it easier for search engines to understand your site’s layout and content.',
        
        }},

        { id: 'off-page', label: 'Mobile-First', icon: '◇', content: { title: 'Mobile-First Optimization', 
            text: "With mobile-first indexing, we ensure your website is optimized for mobile devices, recognizing that a significant share of traffic originates from mobile users. This approach improves usability on both desktop and mobile.", 
        
        }},

        { id: 'technical', label: 'Site Structure ', icon: '◈', content: { title: 'Site Structure',
            text: 'Clear and organized site structure is essential for SEO success. Our technical SEO agency ensures that your pages are well-linked and easy to navigate, helping search engines assess your site efficiently.',
        
        }},

        { id: 'report', label: 'Internal Links ', icon: '▢', content: { title: 'Internal Links', 
        text: 'Internal linking is crucial to guide crawlers through your site and highlight the significance of each page. This improves navigation, supports user experience, and enhances your site’s credibility.',
            
        }},
        { id: 'implementation', label: 'Site Performance ', icon: '▣', content: { title: 'Site Speed & Performance', 
            text: 'Leveraging our backend expertise, we focus on enhancing site speed and performance, a major factor in rankings and user experience. Faster sites attract more visitors and receive better treatment from search engine crawlers.', 
            
        }},
        { id: 'custom', label: 'Penalty Recovery ', icon: '▣', content: { title: 'Penalty Recovery', 
            text: "Our penalty recovery services include a thorough audit of links and content, addressing unreliable backlinks and other elements that could harm your site’s rankings. We help restore your site’s credibility and improve its overall SEO health.", 
            
        }},
        { id: 'data', label: ' Data Markup ', icon: '▣', content: { title: 'Structured Data Markup', 
            text: "Our structured data markup solutions simplify content processing for search engines, making your site more efficient and improving visibility.", 
            
        }},
        
    ];

    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-6xl text-center mb-4">Our</h1>
                <h1 className="text-4xl md:text-6xl text-center mb-4">Services</h1>
                <div className="text-center mb-12">
                    <p className="text-gray-400">LOCATE SEO ISSUES</p>
                    <p className="text-2xl">IMPACTING YOUR RANKING</p>
                </div>

                {/* Tabs Container - Mobile scrollable, Desktop grid */}
                <div className="w-full overflow-x-auto pb-4 p-2 mb-8">
                    <div
                        className="flex md:grid md:grid-cols-7 min-w-max md:min-w-0 max-w-5xl mx-auto bg-black/50 rounded-lg border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
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
<div className="w-full overflow-x-hidden mt-[150px]">
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

export default TechnicalServices;
