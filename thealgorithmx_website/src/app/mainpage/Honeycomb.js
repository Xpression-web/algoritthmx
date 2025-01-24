import React from 'react'

export default function Home() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        {/* Honeycomb Wrapper */}
        <div className="grid grid-cols-3 gap-6 md:grid-cols-5 md:gap-8 relative">
          {Array.from({ length: 15 }).map((_, index) => (
            <div
              key={index}
              className="relative group w-28 h-28 md:w-36 md:h-36"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 group-hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center bg-black text-center">
                  <h3 className="font-bold text-sm md:text-base">Tile {index + 1}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  