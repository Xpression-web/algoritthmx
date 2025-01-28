import React from 'react'
import SEOMobileSection from './home'
import MobileServices from './mobileservices'
import MobileStrategy from './opportunity'
import MobileSEOBenefits from './benefits'
import MobileMarketingSection from './speed'
import MobileRevenueSection from './revenue'
import MobileReachSection from './reach'

const page = () => {
  return (
    <div>
    <SEOMobileSection />
    <MobileServices />
    <MobileStrategy/>
    <MobileSEOBenefits />
    <MobileMarketingSection/>
    <MobileRevenueSection />
    <MobileReachSection />
    </div>
  )
}

export default page
