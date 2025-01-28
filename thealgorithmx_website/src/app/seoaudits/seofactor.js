'use client'
import React, { useState } from 'react';

const SeoFactors = () => {
  const [activeTab, setActiveTab] = useState("server-files");
  const [isAnimating, setIsAnimating] = useState(false);
  
  const content = {
    "on-page": {
      title: "On-Page SEO Factors",
      description: "A visually stunning website only serves its purpose when it's visible in search results. Many clients come to us with well-designed sites that still struggle to rank due to on-page SEO issues. These issues might include , duplicate or missing title tags and meta descriptions, or duplicate URLs.\n\n AlgorithmX's SEO audit services focus on pinpointing and resolving these on-page challenges. Addressing these factors can lead to an immediate boost in rankings and visibility.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
        </svg>
      )
    },
    "off-page": {
      title: "Off-Page SEO Factors",
      description: "Off-page factors make up about 80% of search engines' ranking algorithms, with link-building as a key element. Link quality, anchor text, and placement are essential, yet hidden from typical site visitors and difficult to evaluate without expert tools.\n\n Through off-page SEO audits, AlgorithmX helps identify and optimize these influential factors to build your online reputation and amplify authority, setting us apart as a top choice for offshore SEO auditing services.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7z"/>
          <path d="M14 3v2h3.59l-7.29 7.29 1.41 1.41L19 6.41V10h2V3h-7z"/>
        </svg>
      )
    },
    "server-files": {
      title: "Server-Level Factors",
      description: "Certain server files, including .htaccess, robots.txt, and sitemap.xml, play crucial roles in guiding search engines on how to index and rank your site. Proper configuration of these files can significantly boost SEO results.\n\n.htaccess: Directs users and search engines to critical pages, manages custom error pages, and sets up essential 301 redirects.\n\nrobots.txt: Controls which areas of your site are accessible to crawlers, excluding irrelevant or dead-end content.\n\nsitemap.xml: Organizes page links for search engines and users, aiding in navigation and indexing.\n\nOther server settings, like HTTP headers, 404 error pages, and load times, also influence SEO performance. AlgorithmX's technical SEO audit services include strategic recommendations to fully optimize these elements, maximizing your site's search visibility and user experience.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
        </svg>
      )
    },
  };

  const handleTabChange = (key) => {
    if (key !== activeTab) {
      setIsAnimating(true);
      setActiveTab(key);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const contentClasses = `
    transform transition-all duration-300 ease-in-out
    ${isAnimating ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}
  `;

  return (
    <div className='min-h-screen p-4 md:p-8 bg-black text-white flex items-center justify-center'>
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-8 md:mb-12">
          <div className="text-blue-500 mb-2">COMMON ISSUES</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">FACTORS</h1>
          <h2 className="text-2xl md:text-3xl">IMPACTING YOUR SEO</h2>
        </div>

        <div className="border border-red-500 w-full h-auto md:h-[600px] max-w-4xl mx-auto">
          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col h-full">
            <div className="overflow-x-auto p-4 border-b border-red-500">
              <div className="flex space-x-6 min-w-min">
                {Object.entries(content).map(([key, value]) => (
                  <button
                    key={key}
                    className={`flex items-center gap-2 transition-colors duration-300 whitespace-nowrap ${
                      activeTab === key ? "text-red-500" : "text-gray-400"
                    }`}
                    onClick={() => handleTabChange(key)}
                  >
                    <span className="w-6 h-6">{value.icon}</span>
                    <span>{key.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("-")}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex-1 overflow-hidden p-4">
              <div key={activeTab} className={contentClasses}>
                <h3 className="text-2xl font-light mb-4">{content[activeTab].title}</h3>
                <div className="text-gray-400 leading-relaxed whitespace-pre-line">
                  {content[activeTab].description}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex h-full p-6">
            {/* Left Section */}
            <div className="w-48 flex flex-col space-y-8 pr-6 justify-center">
              {Object.entries(content).map(([key, value]) => (
                <button
                  key={key}
                  className={`flex items-center gap-2 transition-colors duration-700 text-left ${
                    activeTab === key ? "text-red-500" : "text-gray-400"
                  }`}
                  onClick={() => handleTabChange(key)}
                >
                  <span className="w-6 h-6">{value.icon}</span>
                  <span>{key.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("-")}</span>
                </button>
              ))}
            </div>

            <div className="relative w-px bg-gray-800 h-full flex items-center justify-center">
              <div
                className="absolute w-1 bg-red-500 transition-all duration-700"
                style={{
                  top: `${Object.keys(content).indexOf(activeTab) * 6}rem`,
                  height: "4rem",
                }}
              />
            </div>

            {/* Right Content Section */}
            <div className="flex-1 pl-6 overflow-hidden">
              <div className="h-full overflow-hidden pr-4">
                <div key={activeTab} className={contentClasses}>
                  <h3 className="text-3xl font-light mb-8">{content[activeTab].title}</h3>
                  <div className="text-gray-400 leading-relaxed whitespace-pre-line">
                    {content[activeTab].description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoFactors;