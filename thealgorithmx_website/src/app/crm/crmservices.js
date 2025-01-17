'use client';
import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
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
    title: 'CRM CONSULTING',
    icon: '🏆',
    content: `Our expert CRM developers and consultants assist you every step of the way 
              during the CRM implementation process. Our team works closely with you from 
              choosing the right platform to developing systems and optimizing performance. 
              In order to develop a tailored approach, our professionals examine your 
              business's processes, environment, and obstacles as part of our CRM system 
              development services.`
  },
  {
    id: 2,
    title: 'CRM MIGRATION',
    icon: '📋',
    content: 'As a leading CRM software development company, we handle all stages of the CRM migration process, including risk assessment, testing, and customizing data import methodologies. Using our CRM development services, we upgrade your customer experience and replace high-maintenance software, improving overall business performance.'
  },
  {
    id: 3,
    title: 'CRM DESIGN',
    icon: '⚙️',
    content: 'We are aware of the significance of developing a system that is user-friendly, engaging and helps drive business goals. AlgorithmX’s system design CRM development services are dedicated to assisting businesses develop a visually appealing CRM system that improves user satisfaction and enhances productivity.'
  },
  {
    id: 4,
    title: 'CRM INTEGRATION',
    icon: '📊',
    content: 'At our premier CRM development company, we boost your business with our CRM integration services, which allow seamless communication between other business tools and your CRM software fully utilizing their functionalities. Our dedicated CRM developers ensure safe integration of internal and external systems with your CRM system to facilitate smooth information flow. Moreover, we also offer automatic data updates to merge your data sources into one solution.'
  },
  {
    id: 5,
    title: 'CRM SOFTWARE DEVELOPMENT',
    icon: '💻',
    content: 'AlgorithmX’s CRM software development services provide personalized and accurate solutions to meet our diverse business needs, creating custom CRM software using powerful analytical tools enabling you to study customer data and uncover valuable information. We make businesses prosper by furnishing resources for intelligent decision-making and enhanced progress.'
  },
  {
    id: 6,
    title: 'CRM IMPLEMENTATION',
    icon: '🚀',
    content: 'Experts at our custom CRM development agency offer perfect CRM implementation solutions. Our customized CRM implementation services help achieve your business goals, improve efficiency, and boost customer interaction. Whether it’s on-premises or cloud deployments, we excel at providing a smooth implementation service.'
  },
  {
    id: 7,
    title: 'Mobile CRM Solutions',
    icon: '📱',
    content: 'Being the best CRM development company in USA, our mobile CRM tools enable businesses to manage customer interactions, tasks, and sales on the go. Our representatives are available 24/7 on their mobile phones to view customer information, carry out CRM tasks, and make updates. No matter the location, businesses can stay efficient and connected through our tailored mobile CRM services.'
  },
  {
    id: 8,
    title: 'CRM Customization',
    icon: '🛠️',
    content: 'AlgorithmX focuses on business development with CRM systems personalized to align with your business needs. Our CRM developers perform modifications in reporting, data gathering, and other key areas to elevate your business operations with custom CRM solutions that come with several features helping in boosting sales and attaining customer loyalty.'
  },
];


const CRMServices = () => {
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
            ${styles["crm-scrollbar"]}
          `}
        >
      <div className={`${isMobile ? 'flex space-x-0 min-w-max' : 'space-y-2'} ${styles["crm-scrollbar"]}`}>
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
  className={`pt-6 pr-10 pl-10 ${styles["box-border1"]} rounded w-full h-[410px] md:h-[300px]`}
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

export default CRMServices;
