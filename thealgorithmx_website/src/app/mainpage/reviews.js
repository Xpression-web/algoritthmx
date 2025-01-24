import React from 'react';

const ReviewCard = ({ title, description, author, bgImage, category }) => {
  return (
    <div className="relative h-96 w-full overflow-hidden ">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('images/b1.png')`, // Ensure the image is in the public/images folder
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative h-full p-6 flex flex-col justify-between">
        {/* Category Tag */}
        <div className="mb-4">
          <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            {category}
          </span>
        </div>

        {/* Review Text */}
        <div className="space-y-4">
          <p className="text-white text-xl font-bold leading-relaxed">
            {description}
          </p>
          <p className="text-white text-lg font-medium">{author}</p>
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
      bgImage: 'seo-bg.jpg',
    },
    {
      category: 'Android App Development',
      description:
        'TOP-NOTCH ANDROID APP DEVELOPMENT! EFFICIENT, INNOVATIVE, AND GREAT COMMUNICATION THROUGHOUT THE PROJECT. HIGHLY RECOMMEND THEIR SERVICES!',
      author: 'Rachel Lawson',
      bgImage: 'android-bg.jpg',
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
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
