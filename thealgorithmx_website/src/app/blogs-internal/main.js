'use client'
import { useState } from 'react';

export default function GuidesGrid() {
  const guides = [
    {
      id: 1,
      category: "APPINVENTIV GUIDE",
      title: "A Complete Guide on Data Science & Analytics for Businesses",
      description: "Data science is the domain that couples data-bound analytical techniques along...",
      author: "Sudeep Srivastava",
      date: "24 Dec 2021",
      image: "/images/z3.webp",
      href: "/guides/data-science"
    },
    {
      id: 2,
      category: "APPINVENTIV GUIDE",
      title: "A complete guide to financial software development for your FinTech business",
      description: "The financial industry is complex, and that's where innovative solutions come...",
      author: "Sudeep Srivastava",
      date: "01 Jun 2022",
      image: "/images/z3.webp",
      href: "/guides/fintech"
    },
    {
      id: 3,
      category: "APPINVENTIV GUIDE",
      title: "The Ultimate iOS App Development Guide for Business",
      description: "The global revenue from mobile apps increased to over USD 318 billion in 202...",
      author: "Sudeep Srivastava",
      date: "10 Mar 2022",
      image: "/images/z3.webp",
      href: "/guides/ios-development"
    }
  ];

  return (
    <div className="bg-black ">
    <div className="max-w-[1300px] mx-auto px-4 py-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-10">Read more Guides</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((guide) => (
          <GuideCard key={guide.id} guide={guide} />
        ))}
      </div>
    </div>
    </div>
  );
}

function GuideCard({ guide }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <a 
      href={guide.href}
      className="block bg-indigo-100 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden">
        <div 
          className={`transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        >
          <img 
            src={guide.image} 
            alt={guide.title} 
            className="w-full h-64 object-cover"
          />
        </div>
      </div>
      
      <div className="p-6">
        <div className="text-sm font-semibold text-indigo-700 mb-2">{guide.category}</div>
        <h2 className="text-xl font-bold text-black mb-3">{guide.title}</h2>
        <p className="text-gray-700 mb-4">{guide.description}</p>
        <div className="flex items-center text-black text-sm">
          <span>{guide.author}</span>
          <span className="mx-2">•</span>
          <span>{guide.date}</span>
        </div>
      </div>
    </a>
    
  );
}