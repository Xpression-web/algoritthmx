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

    const IntelligentBenefits = () => {
    const benefits = [
        {
        imageSrc: '/images/Focus-on-What Matters.webp',
        title: 'Proven Expertise & Results-Driven Approach',
        description:
            'Our team of automation specialists brings years of experience in executing successful digital transformation strategies across various industries. We focus on delivering tangible, measurable results, ensuring that your investment in AI-powered Process Automation leads to meaningful business growth and a strong return on investment.',
        },
        {
        imageSrc: '/images/Search-Rankings.webp',
        title: 'Seamless Integration & Enhanced User Experience',
        description:
            'Our AI-driven Intelligent Workflow Automation solutions integrate smoothly with your existing infrastructure, minimizing disruption and ensuring a seamless transition. We prioritize user adoption by designing intuitive interfaces and empowering your teams to fully leverage the benefits of automation with ease.',
        },
        {
        imageSrc: '/images/Maximize-Your-ROI.webp',
        title: 'Transparency & Ongoing Support',
        description:
            'At AlogorithmX, we value transparent communication and long-term collaboration. Our commitment extends beyond implementation, offering continuous support to ensure your AI automation tools continue to deliver optimal performance. We work alongside you to maximize the value of your investment and drive sustained success.',
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

    export default IntelligentBenefits;
