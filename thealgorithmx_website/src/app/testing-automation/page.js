import React from 'react'
import Navbar from '../navbar/navbar'
import TestingSection from './home'
import TestingServices from './testing'
import QAProcessDiagram from './quality'
import TestingBenefits from './choose'
import Footer from '../mainpage/footer'


const page = () => {
  return (
    <div>
    <Navbar/>
    <TestingSection/>
    <TestingServices/>
    <QAProcessDiagram/>
    <TestingBenefits/>
    <Footer/>
    </div>
  )
}

export default page
