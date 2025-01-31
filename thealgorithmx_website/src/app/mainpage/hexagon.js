import './style.css';

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
        <div className="container">
          <svg
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[250px]"
            viewBox="0 0 300 300"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              points="300,150 225,280 75,280 0,150 75,20 225,20"
              className="fill-transparent stroke-green-800 stroke-[40]"
            />
          </svg>
        </div>

        {/* SEO Center Icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <img src="/images/home-leads1.png" alt="Email Marketing" className="w-16 h-16 mx-auto " />
          <span className="text-white text-xl font-semibold">SEO</span>
        </div>

        {/* Surrounding Items positioned at hexagon vertices */}
        {/* Top-left */}
        <div className="absolute left-[5%] top-[10.3%] transform -translate-x-1/2 -translate-y-1/2 text-center">
          <img src="/images/home-leads7.png" alt="Email Marketing" className="w-16 h-16 mx-auto " />
          <span className="text-white text-sm">Social Media</span>
        </div>

        {/* Top-right */}
        <div className="absolute -right-[10%] top-[10.3%] transform -translate-x-1/2 -translate-y-1/2 text-center">
          <img src="/images/home-leads6.png" alt="Social Media" className="w-16 h-16 mx-auto" />
          <span className="text-white text-sm">PPC Advertising</span>
        </div>

        {/* Left-middle */}
        <div className="absolute -left-[5%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
          <img src="/images/home-leads5.png" alt="Content" className="w-16 h-16 mx-auto " />
          <span className="text-white text-sm">Email Marketing</span>
        </div>

        {/* Right-middle */}
        <div className="absolute -right-[25%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
          <img src="/images/home-leads3.png" alt="PPC Advertising" className="w-16 h-16 mx-auto " />
          <span className="text-white text-sm">Public Relations</span>
        </div>

        {/* Bottom-right */}
        <div className="absolute -right-[10%] top-[84.7%] transform -translate-x-1/2 -translate-y-1/2 text-center">
          <img src="/images/home-leads4.png" alt="Public Relations" className="w-16 h-16 mx-auto " />
          <span className="text-white text-sm">App Store</span>
        </div>

        {/* Bottom-left */}
        <div className="absolute left-[5%] top-[84.7%] transform -translate-x-1/2 -translate-y-1/2 text-center">
          <img src="/images/home-leads2.png" alt="App Store" className="w-16 h-16 mx-auto " />
          <span className="text-white text-sm">Content</span>
        </div>

        
      </div>
    </div>
  );
};

export default Hexagon;