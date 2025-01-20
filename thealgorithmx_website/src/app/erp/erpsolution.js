import React from "react";
import style from './style.module.css';
import styles from '../contentcreation/style.module.css';
import { Montserrat } from "next/font/google";

const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "400",
});
const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "700",
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "800",
});
const monsterfont3 = Montserrat({
  subsets: ["latin"],
  weight: "300",
});


export default function Solution() {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className={` ${styles["container1"]} w-full max-w-[1200px] mx-auto ${styles["algo-content-creation-services"]}`}>
        {/* Left Section (Sticky) */}
  <div className={` ${styles["flx_left"]} flex flex-col lg:flex-row`}>
  <div className="flex flex-col md:flex-col lg:flex-col space-y-2">
      <span className={`${styles["explore"]} ${monsterfont1.className} text-white`}>Advantages of </span>
      <div className="space-x-2">
      <span className={`${styles["explore"]} ${monsterfont.className} text-white`}>Custom ERP</span>
      </div>
      <div>
      <span className={`${styles["explore"]} ${monsterfont.className} text-white`}>Solutions</span>
      </div>
  </div>

  {/* Vertical Line and Text */}
  <div className="flex items-center">
    <div className="h-20 border-l-8 border-blue-500 rounded-full mr-6"></div>
    <p className={` ${styles["content"]} text-semi-white`}>
      <span className={` ${monsterfont3.className}`}>DISCOVERED THE ADVANTAGES OF </span>
      <br />
      <span className={` ${monsterfont2.className}`}>TAILORED ERP SYSTEMS.</span>
    </p>
  </div>
</div>


        {/* Right Section (Scrollable) */}
        <div className= {`${styles["flx_right"]}`}>
        <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`} >TCO components</h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            Initial investments, frequent support, and ERP improvement costs offer higher ROI and lower ownership costs than the cost of pre-built ERPs.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`}>Functionality</h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            Utilize advanced technologies such as Blockchain, AI/ML, and IoT to improve the efficiency of your business as the solutions are customized to match diverse client needs and processes.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`}>Additional functionality 
            </h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            Flexible and can be applied according to your business’s transformation or expansion needs.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`}>Customization</h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            Offer limitless functionalities with high-quality personalization.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`}>Integration</h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            Effortless integration by all crucial systems, including legacy software.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`}>Learning curve</h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            Offers short learning curve due to custom User Interface (UI) and user-friendly User Experience (UX) for diverse user roles.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`}>Scalability</h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            Hold huge potential to accommodate growth with endless possibilities.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>

          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`}>Security</h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            Lower risks because of customized code design and amplified security measures.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>

          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`}>Legal compliance</h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            Compliance with all necessary global, regional and industry-relate regulations.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>
          
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`}>Maintenance and support</h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            A customer's preference is what determines whether to hire an in-house team or outsource to a vendor.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
