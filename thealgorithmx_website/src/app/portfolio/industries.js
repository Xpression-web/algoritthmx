// pages/index.js
'use client'
import { useState } from 'react';
import Head from 'next/head';

// Import components
import FilterTabs from './FilterTabs';
import D1CaseStudyCard from './CaseStudyCard1';
import D3CaseStudyCard from './CaseStudyCard2';
import D4CaseStudyCard from './CaseStudyCard3';
import CTABanner from './CtaBanner';

// Import data
import { caseStudies } from './CaseStudyData';

export default function Industries() {
  const [activeFilter, setActiveFilter] = useState({ type: 'Industries', value: 'Show All' });
  const [visibleCount, setVisibleCount] = useState({ showAll: 9, filtered: 4 });
  
  const filteredCaseStudies = activeFilter.value === 'Show All' 
    ? caseStudies 
    : caseStudies.filter(study => {
        switch(activeFilter.type) {
          case 'Industries':
            return study.industry === activeFilter.value;
          case 'Services':
            return study.service === activeFilter.value;
          case 'Regions':
            return study.region === activeFilter.value;
          default:
            return true;
        }
      });

  const displayedCaseStudies = filteredCaseStudies.slice(
    0, 
    activeFilter.value === 'Show All' ? visibleCount.showAll : visibleCount.filtered
  );

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const loadMore = () => {
    if (activeFilter.value === 'Show All') {
      setVisibleCount({...visibleCount, showAll: visibleCount.showAll + 6});
    } else {
      setVisibleCount({...visibleCount, filtered: visibleCount.filtered + 4});
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Case Studies</title>
        <meta name="description" content="Case studies showcase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto px-4 py-8" style={{ maxWidth: '1300px' }}>
        {/* Filter Tabs */}
        <FilterTabs onFilterChange={handleFilterChange} activeFilter={activeFilter} />

        {/* Case Studies Display */}
        {activeFilter.value === 'Show All' ? (
          <>
            {/* D1 Layout - Top 3 case studies with video background */}
            <div className="mb-16">
              {displayedCaseStudies.slice(0, 3).map((study) => (
                <D1CaseStudyCard key={study.id} study={study} />
              ))}
            </div>

            {/* CTA Banner */}
            <CTABanner />

            {/* D3 Layout - 2-column grid layout */}
            {displayedCaseStudies.length > 3 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {displayedCaseStudies.slice(3).map((study) => (
                  <D3CaseStudyCard key={study.id} study={study} />
                ))}
              </div>
            )}
          </>
        ) : (
          /* D4 Layout - For filtered categories */
          <div className="mb-16">
            {displayedCaseStudies.map((study) => (
              <D4CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        )}

        {/* Load More Button */}
        {(activeFilter.value === 'Show All' && visibleCount.showAll < filteredCaseStudies.length) || 
         (activeFilter.value !== 'Show All' && visibleCount.filtered < filteredCaseStudies.length) ? (
          <div className="text-center mt-8 mb-16">
            <button 
              onClick={loadMore}
              className="border border-white px-8 py-3 rounded-md hover:bg-white hover:text-black transition"
            >
              Load More
            </button>
          </div>
        ) : null}
      </main>
    </div>
  );
}