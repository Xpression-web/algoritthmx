import React from 'react'
import SocialConsultingSection from './home'
import MarketingSection from './services'
import ConsultingSmoothScrollStack from './how'
import ConsultingWorthySection from './strategy'
import ConsultingImplementation from './customized'
import ConsultingStayingSection from './staying'



const page = () => {
  return (
    <div>
    <SocialConsultingSection/>
    <MarketingSection/>
    <ConsultingSmoothScrollStack/>
    <ConsultingWorthySection/>
    <ConsultingImplementation/>
    <ConsultingStayingSection/>
    </div>
  )
}

export default page
