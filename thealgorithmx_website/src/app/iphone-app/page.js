import React from 'react';
import IosSection from './home';
import AppGrid from '../andriod-app/multiface';
import IosServicesGrid from './idevelopment';
import IosDevelopmentTimeline from './dynamictimeline';
import TechGrid from '../andriod-app/technologies';
import IndustriesGrid from '../andriod-app/industries';
import InsightSection from '../graphics/insight';
import Footer from '../company/footer';

const page = () => {
  return (
    <div>
      <IosSection/>
      <AppGrid/>
      <IosServicesGrid/>
      <TechGrid/>
      <IosDevelopmentTimeline/>
      <IndustriesGrid/>
      <InsightSection/>
      <Footer/>
    </div>
  )
}

export default page
