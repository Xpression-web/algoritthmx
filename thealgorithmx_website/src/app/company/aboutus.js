import React from 'react';
import { Montserrat } from 'next/font/google';

const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"300",
})
const monsterfont = Montserrat ({
  subsets : ["latin"],
  weight :"600",
})

const Aboutus = () => {
  return (
    <section className="relative w-full min-h-screen bg-black text-gray-300 flex items-center justify-center p-8 ">
      <div className="max-w-6xl mx-auto text-center space-y-0 ">
        <h1 className={`algo-line-height-1 font-size-60  ${monsterfont.className} text-white font-helvetica mb-8`}>
          Introduction
        </h1>
        
        <p className={`algo-line-height-24  text-center text-lg  ${monsterfont1.className} text-semi-white`}>
          Welcome to AlgorithmX, where technology meets excellence. As a leading end-to-end digital agency, 
          we are dedicated to transforming your business with a personalized approach as we align your business 
          goals with the right strategies, utilizing the latest tools and technologies to deliver measurable results.
       
        
        
          We specialize in creating strong brand identities, captivating visuals, and engaging content. 
          We develop user-friendly apps and implement strategies to improve online visibility and audience engagement. 
          Additionally, we offer targeted advertising, optimization techniques, and comprehensive marketing 
          campaigns to foster fast business growth.
        </p>
      </div>
    </section>
  );
};

export default Aboutus;