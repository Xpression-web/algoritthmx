import React from 'react'
import Navbar from '../asample/naviagtion'
import AdsSuspension from './home'
import WhatSection from './what'
import AdsProcess from './diffrent'
import HeroSection from './proactive'
import DetailedHeroSection from './detailed'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer'

const page = () => {
  return (
    <div>
        <Navbar/>
      <AdsSuspension/>
      <WhatSection/>
      <AdsProcess/>
      <HeroSection/>
      <DetailedHeroSection/>
      <InsightSection/>
      <Footer/>
    </div>
  )
}

export default page
