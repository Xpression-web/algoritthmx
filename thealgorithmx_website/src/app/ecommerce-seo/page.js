import React from 'react'
import EcommerceSEOSection from './home'
import EcommerceServices from './ecommerceservices'
import EcommerceStrategy from './opportunity'
import EcommerceSEOBenefits from './benefits'
import EcommerceRankSection from './rank'
import EcommerceImplementation from './implement'
import EcommerceCodeSection from './code'
import DeliverablesSection from './client'


const page = () => {
  return (
    <div>
        <EcommerceSEOSection />
        <EcommerceServices />
        <EcommerceStrategy />
        <EcommerceSEOBenefits />
        <EcommerceRankSection />
        <EcommerceImplementation />
        <EcommerceCodeSection />
        <DeliverablesSection />
    </div>
  )
}

export default page
