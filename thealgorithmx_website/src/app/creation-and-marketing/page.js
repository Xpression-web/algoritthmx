import React from 'react'
import CreationSection from './home'
import CreationServicesGrid from './services'
import ContentMarketingSection from './win'
import MarketingApproach from './content'
import ContentMarketingImpact from './impact'

const page = () => {
  return (
    <div>
    <CreationSection/>
    <CreationServicesGrid/>
    <ContentMarketingSection/>
    <MarketingApproach/>
    <ContentMarketingImpact/>
    </div>
  )
}

export default page
