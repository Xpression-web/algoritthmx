import React from 'react'
import HubSpotSection from './home'
import HubspotServices from './hservices'
import HubSpotFeatures from './hchoose'
import QualityBanner from './hquality'
import HubspotDevelopmentTimeline from './htimeline'
import InsightSection from '../graphics/insight'
import Footer from '../company/footer'

const page = () => {
  return (
    <div>
      <HubSpotSection/>
      <HubspotServices/>
      <HubSpotFeatures/>
      <QualityBanner/>
      <HubspotDevelopmentTimeline/>
      <InsightSection/>
      <Footer/>
    </div>
  )
}

export default page
