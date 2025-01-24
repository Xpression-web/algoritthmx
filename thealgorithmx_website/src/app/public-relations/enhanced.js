import React from 'react';

const PublicEnhancedSection = () => {
return (
    <div className=" bg-black text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
    <div className="container max-w-[1200px] mx-auto p-4 ">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left Section - Image */}
        <div className="w-full lg:w-1/3">
            <img 
            src="images/Enhanced-digital-branding-370x370.webp"
            alt="Local SEO visualization showing map interface across devices"
            className="w-full h-auto"
            />
        </div>

        {/* Right Section - Content */}
        <div className="w-full lg:w-2/3 space-y-2">
            <h1 className="text-xl lg:text-3xl font-bold">
            Enhanced Digital Branding
            </h1>
            
            <p className="text-semi-white text-md">
            AlgorithmX’s comprehensive public relations services provide assistance in creating and distributing your press release, helping you secure premium links and placements that support your marketing efforts. Press releases play a significant role in journalism as more than 90% of journalists state that they use PR releases as their first source to unearth new stories. Effectively utilizing this channel can improve your credibility and visibility within your industry.
            </p>
            <p className="text-semi-white text-md">
            By relying on AlgorithmX for your press release strategy, you gain access to expertise that ensures your message connects effectively with your target market and captures the interest of major media outlets. With our best public relations services, we not only enhance your brand awareness but also lay a strong foundation for fostering enduring relationships with media professionals and journalists. At AlgorithmX, we turn your press release an influential instrument for shaping narratives and driving engagement in your field.
            </p>
        </div>
        </div>
    </div>
    </div>
);
};

export default PublicEnhancedSection;