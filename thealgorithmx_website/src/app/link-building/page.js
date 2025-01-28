import React from 'react'
import SEOLinkSection from './home'
import LinkServices from './linkservices'
import LinkStrategy from './reach'
import LinkBenefits from './benefit'
import LinkBuildingSection from './linkbuilding'
import LinkProcess from './buildingtimeline'
import LinkTrafficSection from './traffic'

const page = () => {
  return (
    <div>
        <SEOLinkSection/>
        <LinkServices/>
        <LinkStrategy/>
        <LinkBenefits/>
        <LinkBuildingSection/>
        <LinkProcess/>
        <LinkTrafficSection/>
    </div>
  )
}

export default page
