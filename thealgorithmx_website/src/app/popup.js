'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Home() {
  const pathname = usePathname();
  const [showPopup, setShowPopup] = useState(false);
  const [popupKey, setPopupKey] = useState(null); // Initially null to avoid SSR mismatch

  useEffect(() => {
    const key = `popupClosed-${pathname}`;
    setPopupKey(key); // Set key client-side only  

    // Reset popup status on refresh or re-visit
    sessionStorage.removeItem(key);

    const handleMouseLeave = (e) => {
      const hasClosed = sessionStorage.getItem(key);
      if (e.clientY <= 0 && !hasClosed) {
        setShowPopup(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [pathname]);

  const closePopup = () => {
    setShowPopup(false);
    if (popupKey) {
      sessionStorage.setItem(popupKey, 'true');
    }
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
