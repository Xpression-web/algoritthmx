import React from 'react';
import Navbar from '../navbar/navbar';
import AndriodSection from './home';
import AppGrid from './multiface';
import ServicesGrid from './development';
import DevelopmentTimeline from './dynamic';
import IndustriesGrid from './industries';
import TechGrid from './technologies';
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer';
const page = () => {
  return (
    <div>
      <Navbar/>
      <AndriodSection/>
      <AppGrid/>
      <ServicesGrid/>
      <TechGrid/>
      <DevelopmentTimeline/>
      <IndustriesGrid/>
      <InsightSection/>
      <Footer/>

    </div>
  )
}

export default page
