import React from 'react';
import './shooting.css';
import { Montserrat } from 'next/font/google';

const monsterfont1 = Montserrat({
subsets: ["latin"],
weight: "500",
fallback: ["sans-serif"],
});

const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-300 overflow-hidden px-4 py-8 min-h-[400px]">
      <div className='span1'></div>
      <div className='span1'></div>
      <div className='span1'></div>
      <div className='span1'></div>
      <div className='span1'></div>
      <div className='span1'></div>
      <div className='span1'></div>
      <div className='span1'></div>
      <div className='span1'></div>
      <div className='span1'></div>
      <div className='span1'></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4"></div>
        <div className="absolute top-1/3 left-2/3 animation-delay-1000"></div>
        <div className="absolute top-2/3 left-1/2 animation-delay-2000"></div>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Company Info - Left */}
          <div className="flex flex-row items-start gap-10" >
            <div className="flex flex-col items-start">
              <h2 className={`text-[16px] ${monsterfont1.className}  text-white mb-3`}>ALGORITHMX</h2>
              <div className="w-32 h-32 relative mb-1">
                <img 
                  src="images/usa.webp" 
                  alt="NYC Skyline" 
                  className="object-contain mt-10"
                />
              </div>
              <div className="space-y-1 text-[12px] font-[Helvetica] text-semi-white">
                <p>2810 N Church St, PMB 15369,</p>
                <p>Wilmington, DE 19802</p>
                <p>AlgorithmX Inc</p>
                <a href="mailto:connect@thealgorithmx.com" className="hover:text-white transition-colors">
                  connect@thealgorithmx.com
                </a>
                <p>+1-425-577-6660</p>
              </div>
            </div>
  
            <div className="flex flex-col items-start ">
              <h2 className="text-xl font-bold text-white mb-2">&nbsp;</h2>
              <div className="w-32 h-32 relative mb-1">
                <img 
                  src="images/india.webp" 
                  alt="Taj Mahal" 
                  className="object-contain mt-10"
                />
              </div>
              <div className="space-y-1 text-[12px] font-[Helvetica] text-semi-white ">
                <p>Operation Control Center</p>
                <p>Cyber City, Sector 24, Gurgaon,</p>
                <p>Haryana, India AlgorithmX Inc</p>
                <a href="mailto:connect@thealgorithmx.com" className="hover:text-white transition-colors">
                  connect@thealgorithmx.com
                </a>
                <p>1800 202 2202</p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className='md:ml-[100px]'>
          <h3 className={`text-[16px] ${monsterfont1.className} text-white mb-4 md:ml-5`}>FOLLOW US</h3>
            <div className="flex gap-4">
            <a href="https://www.facebook.com/algorithmxinc" target="_blank" className="transition-opacity">
            <img src="/images/icons8-facebook.svg" alt="Facebook" className="w-6 h-6 hover:filter hover:brightness-0 hover:saturate-100 hover:invert-[31%] hover:sepia-[100%] hover:saturate-[1000%] hover:hue-rotate-[190deg] hover:brightness-[100%] hover:contrast-[100%]" />
            </a>
            <a href="http://x.com/algorithmxinc" target="_blank" className="transition-opacity">
              <img src="/images/icons8-twitter.svg" alt="Twitter" className="w-6 h-6 hover:filter hover:brightness-0 hover:saturate-100 hover:invert-[31%] hover:sepia-[100%] hover:saturate-[1000%] hover:hue-rotate-[190deg] hover:brightness-[100%] hover:contrast-[100%]" />
            </a>
            <a href="https://www.instagram.com/thealgorithmx/" target="_blank" className="transition-opacity">
              <img src="/images/icons8-instagram.svg" alt="Instagram" className="w-6 h-6 hover:filter hover:brightness-0 hover:saturate-100 hover:invert-[31%] hover:sepia-[100%] hover:saturate-[1000%] hover:hue-rotate-[190deg] hover:brightness-[100%] hover:contrast-[100%]" />
            </a>
            <a href="https://www.linkedin.com/company/algorithmxinc" target="_blank" className="transition-opacity">
              <img src="/images/icons8-linkedin.svg" alt="LinkedIn" className="w-6 h-6 hover:filter hover:brightness-0 hover:saturate-100 hover:invert-[31%] hover:sepia-[100%] hover:saturate-[1000%] hover:hue-rotate-[190deg] hover:brightness-[100%] hover:contrast-[100%]" />
            </a>
            </div>
          </div>


          {/* Newsletter Subscription */}
          <div>
            <h3 className={`text-[16px] ${monsterfont1.className}  text-white  mb-2`}>ALGORITHMX NEWSLETTER</h3>
            <p className={`text-[14px] ${monsterfont1.className}  text-white  mb-4`}>From Concept To Market Dominance</p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="enter-your@mail.com"
                className="w-full px-6 py-3 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <a href='/contact-us '>
              <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200 mt-5">
                <span>
                  <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                </span>
                <span className="backdrop absolute inset-[1px] rounded-full bg-black transition-colors duration-200 group-hover:bg-slate-800" />
                <span className="text z-10 text-[#cbd5e1]">Subscribe</span>
              </button>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className=" pt-4 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] font-[Helvetica] text-white">©2024 AlgorithmX. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-500 transition-colors text-[12px] font-[Helvetica] text-white">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500 transition-colors text-[12px] font-[Helvetica] text-white">Terms of use</a>
            <a href="#" className="hover:text-blue-500 transition-colors text-[12px] font-[Helvetica] text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;