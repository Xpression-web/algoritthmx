'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "700",
});

const servicesData = [
  {
    id: 1,
    title: ['DISPLAY', 'BANNERS'],
    description: 'AlgorithmX offers innovative banner design services that support your marketing efforts. Whether you need Static or dynamic HTML banners, we have got you covered.',
    image: 'images/Graphics.webp',
    textGradient: 'from-amber-600 to-amber-800'
  },
  {
    id: 2,
    title: ['EMAIL', 'TEMPLATE'],
    description: 'Our dedicated designing team designs professional and customized email templates that align with your brand identity and ensure effective communication, therefore increasing engagement.',
    image: 'images/Graphics.webp',
    textGradient: 'from-blue-400 to-blue-600'
  },
  {
    id: 3,
    title: ['SOCIAL', 'MEDIA'],
    description: 'The detailed planning of our experienced graphic designers injects fresh air into your social media content\'s universe, helping your audience grow fast through well-designed engaging posts that grab attention.',
    image: 'images/Graphics.webp',
    textGradient: 'from-cyan-400 to-cyan-600'
  },
  {
    id: 4,
    title: ['CORPORATE', 'ASSETS'],
    description: 'As one of the best graphic design agencies, we use a rough plan to devise custom visually compelling material that fits your business needs. Our detailed and eye-catching whitepaper/PPT layouts are carefully designed to be compelling and serve as strong content marketing aids.',
    image: 'images/Graphics.webp',
    textGradient: 'from-slate-400 to-slate-600'
  },
  {
    id: 5,
    title: ['INFO-', 'GRAPHICS'],
    description: "AlgorithmX's affordable web design services extend to generating designed content such as brand graphics, infographics, and data visualizations to be used on websites, original documents, reports, and presentations.",
    image: 'images/Graphics.webp',
    textGradient: 'from-teal-400 to-teal-600'
  },
  {
    id: 6,
    title: ['PRINT', 'MEDIA'],
    description: 'Get precisely designed packaging for a range of products such as posters, book covers, magazines, trade show graphics, stickers, and many more, that matches your brand voice as part of our offshore creative design services.',
    image: 'images/Graphics.webp',
    textGradient: 'from-purple-400 to-purple-600'
  }
];

const FlipCard = ({ service }) => {
  return (
    <div className="relative h-80 mb-10">
      {/* Mobile Layout */}
      <div className="md:hidden h-full">
        <div className="h-full bg-black p-6 flex flex-col items-center justify-center">
          <div className="text-center">
            <h3 
              className="text-3xl font-bold text-transparent bg-clip-text"
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {service.title.join(' ')}
            </h3>
            <p className="text-white/80 text-sm mt-4 mb-6">{service.description}</p>
            <div className="w-full h-0.5 bg-white/20 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Desktop Flip Card Layout */}
      <div className="hidden md:block h-full group [perspective:1000px]">
        <div className="relative h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* Front Side */}
          <div className="absolute inset-0 [backface-visibility:hidden] bg-black p-8 flex items-center justify-center">
            <div className="flex flex-col justify-center items-center">
              {service.title.map((line, index) => (
                <h3
                  key={index}
                  className="text-4xl font-bold text-transparent bg-clip-text"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {line}
                </h3>
              ))}
            </div>
          </div>

          {/* Back Side */}
          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="relative h-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${service.image})`,
                  filter: 'brightness(0.4)',
                }}
              />
              <div className="relative z-10 flex items-center justify-center h-full p-8">
                <div className="text-center text-white">
                  <span className="text-2xl font-bold mb-4">
                    {String(service.id).padStart(2, '0')}
                  </span>
                  <p className="text-lg mt-4">{service.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="text-center mb-16 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span
              className={`mb-8 text-5xl md:text-8xl ${monsterfont.className} lg:text-8xl font-bold text-gray-600/20 transition-all duration-1000 transform
                ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}
            >
              SERVICES
            </span>
          </div>

          <div className={`relative z-10 `}>
            <h2 className="text-2xl md:text-3xl mt-12 text-white mb-2">
              GRAPHICS
            </h2>
            <h3 className="text-3xl md:text-4xl font-semibold text-white">
              SERVICES
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map(service => (
            <FlipCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;