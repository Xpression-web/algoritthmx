import React from 'react';
import Navbar from '../navbar/navbar';
import BrandingSection from './Home';
import ServicesSection from './Services';
import BrandingProcess from'./process';
import LogoTypes from './logo';
import MarketingFeatures from'./better';
import IndustriesGrid from './industries';
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer';

const Page = () => {
  return (
    <div >
      <Navbar/>
        <BrandingSection/>
        <ServicesSection/>
        <BrandingProcess/>
        <LogoTypes/>
        <MarketingFeatures/>
        <IndustriesGrid/>
        <InsightSection/>
        <Footer/>
      
        
    </div>
  );
};

export default Page;
