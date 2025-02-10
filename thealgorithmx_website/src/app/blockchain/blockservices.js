'use client'
import React, { useState, useEffect } from 'react';
import styles from '../crm/style.module.css';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '400',
});
const monsterfont2 = Montserrat({
  subsets: ['latin'],
  weight: '600',
});

const crmServices = [
  {
    id: 1,
    title: 'BLOCKCHAIN CONSULTING SERVICES ',
    icon: '🏆',
    content: 'AlgorithmX is a premier blockchain development company that provides tailor-made blockchain application development and software services. We offer expert blockchain consultation services to assist in launching productive blockchain solutions. Our talented blockchain software developers build reliable and secure solutions to grow your business forward, whether starting from scratch or optimizing existing systems.'
  },
  {
    id: 2,
    title: 'DAPPS DEVELOPMENT',
    icon: '📋',
    content: 'As a dedicated blockchain application development company, we specialize in dApp development, creating secure, and profitable dApps for many industries. We create custom-made dApps that help businesses gain a competitive edge in the blockchain ecosystem with our extensive experience in developing complex apps of any size.'
  },
  {
    id: 3,
    title: 'CRYPTO WALLET DEVELOPMENT',
    icon: '⚙️',
    content: 'At our blockchain development agency, we offer crypto wallet development services to help your business expand its DeFi portfolio, attracting customers by making transactions faster and secure. Our experienced blockchain developers construct and deploy crypto wallets that incorporate features like QR scanning, biometric authentication, cross-device compatibility, etc, as our custom enterprise blockchain solutions cater to your needs.'
  },
  {
    id: 4,
    title: 'POLYGON DEVELOPMENT SERVICES',
    icon: '📊',
    content: 'We are a top-tier blockchain development company in USA, helping businesses make the most of the web3 arena by creating personalized blockchain applications and software on Polygon. With our expert knowledge of Polygon, we provide on-demand blockchain solutions such as dApps, crypto wallets, and NFT marketplaces, ensuring integration, scalability, and improved user interactions.'
  },
  {
    id: 5,
    title: 'SMART CONTRACT DEVELOPMENT',
    icon: '💻',
    content: 'Our blockchain development services specialize in empowering businesses to streamline operations and optimize workflows through smart contracts’ unparalleled capabilities, as AlgorithmX is a leader among Ethereum smart contract developers. Our experienced developers have extensive knowledge of programming languages and smart contract technologies to build secure, unchangeable, and accurate contracts that promote a harmonious business environment.'
  },
  {
    id: 6,
    title: 'ASSET TOKENIZATION PLATFORM DEVELOPMENT',
    icon: '🚀',
    content: 'We are a pioneering blockchain development company that offers the best tokenization solutions to digitize blockchain assets. With our services in platform development curated for businesses, we help unlock avenues for digitizing financial assets making them easily tradable across various online platforms.'
  },
  {
    id: 7,
    title: 'CRYPTO CURRENCY EXCHANGE DEVELOPMENT',
    icon: '📱',
    content: 'AlgorithmX’s blockchain development services involve creating cryptocurrency applications that help your business set up a transparent and decentralized financial system. Our team of cryptocurrency experts with a wealth of experience holds the necessary instruments essential for developing a highly functional trading platform where users can easily sell, purchase or exchange cryptocurrencies.'
  },
  {
    id: 8,
    title: 'ICO DEVELOPMENT',
    icon: '🛠️',
    content: 'As a well-known blockchain development company, we provide end-to-end solutions for IEO and ICO development, and our blockchain and crypto developers help you create a high-quality initial exchange offering platform designed to attract funding for your cryptocurrency project.'
  },
  {
    id: 9,
    title: 'SOLIDITY DEVELOPMENT',
    icon: '🛠️',
    content: 'AlgorithmX’s offers exceptional blockchain development services where our talented specialists use Solidity programming language to develop secure and efficient Ethereum applications. We provide Solidity development services that guarantee smart contracts or dApps that are reliable, scalable, and aligned to your project’s objectives.'
  },
];

const BlockServices = () => {
  const [hoveredService, setHoveredService] = useState(crmServices[0]);
  const [activeService, setActiveService] = useState(crmServices[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleServiceInteraction = (service) => {
    if (isMobile) {
      setActiveService(service);
    } else {
      setHoveredService(service);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
  <h1
    className={`${styles["services-text"]} ${monsterfont.className} mb-8 md:mb-16 text-center text-3xl`}
  >
    CRM Services
  </h1>

  <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row">
    {/* Services list */}
    <div
          className={`
            ${isMobile ? 'overflow-x-auto' : 'md:w-1/3 md:h-[300px] md:overflow-y-auto'}
            md:p-6 ${!isMobile && ' border-red-700'} pr-4 mt-2
            ${styles["crm-scrollbar"]  }
          `}
        >
      <div className={`${isMobile ? 'flex space-x-0 min-w-max' : 'space-y-2'} ${styles["crm-scrollbar"]} `}>
        {crmServices.map((service) => (
          <div
            key={service.id}
            className={`
              cursor-pointer transition-all duration-300
              ${isMobile ? 'flex-shrink-0 min-w-[100px]' : 'w-full'}
              ${(isMobile ? activeService.id === service.id : hoveredService.id === service.id)
                ? styles["box-border"]
                : "border-black"}
            rounded
            `}
            onClick={() => isMobile && handleServiceInteraction(service)}
            onMouseEnter={() => !isMobile && handleServiceInteraction(service)}
          >
            <div
              className={`flex items-center md:pl-8 inline-block ${
                isMobile ? 'flex-col items-start' : ''
              }`}
            >
              <span className="md:mr-6">{service.icon}</span>
              <span className={`${styles["left-text"]} ${monsterfont2.className}`}>
                {service.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Content section */}
    <div className={`md:w-2/3 ${!isMobile && 'md:pl-[100px]'} mt-6 md:mt-0`}>
    <div
  className={`pt-6 pr-10 pl-10 ${styles["box-border1"]} rounded w-full h-[450px] md:h-[300px]`}
>

        <h2 className={`${styles["right-title"]} ${monsterfont.className}`}>
          {isMobile ? activeService.title : hoveredService.title}
        </h2>
        <p className={`${styles["right-description"]} text-semi-white`}>
          {isMobile ? activeService.content : hoveredService.content}
        </p>
      </div>
    </div>
  </div>
</div>

  );
};

export default BlockServices;
