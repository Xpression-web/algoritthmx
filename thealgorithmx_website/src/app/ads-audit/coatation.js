import React from 'react';

const TestimonialSection = () => {
  return (
    <div className="relative min-h-screen bg-black px-4 py-16 flex flex-col items-center justify-center">
      {/* Large Quote Mark */}
      <div className="absolute top-10  text-gray-800 text-[120px] md:text-[150px] font-serif">
        &rdquo;
      </div>

      {/* Quote Content */}
      <div className="max-w-3xl mx-auto z-10 mt-[80px]">
        <blockquote className="text-white text-xl md:text-3xl font-light leading-relaxed italic text-center">
          Whether you've invested your spend in Google, Bing or another search engine, we leave no stone unturned in our fight to produce the best PPC results to get you noticed. We make you more money. We make you famous by combining research, analysis and audience personas to ensure you get a bespoke plan that actually works.
        </blockquote>
      </div>
      <div className="mt-6">
          <button className="text-white uppercase tracking-wider text-sm font-medium hover:text-gray-300 transition-colors">
            Talk to us
          </button>
        </div>

      {/* Profile Section */}
      <div className="mt-[100px] flex flex-col items-center">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <img 
            src="/images/pexels-photo-262391.jpeg"
            alt="Profile" 
            className="w-full h-full object-cover border-[2px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;