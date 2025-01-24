import React from 'react'
import PublicContentSection from './home'
import PublicServices from './publicservices'
import PublicEnhancedSection from './enhanced'
import PublicTargetedSection from './targeted'
import PRProcessVisualization from './prprocess'
import PublicPressSection from './press'
import PublicSeizeSection from './seize'

const page = () => {
  return (
    <div>
      <PublicContentSection/>
        <PublicServices/>
        <PublicEnhancedSection/>
        <PublicTargetedSection/>
        <PRProcessVisualization/>
        <PublicPressSection/>
        <PublicSeizeSection/>

    </div>
  )
}

export default page
