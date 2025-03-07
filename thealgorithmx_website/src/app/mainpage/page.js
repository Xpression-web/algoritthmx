import React from 'react';
import Navbar from '../navbar/navbar';
import DiagonalGridWithText from './rotate';
import ResponsiveGrid from './design';
import PlatformPerformance from './button';
import Roadmap from './roadmap';
import ServicesSection from './box';
import Hexagon from './hexagon';
import ResultRow from './band';
import MarketingGrid from './Marketing';
import  Reviews from './reviews';
import ParticleAnimation from './Honeycomb';
import Footer from '../mainpage/footer';


const Page = () => {
  return (
    <div >
      <Navbar/>
      <ParticleAnimation/>
      
      <ResponsiveGrid/>
      <Hexagon/>
      <ServicesSection/>
      <Roadmap/>
      <DiagonalGridWithText/>
      <PlatformPerformance/>
      <ResultRow/>
      <MarketingGrid/>
      <Reviews/>
      <Footer/>
    </div>
  );
};

export default Page;
