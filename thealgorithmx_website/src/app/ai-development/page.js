import React from 'react'
import Navbar from '../asample/naviagtion'
import AISection from './home'
import AIServices from './services'
import AIBusinessSection from './business'
import AIServicesGrid from './aiservice'
import AITechGrid from './techstack'
import AIDesignProcess from './process'
import IndustriesGrid from '../branding/industries'
import AIInsightSection from './insight'
const page = () => {
  return (
    <div>
      <Navbar/>
    <AISection/>
    <AIServicesGrid/>
    <AIBusinessSection/>
    <AIServices/>
    <AIDesignProcess/>
    <IndustriesGrid/>
    <AIInsightSection/>
  
    </div>
  )
}

export default page
