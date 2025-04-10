import React from 'react'
import Navbar from '../asample/naviagtion'
import TechnicalSEOSection from './home'
import TechnicalServices from './technicalservices'
import TechnicalStrategy from './confidence'
import TechnicalBenefits from './benefit'
import TechnicalLeaveSection from './leave'
import TechnicalIdentifySection from './identify'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer'


const page = () => {
  return (
    <div>
      <Navbar/>
        <TechnicalSEOSection />
        <TechnicalServices />
        <TechnicalStrategy />
        <TechnicalBenefits />
        <TechnicalLeaveSection />
        <TechnicalIdentifySection />
        <InsightSection/>
        <Footer/>
       
    </div>
  )
}

export default page
