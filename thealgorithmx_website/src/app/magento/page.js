import React from 'react';
import MagentoSection from './home';
import MagentoServices from './mservices'
import MagentoFeatures from './mchoose';
import QualityBanner from './mquality';
import MagentoDevelopmentTimeline from './mtimeline';
import InsightSection from '../graphics/insight';
import Footer from '../company/footer';

const page = () => {
  return (
    <div>
        <MagentoSection/>
      <MagentoServices/>
      <MagentoFeatures/>
      <QualityBanner/>
      <MagentoDevelopmentTimeline/>
      <InsightSection/>
      <Footer/>
    </div>
  )
}

export default page
