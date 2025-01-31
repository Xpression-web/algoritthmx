import React from 'react';
import styles from '../social-media-audit/style.module.css'
import { Montserrat } from 'next/font/google'

const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"600",
})

const EssentialSection = () => {
return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="container max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

         {/* Left Section - Image */}
         <div className="w-full lg:w-1/2">
            <img
            src="images/Influencer-Marketing-Strategies-and-Enhancements-570x388.webp"
            alt="Google Penguin Penalty Recovery"
            className="w-full h-auto"
            />
        </div>

        {/* Right Section - Content */}
        <div className="w-full lg:w-1/2 ">
            <h1 className={`text-[35px] leading-[1.08] ${monsterfont1.className} mb-[30px]`}>
            Influencer Marketing Strategies and Enhancements
            </h1>
            <h1 className='text-[24px] font-[Helvetica] leading-[1.1]'>What We Do</h1>
            <p className={`${styles["what-description"]} text-semi-white mt-[10px]`}>
            Influencer Marketing Strategies: Embrace micro-influencers to celebrities
            </p>
            <p className={`${styles["what-description"]} text-semi-white mt-[10px]`}>
            Ambassador Initiatives: Migrate from manual management to technology-driven systems
            </p>
            <p className={`${styles["what-description"]} text-semi-white mt-[10px]`}>
            Influencer Content Creation: Utilize social media content produced by creators
            </p>
            <p className={`${styles["what-description"]} text-semi-white mt-[10px]`}>
            Influencer Performance Marketing: Leverage Ad content created by creators
            </p>
            <h1 className='text-[24px] font-[Helvetica] leading-[1.1] mt-[30px]'>Campaign Accelerators</h1>
            <p className={`${styles["what-description"]} text-semi-white mt-[2px]`}>
            Integrated Paid Media & Amplification
            </p>
            <p className={`${styles["what-description"]} text-semi-white mt-[2px]`}>
            Influencer and Experiential Event Fusion
            </p>
            <p className={`${styles["what-description"]} text-semi-white mt-[2px]`}>
            Influencer and Brand Social Collaboration
            </p>
            <p className={`${styles["what-description"]} text-semi-white mt-[2px]`}>
            Creative Recycling and Comprehensive Marketing Fusion
            </p>
            


        </div>

        </div>
    </div>
    </div>
);
};

export default EssentialSection;
