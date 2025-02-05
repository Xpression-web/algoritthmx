import React from 'react'
import Navbar from '../navbar/navbar'
import ContactPage from './home'
import SupportSection from './contact'
import Footer from '../mainpage/footer'

const page = () => {
  return (
    <div>
        <Navbar/>
      <ContactPage/>
      <SupportSection/>
      <Footer/>
    </div>
  )
}

export default page
