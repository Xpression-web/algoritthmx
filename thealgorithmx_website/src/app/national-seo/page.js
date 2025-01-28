import React from 'react'
import SEONationalSection from './home'
import NationalServices from './nationalservices'
import NationalStrategy from './opportunity'
import NationalSEOBenefits from './benefits'
import NationalMarketingSection from './marketing'
import NationalRevenueSection from './revenue'
import NationalRiseSection from './rise'

const page = () => {
  return (
    <div>
    <SEONationalSection />
    <NationalServices />
    <NationalStrategy/>
    <NationalSEOBenefits />
    <NationalMarketingSection />
    <NationalRevenueSection />
    <NationalRiseSection />
    </div>
  )
}

export default page
