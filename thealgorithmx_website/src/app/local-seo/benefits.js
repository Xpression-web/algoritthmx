import React from 'react';

const BenefitsCard = ({ title, description, imageSrc }) => (
  <div className="bg-black/5 backdrop-blur-sm p-6 rounded-lg flex flex-col items-start text-start transition-transform">
    <div className="mb-4 bg-black/10 p-4 rounded-full">
      <img
        src={imageSrc}
        alt={title}
        className="w-[339px] h-[236px] object-cover rounded-md"
      />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const LocalSEOBenefits = () => {
  const benefits = [
    {
      imageSrc: '/images/z1.webp',
      title: 'Drive Targeted Traffic',
      description:
        'Instead of attracting random visitors, local SEO ensures you’re connecting with people who are nearby and ready to engage. By optimizing for location-based searches, you bring in customers who are actively looking for your services in the area, increasing foot traffic and leads.',
    },
    {
      imageSrc: '/images/z2.webp',
      title: 'Build Strong Community Connections',
      description:
        'Your business isn’t just a stop along the way; it’s a local favorite in the making. With a well-executed local SEO strategy, you can foster stronger relationships within your community, turning occasional customers into devoted fans who keep coming back.',
    },
    {
      imageSrc: '/images/z3.webp',
      title: 'Boost Your Online Visibility',
      description:
        'Make sure your business stands out where it counts. By establishing and maintaining accurate listings on high-traffic platforms like Google, Yelp, and TripAdvisor, you increase your chances of being found by locals, ensuring you’re top of mind when they need what you offer.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center ">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            BENEFITS
            <span className="block text-3xl sm:text-4xl">OF LOCAL SEO</span>
          </h1>
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

export default LocalSEOBenefits;
