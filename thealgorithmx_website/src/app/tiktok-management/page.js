import React from 'react'
import TiktokSection from './home'
import TiktokHeroSection from './dgital'
import TiktokGrowHeroSection from './connect'
import TiktokSmoothScrollStack from './solutions'
import TiktokCarousel from './strategies'
import TiktokWorthySection from './impact'

const page = () => {
  return (
    <div>
    <TiktokSection/>
    <TiktokHeroSection/>
    <TiktokGrowHeroSection/>
    <TiktokSmoothScrollStack/>
    <TiktokCarousel/>
    <TiktokWorthySection/>
    </div>
  )
}

export default page
