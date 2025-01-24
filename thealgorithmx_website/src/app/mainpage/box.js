import React from 'react';

const ServiceCard = ({ title, description }) => (
  <div className="relative flex-1  bg-black rounded-lg min-w-[250px] overflow-visible">
    
    {/* Border container */}
    <div className="absolute inset-0 border border-blue-600   rounded-md opacity-50 shadow-[0_0_2px_2px_rgba(0,0,255,1)]"></div>
    {/* Title positioned on the border */}
    <div className="absolute -top-3 left-0 w-full flex justify-center">
      <span className="bg-black px-4 text-white  rounded-md whitespace-nowrap">
        {title}
      </span>
    </div>
    {/* Content */}
    <div className="relative flex flex-col items-center text-center px-[50px] py-[50px] space-y-4 z-10">
      <p className="text-gray-300   text-2xl">{description}</p>
    </div>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      title: 'Branding',
      description: 'Crafting unique brand identities that resonate and inspire audiences.'
    },
    {
      title: 'Graphics',
      description: 'Designing visually stunning graphics that captivate and engage viewers.'
    },
    {
      title: 'Video',
      description: "Producing compelling videos that depict your brand's story successfully."
    }
  ];

  return (
    <div className="min-h-screen content-center bg-black p-6">
      <div className="max-w-[1200px] mx-auto space-y-8 ">
        {/* Top row services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* Content section */}
        <div className="relative p-6 bg-black rounded-lg overflow-visible shadow-[0_0_2px_2px_rgba(0,0,255,0.7)]">
          <div className="absolute inset-0 border border-blue-600 opacity-50"></div>
          <div className="absolute -top-3 left-0 w-full flex justify-center">
            <span className="bg-black px-4 text-white   rounded-md whitespace-nowrap">
              Content
            </span>
          </div>
          <div className="relative flex flex-col items-center text-center px-[50px] py-[50px] space-y-4 z-10">
            <p className="text-gray-300 mt-4">
              Offering a range of content services from content creation to writing and marketing.
              Creating top-notch content designed to attract your target audience
              and fuel business expansion resulting in increased interaction
              and enhanced brand visibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;