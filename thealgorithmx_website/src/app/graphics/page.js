import React from 'react';
import Navbar from '../navbar/navbar'
import GraphicsSection from './home';
import ServicesGrid from './graphics';
import DesignProcess from './dynamic';
import Scalable from'./scalable';
import  TechnologyToolbox from './toolbox';
import ResponsiveHero from './experience';
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer';



const Page = () => {
  return (
    <div >
      <Navbar/>
      <GraphicsSection/>
      <ServicesGrid/>
      <DesignProcess/>
      <ResponsiveHero/>
      <Scalable/>
      < TechnologyToolbox/>
      <InsightSection/>
      <Footer/>
    </div>
  );
};

export default Page;
