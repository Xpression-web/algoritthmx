'use client';
import { useState } from 'react';
import styles from '../seoaudits/style.module.css'
import { Montserrat } from "next/font/google";


const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "400",
});
const monsterfont1 = Montserrat({
    subsets: ["latin"],
    weight: "700",
});
const monsterfont2 = Montserrat({
    subsets: ["latin"],
    weight: "500",
});

const GlobalServices = () => {
    const [activeTab, setActiveTab] = useState('on-page');
    const [isHovered, setIsHovered] = useState(false); // Track if any tab is hovered
    const [hoveredTab, setHoveredTab] = useState(null);

    const tabs = [
        { id: 'on-page', label: 'Multilingual', icon: '□', content: { title: 'Multilingual SEO', 
        text: "Language barriers? Not for us. We craft keyword strategies, content translation, and optimization services to help you connect with audiences in their native language. From French to Farsi, our multilingual SEO services ensure your brand is speaking the right language.",
        
        }},

        { id: 'off-page', label: 'Geotargeting', icon: '◇', content: { title: 'Geotargeting and Localization', 
            text: "Want to hit the right note with local customers? We optimize your content for specific regions, adapting keywords, messaging, and even design to fit local tastes and preferences. Whether you're targeting Tokyo or Toronto, we make sure your business feels right at home.", 
        
        }},

        { id: 'technical', label: 'Hreflang ', icon: '◈', content: { title: 'Hreflang Implementation',
            text: 'No more confusion for search engines! We implement hreflang tags to signal to Google exactly which version of your site should be shown based on location and language. This way, users see the most relevant version of your website—wherever they’re searching from.',
        
        }},

        { id: 'report', label: 'Keyword ', icon: '▢', content: { title: 'International Keyword Research', 
        text: 'People search differently in different countries, and we get that. Our global seo services digs deep into the local search habits of each market, identifying the keywords that matter most. We optimize your content to align with how your audience searches, ensuring you’re found by the right people, wherever they are.',
            
        }},
        { id: 'implementation', label: 'Technical SEO ', icon: '▣', content: { title: 'Technical SEO for International Websites', 
            text: 'From site speed to server locations, we tackle the technical side of international SEO. As your global SEO agency, we ensure that your website performs seamlessly across borders, making it easy for both users and search engines to navigate, no matter the country.', 
            
        }},
        { id: 'testing', label: 'Global Backlink ', icon: '▣', content: { title: 'Global Baclink Building', 
            text: 'Building authority doesn’t stop at home. Through international link building, local keyword targeting, and content optimization, we help you build trust with audiences in every market. As your authority grows globally, so does your reputation and influence. We develop a global backlink strategy, helping you gain high-quality links from authoritative sites in different regions. We ensure your backlink profile is as diverse as your audience.', 
            
        }},
        
    ];

    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
            <h1 className={`text-[64px] leading-[68px] ${monsterfont.className} text-white mb-[15px] text-center`}> Services</h1>
                <div className="text-center mb-12">
                    <p className={`text-[21px] leading-[26px] ${monsterfont.className} text-semi-white mt-[30px] text-center`}>LOCATE SEO ISSUES</p>
                    <p className={`text-[21px] leading-[26px] ${monsterfont1.className} text-semi-white text-center`}>IMPACTING YOUR RANKINGS</p>
                </div>

                {/* Tabs Container - Mobile scrollable, Desktop grid */}
                <div className="w-full overflow-x-auto pb-4 p-2 mb-8">
                    <div
                        className={`flex md:grid md:grid-cols-6 min-w-max md:min-w-0 max-w-3xl mx-auto bg-black/50 ${styles["box-design"]}`}
                        onMouseEnter={() => setIsHovered(true)} // Activate hover state for any tab
                        onMouseLeave={() => {
                            setIsHovered(false);
                            setHoveredTab(null);
                        }} // Deactivate hover state
                    >
                        {tabs.map((tab) => (
                            <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            onMouseEnter={() => setHoveredTab(tab.id)}
                            onMouseLeave={() => setHoveredTab(null)}
                            className={`
                                flex flex-col items-center py-4 px-2
                                transition-all duration-300
                                ${isHovered 
                                    ? hoveredTab === tab.id
                                        ? 'bg-white/5 text-white shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                                        : 'text-[#a2a2a2] hover:bg-white/5'
                                    : activeTab === tab.id
                                        ? 'bg-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                                        : 'text-[#a2a2a2] hover:bg-white/5'
                                }
                            `}
                        >
                            <span className="text-2xl mb-2">{tab.icon}</span>
                            <span className={`text-[15.2px] leading-[26px] tracking-[0.01em] ${monsterfont2.className} text-center`}>
                                {tab.label}
                            </span>
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
            <h2 className={`text-[28px] leading-[32px] ${monsterfont.className} mb-[30px]`}>{tab.content.title}</h2>
            <p className={`text-[16px] leading-[22px] font-[Helvetica] mb-[2px] max-w-3xl mx-auto`}>{tab.content.text}</p>
            </div>
        </div>
    ))}
</div>
            </div>
        </div>
    );
};

export default GlobalServices;
