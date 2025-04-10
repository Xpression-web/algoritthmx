import React from 'react'
import Navbar from '../asample/naviagtion'
import TwitterSection from './home'
import TwitterHeroSection from './engagement'
import TwitterGrowHeroSection from './multimedia'
import TwitterSmoothScrollStack from './solution'
import TwitterServicesGrid from './business'
import TwitterBusinessSection from './grow'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer';


const page = () => {
  return (
    <div>
    <Navbar/>
    <TwitterSection/>
    <TwitterHeroSection/>
    <TwitterGrowHeroSection/>
    <TwitterSmoothScrollStack/>
    <TwitterServicesGrid/>
    <TwitterBusinessSection/>
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
