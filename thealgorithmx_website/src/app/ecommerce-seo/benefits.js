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

const EcommerceSEOBenefits = () => {
  const benefits = [
    {
      imageSrc: '/images/Attract-High-Value-Shoppers.webp',
      title: 'Attract High-Value Shoppers',
      description:
        'Let’s face it—your ideal customers are out there, ready to spend. But without SEO, they might never know you exist. Our advanced eCommerce SEO services put your store in front of these high-value shoppers, so they can’t help but click “Buy Now.”',
    },
    {
      imageSrc: '/images/Maximize-Your-Online-Visibility.webp',
      title: 'Maximize Your Online Visibility',
      description:
        'There’s no glory in being buried on page 2 of Google. We’ll push you to the coveted front page, making sure your site is *easily* found. Ranking Keywords won’t just get you noticed—they’ll get you conversions.',
    },
    {
      imageSrc: '/images/SEO-is-Cost-Effective-Marketing.webp',
      title: 'SEO is Cost-Effective Marketing',
      description:
        'Traditional marketing is expensive, but with affordable eCommerce SEO, we get you long-term, sustainable results without the hefty price tag. Focus on ranking for the search terms your customers are already using, and watch your ROI soar. SEO close rates are almost 15%, compared to the measly 1.7% of traditional marketing. That means more sales, more conversions, and more revenue for your business over time.',
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

export default EcommerceSEOBenefits;
