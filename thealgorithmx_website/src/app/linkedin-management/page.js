import React from 'react'
import LinkedinSection from './home'
import LinkedinHeroSection from './connect'
import LinkedinGrowHeroSection from './optimize'
import LinkedinMarketingSection from './services'
import LinkedinSmoothScrollStack from './marketing'
import LinkedinContent from './scrolling'
import BusinessSection from './place'



const page = () => {
  return (
    <div>
    <LinkedinSection/>
    <LinkedinHeroSection/>
    <LinkedinGrowHeroSection/>
    <LinkedinMarketingSection/>
    <LinkedinSmoothScrollStack/>
    <LinkedinContent/>
    <BusinessSection/>
    </div>
  )
}

export default page
