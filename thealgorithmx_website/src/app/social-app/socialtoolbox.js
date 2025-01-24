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


const SocialTechnologyToolbox = () => {
const tools = [
    { id: 'ae', name: 'Adobe Spark', image: 'images/Ahrefs.png' },
    { id: 'sem', name: 'Agora pulse', image: 'images/SEMrush.png'},
    { id: 'big', name: 'Buffer', image: 'images/SEMrush.png'},
    { id: 'figma', name: 'BuzzSumo', image: 'images/Google-Analytics.png' },
    { id: 'clearscope', name: 'Crello', image: 'images/Google-Analytics.png' },
    { id: 'deepcrawl', name: 'Followerwonk', image: 'images/Google-Analytics.png' },
    { id: 'data', name: 'Hootsuite', image: 'images/Google-Analytics.png' },
    { id: 'goo', name: 'Klear', image: 'images/Google-Analytics.png' },
    { id: 'sear', name: 'SocialBee', image: 'images/Google-Analytics.png' },
    { id: 'gt', name: 'Sprout-Social', image: 'images/Google-Analytics.png' },
    { id: 'hot', name: 'Trendsmap', image: 'images/Google-Analytics.png' },
    { id: 'ps', name: 'Upfluence', image: 'images/Adobe-Font.png' },
    { id: 'ai', name: 'Zendesk', image: 'images/creative-cloud.png' },
];

return (
    <div className="bg-black text-white py-8 px-2 sm:py-16 sm:px-4">
    <div className="max-w-[1200px] mx-auto">
        <h1 className={` ${styles["toolbox-title"]} text-center  ${monsterfont.className} mb-3 sm:mb-4`}>
        TECHNOLOGY TOOLBOX
        </h1>
        
        <div className="w-12 h-1 bg-blue-500 mx-auto mb-4 sm:mb-8"></div>
        
        <p className={`text-semi-white text-center ${styles["toolbox-description"]}  ${monsterfont.className} mb-8 sm:mb-16 max-w-5xl mx-auto px-2`}>
        Advanced tools for enhancing social media engagement, audience growth, and brand presence.
        </p>
        <div className={`container justify-center justify-items-center pl-8 md:pl-0 ${styles["margin1"]}`}>
        <div className="grid grid-cols-4 gap-1 ">
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

export default SocialTechnologyToolbox;