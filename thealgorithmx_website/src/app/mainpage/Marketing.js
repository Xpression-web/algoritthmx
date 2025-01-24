import React from 'react';

const MarketingServices = () => {
  const services = [
    {
      title: "Branding",
      description: "Enhances brand recognition, boosts customer engagement, and increases conversion rates, driving effective business growth and market visibility.",
      image: "images/b1.png",
      imageOnLeft: true
    },
    {
      title: "App Development",
      description: "The company's digital presence enhances app visibility, improves user engagement, and drives downloads, supporting growth and market penetration effectively.",
      image: "images/b1.png",
      imageOnLeft: true
    },
    {
      title: "SEO & PPC",
      description: "Enhanced visibility and increased traffic through SEO and PPC led to improved conversions, contributing to significant business growth and broader market reach.",
      image: "images/b1.png",
      bgColor: "bg-blue-900",
      imageOnLeft: false
    },
    {
      title: "Content Marketing",
      description: "Engaging content built trust, increased conversions, fostering customer loyalty, driving substantial business growth and relationships.",
      image: "images/b1.png",
      imageOnLeft: false
    }
  ];

  return (
    <div className="min-h-screen bg-black px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className="relative">
              {/* Mobile Layout */}
              <div className="lg:hidden flex flex-col gap-4">
                <div className="relative w-full aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-black p-6">
                  <h2 className="text-2xl font-bold text-white mb-3">{service.title}</h2>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden lg:flex items-center justify-between relative">
                {/* Content Section */}
                <div className={`w-1/2 ${service.imageOnLeft ? 'order-2' : 'order-1'}`}>
                  <div className="bg-black p-8">
                    <h2 className="text-2xl font-bold text-white mb-4">{service.title}</h2>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </div>

                {/* Arrow Button - Between content and image */}
                <div className="absolute z-20 left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <button className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white transform transition-transform hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-6 w-6 ${service.imageOnLeft ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>

                {/* Image Section */}
                <div className={`w-1/2 ${service.imageOnLeft ? 'order-1' : 'order-2'}`}>
                  <div className={`overflow-hidden relative aspect-[4/3] ${
                    service.imageOnLeft 
                      ? 'clip-path-pentagon-left'
                      : 'clip-path-pentagon-right'
                  }`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Add these styles to your global CSS file (styles/globals.css)
const styles = `
  .clip-path-pentagon-left {
    clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%, 15% 50%);
  }
  
  .clip-path-pentagon-right {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 15% 100%, 30% 50%);
  }

  @media (max-width: 1024px) {
    .clip-path-pentagon-left,
    .clip-path-pentagon-right {
      clip-path: none;
    }
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default MarketingServices;