import React from 'react'
import SEOEnterpriseSection from './home'
import EnterpriseServices from './enterpriseservices'
import EnterpriseStrategy from './opportunity'
import EnterpriseSEOBenefits from './benefits'
import EnterpriseMarketingSection from './marketing'
import EnterpriseRevenueSection from './revenue'
import EnterpriseReachSection from './quantifyng'


const page = () => {
return (
    <div>
    <SEOEnterpriseSection/>
    <EnterpriseServices/>
    <EnterpriseStrategy/>
    <EnterpriseSEOBenefits/>
    <EnterpriseMarketingSection/>
    <EnterpriseRevenueSection/>
    <EnterpriseReachSection/>
    </div>
)
}

export default page
