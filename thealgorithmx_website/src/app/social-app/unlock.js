    'use client';
    import React, { useState, useEffect, useRef } from 'react';
    import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
    import 'react-circular-progressbar/dist/styles.css';

    const UnlockSuccess = () => {
    const [percentages, setPercentages] = useState([21, 0, 0, 56]); // Set percentage only for 1st and 4th items
    const [visiblePercentages, setVisiblePercentages] = useState([0, 0, 0, 0]);
    const [isVisible, setIsVisible] = useState(false);
    const componentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.5 }
        );

        if (componentRef.current) {
        observer.observe(componentRef.current);
        }

        return () => {
        if (componentRef.current) {
            observer.unobserve(componentRef.current);
        }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
        const animationInterval = setInterval(() => {
            setVisiblePercentages(prev =>
            prev.map((current, index) =>
                current < percentages[index]
                ? Math.min(current + 5, percentages[index])
                : current
            )
            );
        }, 50);

        return () => clearInterval(animationInterval);
        }
    }, [isVisible, percentages]);

    const descriptions = [
        'Social media video advertisements witnessed a 20.1 percent increase to reach $24.35 billion in 2022.',
        'The second largest digital ad market is social media advertising.',
        'Marketers achieve the highest ROI from short-form videos among all social media strategies.',
        '56% of marketers prefer to use TikTok, making it the most popular influencer marketing platform.',
    ];

    const images = [
        null,
        'images/social1.png', // Replace with the actual path for the 2nd image
        'images/social2.png', // Replace with the actual path for the 3rd image
        null,
    ];

    const titles = [null, 'Social Media Advertising', 'Short-Form Video Marketing', null];

    return (
        <div className="bg-black text-white py-12 px-6 flex flex-col items-center min-h-screen justify-center" ref={componentRef}>
        <div className="max-w-[1200px] mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">Mastering Social Media Success</h1>
            <p className="text-center mb-8">Expert strategies to elevate your brand's social media impact.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {descriptions.map((description, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                {index === 0 || index === 3 ? (
                    <div className="w-32 h-32 mb-4">
                    <CircularProgressbar
                        value={visiblePercentages[index]}
                        text={`${visiblePercentages[index]}%`}
                        strokeWidth={10}
                        styles={buildStyles({
                        pathColor: '#3b82f6',
                        textColor: '#fff',
                        trailColor: '#1e293b',
                        })}
                    />
                    </div>
                ) : (
                    <>
                    <img
                        src={images[index]}
                        alt={`Image ${index + 1}`}
                        className="w-32 h-32 object-contain mb-4"
                    />
                    <h3 className="text-lg font-semibold mb-2">{titles[index]}</h3>
                    </>
                )}
                <p>{description}</p>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
    };

    export default UnlockSuccess;
