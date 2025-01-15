import React from 'react';
import BackEndSection from './home';
import BackEndTechStack from './btechstack'
import BackDesignProcess from './bdynamic';
import BackServicesGrid from './backdevelopment';
import BackWebDevServices from './bfullscale';
import InsightSection from '../Graphics/insight';
import Footer from '../Company/footer';

const page = () => {
  return (
    <div>
      <BackEndSection/>
      <BackServicesGrid/>
      <BackEndTechStack/>
      <BackDesignProcess/>
      <BackWebDevServices/>
      <InsightSection/>
      <Footer/>
    </div>
  )
}

export default page
