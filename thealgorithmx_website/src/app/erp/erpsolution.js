import React from "react";
//import "./style.css";  External CSS for hiding scrollbar

export default function Solution() {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="w-1/2 lg:w-1/2 p-8 flex flex-col justify-start mt-10 ">
          <h1 className="text-6xl  text-white">Explore Our</h1>
          <h2 className="text-6xl font-bold mb-1 text-white">Content </h2>
          <h2 className="text-6xl font-bold mb-1 text-white"> Creation </h2>
          <h2 className="text-6xl font-bold mb-1 text-white"> Variety </h2>

          {/* Vertical Line and Text */}
          <div className="flex items-center">
            <div className="h-20 border-l-8 border-blue-500 rounded-full mr-4"></div> {/* Increased line height and width */}
            <p className="text-xl text-white-500">Discovering Our Range of Content</p>
          </div>
        </div>

        {/* Right Section (Scrolling) */}
        <div className="w-full  lg:w-1/2 md:overflow-y-auto md:overflow-y-scroll p-8 max-h-screen scroll-content">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white">TCO components</h2>
            <p className="mt-2 text-sm text-white">
            Initial investments, frequent support, and ERP improvement costs offer higher ROI and lower ownership costs than the cost of pre-built ERPs.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white">Functionality  </h2>
            <p className="mt-2 text-sm text-white">
            Utilize advanced technologies such as Blockchain, AI/ML, and IoT to improve the efficiency of your business as the solutions are customized to match diverse client needs and processes.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white">Additional functionality
            </h2>
            <p className="mt-2 text-sm text-white">
            Flexible and can be applied according to your business’s transformation or expansion needs.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white">Customization</h2>
            <p className="mt-2 text-sm text-white">
            Offer limitless functionalities with high-quality personalization.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white">Integration</h2>
            <p className="mt-2 text-sm text-white">
            Effortless integration by all crucial systems, including legacy software.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white">Learning curve</h2>
            <p className="mt-2 text-sm text-white">
            Offers short learning curve due to custom User Interface (UI) and user-friendly User Experience (UX) for diverse user roles.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white">Scalability</h2>
            <p className="mt-2 text-sm text-white">
            Hold huge potential to accommodate growth with endless possibilities.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white">Security</h2>
            <p className="mt-2 text-sm text-white">
            Lower risks because of customized code design and amplified security measures.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white">Legal compliance</h2>
            <p className="mt-2 text-sm text-white">
            Compliance with all necessary global, regional and industry-relate regulations.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white">Maintenance and support</h2>
            <p className="mt-2 text-sm text-white">
            A customer's preference is what determines whether to hire an in-house team or outsource to a vendor.
            </p>
            <div className="border-b-2 border-gray-300 my-4"></div>
          </div>

        </div>
      </div>
    </div>
  );
}
