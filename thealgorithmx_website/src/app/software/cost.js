import React from 'react';
import style from '../crm/style.module.css'
import styles from './style.module.css'
import { Montserrat } from 'next/font/google';


const monsterfont = Montserrat ({
  subsets : ["latin"],
  weight :"100",
})
const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"300",
})
const monsterfont2 = Montserrat ({
  subsets : ["latin"],
  weight :"700",
})

const CostEstimation = () => {
  const estimates = [
    {
      iconColor: "emerald",
      price: "$30,000-$70,000",
      description: "Mobile App of moderate level of complexity"
    },
    {
      iconColor: "blue",
      price: "$70,000-$150,000",
      description: "Mobile banking app or health app"
    },
    {
      iconColor: "blue",
      price: "$150,000-$350,000",
      description: "Mid-market web platform for clients"
    },
    {
      iconColor: "blue",
      price: "$200,000-$400,000",
      description: "Creating a moderately complex specialized automation solution tailored to specific needs (such as accounting, supply chain management, or ecommerce)"
    },
    {
      iconColor: "blue",
      price: "$800,000-$4,000,000",
      description: "Deploying an extensive business automation system fueled by big data and artificial intelligence/machine learning capabilities"
    }
  ];

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-[1200px] mx-auto">
      <h1 className={`${style["cost-title"]}  ${monsterfont.className} `}>Cost</h1>
      <h2 className={`${style["cost-title"]}  ${monsterfont1.className} mb-8 `}>Estimations</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {estimates.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className={`  ${style["border-design1"]}  bg-black flex flex-col items-center text-center`}
            >
              <div className="mb-4 mt-[30px]">
                {index === 0 && (
                  <img 
                    src="/images/mobile.svg" 
                    alt="Mobile app icon" 
                    className="mx-auto mb-4 w-[50px] h-[50px] object-cover"
                  />
                )}
                {index === 1 && (
                  <img 
                    src="/images/mobile.svg"
                    alt="Settings icon" 
                    className="mx-auto mb-4 w-[50px] h-[50px] object-cover"
                  />
                )}
                {index === 2 && (
                  <img 
                    src="/images/mobile.svg" 
                    alt="Shopping cart icon" 
                    className="mx-auto mb-4 w-[50px] h-[50px] object-cover"
                  />
                )}
              </div>
              <div className={`${styles["cost-price"]}  ${monsterfont2.className} text-center `}>
                {item.price}
              </div>
              <p className={`${style["cost-description"]}  mt-4 text-semi-white`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {estimates.slice(3).map((item, index) => (
            <div
              key={index + 3}
              className="p-6  border border-pink-500 shadow-[0px_0px_8px_2px_rgba(234,38,85,0.5)]  bg-black flex flex-col items-center text-center"
            >
              <div className="mb-4 mt-[30px]">
                {index === 0 && (
                  <img 
                    src="/images/mobile.svg" 
                    alt="Settings icon" 
                    className="mx-auto mb-4 w-[50px] h-[50px] object-cover"
                  />
                )}
                {index === 1 && (
                  <img 
                    src="/images/mobile.svg" 
                    alt="Shopping cart icon" 
                    className="mx-auto mb-4 w-[50px] h-[50px] object-cover"
                  />
                )}
              </div>
              <div className={`${styles["cost-price"]}  ${monsterfont2.className} text-center `}>
                {item.price}
              </div>
              <p className={`${style["cost-description"]}  mt-4 text-semi-white`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CostEstimation;
