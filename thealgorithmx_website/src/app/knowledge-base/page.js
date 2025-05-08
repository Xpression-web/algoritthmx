import React from 'react';
import Navbar from '../asample/naviagtion'
import CookieConsent from '../cookies/cookie'
import GlossaryHeader from './header';
import Glossary from './home';
import Footer from '../mainpage/footer';



const Page = () => {
  return (
    <div >
       <Navbar/>
    <CookieConsent/>
      <GlossaryHeader/>
      <Glossary/>
      <Footer/>
    </div>
  );
};

export default Page;
