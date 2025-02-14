import React from 'react'
import Navbar from '../navbar/navbar'
import TwitterAds from './home'
import TwitterBoostAds from './amplify'
import ServicesAccordion from './services'
import ResponsiveExperience from '../google-ads/experience'
import TechnologyToolbox from './toolbox'
import TwitterServices from './benefits'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer'


const page = () => {
  return (
    <div>
    <Navbar/>
    <TwitterAds/>
    <TwitterBoostAds/>
    <ServicesAccordion/>
    <ResponsiveExperience/>
    <TechnologyToolbox/>
    <TwitterServices/>
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
