import React from 'react'
import Navbar from '../navbar/navbar'
import MetaverseSection from './home'
import MetaverseServicesGrid from './services'
import MetaverseDevelopmentPage from './choose'
import MetaverseTechStack from './techstack'
import MetaverseProcess from './process'
import IndustriesGrid from '../branding/industries'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer'
const page = () => {
  return (
    <div>
        <Navbar/>
        <MetaverseSection/>
        <MetaverseServicesGrid/>
        <MetaverseDevelopmentPage/>
        <MetaverseTechStack/>
        <MetaverseProcess/>
        <IndustriesGrid/>
        <InsightSection/>
        <Footer/>
    </div>
  )
}

export default page
