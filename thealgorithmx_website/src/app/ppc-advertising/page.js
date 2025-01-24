import React from 'react'
import PPCContentSection from './home'
import PPCServices from './services'
import PPCServicesSection from './offer'
import UnlockSuccess from './unlock'
import ResponsiveHero from '../seo/experience'
import PPCServicesGrid from './leverage'
import PPCTechnologyToolbox from './ppctoolbox'

const page = () => {
  return (
    <div>
        <PPCContentSection/>
        <PPCServices/>
        <PPCServicesSection/>
        <UnlockSuccess/>
        <ResponsiveHero/>
        <PPCServicesGrid/>
        <PPCTechnologyToolbox/>
    </div>
  )
}

export default page
