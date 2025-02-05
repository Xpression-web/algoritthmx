import React from 'react';
import Navbar from '../navbar/navbar'
import FrontEndSection from './home';
import FrontServicesGrid from './frontdevelopment';
import WebDevServices from './fullscale';
import HeroSection from './consistency';
import TechStack from './techstack';
import FrontDesignProcess from './fdynamic';
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer';

const page = () => {
  return (
    <div>
      <Navbar/>
      <FrontEndSection/>
      <FrontServicesGrid/>
      <HeroSection/>
      <TechStack/>
      <FrontDesignProcess/>
      <WebDevServices/>
      <InsightSection/>
      <Footer/>
    </div>
  )
}

export default page
