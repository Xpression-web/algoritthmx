import React from 'react'
import CRMServices from './crmservices'
import CRMDashboard from './development'
import CRMSection from './home'
import CRMSystem from './crmsystem'
import CRMTechStack from './crmtechstack'
import CRMDevelopmentTimeline from './crmtimeline'
import CRMOutcomes from './outcomes'
import CostEstimations from './crmcost'
import InsightSection from '../Graphics/insight'
import Footer from '../Company/footer'


const page = () => {
  return (
    <div>
      <CRMSection/>
      <CRMServices/>
      <CRMSystem/>
      <CRMDashboard/>
      <CRMOutcomes/>
      <CRMTechStack/>
      <CRMDevelopmentTimeline/>
      <CostEstimations/>
      <InsightSection/>
      <Footer/>

    </div>
  )
}

export default page
