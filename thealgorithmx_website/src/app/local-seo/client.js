    import React from 'react';

    const Deliverables = () => {
    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8 flex items-center justify-center">
        <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 md:mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">Deliverables</h1>
            <h2 className="text-2xl md:text-4xl font-bold">To Clients</h2>
            </div>

            {/* Content Box with dark green background */}
            <div className="bg-[#030c0d] rounded-xl md:rounded-3xl p-6 md:p-12 relative overflow-hidden">
            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 relative">
                {/* Left Column (8/12 = 2/3) */}
                <div className="col-span-1 md:col-span-8 space-y-8 md:space-y-12">
                {/* On-Page Local SEO Section */}
                <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">On-Page Local SEO</h3>
                    <ul className="space-y-3 md:space-y-4">
                    {/* Same list items as before */}
                    <li className="flex items-start">
                        <svg className="w-5 h-5 text-white mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Local keyword research</span>
                    </li>
                    <li className="flex items-start">
                        <svg className="w-5 h-5 text-white mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Titles and meta descriptions</span>
                    </li>
                    <li className="flex items-start">
                        <svg className="w-5 h-5 text-white mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Address added to current website page(s) (if applicable)</span>
                    </li>
                    <li className="flex items-start">
                        <svg className="w-5 h-5 text-white mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Quarterly SEO copy or GMB posts with locally-optimized terms</span>
                    </li>
                    <li className="flex items-start">
                        <svg className="w-5 h-5 text-white mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>hCard microformat/schema HTML tags addition to address on website</span>
                    </li>

                    
                    </ul>
                </div>

                {/* Citation Management Section */}
                <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Citation Management</h3>
                    <ul className="space-y-3 md:space-y-4">
                    {/* Same list items as before */}
                    <li className="flex items-start">
                        <svg className="w-5 h-5 text-white mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Google Business Profile setup/optimization</span>
                    </li>
                    <li className="flex items-start">
                        <svg className="w-5 h-5 text-white mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Google Business Profile address matching</span>
                    </li>
                    <li className="flex items-start">
                        <svg className="w-5 h-5 text-white mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Facebook business page review</span>
                    </li>
                    <li className="flex items-start">
                        <svg className="w-5 h-5 text-white mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Facebook check-ins/verification of location</span>
                    </li>
                    <li className="flex items-start">
                        <svg className="w-5 h-5 text-white mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Glassdoor verification/setup of location</span>
                    </li>
                    <li className="flex items-start">
                        <svg className="w-5 h-5 text-white mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>CitySearch local optimization</span>
                    </li>
                    <li className="flex items-start">
                        <svg className="w-5 h-5 text-white mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Reporting on citations built per location</span>
                    </li>
                    <li className="flex items-start">
                        <svg className="w-5 h-5 text-white mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Citation management on Bing</span>
                    </li>
                    <li className="flex items-start">
                        <svg className="w-5 h-5 text-white mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Citation management on Apple Maps</span>
                    </li>

                    </ul>
                </div>
                </div>

                {/* Vertical Line - Hidden on mobile, shown on md and up */}
                <div className="hidden md:block absolute top-0 right-1/3 w-px h-2/3 bg-white mt-16"></div>

                {/* Right Column (4/12 = 1/3) */}
                <div className="col-span-1 md:col-span-4">
                {/* Add a horizontal line for mobile only */}
                <div className="h-px w-full bg-white opacity-20 mb-8 md:hidden"></div>
                
                <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Custom Reporting</h3>
                    <ul className="space-y-3 md:space-y-4">
                    {/* Same list items as before but with flex-shrink-0 added to icons */}
                    <li className="flex items-start">
                        <svg className="w-5 h-5 text-white mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Monthly reporting calls</span>
                    </li>
                    <li className="flex items-start">
                        <svg className="w-5 h-5 text-white mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Monthly local SEO reports:</span>
                    </li>
                    <li className="flex items-start   ">
                        <svg className="w-4 h-4 text-gray-400 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <span>Profile views</span>
                    </li>
                    <li className="flex items-start   ">
                        <svg className="w-4 h-4 text-gray-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <span>Website visits from local profiles</span>
                    </li>
                    <li className="flex items-start   ">
                        <svg className="w-4 h-4 text-gray-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <span>Phone calls</span>
                    </li>
                    <li className="flex items-start   ">
                        <svg className="w-4 h-4 text-gray-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <span>Direction requests</span>
                    </li>
                    <li className="flex items-start   ">
                        <svg className="w-4 h-4 text-gray-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <span>Monthly reporting of local rankings</span>
                    </li>
                    <li className="flex items-start   ">
                        <svg className="w-4 h-4 text-gray-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <span>Rising and declining keywords</span>
                    </li>
                    <li className="flex items-start   ">
                        <svg className="w-4 h-4 text-gray-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <span>Google local rankings</span>
                    </li>
                    <li className="flex items-start   ">
                        <svg className="w-4 h-4 text-gray-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <span>Google organic rankings</span>
                    </li>
                    <li className="flex items-start   ">
                        <svg className="w-4 h-4 text-gray-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <span>Bing/Yahoo search rankings</span>
                    </li>
                    <li className="flex items-start">
                        <svg className="w-5 h-5 text-white mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Wrap-up report with data for all locations</span>
                    </li>

                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default Deliverables;