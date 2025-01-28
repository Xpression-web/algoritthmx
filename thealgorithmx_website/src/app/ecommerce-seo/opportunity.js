    import React from 'react';

    const EcommerceStrategy = () => {
    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8 flex items-center justify-center  ">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8">
            {/* Left Section with Images */}
            <div className="md:w-1/2 flex flex-col gap-4">
            {/* Top Row with Two Images */}
            <div className="flex gap-4">
                {/* First Image */}
                <div className="w-1/2">
                <img
                    src="images/e1.webp"
                    alt="SEO Team Meeting"
                    className="rounded-lg w-full h-[224px] object-cover"
                />
                </div>
                
                {/* Second Image */}
                <div className="w-1/2">
                <img
                    src="images/e2.webp"
                    alt="SEO Strategy Diagram"
                    className="rounded-lg w-full h-[202px] object-cover mt-3"
                />
                </div>
            </div>
            
            {/* Bottom Image - Full Width */}
            <div className="w-full">
                <img
                src="images/e3.webp"
                alt="SEO Analytics"
                className="rounded-lg w-full h-[251px] object-cover"
                />
            </div>
            </div>

            {/* Right Section with Content */}
            <div className="md:w-1/2 flex flex-col justify-center">
            <div className="text-pink-500 mb-2">KEY POINT</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Seize every opportunity with eCommerce SEO
            </h1>
            <p className="text-gray-400 mb-4">
            Running a great e-commerce store but not seeing the sales you deserve? You need more than just e-commerce listings to run the show for you.
            
            </p>
            <p className="text-gray-400 mb-4">
            You need an e-commerce SEO agency that knows how to make your store stand out through e-commerce SEO services,
            attract eager customers, and turn your products into top sellers.
            </p>
            <p className="text-gray-400">
            At AlgorithmX, we go beyond the basics. Our eCommerce SEO services are built to do more than just get your site noticed.
            We make sure it’s the one your ideal customers *keep coming back to*. We don’t stop at simple optimizations—we craft a tailored strategy
            that turns your online presence into a powerful sales engine, driving real results and lasting growth.
            </p>
            </div>
        </div>
        </div>
    );
    };

    export default EcommerceStrategy;