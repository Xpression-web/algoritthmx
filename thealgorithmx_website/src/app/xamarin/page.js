import React from 'react';
import XamarinSection from './home';
import AppGrid from '../andriod-app/multiface';
import XamarinServicesGrid from './xdevelopment';
import TechGrid from '../andriod-app/technologies';
import XamarinDevelopmentTimeline from './xdynamictimeline';
import IndustriesGrid from '../andriod-app/industries';
import InsightSection from '../graphics/insight';
import Footer from '../company/footer';

const page = () => {
  return (
    <div>
        <XamarinSection/>
        <AppGrid/>
        <XamarinServicesGrid/>
        <TechGrid/>
        <XamarinDevelopmentTimeline/>
        <IndustriesGrid/>
        <InsightSection/>
        <Footer/>
    </div>
  )
}

export default page;
