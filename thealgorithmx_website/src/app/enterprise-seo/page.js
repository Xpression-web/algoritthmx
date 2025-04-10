import React from 'react'
import Navbar from '../asample/naviagtion'
import SEOEnterpriseSection from './home'
import EnterpriseServices from './enterpriseservices'
import EnterpriseStrategy from './opportunity'
import EnterpriseSEOBenefits from './benefits'
import EnterpriseMarketingSection from './marketing'
import EnterpriseRevenueSection from './revenue'
import EnterpriseReachSection from './quantifyng'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer';


const page = () => {
return (
    <div>
    <Navbar/>
    <SEOEnterpriseSection/>
    <EnterpriseServices/>
    <EnterpriseStrategy/>
    <EnterpriseSEOBenefits/>
    <EnterpriseMarketingSection/>
    <EnterpriseRevenueSection/>
    <EnterpriseReachSection/>
    <InsightSection/>
    <Footer/>
    </div>
)
}

export default page
