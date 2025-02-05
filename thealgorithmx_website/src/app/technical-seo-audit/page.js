import React from 'react'
import TechnicalSEOSection from './home'
import TechnicalServices from './technicalservices'
import TechnicalStrategy from './confidence'
import TechnicalBenefits from './benefit'
import TechnicalLeaveSection from './leave'
import TechnicalIdentifySection from './identify'


const page = () => {
  return (
    <div>
        <TechnicalSEOSection />
        <TechnicalServices />
        <TechnicalStrategy />
        <TechnicalBenefits />
        <TechnicalLeaveSection />
        <TechnicalIdentifySection />
       
    </div>
  )
}

export default page
