import React from 'react'
import Navbar from '../asample/naviagtion'
import BigDataSection from './home'
import BigDataGrid from './solution'
import DevelopmentProcess from './steps'
import BigDataTechnologyToolbox from './techstack'
import BigDataChoosePage from './choose'
import BigDataInsightSection from './insight'
const page = () => {
  return (
    <div>
    <Navbar/>
    <BigDataSection/>
    <BigDataGrid/>
    <DevelopmentProcess/>
    <BigDataChoosePage/>
    <BigDataTechnologyToolbox/>
    <BigDataInsightSection/>
    </div>
  )
}

export default page
