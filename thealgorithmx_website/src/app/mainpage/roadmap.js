'use client'
import React from 'react';

const Roadmap = () => {
  const timelineData = [
    {
      title: "Consultation & Research",
      description: "Understand the client's requirements and goals to establish timelines. Perform market research to define competitors and target audience.",
      color: "border-red-500",
      boxShadow: "shadow-[0_0_2px_2px_rgba(255,0,0,0.7)]",
      direction: "right",
      arrowDirection: ""
    },
    {
      title: "Strategy Development",
      description: "Enlist the Key Performance Indicators (KPIs) and objectives, choose the tech stack, and prepare a customized strategy.",
      color: "border-yellow-500",
      boxShadow: "shadow-[0_0_2px_2px_rgba(255,255,0,0.7)]",
      direction: "left",
      arrowDirection: ""
    },
    {
      title: "Design Engineering",
      description: "Create brand elements, graphics, and videos. Produce content. Build and optimize mobile applications and websites.",
      color: "border-green-500",
      boxShadow: "shadow-[0_0_2px_2px_rgba(0,255,0,0.7)]",
      direction: "right",
      arrowDirection: ""
    },
    {
      title: "Optimized Execution",
      description: "Implement marketing strategies, launch SEO and PPC Ad Campaigns, check performance statistics, and optimize.",
      color: "border-blue-500",
      boxShadow: "shadow-[0_0_2px_2px_rgba(0,0,255,0.7)]",
      direction: "left",
      arrowDirection: ""
    },
    {
      title: "Analysis/Support",
      description: "Create performance reports based on KPIs. Consistently improve and maintain as per client objectives and market trends.",
      color: "border-purple-500",
      boxShadow: "shadow-[0_0_2px_2px_rgba(255,0,255,0.7)]",
      direction: "right",
      arrowDirection: ""
    }
  ];

  return (
    <div className="relative bg-black text-white">
      <div className="flex flex-col lg:flex-row max-w-6xl mx-auto lg:h-[800px]">
        {/* Left Section */}
        <div className="w-full lg:w-5/12">
          <div className="p-8 lg:sticky lg:top-0">
            <h1 className="text-5xl font-bold mb-6">
              Accelerate Your Digital Evolution!
            </h1>
            <p className="text-lg leading-relaxed">
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
            {/* Timeline container with extended top space */}
            <div className="relative">
              {/* Vertical Timeline Line with extended top */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-600" 
                   style={{
                     top: '-40px', // Extends line above
                     height: 'calc(100% + 40px)' // Adjusts total height to account for top extension
                   }} />

              {/* Timeline Items */}
              {timelineData.map((item, index) => (
                <div key={index} className="relative mb-4">
                  {/* Timeline Dot - Adjusted positioning */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-red-500 shadow-[0_0_2px_2px_rgba(255,0,0,0.7)] -top-6 md:-top-0"
                       />

                  {/* Content Box - Added top margin for mobile */}
                  <div className={`flex flex-col items-center lg:items-start text-center mt-8 lg:mt-0
                    ${item.direction === 'right' 
                      ? 'lg:ml-[60%] lg:text-left' 
                      : 'lg:mr-[60%] lg:items-end lg:text-right self-start lg:self-end'}`}>
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded ${item.color} border-2 ${item.boxShadow}
                      ${item.direction === 'right' ? 'flex-row' : 'flex-row-reverse'}`}>
                      {item.direction === 'right' && <span>{item.arrowDirection}</span>}
                      <h3 className="text-sm font-semibold">{item.title}</h3>
                      {item.direction === 'left' && <span>{item.arrowDirection}</span>}
                    </div>
                    <p className="mt-4 text-sm italic text-gray-300 max-w-md">
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