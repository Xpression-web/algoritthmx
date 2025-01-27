import React from 'react'
import ContentSection from './home'
import DigitalSolutions from './innovative'
import Services from './services'
import ContentDevelopmentProcess from './craftmanship'
import ContentFeatures from './importance'
import ServicesSection from './growth'


const page = () => {
  return (
    <div>
        <ContentSection />
        <DigitalSolutions />
        <Services />
        <ContentDevelopmentProcess />
        <ContentFeatures />
        <ServicesSection/>
    </div>
  )
}

export default page
