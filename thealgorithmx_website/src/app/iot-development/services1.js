// pages/index.js
'use client'
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  const [activeService, setActiveService] = useState(0);
  
  const services = [
    {
      title: "IoT Consulting",
      description: "At AlphaCrease Creations, we focus on delivering more than just designs.",
      image: "/images/portrait-person-ai-robot.jpg"
      
    },
    {
      title: "IoT App Development",
      description: "At AlphaCrease Creations, we focus on delivering more than just designs.",
      image: "/images/ai44.avif"
      
    },
    {
      title: "IoT Wearable Connectivity",
      description: "At AlphaCrease Creations, we focus on delivering more than just designs.",
      image: "/images/digital-environment-scene.jpg"
    },
    {
      title: "IoT Testing",
      description: "At AlphaCrease Creations, we focus on delivering more than just designs.",
      image: "/images/ai11.avif"
    },
    {
      title: "AIoT",
      description: "At AlphaCrease Creations, we focus on delivering more than just designs.",
      image: "/images/ai22.avif"
    },
    {
      title: "IIoT",
      description: "At AlphaCrease Creations, we focus on delivering more than just designs.",
      image: "/images/ai33.avif"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Design Services</title>
        <meta name="description" content="Our design services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-6">Design services that we provide</h1>
            <p className="text-lg text-gray-300 max-w-2xl">
              Explore our range of design services designed to go beyond aesthetics.
              We specialize in crafting purposeful experiences that align with your
              brand's vision and goals.
            </p>
          </div>

          {/* Main content - desktop layout */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left side - services grid */}
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div
                key={index}
                className={`p-6 border rounded-lg cursor-pointer transition-all duration-300 ${
                  activeService === index 
                    ? 'border-blue-500  shadow-md shadow-blue-500' 
                    : 'border-gray-700 hover:border-gray-500 hover:shadow-md hover:shadow-blue-500'
                }`}
                onMouseEnter={() => setActiveService(index)}
              >
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
              ))}
            </div>

            {/* Right side - changing image (hidden on mobile) */}
            <div className="hidden md:block w-full md:w-1/2 relative h-[600px] rounded-xl overflow-hidden">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    activeService === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="relative h-full w-full bg-gray-800 flex items-center justify-center">
                    <Image 
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}