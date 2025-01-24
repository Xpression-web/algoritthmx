import React from 'react';

const SocialMediaServices = () => {
return (
    <div className="bg-black text-white py-20 px-8">
    <div className="max-w-[1200px] mx-auto mt-[50px] mb-[50px]">
        <h1 className="text-3xl font-bold mb-10">Customized Social Media Marketing For Your Business</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="bg-black border border-white p-4 flex text-xs items-center">
            <img src="/images/Prospect-analysis.png" alt="Backlink Analysis" className="w-12 h-12 mr-4" />
            <div>
            <h2 className="text-lg font-medium mb-2">Identify Objectives            </h2>
            <p>
            At our premier social media marketing agency, we understand your goals clearly and develop a bespoke strategy to accomplish them, ensuring each step aligns with your objectives for maximum results.
            </p>
            </div>
        </div>
        {/* Card 2 */}
        <div className="bg-black border border-white p-4 flex text-xs items-center">
            <img src="/images/Competitor-Analysis.png" alt="Manual Review" className="w-12 h-12 mr-4" />
            <div>
            <h2 className="text-lg font-medium mb-2">Social Media Audit</h2>
            <p>
            Our social media marketing services include a detailed social media audit in which we begin by mapping out the most effective way to achieve your social media marketing goals successfully.
            </p>
            </div>
        </div>
        {/* Card 3 */}
        <div className="bg-black border border-white p-4 flex text-xs items-center">
            <img src="/images/Content-Building.png" alt="Removal Requests" className="w-12 h-12 mr-4" />
            <div>
            <h2 className="text-lg font-medium mb-2">Account Management</h2>
            <p>
            The expert professionals at our social media marketing agency for small business handle your social media to guarantee continuous marketing and communication across all platforms with efficiency.
            </p>
            </div>
        </div>
        {/* Card 4 */}
        <div className="bg-black border border-white p-4 flex text-xs items-center">
            <img src="/images/On-Page.png" alt="Link Disavow" className="w-12 h-12 mr-4" />
            <div>
            <h2 className="text-lg font-medium mb-2">Market Analysis</h2>
            <p>
            AlgorithmX’s social media marketing services involve conducting market research to help you understand the market well and assess where you stand compared to your competitors.
            </p>
            </div>
        </div>
        </div>
    </div>
    </div>
);
};

export default SocialMediaServices;

