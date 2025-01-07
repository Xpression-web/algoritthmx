import React from 'react';
import BrandingSection from './Home';
import ServicesSection from './Services';
import BrandingProcess from'./process';
import LogoTypes from './logo';
import MarketingFeatures from'./better';
import IndustriesGrid from './industries';

const Page = () => {
  return (
    <div >
        <BrandingSection/>
        <ServicesSection/>
        <BrandingProcess/>
        <LogoTypes/>
        <MarketingFeatures/>
        <IndustriesGrid/>
      
        
    </div>
  );
};

export default Page;
