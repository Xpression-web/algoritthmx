    import React from 'react';

    const ConsultingStrategy = () => {
    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8  flex items-center justify-center">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8">
            {/* Left Section with Images */}
            <div className="md:w-1/2 flex flex-col gap-4">
            {/* Top Row with Two Images */}
            <div className="flex gap-4">
                {/* First Image */}
                <div className="w-1/2">
                <img
                    src="images/consulting1.webp"
                    alt="SEO Team Meeting"
                    className="rounded-lg w-full h-[224px] object-cover"
                />
                </div>
                
                {/* Second Image */}
                <div className="w-1/2">
                <img
                    src="images/consulting2.webp"
                    alt="SEO Strategy Diagram"
                    className="rounded-lg w-full h-[202px] object-cover mt-3"
                />
                </div>
            </div>
            
            {/* Bottom Image - Full Width */}
             
            <div className="w-full flex justify-center items-center">
            <img
        src="images/consulting3.webp"
        alt="SEO Analytics"
        className="rounded-lg w-full h-[251px] object-cover"
    />
</div>
            </div>

            {/* Right Section with Content */}
            <div className="md:w-1/2 flex flex-col justify-center">
            <div className="text-pink-500 mb-2">KEY POINT</div>
            <h1 className="text-2xl md:text-3xl font-bold mb-6">
            Seize every opportunity with our extensive SEO consulting services.
            </h1>
            <p className="text-gray-400 mb-8">
            Whether you're seeking an enterprise SEO consultant or small business SEO consultant,
            our team delivers tailored strategies that align with your goals. As a top SEO consulting
            company in USA, we provide both local and international SEO consultant services. Our SEO
            solutions cover all aspects, including:
            </p>

            {/* SEO Services Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center  ">
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M21 3L3 21l18-18z" />
                </svg>
                <span className="text-gray-400">Improving Rankings: Achieve top search engine positions with proven strategies.</span>
                </div>
                <div className="flex items-center  ">
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M21 3L3 21l18-18z" />
                </svg>
                <span className="text-gray-400">Optimizing Site Health: Fix errors and apply SEO best practices for greater visibility.</span>
                </div>
                <div className="flex items-center  ">
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M21 3L3 21l18-18z" />
                </svg>
                <span className="text-gray-400">Driving Growth: Attract more customers and increase profitability.</span>
                </div>
                <div className="flex items-center  ">
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M21 3L3 21l18-18z" />
                </svg>
                <span className="text-gray-400">Strategic Insights: Stay ahead of trends and adapt to market shifts.</span>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default ConsultingStrategy;