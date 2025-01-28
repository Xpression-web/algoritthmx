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

    const GlobalSEOBenefits = () => {
    const benefits = [
        {
        imageSrc: '/images/Expand-Your-Market-Reach.webp',
        title: 'Expand Your Market Reach',
        description:
            'Tap into new markets and unlock massive potential. With our global SEO strategies, you can connect with customers in multiple countries, growing your audience and your business beyond borders. For instance, you don’t need an international SEO company in USA to optimize results for American audiences. Our international SEO consultants will help you reach your audience effectively.',
        },
        {
        imageSrc: '/images/Boost-Organic-Traffic-&-Conversions.webp',
        title: 'Boost Organic Traffic & Conversions',
        description:
            "We optimize your site for international search results, driving relevant traffic that converts. More visibility = more clicks = more sales, all tailored to the unique needs of global users. When your business ranks well on search engines worldwide, it connects with users who are actively searching for your offerings—leading to more clicks, greater engagement, and higher conversion rates. We don’t just focus on getting traffic; we ensure it's the right traffic that brings measurable results.",
        },
        {
        imageSrc: '/images/Enhance-Your-Global-Authority.webp',
        title: 'Enhance Your Global Authority',
        description:
            'Earn credibility in international markets through high-quality backlinks and well-targeted content. As your domain authority grows globally, so does your brand’s trustworthiness and influence. As you gain credibility in multiple regions, your brand’s presence becomes stronger, influencing both search engine rankings and user trust. This foundation in authority not only boosts your site’s visibility but also positions your brand as a trusted leader, giving you a competitive edge in international markets. The result is a robust online reputation that reinforces user confidence and drives sustained growth globally.',
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

    export default GlobalSEOBenefits;
