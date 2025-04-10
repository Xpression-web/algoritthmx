import React from 'react';
import Navbar from '../asample/naviagtion';
import Aboutus from './aboutus';
import AboutSection from'./aboutsection';
import PrinciplesSection from './principles';
import Vision from './vision'
import Footer from '../mainpage/footer';

const Page = () => {
  return (
    <div >
      <Navbar/>
        <AboutSection/>
        <Aboutus/>
        <Vision/>
        <PrinciplesSection/>
        <Footer/>
        
    </div>
  );
};

export default Page;
