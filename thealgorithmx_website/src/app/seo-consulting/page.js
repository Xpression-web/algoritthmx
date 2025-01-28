import React from 'react'
import SEOConsultingSection from './home'
import ConsultingServices from './consultingservices'
import ConsultingStrategy from './opportunity'
import ConsultingBenefits from './choose'
import ConsultingBrandSection from './brand'
import ConsultingSolutionSection from './solution'
import ConsultingPartner from './partner'
const page = () => {
  return (
    <div>
    <SEOConsultingSection/>
    <ConsultingServices/>
    <ConsultingStrategy/>
    <ConsultingBenefits/>
    <ConsultingBrandSection/>
    <ConsultingPartner/>
    <ConsultingSolutionSection/>

    </div>
  )
}

export default page
