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

    const EnterpriseSEOBenefits = () => {
    const benefits = [
        {
        imageSrc: '/images/Maximize-Your-Brand-Visibility.webp',
        title: 'Maximize Your Brand’s Visibility',
        description:
            'We make sure your brand is front and center in search engine results pages (SERPs). Our goal? When your potential customers are searching, your business is the one they find first—no matter the competition.',
        },
        {
        imageSrc: '/images/DriveHigh-Quality-Organic-Traffic.webp',
        title: 'Drive High-Quality Organic Traffic',
        description:
            "We target high-intent keywords to attract visitors actively looking for what you offer. By bringing in the right traffic, our enterprise SEO services ensure more of your visitors convert into quality leads—fueling long-term business growth.",
        },
        {
        imageSrc: '/images/Outpace-Your-Competition.webp',
        title: 'Outpace Your Competition',
        description:
            'SEO isn’t optional. We update your strategy to stay ahead of algorithm changes and industry shifts. This ensures you outperform your rivals and stay at the top of your market.',
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center ">
        <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                BENEFITS
                <span className="block text-3xl sm:text-4xl">OF MOBILE SEO</span>
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

    export default EnterpriseSEOBenefits;
