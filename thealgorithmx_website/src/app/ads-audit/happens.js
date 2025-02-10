import React from 'react';

const PPCAudit = () => {
    const auditItems = [
        { title: "Account Structure", imgSrc: "images/Account-Structure.png" },
        { title: "Keywords & Negative Keywords", imgSrc: "images/Keywords-&-Negative-Keywords.png" },
        { title: "Bidding Strategy", imgSrc: "images/Bidding-Strategy.png" },
        { title: "Location Targeting", imgSrc: "images/Location-Targeting.png" },
        { title: "Ad Copy & Assets", imgSrc: "images/Ad-Copy-&-Assets.png" },
        { title: "Conversions & Attribution", imgSrc: "images/Conversions-&-Attribution.png" }
      ];

  return (
    <div className="text-white p-6 bg-black">
      {/* Top Section - Original Layout */}
      <div className="max-w-[1000px] mx-auto mb-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content - 1/3 Image */}
          <div className="lg:w-1/3">
            <img 
              src="/api/placeholder/400/300"
              alt="PPC Strategy Visualization"
              className="w-full h-auto rounded-lg"
            />
          </div>
          
          {/* Right Content - 2/3 Text */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">OUR PPC STRATEGY APPROACH</h2>
            <p className="text-gray-300 text-lg mt-4">
              We don't just manage campaigns; we optimize them continuously. Our team uses advanced analytics, 
              machine learning algorithms, and industry best practices to ensure your PPC campaigns are always 
              performing at their peak, delivering the highest possible return on investment.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1000px] mx-auto mb-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content - 2/3 */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">WHAT HAPPENS AFTER?</h2>
            <p className="text-gray-300 text-lg">
              We provide you with a visualised report of our findings. We organise the data so it becomes easy to 
              understand and highlights the key action points. One of our experts will then guide you through 
              your audit in a consultation arranged at your convenience. We will then work with you to plan out 
              the next steps in your PPC strategy and help you determine your revised PPC goals.
            </p>
          </div>
          
          {/* Right Content - 1/3 */}
          <div className="lg:w-1/3">
            <img 
              src="/api/placeholder/400/300"
              alt="PPC Audit Visualization"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>

      

      {/* Bottom Section */}
      <div className="max-w-[1000px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Icons */}
          <div className="lg:w-1/2 ml-[50px]">
            <div className="grid gap-6">
            {auditItems.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <img 
                    src={item.imgSrc}
                    alt={`${item.title} icon`}
                    className="w-10 h-10"
                  />
                  <span className="text-lg font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Box */}
          <div className="lg:w-1/2">
            <div className="border border-red-600 rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-4 text-center">PPC AUDIT</h3>
              <p className="text-xl mb-4 text-center">that gives you a roadmap to success.</p>
              <p className="text-gray-300">
                Responding effectively to a PPC audit is essential. We develop a strategic roadmap based on our findings, 
                analyzing performance metrics, identifying improvement areas, and creating tailored strategies. 
                By addressing key issues and leveraging opportunities, we help you achieve maximum ROI. With our roadmap, 
                you can confidently navigate PPC advertising complexities and drive your campaigns toward greater success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PPCAudit;