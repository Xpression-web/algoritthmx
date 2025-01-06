import React from 'react';
import Aboutus from './aboutus';
import AboutSection from'./aboutsection';
import PrinciplesSection from './principles';
import Vision from './vision'
import Footer from './footer';

const Page = () => {
  return (
    <div >
        <AboutSection/>
        <Aboutus/>
        <Vision/>
        <PrinciplesSection/>
        <Footer/>
        
    </div>
  );
};

export default Page;
