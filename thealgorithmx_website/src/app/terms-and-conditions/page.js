import React from 'react'
import Navbar from '../navbar/navbar'
import TermsSection from './home'
import Terms from './content'
import Footer from '../mainpage/footer'
const page = () => {
  return (
    <div>
    <Navbar/>
    <TermsSection/>
    <Terms/>
    <Footer/>
    </div>
  )
}

export default page
