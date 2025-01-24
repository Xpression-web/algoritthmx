import React from 'react'
import SocialMediaSection from './home'
import SocialMediaServices from './marketing'
import SocialServicesSection from './services'
import UnlockSuccess from './unlock'
import ResponsiveHero from '../seo/experience'
import ServicesGrid from './beyond'
import SocialTechnologyToolbox from './socialtoolbox'

const page = () => {
  return (
    <div>
        <SocialMediaSection/>
        <SocialMediaServices/>
        <SocialServicesSection/>
        <UnlockSuccess/>
        <ResponsiveHero/>
        <ServicesGrid/>
        <SocialTechnologyToolbox/>
      
    </div>
  )
}

export default page
