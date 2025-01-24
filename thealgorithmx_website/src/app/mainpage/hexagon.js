const Hexagon = () => {
  return (
    <div className="w-full h-full bg-black flex justify-center items-center">
      <div className="relative w-[500px] h-[500px]">
        {/* Outer hexagon */}
        <svg
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]"
          viewBox="0 0 300 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="300,150 225,280 75,280 0,150 75,20 225,20"
            className="fill-transparent stroke-white stroke-2"
          />
        </svg>

        {/* Inner hexagon */}
    
      <svg
    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]" 
    viewBox="0 0 200 210"
    xmlns="http://www.w3.org/2000/svg"
    >
    <polygon
    points="200,100 150,180 50,180 0,100 50,20 150,20" // Adjusted points to make the hexagon smaller
    className="fill-transparent stroke-green-500 stroke-[30]"
    />
    </svg>
   


        {/* SEO Center Icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <svg className="w-12 h-12 text-green-500 mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="2" y="2" width="20" height="20" rx="2" strokeWidth="2"/>
            <path d="M7 14l3-3 2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-white text-xl font-semibold">SEO</span>
        </div>

        {/* Surrounding Items */}
        {/* Social Media - Top */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 text-center">
          <svg className="w-8 h-8 text-green-500 mx-auto mb-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
          </svg>
          <span className="text-white text-sm">Social Media</span>
        </div>

        {/* PPC - Top Right */}
        <div className="absolute top-1/4 right-0 transform translate-x-8 text-center">
          <svg className="w-8 h-8 text-green-500 mx-auto mb-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39h-1.97c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16v1.95z"/>
          </svg>
          <span className="text-white text-sm whitespace-nowrap">PPC Advertising</span>
        </div>

        {/* Public Relations - Bottom Right */}
        <div className="absolute bottom-1/4 right-0 transform translate-x-8 text-center">
          <svg className="w-8 h-8 text-green-500 mx-auto mb-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6.91 6c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z"/>
          </svg>
          <span className="text-white text-sm whitespace-nowrap">Public Relations</span>
        </div>

        {/* App Store - Bottom */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 text-center">
          <svg className="w-8 h-8 text-green-500 mx-auto mb-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
          </svg>
          <span className="text-white text-sm">App Store</span>
        </div>

        {/* Content - Bottom Left */}
        <div className="absolute bottom-1/4 left-0 transform -translate-x-8 text-center">
          <svg className="w-8 h-8 text-green-500 mx-auto mb-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/>
          </svg>
          <span className="text-white text-sm">Content</span>
        </div>

        {/* Email Marketing - Top Left */}
        <div className="absolute top-1/4 left-0 transform -translate-x-8 text-center">
          <svg className="w-8 h-8 text-green-500 mx-auto mb-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          <span className="text-white text-sm whitespace-nowrap">Email Marketing</span>
        </div>
      </div>
    </div>
  );
};

export default Hexagon;