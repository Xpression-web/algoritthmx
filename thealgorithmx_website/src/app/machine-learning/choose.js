'use client'
import React, { useState } from 'react';
import { Award, Link, Layers, Shield } from 'lucide-react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '600',
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
    subsets: ['latin'],
    weight: '200',
    fallback: ["sans-serif"],
  });

const AIMLPage = () => {
  const [activeSection, setActiveSection] = useState('robustSecurity');

  const sections = {
    robustSecurity: {
      icon: <Shield className="w-6 h-6" />,
      title: 'Proven Expertise and Track Record',
      description: "Our team comprises seasoned experts who have consistently delivered transformative solutions for businesses across various industries. By choosing Copper Digital, you're partnering with a trusted ally with a history of driving tangible results for businesses.",
      image: '/images/a1.png'
    },
    reliableConnectivity: {
      icon: <Link className="w-6 h-6" />,
      title: 'Maximized ROI and Cost Efficiency',
      description: 'We develop IoT solutions with robust connectivity protocols that ensure consistent and dependable communication between devices. Our expertise guarantees minimal downtime and optimal performance for your IoT ecosystem.',
      image: '/images/Why.webp'
    },
    prioritizingUsability: {
      icon: <Layers className="w-6 h-6" />,
      title: 'Tailored Solutions',
      description: 'User experience is at the core of our IoT development strategy. We design intuitive interfaces and streamline interactions to make complex IoT systems accessible and easy to use for end-users.',
      image: '/images/a1.png'
    },
    scalability: {
      icon: <Award className="w-6 h-6" />,
      title: 'Scalability',
      description: 'Our AI & ML solutions are architected to grow with your business. We build flexible and adaptable systems that can seamlessly scale, accommodate future technological advancements, and meet evolving business requirements.',
     image: '/images/Why.webp'
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center">
      <div className="w-full max-w-[1200px] px-4 py-12">
        <h1 className={`text-[40px] leading-[48px] ${monsterfont.className}  text-white mb-4`}>
          Why Choose AlgorithmX as Your AI & ML Development Company?
        </h1>
        <p className={`text-[16px] leading-[20px] ${monsterfont1.className}  text-semi-white mb-4`}>
        As a trusted AI & ML development company, we have established ourselves as a leading provider of intelligent solutions by delivering data-driven, user-centric applications for top brands. As a premium AI & ML technology partner, we focus on bridging the gap between raw data and smart automation—empowering our clients with innovative, scalable, and efficient AI environments that drive business growth and decision-making excellence.
        </p>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          {/* Mobile & Desktop Left Section - Clickable Items */}
          <div className="md:w-1/3 space-y-4  rounded-[20px] ">
            {Object.entries(sections).map(([key, section]) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`w-full flex items-center space-x-4 p-4 rounded-lg transition-colors duration-300 ${
                  activeSection === key 
                    ? ' text-white ' 
                    : 'bg-transparent text-semi-white '
                }`}
              >
                {section.icon}
                <span className="font-semibold font-helveticaneue ">{section.title}</span>
              </button>
            ))}
          </div>

          {/* Desktop Right Section - Description with Image */}
          <div className="hidden md:grid md:w-2/3 rounded-lg p-8 grid-cols-2 gap-8">
            <div className="w-full h-[200px] relative">
              <Image 
                src={sections[activeSection].image}
                alt={sections[activeSection].title}
                fill
                className="object-cover rounded-lg w-full]"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center space-x-4 mb-4">
                {sections[activeSection].icon}
                <h2 className="text-2xl font-bold font-helveticaneue">
                  {sections[activeSection].title}
                </h2>
              </div>
              <p className="text-semi-white font-helveticaneue">
                {sections[activeSection].description}
              </p>
            </div>
          </div>

          {/* Mobile Description Section */}
          <div className="md:hidden">
            <div className=" border-[1px]  rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                {sections[activeSection].icon}
                <h2 className="text-xl font-bold font-helveticaneue">{sections[activeSection].title}</h2>
              </div>
              <p className="text-semi-white font-helveticaneue">{sections[activeSection].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMLPage;