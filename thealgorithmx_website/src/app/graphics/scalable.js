'use client';
import React from 'react';
import './styless.css';

const Icons = {
  Business: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
      <circle cx="12" cy="12" r="10" strokeWidth="2"/>
      <path d="M12 6v6l4 2" strokeWidth="2"/>
      <path d="M16 8a4 4 0 0 0-8 0" strokeWidth="2"/>
    </svg>
  ),
  Marketing: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2"/>
    </svg>
  ),
  Communication: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeWidth="2"/>
      <path d="M8 10h8M8 14h4" strokeWidth="2"/>
    </svg>
  ),
  Deadlines: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
      <circle cx="12" cy="12" r="10" strokeWidth="2"/>
      <path d="M12 6v6l4 2" strokeWidth="2"/>
    </svg>
  ),
  Results: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
      <path d="M4 14h4v7H4zM10 9h4v12h-4zM16 4h4v17h-4z" strokeWidth="2"/>
    </svg>
  ),
  Expectations: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12">
      <path d="M20 20v-8a8 8 0 1 0-16 0v8" strokeWidth="2"/>
      <path d="M4 19h16" strokeWidth="2"/>
      <path d="M12 12v8" strokeWidth="2"/>
    </svg>
  )
};

export default function Scalable() {
  const features = [
    {
      Icon: Icons.Business,
      title: "TOP DESIGNERS",
      description: "AlgorithmX boasts a top-tier talent team of dedicated graphic designers from across the globe renowned for their exceptional creativity and impressive designs.",
      mobileOrder: 1
    },
    {
      Icon: Icons.Deadlines,
      title: "ACCURATE PRICING",
      description: "AlgorithmX continues to offer affordable graphic design services as we are 30% cheaper than what other agencies charge or the overall cost of keeping full-time in-house personnel.",
      mobileOrder: 2
    },
    {
      Icon: Icons.Marketing,
      title: "FAST TURNAROUNDS",
      description: "We are at your disposal day and night. With our continuous graphic design services, we excel at completing tasks within 12 to 24 hours.",
      mobileOrder: 3
    },
    {
      Icon: Icons.Results,
      title: "TRAINED ON BRAND GUIDELINES",
      description: "We're available around the clock, capable of completing tasks within 12 to 24 hours.",
      mobileOrder: 4
    },
    {
      Icon: Icons.Communication,
      title: "FULLY MANAGED",
      description: "At our best graphic design company, we offer a reliable, tested, and completely managed system that adjusts to your needs as they expand.",
      mobileOrder: 5
    },
    {
      Icon: Icons.Expectations,
      title: "BUILT FOR ENTERPRISE",
      description: "As a trustworthy graphic design company, our customized graphic design services are crafted for small and big teams of enterprises that value security and privacy.",
      mobileOrder: 6
    }
  ];

  return (
    <div className="bg-black min-h-screen w-full py-16 relative overflow-hidden">
      <div className="text-center mb-16 relative overflow-hidden">
        {/* Background "SCALABLE" text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span
    className="mb-8 text-5xl sm:text-6xl md:text-8xl lg:text-8xl font-bold text-gray-600/20 transform transition-transform duration-700 hover:scale-110 select-none"
    style={{ top: '-20px' }}>
    SCALABLE
  </span>
</div>

        
        {/* Main titles */}
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl mt-12 text-white mb-2">
            HOW WE
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-white">
            STAND OUT?
          </h3>
        </div>
      </div>

      {/* Features Grid */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-6xl w-full">
          {features
            .sort((a, b) => a.mobileOrder - b.mobileOrder)
            .map((feature, index) => (
              <div
                key={feature.title}
                className={`flex-1 md:${index < 2 ? 'animate-slide-in-left1' : index > 3 ? 'animate-slide-in-right1' : ''}`}
              >
                <FeatureCard
                  Icon={feature.Icon}
                  title={feature.title}
                  description={feature.description}
                  isHighlighted={index % 2 === 0}
                  className={`md:${index % 3 === 0 ? 'col-start-1' : index % 3 === 1 ? 'col-start-2' : 'col-start-3'}`}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({ Icon, title, description, isHighlighted, className }) => (
  <div className={`p-8 rounded-lg transition-transform duration-300 hover:-translate-y-2 text-center h-full flex flex-col justify-between ${
    isHighlighted ? 'bg-black border-2 border-white' : 'bg-[#0f0f0f]'
  } ${className}`}>
    <div className="flex justify-center mb-4">
      <Icon />
    </div>
    <div>
      <h3 className="text-white text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  </div>
);