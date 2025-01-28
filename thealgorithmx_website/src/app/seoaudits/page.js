import React from 'react'
import SEOAuditSection from './home'
import AuditServices from './auditservices'
import SEOStrategy from './opportunity'
import SEOStrategyGrid from './techstack'
import SEOFactors from './seofactor'
import SEOReports from './reports'
import  SEOChecklist from './profiling'




const page = () => {
  return (
    <div>
      <SEOAuditSection/>
      <AuditServices/>
      <SEOStrategy/>
      <SEOStrategyGrid/>
      <SEOFactors/>
      <SEOReports/>
      <SEOChecklist/>
    </div>
  )
}

export default page
