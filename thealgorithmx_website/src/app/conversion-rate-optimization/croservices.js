'use client';
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
    title: 'USABILITY ANALYSIS ',
    icon: '🏆',
    content: `The main reasons why websites are usually deserted are due to confusion and complexity. If a website has a difficult interface or is not easily accessible via mobile phones, this might irritate users leading them to exit. On the contrary, a re-designed website can solve these problems, which in turn increases conversions from potential clients by a large margin. Moreover, you don’t need to change your marketing strategies to see these improvements. A website must encourage ease of interaction and guarantee mobile support for users to keep coming back and making purchases. Our conversion rate optimization agency redesigns such websites to generate immense benefits such as improved user experience, hence boosting its overall performance.`
  },
  {
    id: 2,
    title: 'INTERNET MARKETING CONVERSION ANALYSIS ',
    icon: '📋',
    content: 'Despite having excellent site navigation, conversions may be hindered by poor traffic quality. Both in terms of design and content, your website should be aimed at its qualified leads. When your online marketing attempts bring unqualified traffic, conversion rates fall drastically. AlgorithmX’s conversion rate optimization services involve examining your marketing strategies to maximize conversion rates by ensuring your website visitors are your potential customers. Our CRO services expert optimizes your marketing techniques and customizes them to resonate with your target audience, boosting user engagement and improving customer conversion.'
  },
  {
    id: 3,
    title: 'CONVERSION FUNNEL ANALYSIS',
    icon: '⚙️',
    content: 'From the point users enter a website till they complete a conversion, there are stages they go through called conversion funnels. Every page between the entrance and the conversion represents a chance for visitors to lose focus and exit. However, complicated funnels make it easy for people to stray from their path, which ultimately leads to missed conversions. Being one of the top conversion rate optimization companies, our conversion rate optimization services involve an examination of these conversion funnels, ensuring that engaged visitors stay on course toward conversion. Identifying and resolving possible hindrances present within the funnel ensures a smooth flow, increasing conversion rates. By following this strategy, we enhance your website’s ability to guide users in accomplishing desired actions, thereby improving its conversion performance.'
  },
  {
    id: 4,
    title: 'WEBISITE COPY ANALYSIS',
    icon: '📊',
    content: 'Invariably, a company’s perspective often eclipses the customers’ worries and concerns when it comes to website content. A well-written website copy not only gives important information about each service or product but also persuades potential customers to take desired action. Our best conversion rate optimization experts curate the tone and content of your website to turn your visitors into customers by focusing on meeting the preferences and needs of your audience, improving engagement and conversion rates. Thus, to drive conversions and create better user experiences, one should invest in well-written web content designed to connect with your target audience.'
  },
  {
    id: 5,
    title: 'AESTHETIC ANALYSIS',
    icon: '💻',
    content: 'Website visitors expect professionalism and uniformity in the looks of all pages. If there are any variations from this standard, it can confuse them and make some visitors abandon it. Moreover, issues like broken links or complex navigation menus also play a part here. Our leading conversion rate optimization agency addresses these issues by ensuring every page aligns with your brand’s look and fixing any discrepancies to keep visitors engaged on your website for long periods, highly increasing conversion opportunities. The consistent visual appearance of your website not only improves the users’ satisfaction but also increases the trust and confidence of your audience. Therefore, it is essential to follow consistency in design and fix any visual inconsistencies to boost engagement and conversion rates of your website.'
  },
];


const CROServices = () => {
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
    What our CRO Services <br/> offer?
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
  className={`pt-6 pr-10 pl-10 ${styles["box-border1"]} rounded w-full h-[680px] md:h-auto pb-10`}
>

        <h2 className={`${styles["right-title"]} ${monsterfont.className} text-center md:text-start`}>
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

export default CROServices;
