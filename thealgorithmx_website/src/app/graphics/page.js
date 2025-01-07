import React from 'react';
import GraphicsSection from './home';
import ServicesGrid from './graphics';
import DesignProcess from './dynamic';
import Scalable from'./scalable';
import  TechnologyToolbox from './toolbox';
import ResponsiveHero from './experience';
import InsightSection from './insight';



const Page = () => {
  return (
    <div >
      <GraphicsSection/>
      <ServicesGrid/>
      <DesignProcess/>
      <ResponsiveHero/>
      <Scalable/>
      < TechnologyToolbox/>
      <InsightSection/>
    </div>
  );
};

export default Page;
