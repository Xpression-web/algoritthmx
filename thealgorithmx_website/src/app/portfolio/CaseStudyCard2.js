// components/D3CaseStudyCard.js
import React from 'react';
import Link from 'next/link';

export default function D3CaseStudyCard({ study }) {
  return (
    <Link href={`/case-studies/${study.id}`} className="block">
      <div className="relative overflow-hidden rounded-lg h-80 bg-gradient-to-r from-gray-900 to-black">
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
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <h2 className="text-lg md:text-xl font-bold mb-4 max-w-sm">
            {study.title}
          </h2>
          
          {/* Metrics */}
          <div className="flex flex-wrap gap-4">
            {study.metrics.slice(0, 2).map((metric, index) => (
              <div key={index} className="border-l border-gray-500 pl-3">
                <div className="text-lg font-bold">{metric.value}</div>
                <div className="text-xs text-gray-300">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}