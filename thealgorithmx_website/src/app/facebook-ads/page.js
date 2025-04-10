import React from 'react'
import Navbar from '../asample/naviagtion'
import FacebookAds from './home'
import BoostAds from './boost'
import ServicesAccordion from './services'
import ResponsiveExperience from '../google-ads/experience'
import TechnologyToolbox from './toolbox'
import FacebookServices from './benefits'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer'

const page = () => {
  return (
    <div>
        <Navbar/>
      <FacebookAds/>
      <BoostAds/>
      <ServicesAccordion/>
      <ResponsiveExperience/>
      <TechnologyToolbox/>
      <FacebookServices/>
      <InsightSection/>
      <Footer/>
    </div>
  )
}

export default page
