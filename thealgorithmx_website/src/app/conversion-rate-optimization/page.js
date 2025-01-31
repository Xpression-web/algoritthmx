import React from 'react'
import CROSection from './home'
import CROServices from './croservices'
import FeaturesSection from './box'
import CROStrategies from './solution'
import PRProcessVisualization from './prprocess'
import CROTechnologyToolbox from './crotoolbox'

const page = () => {
  return (
    <div>
    <CROSection/>
    <CROServices/>
    <FeaturesSection/>
    <CROStrategies/>
    <PRProcessVisualization/>
    <CROTechnologyToolbox/>
    </div>
  )
}

export default page
