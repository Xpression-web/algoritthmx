import React from 'react'
import Navbar from '../navbar/navbar'
import AdsAudit from './home'
import PPCAuditSection from './what'
import TestimonialSection from './coatation'
import PPCAudit from './happens'

const page = () => {
  return (
    <div>
    <Navbar/>
    <AdsAudit/>
    <PPCAuditSection/>
    <TestimonialSection/>
    <PPCAudit/>
    </div>
  )
}

export default page
