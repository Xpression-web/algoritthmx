import React from 'react'
import Navbar from '../navbar/navbar'
import AIOptmmizationSection from './home'
import AiOptmizationServices from './solutions'
import AIOptimizationProcess from './process'
import AIOptimizationBenefits from './choose'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer'

const page = () => {
  return (
    <div>
    <Navbar/>
    <AIOptmmizationSection/>
    <AiOptmizationServices/>
    <AIOptimizationProcess/>
    <AIOptimizationBenefits/>
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
