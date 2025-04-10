import React from 'react'
import Navbar from '../asample/naviagtion'
import IntelligentSection from './home'
import Scalable from './need'
import IntelligentBenefits from './choose'
import IntelligentServices from './services'
import IntelligentInsightSection from './insight'
import Footer from '../mainpage/footer'

const page = () => {
  return (
    <div>
      <Navbar/>
    <IntelligentSection/>
    <Scalable/>
    <IntelligentServices/>
    <IntelligentBenefits/>
    <IntelligentInsightSection/>
    <Footer/>
    </div>
  )
}

export default page
