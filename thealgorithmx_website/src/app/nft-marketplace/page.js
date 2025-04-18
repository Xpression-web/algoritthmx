import React from 'react';
import Navbar from '../asample/naviagtion';
import NFTSection from './home';
import NFTServicesGrid from './services';
import NFTHeroSection from './leverage';
import Trust from './trust';
import IndustriesGrid from '../branding/industries';
import Footer from '../mainpage/footer';

const page = () => {
  return (
    <div>
      <Navbar/>
        <NFTSection/>
        <NFTServicesGrid/>
        <NFTHeroSection/>
        <Trust/>
      <IndustriesGrid/>
      <Footer/>
    </div>
  )
}

export default page
