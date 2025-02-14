import React from 'react'
import Navbar from '../navbar/navbar'
import RemarketinginAds from './home'
import RemarketingBenefits from './benefits'
import SmoothScrollStack from './approach'
import CampaignTabs from './services'
import TechnologyToolbox from './toolbox'
import RemarketingSection from './retargeting'
import AudienceSection from './audeience'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer'


const page = () => {
  return (
    <div>
    <Navbar/>
    <RemarketinginAds/>
    <SmoothScrollStack/>
    <RemarketingBenefits/>
    <CampaignTabs/>
    <TechnologyToolbox/>
    <RemarketingSection/>
    <AudienceSection/>
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
