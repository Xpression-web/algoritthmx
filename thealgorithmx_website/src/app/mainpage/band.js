import React from "react";
import { Montserrat } from "next/font/google";


const monsterfont3 = Montserrat({
  subsets: ["latin"],
  weight: "300",
});

const ResultsRow = () => {
  return (
    <div className="flex w-full h-auto md:h-full lg:h-full">
      {/* Left Side - Black Background */}
      <div className="w-1/2 bg-black flex justify-start items-center p-24 ">
        <div className={`  ${monsterfont3.className} text-white text-4xl md:text-[80px] leading-[0.875] tracking-[0.02em] -ml-10 md:ml-10`}>
          Results
        </div>
      </div>

      {/* Right Side - Pink Background */}
      <div className="w-1/2 text-rose  flex justify-start items-center p-16">
        <div className={`    text-4xl md:text-[224px]  -ml-10 md:ml-10 ${monsterfont3.className}`}>
          90%
        </div>
      </div>
    </div>
  );
};

export default ResultsRow;
