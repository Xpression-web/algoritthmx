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

    const MobileSEOBenefits = () => {
    const benefits = [
        {
        imageSrc: '/images/Improve-Google-search-rank.webp',
        title: 'Improve Google search rank',
        description:
            'Since mobile-friendliness became a ranking factor in 2015, it’s essential to have optimized mobile pages. As a mobile SEO agency, we assess and enhance your mobile presence, helping you climb the ranks on Google.',
        },
        {
        imageSrc: '/images/Generate-more-revenue-via-mobile-shopping.webp',
        title: 'Generate more revenue via mobile shopping',
        description:
            'With mobile shopping more popular than ever, customers are turning to smartphones, tablets, and laptops to browse and buy. Our mobile SEO services help capture this traffic, increasing your revenue from mobile shoppers.',
        },
        {
        imageSrc: '/images/Increase-social-share-rate.webp',
        title: 'Increase social share rate',
        description:
            'Mobile devices simplify social sharing, boosting your reach on platforms like Facebook and Instagram. Our mobile SEO experts ensure your site is fully optimized for sharing, expanding your visibility and engagement on social media.',
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

    export default MobileSEOBenefits;
