import React from 'react'
import IntelligentSection from './home'
import Scalable from './need'
import IntelligentBenefits from './choose'
import IntelligentServices from './services'
import IntelligentInsightSection from './insight'

const page = () => {
  return (
    <div>
    <IntelligentSection/>
    <Scalable/>
    <IntelligentServices/>
    <IntelligentBenefits/>
    <IntelligentInsightSection/>
    </div>
  )
}

export default page
