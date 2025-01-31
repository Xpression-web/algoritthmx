import React from 'react'
import FranchiseSection from './home'
import FranchiseServices from './services'
import FranchiseStrategy from './who'
import FranchiseEnterprise from './enterprise'
import EssentialSection from './essential'
import FranchiseProcessVisualization from './process'
import ElevateSection from './elevate'


const page = () => {
  return (
    <div>
        <FranchiseSection/>
        <FranchiseServices/>
        <FranchiseStrategy/>
        <FranchiseEnterprise/>
        <EssentialSection/>
        <FranchiseProcessVisualization/>
        <ElevateSection/>
    </div>
  )
}

export default page
