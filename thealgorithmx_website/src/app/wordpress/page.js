import React from 'react'
import Navbar from '../navbar/navbar'
import WordPressSection from './home'
import WordPressServices from './wservice'
import WordpressFeatures from './wchoose'
import QualityBanner from './wquality'
import WordPressDevelopmentTimeline from './wtimeline'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer';

const page = () => {
  return (
    <div>
      <Navbar/>
      <WordPressSection/>
      <WordPressServices/>
      <WordpressFeatures/>
      <QualityBanner/>
      <WordPressDevelopmentTimeline/>
      <InsightSection/>
      <Footer/>
    </div>
  )
}

export default page
