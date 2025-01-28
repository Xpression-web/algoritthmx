'use client';
import { useState } from 'react';

const LinkServices = () => {
    const [activeTab, setActiveTab] = useState('on-page');
    const [isHovered, setIsHovered] = useState(false); // Track if any tab is hovered

    const tabs = [
        { id: 'on-page', label: 'Guest Posting', icon: '□', content: { title: 'Guest Posting Link Building Services', 
        text: 'We secure high-quality backlinks through guest posting on authoritative, relevant sites. This will boost your SEO and position your brand as a thought leader in your industry.',
        
        }},

        { id: 'off-page', label: 'Unlinked Mention', icon: '◇', content: { title: 'Unlinked Mention Link Building Services', 
            text: "Got mentions but no links? We’ll reach out to publishers who’ve mentioned your brand but forgot to link back. It’s like connecting the dots—those unlinked mentions will soon become valuable backlinks, enhancing your authority and rankings.", 
        
        }},

        { id: 'technical', label: 'Backlink Audit ', icon: '◈', content: { title: 'Backlink Audit Services',
            text: 'Concerned about bad links dragging your site down? Our backlink audit services will find harmful backlinks and remove them, keeping your site’s reputation spotless.',
        
        }},

        { id: 'report', label: 'Resource Link ', icon: '▢', content: { title: 'Resource Link Building Services', 
        text: 'If you have valuable, link-worthy assets (or need us to help you create them), we’ll get links from resource pages, establishing your site as an essential go-to in your field.',
            
        }},
        { id: 'implementation', label: ' Broken Link ', icon: '▣', content: { title: 'Broken Link Building Services', 
            text: 'We search the web for broken links and offer your site as the perfect replacement. It’s a win-win—websites fix their broken links, and you get valuable backlinks.', 
            
        }},
        { id: 'custom', label: ' Custom Link ', icon: '▣', content: { title: 'Custom Link Campaigns', 
            text: "Our custom link-building campaigns are crafted around your business objectives. We provide dedicated project management, continuous reporting, and personalized strategies focused on your success. Whether you're looking for ‘an organic link-building service in California’ or the best contextual link-building service, we create custom solutions that fit your needs perfectly.", 
            
        }},
        
    ];

    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-6xl text-center mb-4">Our</h1>
                <h1 className="text-4xl md:text-6xl text-center mb-4">Services</h1>

                {/* Tabs Container - Mobile scrollable, Desktop grid */}
                <div className="w-full overflow-x-auto pb-4 p-2 mb-8">
                    <div
                        className="flex md:grid md:grid-cols-6 min-w-max md:min-w-0 max-w-4xl mx-auto bg-black/50 rounded-lg border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                        onMouseEnter={() => setIsHovered(true)} // Activate hover state for any tab
                        onMouseLeave={() => setIsHovered(false)} // Deactivate hover state
                    >
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-shrink-0 min-w-fit flex flex-col items-center py-6 px-4 transition-all ${
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

export default LinkServices;
