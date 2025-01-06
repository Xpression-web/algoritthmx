import React from 'react';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "200",
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

const GuidingPrinciples = () => {
  const principles = [
    {
      id: 1,
      title: "Leading with Originality",
      number: "01",
      description: "We lead with originality, forging our own path instead of following the crowd.",
      icon: "images/Leading.png" // Replace SVG with image source
    },
    {
      id: 2,
      title: "Intentional Design",
      number: "02",
      description: "We design with purpose and intention, not merely to follow trends.",
      icon: "images/Leading.png" // Replace SVG with image source
    },
    {
      id: 3,
      title: "Embracing Uniqueness",
      number: "03",
      description: "We aim to make every design unique, standing out in a sea of sameness.",
      icon: "images/Leading.png" // Replace SVG with image source
    },
    {
      id: 4,
      title: "Intelligent Aesthetics",
      number: "04",
      description: "Design isn't just about appearance, it's about seamless functionality.",
      icon: "images/Leading.png" // Replace SVG with image source
    },
    {
      id: 5,
      title: "Passion Drives Us",
      number: "05",
      description: "Our motivation stems from our passion for design, not solely financial gain.",
      icon: "images/Leading.png" // Replace SVG with image source
    },
    {
      id: 6,
      title: "Prioritizing Understanding",
      number: "06",
      description: "We invest time in comprehending our clients' needs and visions.",
      icon: "images/Leading.png" // Replace SVG with image source
    }
  ];

  return (
    <div className="min-h-screen bg-black p-8">
      <h1 className={`font-size-64 text-white ${monsterfont.className} text-center mb-16 `}>Our Guiding Principles</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-6xl mx-auto">
        {principles.map((principle, index) => {
          // Calculate the row number (0-based)
          const row = Math.floor(index / 3);
          
          return (
            <div
              key={principle.id}
              className="relative bg-[rgba(255,255,255,0.06)] p-8 rounded-lg transform transition-all duration-500 hover-bg-[rgba(85, 81, 81, 0.06)] hover:shadow-[0_0_50px_25px_rgba(255,255,255,0.2)] backdrop-blur-md"
              style={{
                animation: 'slideUp 0.8s ease-out forwards',
                animationDelay: `${row * 200}ms`,
                opacity: 0
              }}
            >
              <div className="flex flex-col h-full">
                <div className={`flex items-start ${monsterfont1.className} mb-2`}>
                  {principle.title}
                  <p className={`text-gray-600 ${monsterfont1.className} text-lg ml-2 mb-2`}>{principle.number}</p>
                </div>
                
                <div className="mb-4">
                  <img
                    src={principle.icon}
                    alt={principle.title}
                    className="w-12 h-12 object-cover mt-2 mb-4 "
                  />
                </div>
                
                <p className={`text-gray-500 text-sm font-helvetica leading-relaxed`}>
                  {principle.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GuidingPrinciples;
