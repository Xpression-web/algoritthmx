import React from 'react'
import BigCommerceSection from './home'
import BigcommerceServices from './bservices'
import BigcommerceFeatures from './bchoose'
import QualityBanner from './bquality'
import BigcommerceDevelopmentTimeline from './btimeline'
import InsightSection from '../graphics/insight'
import Footer from '../company/footer'


const page = () => {
  return (
    <div>
      <BigCommerceSection/>
      <BigcommerceServices/>
      <BigcommerceFeatures/>
      <QualityBanner/>
      <BigcommerceDevelopmentTimeline/>
      <InsightSection/>
      <Footer/>
    </div>
  )
}

export default page
