import React from 'react';
import Navbar from '../navbar/navbar';
import ContentSection from './home';
import Content from './content';
import Offer from './offer';
import IndustriesGrid from '../branding/industries';
import TechnologyToolbox from './toolbox';
import StrategyGrid from './strategy';
import InsightSection from '../video/insight';
import Footer from '../company/footer';



const page = () => {
  return (
    <div>
      <Navbar/>
      <ContentSection/>
      <Content/>
      <Offer/>
      <StrategyGrid/>
      <IndustriesGrid/>
      <TechnologyToolbox/>
      <InsightSection/>
      <Footer/>
      
    </div>
  )
}

export default page

