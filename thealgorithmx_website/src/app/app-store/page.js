import React from 'react'
import AppSection from './home'
import ServicesGrid from './services'
import AppServices from './empower'
import DevelopmentTimeline from './timeline'

const page = () => {
  return (
    <div>
    <AppSection/>
    <ServicesGrid/>
    <AppServices/>
    <DevelopmentTimeline/>
    </div>
  )
}

export default page
