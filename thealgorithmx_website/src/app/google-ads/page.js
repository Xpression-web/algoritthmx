import React from 'react'
import Navbar from '../navbar/navbar'
import GoogleAds from './home'
import Targeted from './targeted'
import ServicesAccordion from './services'

const page = () => {
  return (
    <div>
        <Navbar/>
    <GoogleAds/>
    <Targeted/>
    <ServicesAccordion/>
    </div>
  )
}

export default page
