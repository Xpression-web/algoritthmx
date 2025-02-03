    import React from 'react';

    const WhoStrategy = () => {
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
                        src="images/g13.jpg"
                        alt="SEO Strategy Diagram"
                        className="rounded-lg w-full h-[202px] object-cover mt-3"
                      />
                    </div>
                  </div>
                  
                  {/* Bottom Image - Full Width */}
                  <div className="w-full flex justify-center items-center">
                    <img
                      src="images/g11.jpg"
                      alt="SEO Analytics"
                      className="rounded-lg w-full h-[251px] object-cover"
                    />
                  </div>
                </div>
        
                {/* Right Section with Content */}
                <div className="md:w-1/2 flex flex-col justify-center">
                  <div className={`text-[12.8px] leading-[1.1] mb-[6px] font-[400] font-[Helvetica] text-[#f857a6] `}>WHO RE WE?</div>
                  <h1 className={`text-[30.4px] leading-[1.25] mb-6 mt-2 font-[400] font-[Helvetica] text-white `}>
                  Influencer Marketing Agency that values power of creativity
                  </h1>
                  <p className={`text-[15px] leading-[24px] mb-[6px] font-[400] font-[Helvetica] text-semi-white `}>
                  We harness the creator's influence to engage different customer segments in a unique, culture-central manner using our expertise and skills. Our extensive experience covering all major sectors makes us the go-to choice amongst other influencer marketing agencies for brands aiming to establish authentic relationships and significant impacts.
                  </p>
            
            {/* SEO Services Grid with Disc Bullets */}
            <div className="grid grid-cols-2 gap-4 mb-8">
                <ul className={`list-disc list-inside text-[15px] leading-[24px] mb-[6px] font-[400] font-[Helvetica] text-semi-white `}>
                <li>Lifestyle</li>
                <li>Beauty</li>
                <li>Apparel</li>
                <li>Retail</li>
                <li>Travel</li>
                </ul>
                <ul className={`list-disc list-inside text-[15px] leading-[24px] mb-[6px] font-[400] font-[Helvetica] text-semi-white `}>
                <li>QSR</li>
                <li>Consumer Tech</li>
                <li>Gaming</li>
                <li>Food & Beverage</li>
                <li>Health & Wellness</li>
                </ul>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default WhoStrategy;