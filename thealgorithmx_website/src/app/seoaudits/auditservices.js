'use client';
import { useState } from 'react';

const AuditServices = () => {
    const [activeTab, setActiveTab] = useState('on-page');
    const [isHovered, setIsHovered] = useState(false); // Track if any tab is hovered

    const tabs = [
        { id: 'on-page', label: 'On-page', icon: '□', content: { title: 'On-Page SEO Services', text: 'The starting point of our SEO audit is a thorough on-page review. This involves pinpointing core issues that may hinder your site\'s visibility, such as:', items: ['Duplicate content', 'Keyword stuffing & Thin Content', 'Missing title tags & meta descriptions'] }},
        { id: 'off-page', label: 'Off-page', icon: '◇', content: { title: 'Off-Page SEO Services', text: "Understanding your website's reputation within your industry and among search engines is crucial. We conduct a detailed off-page analysis of your site and benchmark it against competitors. Key areas we assess include:", items: ['Backlink quality', 'Competitor link analysis', 'Brand mentions and citations'] }},
        { id: 'technical', label: 'Technical SEO', icon: '◈', content: { title: 'Technical SEO Services', text: 'We conduct a comprehensive technical analysis to ensure your site meets modern SEO standards:', items: ['Site speed optimization', 'Mobile responsiveness', 'XML sitemap structure'] }},
        { id: 'report', label: 'SEO Report', icon: '▢', content: { title: 'Detailed SEO Report', text: 'Get a comprehensive analysis of your site\'s SEO performance:', items: ['Actionable recommendations', 'Priority-based tasks', 'Performance metrics'] }},
        { id: 'implementation', label: 'Audit Implementation', icon: '▣', content: { title: 'Audit Implementation', text: 'We help you implement the recommended changes effectively:', items: ['Step-by-step guidance', 'Best practices implementation', 'Progress tracking'] }},
        { id: 'strategy', label: 'SEO Strategy', icon: '▤', content: { title: 'SEO Strategy Development', text: 'Develop a comprehensive SEO strategy based on audit findings:', items: ['Competitive analysis', 'Target keyword planning', 'Content strategy'] }},
    ];

    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-6xl text-center mb-4">Audit Services</h1>
                <div className="text-center mb-12">
                    <p className="text-gray-400">LOCATE SEO ISSUES</p>
                    <p className="text-2xl">IMPACTING YOUR RANKING</p>
                </div>

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
                <div className="w-full overflow-x-hidden">
                    {tabs.map((tab) => (
                        <div
                            key={tab.id}
                            className={`transition-all duration-300 ${
                                activeTab === tab.id ? 'block' : 'hidden'
                            }`}
                        >
                            <div className="text-center max-w-6xl mx-auto px-4">
                                <h2 className="text-3xl mb-6">{tab.content.title}</h2>
                                <p className="mb-8">{tab.content.text}</p>
                                <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-[168px]">
                                    {tab.content.items.map((item, index) => (
                                        <div key={index} className="flex items-center gap-6">
                                            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center mt-8 text-gray-400 px-4">
                    In addition to identifying these issues, we provide specific recommendations to address each one, equipping
                    you with the knowledge to optimize your site effectively.
                </p>
            </div>
        </div>
    );
};

export default AuditServices;
