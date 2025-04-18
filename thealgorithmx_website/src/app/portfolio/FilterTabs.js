// components/FilterTabs.js
import React from 'react';

export default function FilterTabs({ onFilterChange, activeFilter }) {
  const tabs = ['Industries', 'Services', 'Regions'];
  
  const filterOptions = {
    'Industries': [
      'Show All',
      'FoodTech',
      'eCommerce & Retail',
      'Healthcare',
      'FinTech',
      'Social Media',
      'EdTech',
      'Mobility',
      'Real Estate'
    ],
    'Services': [
      'Show All',
      'Mobile Development',
      'Web Development',
      'IoT Solutions',
      'Cloud Services',
      'AI & Machine Learning',
      'UI/UX Design',
      'DevOps',
      'QA Automation'
    ],
    'Regions': [
      'Show All',
      'APAC',
      'EMEA',
      'North America',
      'Latin America',
      'Australia',
      'Middle East',
      'Africa',
      'Southeast Asia'
    ]
  };
  
  const handleTabChange = (tab) => {
    onFilterChange({ type: tab, value: 'Show All' });
  };
  
  const handleFilterChange = (filter) => {
    onFilterChange({ type: activeFilter.type, value: filter });
  };

  return (
    <>
      {/* Tab Navigation */}
      <div className="border-b border-gray-800 mb-6">
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`pb-2 text-xl font-medium ${
                activeFilter.type === tab ? 'text-white border-b-2 border-white' : 'text-gray-400'
              }`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Filter Options */}
      <div className="flex flex-wrap gap-4 mb-10">
        {filterOptions[activeFilter.type].map((option) => (
          <button
            key={option}
            className={`px-4 py-2 rounded-full border ${
              activeFilter.value === option
                ? 'bg-white text-black border-white'
                : 'bg-transparent text-white border-gray-600 hover:border-gray-400'
            }`}
            onClick={() => handleFilterChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
}