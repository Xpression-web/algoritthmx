import React from 'react';

const PublicSeizeSection = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-[1200px] mx-auto p-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Section - Content */}
          <div className="w-full lg:w-1/2 space-y-4">
            <h1 className="text-xl lg:text-5xl font-bold">
              Seize PR Opportunities
            </h1>
            <p className="text-gray-300 text-md">
              At AlgorithmX, we have a dedicated team of experts in organic public relations who handle all aspects of your digital PR efforts as part of our public relations services, including but not limited to:
            </p>
            {/* Unordered List */}
            <ul className="list-disc pl-5 text-gray-300">
              <li>Providing timely crisis management support.</li>
              <li>Developing thought leadership opportunities for your brand.</li>
              <li>Establishing an effective backlink strategy.</li>
              <li>Tracking PR campaign success with detailed reports.</li>
            </ul>
          </div>

          {/* Right Section - Image */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <img
              src="images/PR-opportunities.webp"
              alt="Google Penguin Penalty Recovery"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicSeizeSection;
