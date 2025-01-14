import React from 'react';
import './style.css'
import { Montserrat } from 'next/font/google';

const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"200",
})

const IosSection = () => {
  return (
    <section className="relative w-full  bg-black flex items-center justify-center p-4 min-h-screen">
      <div className="max-w-[1200px] mx-auto text-center space-y-8">
        <h1 className={`ios  ${monsterfont1.className}  bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent `}>
        iOS App Development
        </h1>
        
        <p className={`ios-description  ${monsterfont1.className}  text-semii-white leading-relaxed`}>
        AlgorithmX offers custom iOS app development services, empowering visionary leaders and businesses to build long-lasting and scalable iOS applications with various advanced functionalities. Our expert iOS app developers build your vision into reality.
        </p>
      </div>
    </section>
  ); 
};

export default IosSection;