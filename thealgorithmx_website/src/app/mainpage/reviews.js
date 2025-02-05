import React from 'react';
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "700",
});



const monsterfont3 = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

const ReviewCard = ({ title, description, author, bgImage, category }) => {
  return (
    <div className="relative h-96 w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/${bgImage}')`, // Dynamically set background image
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative h-full p-6 flex flex-col">
        {/* Category Tag */}
        <div className="mb-4">
          <span className={`inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-[14px] leading-[32px] ${monsterfont.className} font-semibold`}>
            {category}
          </span>
        </div>

        {/* Review Text */}
        <div className="space-y-4">
          <p className={`text-[16px] leading-[32px] ${monsterfont3.className} text-white mt-[37px] mb-[32px] tracking-[0.02em]`}>
            {description}
          </p>
          <p className={`text-[16px] leading-[32px] ${monsterfont.className} text-white mt-[37px] `}>{author}</p>
        </div>
      </div>
    </div>
  );
};



const Reviews = () => {
  const reviews = [
    {
      category: 'SEO & PPC',
      description:
        'EXCEPTIONAL SEO & PPC SERVICES WITH GOOGLE ADS. SAW SIGNIFICANT TRAFFIC INCREASE AND EXCELLENT ROI. HIGHLY PROFESSIONAL & RELIABLE TEAM',
      author: 'Maika Fischer',
      bgImage: 'testimonial-1.webp', // Different image for this review
    },
    {
      category: 'Android App Development',
      description:
        'TOP-NOTCH ANDROID APP DEVELOPMENT! EFFICIENT, INNOVATIVE, AND GREAT COMMUNICATION THROUGHOUT THE PROJECT. HIGHLY RECOMMEND THEIR SERVICES!',
      author: 'Rachel Lawson',
      bgImage: 'testimonial-2.webp', // Different image for this review
    },
  ];
  

  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className={`text-[56px]  leading-[60px] ${monsterfont3.className} text-white mb-[50px] text-center`}>
          OUR REVIEWS
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-6xl">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              category={review.category}
              description={review.description}
              author={review.author}
              bgImage={review.bgImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
