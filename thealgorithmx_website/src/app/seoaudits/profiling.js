    import React from 'react';

    const SEOChecklist = () => {
    const checklistItems = [
        {
        items: [
            '301 redirects',
            'Code to text ratio',
            'Google Webmaster tools parameter exclusions',
            'HTTP status codes – home page',
            'Internal link structure',
            'Robots.txt configuration',
            'Site load time – average',
            'Sitemap.xml index rate',
            'Analytics program configuration',
            'Information architecture',
            'Spam/malware',
            'Website conversion'
        ]
        },
        {
        items: [
            'Broken links',
            'Crawl errors – complete list',
            'Google Webmaster tools preferred domain',
            'HTTP status codes – sitewide',
            'Page content',
            'Shared IP addresses',
            'Site load time – home page',
            'Static/dynamic URL configuration',
            'Duplicate content',
            'Link profile',
            'Top keyword rankings',
            'Website wrapper'
        ]
        },
        {
        items: [
            'Canonicalization',
            'Geo-location',
            'HTML/CSS code review',
            'Image optimization',
            'Remote use of js & CSS',
            'Site compression configuration',
            'Sitemap.xml configuration',
            'Title tag optimization',
            'Home page content',
            'Site theme and content',
            'Top keyword traffic',
            'Post audit client implementation review (1 hour)'
        ]
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white p-4 flex items-center justify-center ">
        <div className="max-w-[1200px] mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-light mb-4">ANALYSIS</h1>
            <h2 className="text-xl md:text-3xl font-light">YOUR CURRENT SEO STATUS</h2>
            </div>

            {/* Profiling Section */}
            <div className="rounded-lg border border-teal-800 overflow-hidden max-w-7xl mx-auto">
            <div className="bg-black p-4 border-b border-teal-800">
                <h3 className="text-5xl font-light text-center">Profiling</h3>
            </div>
            
            {/* Checklist Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 bg-black">
                {checklistItems.map((column, columnIndex) => (
                <div 
                    key={columnIndex} 
                    className={`p-8 ${
                    columnIndex !== checklistItems.length - 1
                        ? 'border-b md:border-b-0 md:border-r border-teal-800' 
                        : ''
                    }`}
                >
                    <ul className="space-y-7">
                    {column.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center space-x-2 text-sm">
                        <span className="text-white-500">✓</span>
                        <span>{item}</span>
                        </li>
                    ))}
                    </ul>
                </div>
                ))}
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default SEOChecklist;