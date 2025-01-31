import React from 'react'
import InfluencerSection from './home'
import InfluencerMasterySection from './influencer'
import InfluencerModules from './services'
import EssentialSection from './marketing'
import DecodeSection from './decode'
import WhoStrategy from './who'

const page = () => {
  return (
    <div>
      <InfluencerSection/>
      <InfluencerMasterySection/>
      <InfluencerModules/>
      <EssentialSection/>
      <DecodeSection/>
      <WhoStrategy/>
      
    </div>
  )
}

export default page
