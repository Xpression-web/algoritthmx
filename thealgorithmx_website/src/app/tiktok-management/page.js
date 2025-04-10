import React from 'react'
import Navbar from '../asample/naviagtion'
import TiktokSection from './home'
import TiktokHeroSection from './dgital'
import TiktokGrowHeroSection from './connect'
import TiktokSmoothScrollStack from './solutions'
import TiktokCarousel from './strategies'
import TiktokWorthySection from './impact'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer';

const page = () => {
  return (
    <div>
      <Navbar/>
    <TiktokSection/>
    <TiktokHeroSection/>
    <TiktokGrowHeroSection/>
    <TiktokSmoothScrollStack/>
    <TiktokCarousel/>
    <TiktokWorthySection/>
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
