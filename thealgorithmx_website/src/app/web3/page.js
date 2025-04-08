import React from 'react'
import Web3Section from './home'
import Web3ServicesGrid from './services'
import Web3DevelopmentPage from './choose'
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer'


const page = () => {
  return (
    <div>
        <Web3Section />
        <Web3ServicesGrid/>
        <Web3DevelopmentPage/>
        <InsightSection/>
        <Footer/>
    </div>
  )
}

export default page
