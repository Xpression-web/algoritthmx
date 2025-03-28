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



const page = () => {
  return (
    <div>
    <Navbar/>
    <IOTSection/>
    <IOTPage/>
    <IoTTechStack/>
    <IoTDevelopmentPage/>
    <IoTProcess/>
    <IndustriesGrid/>
    <InsightSection/>
    <Footer/>


    </div>
  )
}

export default page
