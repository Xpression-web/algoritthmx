import React from 'react'
import Navbar from '../asample/naviagtion'
import InstagramSection from './home'
import InstagramHeroSection from './reach'
import InstagramGrowHeroSection from './grow'
import InstagramMarketingSection from './services'
import SmoothScrollStack from './solutions'
import InstagramCarousel from './works'
import InstagramWorthySection from './worthy'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer';

const page = () => {
  return (
    <div>
      <Navbar/>
    <InstagramSection/>
    <InstagramHeroSection/>
    <InstagramGrowHeroSection/>
    <InstagramMarketingSection/>
    <SmoothScrollStack/>
    <InstagramCarousel/>
    <InstagramWorthySection/>
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
