import React from 'react';
import styles from "../contentcreation/style.module.css";
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
subsets: ["latin"],
weight: "100",
});
const monsterfont1 = Montserrat({
subsets: ["latin"],
weight: "300",
});


const PPCTechnologyToolbox = () => {
const tools = [
    { id: 'ae', name: 'Ahrefs', image: 'images/Ahrefs.png' },
    { id: 'sem', name: 'SEMrush', image: 'images/SEMrush.png'},
    { id: 'big', name: 'Bing Webmaster', image: 'images/SEMrush.png'},
    { id: 'figma', name: 'Google Analytics', image: 'images/Google-Analytics.png' },
    { id: 'clearscope', name: 'Clearscope', image: 'images/Google-Analytics.png' },
    { id: 'deepcrawl', name: 'DeepCrawl', image: 'images/Google-Analytics.png' },
    { id: 'data', name: 'Data Studio', image: 'images/Google-Analytics.png' },
    { id: 'goo', name: 'Google Business', image: 'images/Google-Analytics.png' },
    { id: 'sear', name: 'Search Console', image: 'images/Google-Analytics.png' },
    { id: 'gt', name: 'GTmetrix', image: 'images/Google-Analytics.png' },
    { id: 'hot', name: 'Hotjar', image: 'images/Google-Analytics.png' },
    { id: 'ps', name: 'Majestic', image: 'images/Adobe-Font.png' },
    { id: 'ai', name: 'Market Muse', image: 'images/creative-cloud.png' },
    { id: 'ar', name: 'Bing', image: 'images/Ahrefs.png' },
    { id: 'id', name: 'Moz', image: 'images/Chatgpt.png' },
    { id: 'canva', name: 'RiteTag', image: 'images/Claude.png' },
    { id: 'sch', name: 'Schema Pro', image: 'images/Google-Analytics.png' },
    { id: 'cs', name: 'Screaming Frog', image: 'images/Google-Font.png'},
    { id: 'stock', name: 'White Spark ', image: 'images/Grammerly.png' },
    { id: 'sketch', name: 'Yoast SEO', image: 'images/Hemingway-Editor.png'},
];

return (
    <div className="bg-black text-white py-8 px-2 sm:py-16 sm:px-4">
    <div className="max-w-[1200px] mx-auto">
        <h1 className={` ${styles["toolbox-title"]} text-center  ${monsterfont.className} mb-3 sm:mb-4`}>
        TECHNOLOGY TOOLBOX
        </h1>
        
        <div className="w-12 h-1 bg-blue-500 mx-auto mb-4 sm:mb-8"></div>
        
        <p className={`text-semi-white text-center ${styles["toolbox-description"]}  ${monsterfont.className} mb-8 sm:mb-16 max-w-5xl mx-auto px-2`}>
        Comprehensive SEO services toolkit to enhance online visibility, drive organic traffic, and boost search rankings.
        </p>
        <div className={`container justify-center justify-items-center ${styles["margin1"]}`}>
        <div className="grid grid-cols-4 gap-1">
            {tools.map((tool) => (
            <div
                key={tool.id}
                className={` ${styles["background"]} rounded-lg  flex items-center hover:bg-[#545252] transition duration-300`}
            >
                {/* Flex container for image and text */}
                <div className={`flex w-full items-center ${styles["toolbox"]} `}>
                {/* Image part (1/3) */}
                <div className="md:w-1/5 ">
                    <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-12 h-12  object-contain md:ml-2"
                    />
                </div>
                
                {/* Text part (2/3) */}
                <div className="md:w-4/5 ">
                <div>
                    <span className={`hidden md:block ${styles["toolbox"]} ml-1 mb-0`}>
                    {tool.name}
                    </span>
                    </div>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    </div>
    </div>
);
};

export default PPCTechnologyToolbox;