// components/CTABanner.js
import React from 'react';
import Image from 'next/image';

export default function CTABanner() {
  return (
    <div className="rounded-lg overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700 p-8 mb-12 text-center">
      <h2 className="text-2xl font-bold mb-4">Add your brand's success story to our exhaustive global list of elite brands</h2>
      <div className="flex justify-center items-center gap-8 mb-8">
        <Image src="/images/kfc-logo.png" alt="KFC" width={80} height={40} />
        <Image src="/images/ikea-logo.png" alt="IKEA" width={80} height={40} />
        <Image src="/images/adidas-logo.png" alt="Adidas" width={80} height={40} />
        <Image src="/images/dominos-logo.png" alt="Dominos" width={80} height={40} />
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md font-medium">
        Join the Club
      </button>
    </div>
  );
}