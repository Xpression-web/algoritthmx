import React from 'react';
import VideoSection from './home';
import VideoServices from './videoservices';
import  DevelopmentProcess from './craftmanship';
import TechnologyToolbox from'./toolbox';
import InsightSection from './insight';
import ResponsiveHero from './experience';
import Home from './digital';


const page = () => {
  return (
    <div>
        <VideoSection/>
        <VideoServices/>
      < DevelopmentProcess/>
      <ResponsiveHero/>
      <Home/>
      <TechnologyToolbox/>
      <InsightSection/>
    </div>
  )
}

export default page;
