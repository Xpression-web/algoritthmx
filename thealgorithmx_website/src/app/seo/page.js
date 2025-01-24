import React from 'react'
import SEOSection from './home'
import SeoServices from './services'
import SEOServicesSection from './offer'
import UnlockSuccess from './unlock'
import ResponsiveHero from './experience'
import ServicesGrid from './benefits'
import SEOTechnologyToolbox from './seotoolbox'

const page = () => {
  return (
    <div>
      <SEOSection/>
      <SeoServices/>
      <SEOServicesSection/>
      <UnlockSuccess/>
      <ResponsiveHero/>
      <ServicesGrid/>
      <SEOTechnologyToolbox/>
    </div>
  )
}

export default page
