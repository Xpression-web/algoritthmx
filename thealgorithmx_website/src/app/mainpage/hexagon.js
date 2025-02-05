import './style.css';
import { Montserrat } from "next/font/google";
import Link from 'next/link';

const monsterfont3 = Montserrat({
  subsets: ["latin"],
  weight: "700",
});

const Hexagon = () => {
  return (
    <div className="w-full h-full bg-black flex justify-center items-center">
      <div className="relative w-[500px] h-[500px]">
        {/* Outer hexagon - hidden on mobile (< 768px) */}
        <svg
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] hidden md:block"
          viewBox="0 0 300 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="300,150 225,280 75,280 0,150 75,20 225,20"
            className="fill-transparent stroke-white stroke-2"
          />
        </svg>

        {/* Inner hexagon */}
        <div className="container">
          <svg
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[200px] h-[160px] md:w-[300px] md:h-[250px]"
            viewBox="0 0 300 300"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              points="300,150 225,280 75,280 0,150 75,20 225,20"
              className="fill-transparent stroke-green-800 stroke-[40]"
            />
          </svg>
        </div>

        {/* SEO Center Icon */}
        <Link href="/seo" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center group">
          <img 
            src="/images/home-leads1.png" 
            alt="Email Marketing" 
            className="w-16 h-16 mx-auto transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,0,0,1)]" 
          />
          <span className={`text-[15px] leading-[24px] mb-[6px] ${monsterfont3.className} text-white`}>SEO</span>
        </Link>

        {/* Surrounding Items positioned at hexagon vertices */}
        {/* Top-left */}
        <Link href="social-app" className="absolute left-[20%] top-[20.3%] md:left-[5%] md:top-[10.3%] transform -translate-x-1/2 -translate-y-1/2 text-center group">
          <img 
            src="/images/home-leads7.png" 
            alt="Email Marketing" 
            className="w-16 h-16 mx-auto transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,0,0,1)]" 
          />
          <span className={`text-[15px] leading-[24px] mb-[6px] ${monsterfont3.className} text-white`}>Social <br/> Media</span>
        </Link>

        {/* Top-right */}
        <Link href="/ppc-advertising" className="absolute -right-[5%] top-[20.3%] md:-right-[10%] md:top-[10.3%] transform -translate-x-1/2 -translate-y-1/2 text-center group">
          <img 
            src="/images/home-leads6.png" 
            alt="Social Media" 
            className="w-16 h-16 mx-auto transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,0,0,1)]" 
          />
          <span className={`text-[15px] leading-[24px] mb-[6px] ${monsterfont3.className} text-white`}>PPC <br/> Advertising</span>
        </Link>

        {/* Left-middle */}
        <Link href="" className="absolute left-[10%] md:-left-[5%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center group">
          <img 
            src="/images/home-leads5.png" 
            alt="Content" 
            className="w-16 h-16 mx-auto transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,0,0,1)]" 
          />
          <span className={`text-[15px] leading-[24px] mb-[6px] ${monsterfont3.className} text-white`}>Email <br/>Marketing</span>
        </Link>

        {/* Right-middle */}
        <Link href="/public-relations" className="absolute -right-[8%] md:-right-[25%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center group">
          <img 
            src="/images/home-leads3.png" 
            alt="PPC Advertising" 
            className="w-16 h-16 mx-auto transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,0,0,1)]" 
          />
          <span className={`text-[15px] leading-[24px] mb-[6px] ${monsterfont3.className} text-white`}>Public<br/> Relations</span>
        </Link>

        {/* Bottom-right */}
        <Link href="/app-store" className="absolute -right-[5%] top-[75%] md:-right-[10%] md:top-[84.7%] transform -translate-x-1/2 -translate-y-1/2 text-center group">
          <img 
            src="/images/home-leads2.png" 
            alt="Public Relations" 
            className="w-16 h-16 mx-auto transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,0,0,1)]" 
          />
          <span className={`text-[15px] leading-[24px] mb-[6px] ${monsterfont3.className} text-white`}>App Store</span>
        </Link>

        {/* Bottom-left */}
        <Link href="/content" className="absolute left-[20%] top-[75%] md:left-[5%] md:top-[84.7%] transform -translate-x-1/2 -translate-y-1/2 text-center group">
          <img 
            src="/images/home-leads4.png" 
            alt="App Store" 
            className="w-16 h-16 mx-auto transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,0,0,1)]" 
          />
          <span className={`text-[15px] leading-[24px] mb-[6px] ${monsterfont3.className} text-white`}>Content</span>
        </Link>
      </div>
    </div>
  );
};

export default Hexagon;