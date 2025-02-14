import React from 'react'
import Navbar from '../navbar/navbar'
import TiktokAds from './home'
import TiktokBoostAds from './capture'
import ServicesAccordion from './services'
import ResponsiveExperience from '../google-ads/experience'
import TechnologyToolbox from './toolbox'
import TiktokServices from './benefits'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer'

const page = () => {
  return (
    <div>
    <Navbar/>
    <TiktokAds/>
    <TiktokBoostAds/>
    <ServicesAccordion/>
    <ResponsiveExperience/>
    <TechnologyToolbox/>
    <TiktokServices/>
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
