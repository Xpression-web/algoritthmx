import React from "react";
import "./styles.css";
import { Montserrat } from "next/font/google";

const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "200",
});
const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "400",
});


const BrandingSection = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-[1200px] mx-auto py-16">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-0 ">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              {/* Main Image */}
              <img
                src="images/Branding.webp"
                alt="Branding process with color swatches"
                className="w-[293px] h-auto md:h-[400px] shadow-lg mx-auto custom-rounded-tr"
              />
              {/* Rectangular Image */}
              <img
                src="images/a3.png"
                alt="Rectangular Branding Image"
                className="w-[293px] h-auto shadow-lg mx-auto mt-4"
              />
              <div className="absolute bottom-[180px] left-7 flex items-center space-x-2 transform translate-y-1/2">
                <div className="w-8 h-8 border border-white/60 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
                <a
                  href="#explore"
                  className={`text-white font-size-20 letter-spacing-8 gap-20  ${monsterfont.className} tracking-widest text-lg hover:text-white transition`}
                >
                  EXPLORE
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Graphics and description */}
          <div className="w-full md:w-1/2 flex flex-col md:items-start items-center text-center md:text-left">
            {/* Cylindrical image above branding (hidden on phones) */}
            <img
              src="images/g1.png"
              alt="Cylindrical Branding Icon"
              className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full shadow-lg hidden md:block"
            />
            <h1
              className={`text-4xl md:text-8xl ${monsterfont1.className}  bg-gradient-to-r  from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent font-light`}
            >
              BRANDING
            </h1>
          </div>
        </div>
        {/* Description below */}
        <div className="mt-8 md:mt-12">
          <p
            className={`text-semi-white algo-line-height-34 font-size-34 ${monsterfont1.className} text-center`}
          >
            AlgorithmX develops unforgettable brand identities that deeply connect with your target audience, boost brand awareness, and foster customer loyalty. Our brand-building services involve crafting brand narratives, logos, and guidelines to guarantee impactful messaging.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrandingSection;
