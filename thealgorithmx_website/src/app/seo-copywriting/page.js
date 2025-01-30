import React from 'react'
import CopywritingSection from './home'
import CopywritingServicesGrid from './services'
import CopywritingMarketingSection from './win'
import CopywritingMarketingApproach from './content'
import CopywritingMarketingImpact from './impact'


const page = () => {
  return (
    <div>
    <CopywritingSection/>
    <CopywritingServicesGrid/>
    <CopywritingMarketingSection/>
    <CopywritingMarketingApproach/>
    <CopywritingMarketingImpact/>
    </div>
  )
}

export default page
