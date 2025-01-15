import React from 'react'
import FlutterSection from './home';
import AppGrid from '../android-app/multiface';
import FlutterServicesGrid from './fdevelopment'
import TechGrid from '../android-app/technologies';
import FlutterDevelopmentTimeline from './fdynaictimeline';
import IndustriesGrid from '../android-app/industries';
import InsightSection from '../graphics/insight';
import Footer from '../company/footer';

const page = () => {
  return (
    <div>
    <FlutterSection/>
    <AppGrid/>
    <FlutterServicesGrid/>
    <TechGrid/>
    <FlutterDevelopmentTimeline/>
    <IndustriesGrid/>
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
