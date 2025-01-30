import React from 'react';

const ContentMarketingSection = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 lg:p-16 flex items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 text-center md:text-left">
        {/* Left Column */}
        <div className="space-y-6 flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-bold leading-tight">
            Win customers for life as the go-to brand in your category.
          </h2>
          
          <p className="text-gray-400 text-lg">
            Many brands make consumers feel like a walking wallet surrounded by incessant ads.
          </p>
          
          <p className="text-gray-400 text-lg">
            Show them you care about their problems by solving them with quality content that informs, connects and entertains.
          </p>
          
          <p className="text-gray-400 text-lg">
            Power Digital develops content marketing strategies that intertwine search engine optimization, social media, email marketing, PR, and CRO and social media marketing strategies to create undeniable value for your target audience and increase your brand awareness.
          </p>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-bold leading-tight">
            When customers fall in love with your written content, you will:
          </h2>
          
          <div className="space-y-8 mt-8">
            <div className="space-y-2">
              <p className="text-gray-400 text-lg">
                Strengthen your entire customer experience from acquisition to nurture
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-gray-400 text-lg">
                Become an industry authority
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-gray-400 text-lg">
                Boost organic visits and revenue
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentMarketingSection;
