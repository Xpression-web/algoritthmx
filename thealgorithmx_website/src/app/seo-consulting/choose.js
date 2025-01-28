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

    const ConsultingBenefits = () => {
    const benefits = [
        {
        imageSrc: '/images/Focus-on-What Matters.webp',
        title: 'Focus on What Matters Most',
        description:
            'Leave the complexities of SEO to us, so you can focus on running your business. Our organic SEO consultants stay on top of all Google algorithm changes, continuously refining your strategy for maximum performance.',
        },
        {
        imageSrc: '/images/Search-Rankings.webp',
        title: 'Boost Your Search Rankings',
        description:
            'Search engines are where your customers go for answers. Our strategies aim to increase your site’s visibility across Google, Yahoo!, Bing, and more by aligning with the latest search behaviors and trends. For businesses in California, our expert SEO consulting in California team provides insights into local market trends and competition.',
        },
        {
        imageSrc: '/images/Maximize-Your-ROI.webp',
        title: 'Maximize Your ROI',
        description:
            'If your current SEO efforts aren’t delivering the results you need, our consultants are here to turn things around. By focusing on the metrics that matter most, we ensure your investment is both measurable and meaningful.',
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

    export default ConsultingBenefits;
