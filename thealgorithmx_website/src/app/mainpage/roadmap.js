'use client'
import React from 'react';
import './style.css'
import { Montserrat } from "next/font/google";

const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

const Roadmap = () => {
  const timelineData = [
    {
      title: "Consultation & Research",
      description: "Understand the client's requirements and goals to establish timelines. Perform market research to define competitors and target audience.",
      color: "box-style-red",
      borderColor: "rgb(239, 68, 68)", // red-500
      direction: "right"
    },
    {
      title: "Strategy Development",
      description: "Enlist the Key Performance Indicators (KPIs) and objectives, choose the tech stack, and prepare a customized strategy.",
      color: "box-style-yellow",
      borderColor: "rgb(234, 179, 8)", // yellow-500
      boxShadow: "shadow-[0_0_2px_2px_rgba(255,255,0,0.7)]",
      direction: "left"
    },
    {
      title: "Design Engineering",
      description: "Create brand elements, graphics, and videos. Produce content. Build and optimize mobile applications and websites.",
      color: "box-style-green",
      borderColor: "rgb(34, 197, 94)", // green-500
      boxShadow: "shadow-[0_0_2px_2px_rgba(0,255,0,0.7)]",
      direction: "right"
    },
    {
      title: "Optimized Execution",
      description: "Implement marketing strategies, launch SEO and PPC Ad Campaigns, check performance statistics, and optimize.",
      color: "box-style-blue",
      borderColor: "rgb(59, 130, 246)", // blue-500
      boxShadow: "shadow-[0_0_2px_2px_rgba(0,0,255,0.7)]",
      direction: "left"
    },
    {
      title: "Analysis/Support",
      description: "Create performance reports based on KPIs. Consistently improve and maintain as per client objectives and market trends.",
      color: "box-style-purple",
      borderColor: "rgb(185, 30, 170)", // purple-500
      boxShadow: "shadow-[0_0_2px_2px_rgba(255,0,255,0.7)]",
      direction: "right"
    }
  ];

  return (
    <div className="relative bg-black text-white">
      <div className="flex flex-col lg:flex-row max-w-6xl mx-auto lg:h-[800px]">
        {/* Left Section */}
        <div className="w-full lg:w-5/12">
          <div className="p-8 lg:sticky lg:top-0">
            <h1 className={`text-[50px] leading-[1.1]  ${monsterfont1.className} bg-black  text-white md:text-start text-center `}>
              Accelerate <br/> Your Digital Evolution!
            </h1>
            <p className={`text-[17px] leading-[26px]  font-[Helvetica] font-[400] text-white mt-[48px] md:text-start text-center`}>
              We're a premier end-to-end digital agency committed to revolutionizing businesses with advanced digital 
              solutions and data-driven strategies to deliver exceptional growth and success. We transform your Vision 
              into a known Brand, your Concept into a tangible Product, and your Product into a Market Leader. Our 
              skilled professionals, including designers, developers, and marketers, are dedicated to grasping your 
              requirements and creating custom solutions to help your brand make a unique impression. Experience the 
              AlgorithmX difference with our dedicated client-centric approach!
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-7/12 lg:h-[800px] lg:overflow-y-auto scrollbar-hide">
          <div className="p-8">
            {/* Timeline container */}
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-600" 
                   style={{
                     top: '-40px',
                     height: 'calc(100% + 40px)'
                   }} />

              {/* Timeline Items */}
              {timelineData.map((item, index) => (
                <div key={index} className="relative mb-4">
                  {/* Timeline Dot */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white ${item.color} ${item.boxShadow} -top-6 md:-top-0`} />

                  {/* Content Box */}
                  <div className={`flex flex-col items-center lg:items-start text-center mt-8 lg:mt-0
                    ${item.direction === 'right' 
                      ? 'lg:ml-[60%] lg:text-left' 
                      : 'lg:mr-[60%] lg:items-end lg:text-right self-start lg:self-end'}`}>
                    <div className={`relative inline-flex items-center gap-2 px-4 py-2 rounded ${item.color} border-2 ${item.boxShadow}`}>
                      {/* Mobile Arrow Triangle (upward) */}
                      <div className={`absolute lg:hidden w-0 h-0 bottom-full left-1/2 -translate-x-1/2 
                        border-b-[12px] border-x-[8px] border-x-transparent`}
                        style={{
                          borderBottomColor: item.borderColor
                        }} />
                      
                      {/* Desktop Arrow Triangle (left/right) */}
                      <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-0 h-0
                        ${item.direction === 'right' 
                          ? 'right-full border-r-[12px]' 
                          : 'left-full border-l-[12px]'}
                        border-y-[8px] border-y-transparent`}
                        style={{
                          borderRightColor: item.direction === 'right' ? item.borderColor : 'transparent',
                          borderLeftColor: item.direction === 'left' ? item.borderColor : 'transparent'
                        }} />
                      <h3 className={`text-[15px] leading-[1.1]  font-[Helvetica] font-[400] text-white`}>{item.title}</h3>
                    </div>
                    <p className={`text-[12.44px] leading-[1.5] font-[Helvetica] font-[400] text-white italic max-w-md mt-3 
                      lg:p-0 lg:border-0 lg:bg-transparent
                      p-4 border border-[${item.borderColor}] bg-[#0F0F0F]`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Roadmap;