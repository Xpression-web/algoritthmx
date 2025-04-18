// components/D1CaseStudyCard.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function D1CaseStudyCard({ study }) {
  return (
    <Link href={`/case-studies/${study.id}`} className="block mb-8">
      <div className="relative overflow-hidden rounded-lg h-96 bg-gradient-to-r from-gray-900 to-black">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            className="w-full h-full object-cover opacity-60" 
            loop 
            muted
            autoPlay
            playsInline
          >
            <source src={study.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Logo */}
        <div className="absolute top-8 left-8 z-10">
          <Image 
            src="/images/kfc-logo.png" 
            alt="Company Logo" 
            width={120} 
            height={50} 
          />
        </div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
          <h2 className="text-xl md:text-2xl font-bold mb-6 max-w-md">
            {study.title}
          </h2>
          
          {/* Metrics */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex flex-wrap gap-4 md:gap-8 mb-4 md:mb-0">
              {study.metrics.map((metric, index) => (
                <div key={index} className="border-l border-gray-500 pl-4">
                  <div className="text-xl md:text-2xl font-bold">{metric.value}</div>
                  <div className="text-xs md:text-sm text-gray-300">{metric.label}</div>
                </div>
              ))}
            </div>
            
            {/* View Case Study Button */}
            <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition w-full md:w-auto text-center">
              View Case Study
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}