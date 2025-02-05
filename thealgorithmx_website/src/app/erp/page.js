import React from 'react'
import Navbar from '../navbar/navbar'
import Carousel from './erpservices'
import ERPProcess from './erpdevelopment'
import ERPModules from './erpmodule'
import ERPContentSection from './home.js'
import ERPTechStack from './erptechstack'
import Solution from './erpsolution'
import DynamicSolutionsHero from './dynamic'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer';


const page = () => {
  return (
    <div>
      <Navbar/>
      <ERPContentSection/>
      <Carousel/>
      <ERPModules/>
      <ERPTechStack/>
      <Solution/>
      <ERPProcess/>
      <DynamicSolutionsHero/>
      <InsightSection/>
      <Footer/>
      
      
    </div>
  )
}

export default page
