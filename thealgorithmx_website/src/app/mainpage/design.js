'use client';
import './styles.css';
import { Montserrat } from "next/font/google";



const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "700",
});

const ResponsiveGrid = () => {
  return (
    <div className="container1 min-h-screen bg-black place-content-center mx-auto  py-8 p-4">

      {/* Mobile Layout (5-7-5) - Show on small screens, hide on lg and up */}
      <div className="grid grid-cols-1 xxs:grid-cols-3 lg:hidden mt-3 gap-0 justify-center ">
        {/* First column with 5 items */}
        <div className="flex flex-col items-center justify-center">
        <GridItem image="6188204.png" />
          <GridItem image="5962632.png" />
          <GridItem image="14601160.png" />
          <GridItem image="4288871.png" />
          <GridItem image="992908.png" />
        </div>

        {/* Second column with 7 items */}
        <div className="flex flex-col items-center justify-center">
        <GridItem text="App" />
          <GridItem text="Web" />
          <GridItem text="CMS" />
          <GridItem text="CRM" />
          <GridItem text="ERP" />
          <GridItem text="ERP" />
          <GridItem text="ERP" />
        </div>

        {/* Third column with 5 items */}
        <div className="flex flex-col items-center justify-center">
          <GridItem image="1508883.png" />
          <GridItem image="9872417.png" />
          <GridItem image="8297441.png" />
          <GridItem image="4795542.png" />
          <GridItem image="4795542.png" />
        </div>
      </div>

      {/* Desktop Layout (2-3-2-3-2) - Hide on small screens, show on lg and up */}
      <div className="hidden lg:grid grid-cols-7 mt-3 gap-0 justify-center">
        {/* Column 1 (2 items) */}
        <div className="flex flex-col items-center justify-center">
          <GridItem image="6188204.png" />
          <GridItem text="App" />
        </div>

        {/* Column 2 (3 items) */}
        <div className="flex flex-col items-center justify-center">
          <GridItem image="5962632.png" />
          <GridItem text="Web" />
          <GridItem image="1508883.png" />
        </div>

        {/* Column 3 (2 items) */}
        <div className="flex flex-col items-center justify-center">
          <GridItem image="14601160.png" />
          <GridItem text="CMS" />
        </div>

        {/* Column 4 (3 items) */}
        <div className="flex flex-col items-center justify-center">
          <GridItem image="4288871.png" />
          <GridItem text="CRM" />
          <GridItem image="9872417.png" />
        </div>

        {/* Column 5 (2 items) */}
        <div className="flex flex-col items-center justify-center">
          <GridItem image="992908.png" />
          <GridItem text="ERP" />
        </div>

        {/* Column 6 (3 items) */}
        <div className="flex flex-col items-center justify-center">
          <GridItem image="10229073.png" />
          <GridItem text="Blockchain" />
          <GridItem image="8297441.png" />
        </div>

        {/* Column 7 (2 items) */}
        <div className="flex flex-col items-center justify-center">
          <GridItem image="4795542.png" />
          <GridItem text="Software" />
        </div>
      </div>
    </div>
    
  );
};

// GridItem component for reusability
const GridItem = ({ image, text }) => {
  return (
    <div className="bg-[#1b1a1a] p-2 m-0.5 text-center rounded-xl w-20 h-20 lg:w-32 lg:h-32 flex items-center justify-center text-sm">
      {image ? (
        <img 
          src={`/images/${image}`} 
          alt="grid item" 
          className="w-16 h-16 object-cover m-0 p-0 filter grayscale"
        />
      ) : (
        <a href="#" className={`text-[20px] leading-[34px] mb-[6px]  ${monsterfont.className} text-[#e6c522] no-underline `}>
          {text}
        </a>
      )}
    </div>
  );
};

export default ResponsiveGrid;