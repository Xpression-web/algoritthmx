import React from 'react'
import InstagramSection from './home'
import InstagramHeroSection from './reach'
import InstagramGrowHeroSection from './grow'
import InstagramMarketingSection from './services'
import SmoothScrollStack from './solutions'
import InstagramCarousel from './works'
import InstagramWorthySection from './worthy'

const page = () => {
  return (
    <div>
    <InstagramSection/>
    <InstagramHeroSection/>
    <InstagramGrowHeroSection/>
    <InstagramMarketingSection/>
    <SmoothScrollStack/>
    <InstagramCarousel/>
    <InstagramWorthySection/>
    </div>
  )
}

export default page
