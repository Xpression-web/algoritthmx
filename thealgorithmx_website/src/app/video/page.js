import React from 'react';
import Navbar from '../navbar/navbar'
import VideoSection from './home';
import VideoServices from './videoservices';
import  DevelopmentProcess from './craftmanship';
import TechnologyToolbox from'./toolbox';
import ResponsiveHero from  '../graphics/experience'
import Home from './digital';
import InsightSection from '../graphics/insight'
import Footer from '../mainpage/footer';


const page = () => {
  return (
    <div>
      <Navbar/>
        <VideoSection/>
        <VideoServices/>
      < DevelopmentProcess/>
      <ResponsiveHero/>
      <Home/>
      <TechnologyToolbox/>
      <InsightSection/>
      <Footer/>
    </div>
  )
}

export default page;
