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

    const LinkBenefits = () => {
    const benefits = [
        {
        imageSrc: '/images/Increase-brand-authority.webp',
        title: 'Increase brand authority',
        description:
            "Position your brand as an industry thought leader by publishing high-quality, original content that resonates with your audience. With AlgorithmX’s affordable link-building solutions, we go beyond simply acquiring backlinks, we help build your brand's authority and long-term SEO success.",
        },
        {
        imageSrc: '/images/Drive-More-Referral-Traffic.webp',
        title: 'Drive More Referral Traffic',
        description:
            'Boost traffic by having trusted websites publish content that links back to your site, encouraging visitors to explore your offerings.',
        },
        {
        imageSrc: '/images/SEO Strategy.webp',
        title: 'Build a Long-Term SEO Strategy',
        description:
            'A carefully planned link-building strategy not only enhances your site’s credibility but also supports its long-term reputation and trustworthiness.',
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

    export default LinkBenefits;
