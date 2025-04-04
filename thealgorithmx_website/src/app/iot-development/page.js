import React from 'react'
import Navbar from '../navbar/navbar'
import IOTSection from './home'
import IOTPage from './services'
import IoTBenefits from './choose'
import IndustriesGrid from '../branding/industries'
import IoTDevelopmentPage from './choose1'
import IoTProcess from './process'
import IoTTechStack from './techstack'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer'
import Home from './services1'
import StackCardAnimation from './stack'




const page = () => {
  return (
    <div>
    <Navbar/>
    <IOTSection/>
    <Home/>
    <IoTTechStack/>
    <IoTDevelopmentPage/>
    <StackCardAnimation/>
    <IoTProcess/>
    <IndustriesGrid/>
    <InsightSection/>
    <Footer/>


    </div>
  )
}

export default page
