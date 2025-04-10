import React from 'react'
import Navbar from '../asample/naviagtion'
import SnapchatAds from './home'
import SnapchatBoostAds from './engage'
import ServicesAccordion from './services'
import ResponsiveExperience from '../google-ads/experience'
import SnapchatServices from './benefits'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer'


const page = () => {
  return (
    <div>
    <Navbar/>
    <SnapchatAds/>
    <SnapchatBoostAds/>
    <ServicesAccordion/>
    <ResponsiveExperience/>
    <SnapchatServices/>
    <InsightSection/>
    <Footer/>

    </div>
  )
}

export default page
