
import React from 'react'
import ContentSection from './home';
import InteractiveBox from "./method";
import CostEstimation from './cost';
import BusinessSolutions from './software';
import SoftwareServices from './discover';
import SoftwareDevelopmentTimeline from './timeline';
import SoftwareTechStack from './techstack';

const page = () => {
  return (
    <div>
        <ContentSection/>
        <SoftwareServices/>
        <BusinessSolutions/>
        <InteractiveBox />
        <SoftwareDevelopmentTimeline/>
        <SoftwareTechStack/>
        <CostEstimation/>
    </div>
  )
}

export default page
