import React from 'react'
import SEOLocalSection from './home'
import LocalServices from './localservices'
import LocalStrategy from './opportunity'
import LocalSEOBenefits from './benefits'
import LocalAudienceSection from './audience'
import SeoResults from './result'
import LocalBusinessSection from './audience2'
import Deliverables from './client'

const page = () => {
  return (
    <div>
    <SEOLocalSection/>
    <LocalServices/>
    <LocalStrategy/>
    <LocalSEOBenefits/>
    <LocalAudienceSection/>
    <SeoResults/>
    <LocalBusinessSection/>
    <Deliverables/>
    
    </div>
  )
}

export default page
