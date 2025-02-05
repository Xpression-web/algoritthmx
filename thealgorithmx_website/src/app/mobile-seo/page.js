import React from 'react'
import Navbar from '../navbar/navbar'
import SEOMobileSection from './home'
import MobileServices from './mobileservices'
import MobileStrategy from './opportunity'
import MobileSEOBenefits from './benefits'
import MobileMarketingSection from './speed'
import MobileRevenueSection from './revenue'
import MobileReachSection from './reach'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer';

const page = () => {
  return (
    <div>
      <Navbar/>
    <SEOMobileSection />
    <MobileServices />
    <MobileStrategy/>
    <MobileSEOBenefits />
    <MobileMarketingSection/>
    <MobileRevenueSection />
    <MobileReachSection />
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
