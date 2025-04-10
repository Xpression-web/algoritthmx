import React from 'react'
import Navbar from '../asample/naviagtion'
import LandingDesign from './home'
import LandingServices from './research'
import ServicesPage from './services'
import LandingPageBenefits from './benefits'
import LandingSection from './attract'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer'
const page = () => {
  return (
    <div>
    <Navbar/>
    <LandingDesign/>
    <LandingServices/>
    <ServicesPage/>
    <LandingPageBenefits/>
    <LandingSection/>
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
