    import React from 'react';
    import { Montserrat } from 'next/font/google';
    
    
    const monsterfont = Montserrat({
      subsets: ['latin'],
      weight: '700',
      fallback: ['sans-serif'],
    });
    const monsterfont1 = Montserrat({
      subsets: ['latin'],
      weight: '100',
      fallback: ['sans-serif'],
    });
    const monsterfont2 = Montserrat({
      subsets: ['latin'],
      weight: '400',
      fallback: ["sans-serif"],
    });


    const BenefitsCard = ({ title, description, imageSrc }) => (
    <div className="bg-black/5 backdrop-blur-sm p-6 rounded-lg flex flex-col items-start text-start transition-transform">
        <div className="mb-4 bg-black/10 p-4 rounded-full">
        <img
            src={imageSrc}
            alt={title}
            className="w-[339px] h-[236px] object-cover rounded-md"
        />
        </div>
        <h3 className={`text-[22px] leading-[1.1] ${monsterfont2.className} mt-[10px] mb-[10px]`}>{title}</h3>
        <p className={`text-[13px] leading-[2] font-helveticaneue text-semi-white`}>{description}</p>
    </div>
    );

    const BigDataBenefits = () => {
    const benefits = [
        {
        imageSrc: '/images/Focus-on-What Matters.webp',
        title: 'Data-Driven Decision-Making',
        description:
            'We excel at harnessing AI and Big Data to uncover hidden patterns in customer behavior, market trends, and operational performance. By transforming complex datasets into clear, actionable insights, we enable you to make smarter, data-driven decisions that optimize operations and fuel strategic growth.',
        },
        {
        imageSrc: '/images/Search-Rankings.webp',
        title: 'Competitive Advantage',
        description:
            'Stay ahead of the curve with our cutting-edge data expertise. By leveraging the latest AI-powered tools and Big Data analytics solutions, we extract key insights from large, complex datasets, giving you a distinct competitive edge. This empowers you to make proactive decisions that drive growth and position your business as a leader in your industry.',
        },
        {
        imageSrc: '/images/Maximize-Your-ROI.webp',
        title: 'Enhanced Efficiency​',
        description:
            'Maximize efficiency and streamline operations with our data-driven approach. Using AI and Big Data, we identify areas for automation, eliminate redundancies, and optimize workflows. By reallocating resources effectively, we help you achieve higher productivity levels, ultimately boosting your bottom line.',
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center ">
        <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-4 relative pt-20 pb-8 w-full">
        {/* Background text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-[46px] md:text-[100px] leading-[1.1] ${monsterfont.className} text-gray-600/20 select-none`}>
            WHY CHOOSE 
          </span>
        </div>

        {/* Main titles */}
        <div className="relative z-10 mt-8">
          <h2 className={`text-[40px] leading-[48px] ${monsterfont2.className}  text-white `}>
            OUR INTELLIGENT
          </h2>
          <h3 className={`text-[40px] leading-[48px] ${monsterfont1.className}  text-white `}>
            AUTOMATION SERVICES
          </h3>
        </div>
      </div>
            <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {benefits.map((benefit, index) => (
                <div
                    key={index}
                    className={`${
                        index === 1 || index === 2 ? 'md:border-l border-gray-700' : ''
                    }`}
                >
                    <BenefitsCard
                    imageSrc={benefit.imageSrc}
                    title={benefit.title}
                    description={benefit.description}
                    />
                </div>
                ))}
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default BigDataBenefits;
