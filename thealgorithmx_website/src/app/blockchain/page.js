import React from 'react'
import BlockContentSection from './home'
import BlockchainSolutions from './blocksolution'
import BlockServices from './blockservices'
import BlockchainHero from './blockdesign'
import BlockTechStack from './blocktechstack'
import InsightSection from '../graphics/insight'
import Footer from '../company/footer'

const page = () => {
  return (
    <div>
      <BlockContentSection/>
      <BlockServices/>
      <BlockchainSolutions/>
      <BlockchainHero/>
      <BlockTechStack/>
      <InsightSection/>
      <Footer/>
    </div>
  )
}

export default page
