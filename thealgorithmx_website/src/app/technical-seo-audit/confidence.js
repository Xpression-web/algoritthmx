    import React from 'react';

    const TechnicalStrategy = () => {
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
                    src="images/i2.webp"
                    alt="SEO Team Meeting"
                    className="rounded-lg w-full h-[224px] object-cover"
                />
                </div>
                
                {/* Second Image */}
                <div className="w-1/2">
                <img
                    src="images/i1.webp"
                    alt="SEO Strategy Diagram"
                    className="rounded-lg w-full h-[202px] object-cover mt-3"
                />
                </div>
            </div>
            
            {/* Bottom Image - Full Width */}
            <div className="w-full flex justify-center items-center">
                <img
                src="images/i3.webp"
                alt="SEO Analytics"
                className="rounded-lg w-full h-[251px] object-cover"
                />
            </div>
            </div>

            {/* Right Section with Content */}
            <div className="md:w-1/2 flex flex-col justify-center">
            <div className="text-pink-500 mb-2">KEY POINT</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Achieve Confidence with In-Depth Technical SEO Audits
            </h1>
            <p className="text-gray-400 mb-2">
            Our team of SEO specialists employs advanced software and proprietary tools to conduct a comprehensive 
            review of your site’s technical SEO. Every detail is analyzed to ensure optimal performance. Our technical 
            SEO audits cover:
            </p>

            {/* SEO Services Grid */}
            <div className="grid grid-cols-2 gap-4 mb-2">
                <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M21 3L3 21l18-18z" />
                </svg>
                <span className="text-gray-400">Google My Business</span>
                </div>
                <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M21 3L3 21l18-18z" />
                </svg>
                <span className="text-gray-400">Meta Tags, Titles, & Headings</span>
                </div>
                <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M21 3L3 21l18-18z" />
                </svg>
                <span className="text-gray-400">Content Review</span>
                </div>
                <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M21 3L3 21l18-18z" />
                </svg>
                <span className="text-gray-400">Image Alt Tags & File Names</span>
                </div>
                <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M21 3L3 21l18-18z" />
                </svg>
                <span className="text-gray-400">Structured Data</span>
                </div>
                <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M21 3L3 21l18-18z" />
                </svg>
                <span className="text-gray-400">Compatibility Testing</span>
                </div>
                <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M21 3L3 21l18-18z" />
                </svg>
                <span className="text-gray-400">SEO Friendly URLs</span>
                </div>
                <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M21 3L3 21l18-18z" />
                </svg>
                <span className="text-gray-400">Sitemap Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M21 3L3 21l18-18z" />
                </svg>
                <span className="text-gray-400">HTTP Status Codes & Redirects</span>
                </div>
                <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M21 3L3 21l18-18z" />
                </svg>
                <span className="text-gray-400">Robots.txt & .htaccess</span>
                </div>
                <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M21 3L3 21l18-18z" />
                </svg>
                <span className="text-gray-400">Page Speed Analysis</span>
                </div>
                
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default TechnicalStrategy;