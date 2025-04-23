'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function BlogCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const carouselImages = [
    '/images/gallery-post-01.jpg',
    '/images/gallery-post-03.jpg',
    '/images/gallery-post-03.jpg',

  ]
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };
  
  return (
    <div className="min-h-screen bg-black pt-[100px] p-[20px]">
    <div className="max-w-[1200px] mx-auto my-8 ">
      {/* Main Carousel with Featured Post desktop hidden*/}
      <div className="relative mb-16 md:hidden">
    {/* Wrapper to change layout in mobile */}
  <div className="flex flex-col md:flex-row items-start relative">
    {/* Main image container */}
    <div className="relative h-[12rem] rounded-lg overflow-hidden w-full md:w-1/2">
      {carouselImages.map((image, index) => (
        <div 
          key={index}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={image} 
            alt={`Carousel slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      
      {/* Carousel Indicator - centered dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {carouselImages.map((_, index) => (
          <div 
            key={index} 
            className={`w-2 h-2 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>

    {/* Content box */}
    <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-6 relative">
      <div className="w-full bg-white shadow-lg rounded-lg p-4 md:p-6">
        <p className="text-red-500 text-sm font-medium mb-4">CAREERS</p>
        <h2 className="text-black md:text-2xl font-bold mb-6">
          <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-no-repeat bg-[length:0%_2px] hover:bg-[length:100%_2px] transition-all duration-500">
            These 5 tips will help you nail your next design presentation
          </span>
        </h2>
        
        <div className="flex items-center mt-6 flex-wrap">
          <div className="w-8 h-8 rounded-full overflow-hidden mr-3 bg-gray-300">
            <img src="/api/placeholder/32/32" alt="Author" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-black font-medium">Syed Tahmim</p>
            <p className="text-black text-sm">Feb 17, 2019 • 300k Views</p>
          </div>
          
        </div>
        
        <div className="mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium">
            Read Post
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Carousel Controls positioned at bottom left for desktop and mobile centered */}
  <div className="mt-6 md:mt-0 flex justify-center md:justify-start space-x-4 md:absolute md:-bottom-12 md:left-0">
    <button 
      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700"
      onClick={prevSlide}
    >
      ←
    </button>
    <button 
      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700"
      onClick={nextSlide}
    >
      →
    </button>
  </div>
</div>

      <div className="relative mb-16 md:block hidden">
        {/* Main image container */}
        <div className="relative h-[520px] w-full rounded-lg overflow-hidden">
        {carouselImages.map((image, index) => (
            <div 
              key={index}
              className={`absolute w-full h-full transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={image} 
                alt={`Carousel slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {/* Carousel Indicator - centered dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {carouselImages.map((_, index) => (
              <div 
                key={index} 
                className={`w-2 h-2 rounded-full ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
        <Link href="/ebooks">
        {/* Content box that overlaps from right */}
        <div className="absolute top-0 right-0 md:w-1/2 w-[90%]">
          <div className="absolute top-0 md:right-[50px] w-full bg-white shadow-lg rounded-lg transform translate-y-[120%]">
            <div className="md:p-6 p-[5px]">
              <p className="text-red-500 text-sm font-medium mb-4">CAREERS</p>
              <h2 className="text-black md:text-2xl font-bold mb-6">
                <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-no-repeat bg-[length:0%_2px] hover:bg-[length:100%_2px] transition-all duration-500">
                  These 5 tips will help you nail your next design presentation
                </span>
              </h2>
              
              <div className="flex items-center mt-6">
                <div className="w-8 h-8 rounded-full overflow-hidden mr-3 bg-gray-300">
                  <img src="/api/placeholder/32/32" alt="Author" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-black font-medium">Syed Tahmim</p>
                  <p className="text-black text-sm">Feb 17, 2019 • 300k Views</p>
                </div>
                
                
              </div>
              
              <div className="mt-6">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium">
                  Read Post
                </button>
              </div>
            </div>
          </div>
        </div>
        </Link>
        
        {/* Carousel Controls positioned at bottom left */}
        <div className="absolute -bottom-12 left-0 flex space-x-4">
          <button 
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700"
            onClick={prevSlide}
          >
            ←
          </button>
          <button 
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700"
            onClick={nextSlide}
          >
            →
          </button>
        </div>
        </div>
      
      {/* More Featured Posts */}
      <div className="mt-[120px]">
        <h3 className="text-2xl font-bold text-white mb-6">More Featured Posts.</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Featured Post 1 */}
          <Link href="#" className="rounded-lg overflow-hidden shadow-md bg-white h-full group">
            <div className="flex flex-col sm:flex-row h-full">
              <div className="sm:w-2/5 h-40 sm:h-auto relative overflow-hidden">
                <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src="/images/post-images-1.jpg" 
                    alt="Apple iOS 14"
                    className="w-full h-full object-cover rounded-full p-[10px]" 
                  />
                </div>
              </div>
              <div className="p-6 sm:w-3/5 flex flex-col justify-between">
                <div>
                  <p className="text-red-500 text-xs font-semibold mb-2">APPLE DESIGN</p>
                  <h4 className="text-lg font-bold">
                    <span className=" text-black bg-left-bottom bg-gradient-to-r from-black to-black bg-no-repeat bg-[length:0%_2px] group-hover:bg-[length:100%_2px] transition-all duration-500">
                      Apple reimagines the iPhone experience with iOS 14
                    </span>
                  </h4>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-6 h-6 rounded-full overflow-hidden mr-3 bg-gray-300">
                    <img src="/api/placeholder/24/24" alt="Author" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-black text-xs">Ismat Jahan</p>
                    <p className="text-black text-xs">Feb 17, 2019 • 30.4k Views</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          
          {/* Featured Post 2 */}
          <Link href="#" className="rounded-lg overflow-hidden shadow-md bg-white h-full group">
            <div className="flex flex-col sm:flex-row h-full">
              <div className="sm:w-2/5 h-40 sm:h-auto relative overflow-hidden">
                <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                <img 
                    src="/images/post-images-1.jpg" 
                    alt="Apple iOS 14"
                    className="w-full h-full object-cover rounded-full p-[10px]" 
                  />
                </div>
              </div>
              <div className="p-6 sm:w-3/5 flex flex-col justify-between">
                <div>
                  <p className="text-red-500 text-xs font-semibold mb-2">TECH</p>
                  <h4 className="text-lg font-bold">
                    <span className="text-black bg-left-bottom bg-gradient-to-r from-black to-black bg-no-repeat bg-[length:0%_2px] group-hover:bg-[length:100%_2px] transition-all duration-500">
                      Flutter: the good, the bad and the ugly
                    </span>
                  </h4>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-6 h-6 rounded-full overflow-hidden mr-3 bg-gray-300">
                    <img src="/api/placeholder/24/24" alt="Author" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-black text-xs">Jone Doe</p>
                    <p className="text-black text-xs">Feb 17, 2019 • 20.4k Views</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}