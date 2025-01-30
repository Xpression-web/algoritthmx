import React from 'react'
import TwitterSection from './home'
import TwitterHeroSection from './engagement'
import TwitterGrowHeroSection from './multimedia'
import TwitterSmoothScrollStack from './solution'
import TwitterServicesGrid from './business'
import TwitterBusinessSection from './grow'


const page = () => {
  return (
    <div>
    <TwitterSection/>
    <TwitterHeroSection/>
    <TwitterGrowHeroSection/>
    <TwitterSmoothScrollStack/>
    <TwitterServicesGrid/>
    <TwitterBusinessSection/>
    </div>
  )
}

export default page
