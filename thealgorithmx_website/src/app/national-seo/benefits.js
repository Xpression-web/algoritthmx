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

    const NationalSEOBenefits = () => {
    const benefits = [
        {
        imageSrc: '/images/Climb-to-the-Top-of-Google.webp',
        title: 'Climb to the Top of Google',
        description:
            'Consumers typically click on the top five search results, and with our top-rated National SEO services, your business will land among them. We’ll make sure your website ranks high, drives organic traffic, and gains maximum visibility.',
        },
        {
        imageSrc: '/images/Reach-Customers-Nationwide.webp',
        title: 'Reach Customers Nationwide',
        description:
            'Want to take your business nationwide? Our strategic keyword targeting will help you connect with customers no matter where they are.',
        },
        {
        imageSrc: '/images/National-SEO-Experts.webp',
        title: 'Work with Dedicated National SEO Experts',
        description:
            'Our team of National SEO specialists offers a full-service solution to ensure your business stays ahead of the competition. Our National SEO strategies are designed to maximize your ROI. By driving the right customers to your site, we ensure your business grows steadily and sustainably.',
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center ">
        <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                BENEFITS
                <span className="block text-3xl sm:text-4xl">OF NATIONAL SEO</span>
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

    export default NationalSEOBenefits;
