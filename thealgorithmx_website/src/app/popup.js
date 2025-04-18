'use client'
import { useEffect, useState } from 'react';

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasClosedPopup, setHasClosedPopup] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !hasClosedPopup) {
        setShowPopup(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasClosedPopup]);

  const closePopup = () => {
    setShowPopup(false);
    setHasClosedPopup(true); // Hide popup until refresh
  };

  return (
    <div className="flex items-center justify-center">
    

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm text-center">
            <h2 className="text-xl font-bold text-black mb-4">Wait! Don't leave yet.</h2>
            <p className="text-black mb-4">Here's something important before you go!</p>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
