"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

// Define positions for brand logos similar to the image
const brandBubbles = [
  { id: 1, src: "/images/sass.png", top: 10, left: 10, size: 80 },
  { id: 2, src: "/images/webpack.png", top: 15, left: 30, size: 70 },
  { id: 3, src: "/images/flutter.png", top: 15, left: 50, size: 65 },
  { id: 4, src: "/images/fitbit.png", top: 20, left: 70, size: 75 },
  { id: 5, src: "/images/github.png", top: 15, left: 90, size: 85 },
  { id: 6, src: "/images/cube.png", top: 35, left: 25, size: 70 },
  { id: 7, src: "/images/token.png", top: 40, left: 5, size: 60 },
  { id: 8, src: "/images/natgeo.png", top: 60, left: 15, size: 75 },
  { id: 9, src: "/images/thermo.png", top: 50, left: 30, size: 65 },
  { id: 10, src: "/images/edge.png", top: 40, left: 45, size: 85 },
  { id: 11, src: "/images/facebook.png", top: 60, left: 50, size: 70 },
  { id: 12, src: "/images/we.png", top: 30, left: 60, size: 70 },
  { id: 13, src: "/images/cylon.png", top: 50, left: 60, size: 65 },
  { id: 14, src: "/images/cycle.png", top: 50, left: 75, size: 75 },
  { id: 15, src: "/images/divi.png", top: 60, left: 85, size: 70 },
  { id: 16, src: "/images/aleph.png", top: 30, left: 80, size: 70 }
];

export default function BrandBubbleFlow() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className="relative w-full min-h-screen bg-black overflow-hidden">
      <div className="absolute w-full h-full">
        {/* Dark gradient overlay */}
        <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
        
        {/* The brand bubbles */}
        {brandBubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute transition-all duration-1000"
            style={{
              top: `${bubble.top}%`,
              left: `${bubble.left}%`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: `${(bubble.id % 10) * 0.1}s`,
            }}
          >
            <div
              className="rounded-full overflow-hidden flex items-center justify-center shadow-lg"
              style={{
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                animation: `float-bubble-${bubble.id % 5} ${2 + (bubble.id % 3) * 0.5}s ease-in-out infinite alternate`,
              }}
            >
              {/* Placeholder colored circles until you provide actual image paths */}
              <div 
                className="w-full h-full flex items-center justify-center"
                style={{ 
                  backgroundColor: `hsl(${(bubble.id * 30) % 360}, 70%, 50%)`,
                }}
              >
                {/* If using actual images, uncomment this: */}
                {/* <Image
                  src={bubble.src}
                  alt={`brand-${bubble.id}`}
                  width={bubble.size}
                  height={bubble.size}
                  className="object-cover"
                /> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes float-bubble-0 {
          0% { transform: translateY(0); }
          100% { transform: translateY(-10px); }
        }
        @keyframes float-bubble-1 {
          0% { transform: translateY(0); }
          100% { transform: translateY(-8px); }
        }
        @keyframes float-bubble-2 {
          0% { transform: translateY(0); }
          100% { transform: translateY(-12px); }
        }
        @keyframes float-bubble-3 {
          0% { transform: translateY(0); }
          100% { transform: translateY(-7px); }
        }
        @keyframes float-bubble-4 {
          0% { transform: translateY(0); }
          100% { transform: translateY(-9px); }
        }
      `}</style>
    </div>
  );
}