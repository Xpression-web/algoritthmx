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

const AmazonServices = () => {
    const [activeTab, setActiveTab] = useState('on-page');
    const [isHovered, setIsHovered] = useState(false); // Track if any tab is hovered
    const [hoveredTab, setHoveredTab] = useState(null);

    const tabs = [
        { id: 'on-page', label: 'Keyword Optimization', icon: '□', content: { title: 'Keyword Optimization for Amazon Listings', 
        text: "We dive deep into Amazon SEO optimization to find the keywords your customers are searching for. Then, we optimize your product titles, bullet points, descriptions, and backend search terms to ensure your listings rank higher and attract more clicks.\nBetter visibility = more traffic = more sales.",
        
        }},

        { id: 'off-page', label: ' Product Listing  ', icon: '◇', content: { title: 'Product Listing Optimization', 
            text: "A great listing doesn’t just rank—it converts. We enhance your product pages with engaging descriptions, top-quality images, and standout features that speak directly to your audience. Well-optimized listings drive more clicks and convert browsers into buyers.", 
        
        }},

        { id: 'technical', label: 'Amazon Sponsored  ', icon: '◈', content: { title: 'Amazon Sponsored Products',
            text: 'Want to increase visibility fast? We set up and manage Amazon Sponsored Products ad campaigns to put your listings in front of the right shoppers. We carefully target relevant keywords and products to maximize ROI and sales.',
        
        }},

        { id: 'report', label: 'Reviews' , icon: '▢', content: { title: 'Product Reviews Management', 
        text: 'Good reviews build trust and credibility. We help you manage reviews, encourage positive feedback, and handle any negative responses professionally. The result? Better rankings and more sales.',
            
        }},
        { id: 'implementation', label: 'Inventory ', icon: '▣', content: { title: 'Inventory Management', 
            text: "Keep your products available. We monitor inventory levels to prevent stockouts and ensure you maintain consistent sales. By analyzing sales trends and competitor activity, we optimize inventory to maximize your growth.", 
            
        }},
        { id: 'testing', label: ' A+ Content ', icon: '▣', content: { title: 'Amazon A+ Content', 
            text: 'tand out with Amazon A+ Content. We design rich product pages that captivate customers, showcase your brand, and boost engagement—driving more conversions.', 
            
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

export default AmazonServices;
