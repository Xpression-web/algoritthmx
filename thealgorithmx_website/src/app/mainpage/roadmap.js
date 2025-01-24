import React from "react";
import './style.css'; // Adjust the path as necessary


const Roadmap = () => {
  const timelineData = [
    { title: "Consultation & Research", description: "Understand the client's requirements and goals to establish timelines. Perform market research to define competitors and target audience", side: "left" },
    { title: "Strategy Development", description: "Enlist the Key Performance Indicators (KPIs) and objectives, choose the tech stack, and prepare a customized strategy.", side: "right" },
    { title: "Design Engineering", description: "Create brand elements, graphics, and videos. Produce content. Build and optimize mobile applications and websites.", side: "left" },
    { title: "Optimized Execution", description: "Implement marketing strategies, launch SEO and PPC Ad Campaigns, check performance statistics, and optimize", side: "right" },
    { title: "Analysis/Support", description: "Create performance reports based on KPIs. Consistently improve and maintain as per client objectives and market trends.", side: "left" },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white">
      
      {/* Left Section */}
    
      <div className="w-full mx-3 md:w-1/2 top-0 md:sticky content-center flex flex-col justify-center px-4 lg:px-10">
        <h1 className="text-2xl lg:text-4xl font-bold m-2">
          Accelerate Your Digital Evolution!
        </h1>
        <p className="mt-4 mx-3 text-lg leading-relaxed">
          We’re a premier end-to-end digital agency committed to revolutionizing businesses with advanced digital
          solutions and data-driven strategies to deliver exceptional growth and success. We transform your Vision
          into a known Brand, your Concept into a tangible Product, and your Product into a Market Leader. Our
          skilled professionals are dedicated to creating custom solutions to help your brand make a unique impression.
          Experience the AlgorithmX difference with our client-centric approach!
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 relative px-4 lg:px-10 py-10 md:h-screen overflow-y-auto your-scrollable-div">
        <div className="relative mt-16 mb-8">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-500 top-0 bottom-0 md:top-2 md:bottom-2 sm:top-0 sm:bottom-0 md:h-full sm:h-full sm:min-h-[200px]"></div>

          {/* Timeline Items */}
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center w-full mb-8 ${item.side === "left" ? "md:justify-end" : "md:justify-start"} flex-col md:flex-row`}
            >
              {/* Circle Above Title */}
              <div
                className="absolute bg-white border-4 border-red-500 rounded-full shadow-[0_0_2px_2px_rgba(255,0,0,0.7)] circle-style"
              ></div>

              {/* Text Content */}
              <div
                className={`w-full md:w-1/2 ${item.side === "left" ? "md:text-left md:pl-5" : "md:text-right md:pr-5"} text-center`}
              >
                <h3 className="text-sm sm:text-lg font-semibold border-2 p-1 border-red-500 inline-block rounded-lg shadow-[0_0_2px_2px_rgba(255,0,0,0.7)]">
                  {item.title}
                </h3>
                <p className={`mt-4 text-xs sm:text-sm ${item.side === "left" ? "md:text-left" : "md:text-right"} rounded-lg p-2 bg-gray-500 md:bg-transparent border md:border-none rounded-lg md:rounded-none`}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
