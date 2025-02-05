import React from 'react'
import Navbar from '../navbar/navbar';
import DrupalSection from './home'
import DrupalServices from './dservices'
import DrupalFeatures from './dchoose'
import QualityBanner from './quality'
import DrupalDevelopmentTimeline from './dtimeline'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer';

const page = () => {
  return (
    <div>
      <Navbar/>
      <DrupalSection/>
      <DrupalServices/>
      <DrupalFeatures/>
      <QualityBanner/>
      <DrupalDevelopmentTimeline/>
      <InsightSection/>
      <Footer/>
    </div>
  )
}

export default page
