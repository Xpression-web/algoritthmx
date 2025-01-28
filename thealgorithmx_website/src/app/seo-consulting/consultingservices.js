'use client';
import { useState } from 'react';

const ConsultingServices = () => {
    const [activeTab, setActiveTab] = useState('on-page');
    const [isHovered, setIsHovered] = useState(false); // Track if any tab is hovered

    const tabs = [
        { id: 'on-page', label: 'SEO Audit', icon: '□', content: { title: 'SEO Audit', text: 'Our customized SEO audit pinpoints areas for improvement, enabling impactful changes across your site. This comprehensive analysis covers:',
            items: ['Industry dynamics', 'Target market insights', 'Business-specific goals','On-page SEO factors','Off-page SEO elements','Technical SEO optimizations']
        }},

        { id: 'off-page', label: 'Competitor', icon: '◇', content: { title: 'Competitor Analysis', text: "Gain an edge with insights into your competitors’ strategies. Our in-depth competitor analysis reveals:", 
        items: ['SEO strategies they employ', 'Rabking positions', 'Key optimization techniques'] 
        }},

        { id: 'technical', label: 'Website usability', icon: '◈', content: { title: 'Website usability analysis', text: 'Improve your site’s critical metrics and user experience through our usability analysis. We evaluate:',
        items: ['Bounce rate', 'Time on page', 'Conversion rate']
        }},

        { id: 'report', label: '360° SEO', icon: '▢', content: { title: '360° SEO optimizations', text: 'Our organic SEO consulting services in USA combine technical insight with strategic planning. Our technical SEO consultants offer a full suite of services to cover every SEO need:', 
            items: ['On-page SEO enhancements', 'Off-page SEO tactics', 'Technical SEO improvements'] 
        }},
        { id: 'implementation', label: ' Recommendations', icon: '▣', content: { title: 'Actionable recommendations', text: 'Our SEO management consulting provides hands-on, actionable advice for any stage of your project. Whether you’re redesigning your site, merging websites, launching a fresh SEO strategy, or responding to Google’s latest algorithm updates, AlgorithmX delivers practical solutions to address your specific challenges. Our expert guidance supports projects including:', 
            items: ['Website  redesign', 'Website merger', 'New SEO strategy','Google algorithm updates & Penalty Recovery']
        }},
        
    ];

    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-6xl text-center mb-4">Expert SEO Services</h1>
                <h1 className="text-4xl md:text-6xl text-center mb-4">that Drive Results</h1>

                {/* Tabs Container - Mobile scrollable, Desktop grid */}
                <div className="w-full overflow-x-auto pb-4 p-2 mb-8">
                    <div
                        className="flex md:grid md:grid-cols-5 min-w-max md:min-w-0 max-w-4xl mx-auto bg-black/50 rounded-lg border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
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
                {/* Content Section */}
<div className="w-full overflow-x-hidden">
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
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
            </div>
        </div>
    );
};

export default ConsultingServices;
