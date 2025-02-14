import React from 'react'
import Navbar from '../navbar/navbar'
import YoutubeAds from './home'
import YoutubeBoostAds from './boost'
import ServicesAccordion from './services'
import ResponsiveExperience from '../google-ads/experience'
import TechnologyToolbox from './toolbox'
import YoutubeServices from './benefits'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer'

const page = () => {
  return (
    <div>
    <Navbar/>
    <YoutubeAds/>
    <YoutubeBoostAds/>
    <ServicesAccordion/>
    <ResponsiveExperience/>
    <TechnologyToolbox/>
    <YoutubeServices/>
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
