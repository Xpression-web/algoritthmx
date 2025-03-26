import React from 'react'
import Navbar from '../navbar/navbar'
import IntegrationSection from './home'
import IntegrationStrategyGrid from './what'
import IntegrationServices from './solution'
import IntegrationBenefits from './choose'
import IntegrationTechnologyToolbox from './toolbox'
import IntegrationDevelopmentTimeline from './invest'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer'


const page = () => {
  return (
    <div>
    <Navbar/>
    <IntegrationSection/>
    <IntegrationStrategyGrid/>
    <IntegrationServices/>
    <IntegrationDevelopmentTimeline/>
    <IntegrationBenefits/>
    <IntegrationTechnologyToolbox/>
    <InsightSection/>
    <Footer/>
    </div>
  )
}

export default page
