import React from 'react'
import SEOGlobalSection from './home'
import GlobalServices from './globalservices'
import GlobalStrategy from './expandopp'
import GlobalSEOBenefits from './benefits'
import GlobalTargetingSection from './targeting'
import GlobalRevenueSection from './revenue'
import GlobalReachSection from './ready'

const page = () => {
  return (
    <div>
    <SEOGlobalSection/>
    <GlobalServices/>
    <GlobalStrategy/>
    <GlobalSEOBenefits/>
    <GlobalTargetingSection/>
    <GlobalRevenueSection/>
    <GlobalReachSection/>
    </div>
  )
}

export default page
