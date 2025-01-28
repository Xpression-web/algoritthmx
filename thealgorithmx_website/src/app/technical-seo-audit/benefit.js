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

    const TechnicalBenefits = () => {
    const benefits = [
        {
        imageSrc: '/images/boost-Search-Engine.webp',
        title: 'Boost Search Engine Understanding',
        description:
            "We’ll identify the technical roadblocks that are holding back your rankings. No more guessing—just clear solutions. Our technical SEO consultant ensures your website is crystal clear to search engines, helping improve indexation and boosting your organic traffic. We audit your site and analyze your competitors. Discover what they’re missing and use it to your advantage!",
        },
        {
        imageSrc: '/images/Thorough-and-Comprehensive-Audits.webp',
        title: 'Thorough and Comprehensive Audits',
        description:
            'As your technical SEO agency, we benchmark your site against industry best practices. We ensure every link in the chain is optimized for success. From third-party backlinks to server configurations, we ensure all external factors are aligned with your technical SEO strategy.',
        },
        {
        imageSrc: '/images/Tailored-Fixes-&-Expert-Guidance.webp',
        title: 'Tailored Fixes & Expert Guidance',
        description:
            'Our full-service team of technical SEO specialists will either guide your team or step in to resolve any issues that arise.',
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center ">
        <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                BENEFITS
                <span className="block text-3xl sm:text-4xl">OF TECHNICAL SEO AUDITS</span>
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

    export default TechnicalBenefits;
