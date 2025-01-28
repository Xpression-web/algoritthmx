'use client';
import { useState } from 'react';

const EnterpriseServices = () => {
    const [activeTab, setActiveTab] = useState('on-page');
    const [isHovered, setIsHovered] = useState(false); // Track if any tab is hovered

    const tabs = [
        { id: 'on-page', label: 'Scalability', icon: '□', content: { title: 'Scalability That Grows with You', 
        text: "Large businesses need SEO strategies that can scale. We create enterprise SEO solutions designed for growth. Whether it’s managing thousands of pages or executing nationwide campaigns, we ensure your SEO evolves as your business expands.",
        
        }},

        { id: 'off-page', label: ' Technical SEO ', icon: '◇', content: { title: 'Geotargeting and Localization', 
            text: "Big business often means complex websites, and that can lead to some serious technical hurdles. As your enterprise search engine optimization marketing company, we conduct deep-dive technical SEO audits to uncover and fix any issues—whether it’s slow site speed, crawlability problems, or poor mobile performance.The outcome? A website that ranks higher in search results and keeps users engaged from the moment they land on your page.", 
        
        }},

        { id: 'technical', label: 'Analytics ', icon: '◈', content: { title: 'Data-Driven Insights & Analytics',
            text: 'In SEO, data is everything. Using powerful enterprise SEO platforms, we analyze crucial metrics like traffic, conversion rates, and keyword rankings. This lets us continuously refine your strategy, so your site performs better over time, driving more revenue.',
        
        }},

        { id: 'report', label: 'Content-Strategy' , icon: '▢', content: { title: 'Tailored Content Strategy for Enterprise Needs', 
        text: 'Content is the backbone of SEO. We develop custom content strategies for your industry. Whether it’s product descriptions or blogs, we optimize every word for SEO, ensuring your audience stays engaged and conversions soar.',
            
        }},
        { id: 'implementation', label: 'Multi-dimensional ', icon: '▣', content: { title: 'Multi-dimensional Approach', 
            text: "Our Enterprise SEO services utilize a multi-dimensional approach, covering all essential SEO facets: technical optimization, content strategy, link building, local and international SEO, and competitor analysis. Success starts with the right keywords. Our enterprise SEO consultants dive deep into keyword research to find high-value terms that align with your industry. This holistic method provides comprehensive coverage, amplifying your SEO impact across various channels and markets, ensuring every aspect of your business's online presence is optimized for maximum reach and effectiveness.", 
            
        }},
        { id: 'testing', label: 'Customization ', icon: '▣', content: { title: 'Customization and Integration', 
            text: 'Enterprise SEO services provide customized solutions tailored to the specific needs and goals of each organization. They integrate SEO efforts with other digital marketing initiatives such as content marketing, social media, and paid advertising to create a cohesive and synergistic approach that maximizes overall online visibility and ROI.', 
            
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

export default EnterpriseServices;
