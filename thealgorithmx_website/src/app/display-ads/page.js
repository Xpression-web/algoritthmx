import React from 'react'
import Navbar from '../navbar/navbar'
import DisplayAds from './home'
import DisplayBoostAds from './enhance'
import ServicesAccordion from './services'
import ResponsiveExperience from '../google-ads/experience'
import TechnologyToolbox from './toolbox'
import DisplayServices from './benefits'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer'
const page = () => {
  return (
    <div>
    <Navbar/>
    <DisplayAds/>
    <DisplayBoostAds/>
    <ServicesAccordion/>
    <ResponsiveExperience/>
    <TechnologyToolbox/>
    <DisplayServices/>
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
