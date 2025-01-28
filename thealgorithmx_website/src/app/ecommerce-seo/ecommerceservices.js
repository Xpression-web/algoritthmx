'use client'
import { useState } from 'react';

const EcommerceServices = () => {
    const [activeTab, setActiveTab] = useState('on-page');
    const [hoveredTab, setHoveredTab] = useState(null);

    const tabs = [
        { id: 'on-page', label: 'Keyword identification', icon: '□', content: {
            title: 'Local SEO Audit',
            text: "Before we make any moves, we identify what keywords your potential customers are searching for. Whether it’s researching the most effective phrases for advanced eCommerce SEO or optimizing for eCommerce SEO services across the USA, we target the words that will bring the right shoppers to your store.",
        }},
        { id: 'off-page', label: 'Keyword implementation', icon: '◇', content: {
            title: 'Keyword implementation',
            text: 'We don’t just stop at finding the right keywords; we skillfully weave them into:',
            items: ['Homepages', 'Page titles', 'Meta descriptions', 'Product descriptions','Image alt text'],
            conclusion: "Our team works to boost your local search visibility and drive meaningful growth aligned with your goals. We also optimize local SEO for service-area businesses (SAB) to boost your business in a very specific geographic radius, no matter where you're in the world."
        }},
        { id: 'technical', label: 'Product page optimization', icon: '◈', content: {
            title: 'Product page optimization',
            text: 'Product pages are your store’s goldmine. Our eCommerce SEO consultants will optimize them with:',
            items: ['Keyword-rich descriptions', 'Model numbers for search specify', 'Clear,enticing copy to improve conversions',],
            conclusion: 'This ensures your product pages rank high when customers search for long-tail keywords like "best eCommerce platform for SEO" or "eCommerce SEO firm in USA."'
        }},
        { id: 'report', label: 'Navigation optimization', icon: '▢', content: {
            title: 'Navigation optimization',
            text: 'In eCommerce, easy navigation is essential. We organize products into clear categories and link key pages directly from the menu, making it simple for users to find what they need.',
            description: [
                'Confusing layouts drive visitors away, hurting both engagement and rankings. Our solution? Intuitive design and breadcrumb navigation that guides users back to previous sections, encouraging them to explore further and stay on your site.',
            ],
            conclusion: 'We improve the browsing experience, reduce bounce rates, and strengthen your SEO by optimizing navigation.',
        }},
        { id: 'implementation', label: 'Content creation', icon: '▣', content: {
            title: 'Content creation',
            text: 'In eCommerce, content is not just king—relevant content is emperor. Our team of certified eCommerce SEO experts crafts fresh, original pieces such as blog posts, how-to videos, infographics, and in-depth articles that resonate with your audience. By targeting high-impact keywords like "enterprise eCommerce SEO" and industry-specific topics, we ensure your content not only drives traffic but also builds trust and engages potential customers.',
            
        }},
    ];

    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-6xl text-center mb-4">Audit Services</h1>
                <div className="text-center mb-12">
                    <p className="text-gray-400">LOCATE SEO ISSUES</p>
                    <p className="text-2xl">IMPACTING YOUR RANKING</p>
                </div>

                {/* Tabs Container */}
                <div className="w-full overflow-x-auto pb-4 p-2 mb-8">
                    <div className="flex md:grid md:grid-cols-5 min-w-max md:min-w-0 max-w-4xl mx-auto bg-black rounded-lg border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                onMouseEnter={() => setHoveredTab(tab.id)}
                                onMouseLeave={() => setHoveredTab(null)}
                                className={`flex-shrink-0 min-w-fit flex flex-col items-center py-6 px-4 transition-all ${
                                    hoveredTab
                                        ? hoveredTab === tab.id
                                            ? 'bg-white/10 text-white'
                                            : 'text-gray-400 hover:bg-white/5'
                                        : activeTab === tab.id
                                        ? 'bg-white/10 text-white'
                                        : 'text-gray-400 hover:bg-white/5'
                                }`}
                            >
                                <span className="text-2xl mb-2">{tab.icon}</span>
                                <span className="text-sm whitespace-nowrap">{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Section */}
                <div className="w-full overflow-x-hidden">
                    {tabs.map((tab) => (
                        <div
                            key={tab.id}
                            className={`transition-all duration-300 ${
                                activeTab === tab.id ? 'block' : 'hidden'
                            }`}
                        >
                            <div className="text-center max-w-3xl mx-auto px-4">
                                <h2 className="text-3xl mb-6">{tab.content.title}</h2>
                                <p className="mb-8 text-md">{tab.content.text}</p>
                                
                                {/* Points/Description Section */}
                                <div className="space-y-6 mb-12">
                                    {tab.content.points && (
                                        <div className="space-y-1 text-left">
                                            {tab.content.points.map((point, index) => (
                                                <p key={index} className="text-md">{`${index + 1}) ${point}`}</p>
                                            ))}
                                        </div>
                                    )}
                                    
                                    {tab.content.description && (
                                        <div className="space-y-1 text-center">
                                            {tab.content.description.map((desc, index) => (
                                                <p key={index} className="text-md">{desc}</p>
                                            ))}
                                        </div>
                                    )}
                                    
                                    {tab.content.items && (
                                        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
                                            {tab.content.items.map((item, index) => (
                                                <div key={index} className="flex items-center gap-3">
                                                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                                                    <span className="text-md">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Conclusion Section */}
                                {tab.content.conclusion && (
                                    <p className="text-md text-center max-w-3xl mx-auto pt-4">
                                        {tab.content.conclusion}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EcommerceServices;
