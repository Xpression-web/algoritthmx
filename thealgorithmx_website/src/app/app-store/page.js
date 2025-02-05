import React from 'react'
import Navbar from '../navbar/navbar';
import AppSection from './home'
import ServicesGrid from './services'
import AppServices from './empower'
import DevelopmentTimeline from './timeline'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer';

const page = () => {
  return (
    <div>
      <Navbar/>
    <AppSection/>
    <ServicesGrid/>
    <AppServices/>
    <DevelopmentTimeline/>
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
