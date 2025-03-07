import React from 'react'
import Navbar from '../navbar/navbar'
import SocialMediaSection from './home'
import SocialMediaServices from './marketing'
import SocialServicesSection from './services'
import UnlockSuccess from './unlock'
import ResponsiveHero from '../graphics/experience'
import ServicesGrid from './beyond'
import SocialTechnologyToolbox from './socialtoolbox'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer';

const page = () => {
  return (
    <div>
        <Navbar/>
        <SocialMediaSection/>
        <SocialMediaServices/>
        <SocialServicesSection/>
        <UnlockSuccess/>
        <ResponsiveHero/>
        <ServicesGrid/>
        <SocialTechnologyToolbox/>
        <InsightSection/>
        <Footer/>
      
    </div>
  )
}

export default page
