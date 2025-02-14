import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebook,
  faInstagram,
  faLinkedin,
  faSpotify,
  faGithub,
  faAmazon,
  faYoutube,
  faTiktok,
  faReddit,
  faTwitter,
  faDiscord
} from "@fortawesome/free-brands-svg-icons";
import { Montserrat } from "next/font/google";

const monsterfont3 = Montserrat({
  subsets: ["latin"],
  weight: "700",
  fallback: ["sans-serif"],
});

const firstRowIcons = [
  { name: "Google", colStart: "md:col-start-1", icon: faGoogle },
  { name: "Meta", colStart: "md:col-start-3", icon: faFacebook },
  { name: "Instagram", colStart: "md:col-start-5", icon: faInstagram },
  { name: "LinkedIn", colStart: "md:col-start-7", icon: faLinkedin },
  { name: "Spotify", colStart: "md:col-start-9", icon: faSpotify },
  { name: "GitHub", colStart: "md:col-start-11", icon: faGithub }
];

const secondRowIcons = [
  { name: "Amazon", colStart: "md:col-start-2", icon: faAmazon },
  { name: "YouTube", colStart: "md:col-start-4", icon: faYoutube },
  { name: "TikTok", colStart: "md:col-start-6", icon: faTiktok },
  { name: "Reddit", colStart: "md:col-start-8", icon: faReddit },
  { name: "Twitter", colStart: "md:col-start-10", icon: faTwitter },
  { name: "Discord", colStart: "md:col-start-12", icon: faDiscord }
];

const PlatformPerformance = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-6xl w-full p-6 md:p-12 box-design1 ">
        <div className="space-y-16">
          {/* Header Section */}
          <div className="space-y-8 pb-12 ">
            <div className="grid md:grid-cols-2 gap-8 items-center mt-10">
              <h1 className={`text-[38px] md:text-[56px] leading-[1.1] ${monsterfont3.className} text-white`}>
                Better platform performance
              </h1>
              <p className="text-[16px] leading-[24px] opacity-50 font-opensans text-white">
                Achieving better performance on the platforms that matter involves
                optimizing key aspects of your digital presence. This includes enhancing
                speed, reliability, and user experience to ensure you meet the needs of
                your audience and stay competitive in the market.
              </p>
            </div>
            <div style={{ // Added a separate div for the border
              borderBottom: '1px solid #f7f5ef',
              opacity: 0.2,
              marginTop: '34px' // Adjust as needed to overlap/align
            }}></div>

          </div>

          {/* Icons Grid */}
          <div className="">
            {/* First row - odd columns */}
            <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:mb-[100px]">
              {firstRowIcons.map((item, index) => (
                <div key={`row1-${index}`} className={`flex items-center justify-center ${item.colStart}`}>
                  <div className="w-[36px] h-[34px]  flex items-center justify-center">
                    <FontAwesomeIcon icon={item.icon} className="" />
                  </div>
                </div>
              ))}
            </div>

            {/* Second row - even columns */}
            <div className="grid grid-cols-2 md:grid-cols-12 gap-8 mt-[20px] md:mt-[0px] md:mb-[100px]  ">
              {secondRowIcons.map((item, index) => (
                <div key={`row2-${index}`} className={`flex items-center justify-center ${item.colStart}`}>
                  <div className="w-8 h-8  flex items-center justify-center">
                    <FontAwesomeIcon icon={item.icon} className=" text-md" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformPerformance;
