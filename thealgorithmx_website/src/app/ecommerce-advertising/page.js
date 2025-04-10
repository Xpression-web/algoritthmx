import React from 'react'
import Navbar from '../asample/naviagtion'
import EcommerceAds from './home'
import EcommerceBoostAds from './boost'
import ServicesAccordion from './services'
import ResponsiveExperience from '../google-ads/experience'
import TechnologyToolbox from './toolbox'
import EcommerceServices from './benefits'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer'
const page = () => {
  return (
    <div>
    <Navbar/>
    <EcommerceAds/>
    <EcommerceBoostAds/>
    <ServicesAccordion/>
    <ResponsiveExperience/>
    <TechnologyToolbox/>
    <EcommerceServices/>
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
