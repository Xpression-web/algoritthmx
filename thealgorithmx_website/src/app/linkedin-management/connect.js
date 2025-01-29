import React from 'react';

const LinkedinHeroSection = () => {
  return (
    <div className="bg-black min-h-screen ">
      <div className="container max-w-[1200px] mx-auto p-4">
        <div className="flex flex-col md:flex-row items-center justify-between py-16 md:py-24 gap-8">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-white order-2 md:order-1">
            <h1 className="text-4xl font-light mb-6 tracking-wider">
            CONNECT & ENGAGE<br />
              
            </h1>
            <div className="w-16 h-1 bg-blue-500 mb-6"></div>
            <p className="text-gray-400 text-lg">
            LinkedIn is designed for professional networking and industry engagement, offering tools like LinkedIn Groups, resources, Sales Navigator, and collaborative articles. These features create spaces for sharing industry insights, staying updated on news, and connecting with potential clients. Engaging in these areas fosters meaningful conversations and opens doors to collaboration.
            </p>
          </div>

          {/* Image Container */}
          <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
            <div className="transform md:rotate-12">
              <div className="w-[330px] h-[330px] md:w-[400px] md:h-[400px] overflow-hidden border-4 border-white ">
                <img
                  src="images/Connect-&-Engage.webp"
                  alt="Network diagram showing audience connection"
                  className="w-full h-full object-cover "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedinHeroSection;
