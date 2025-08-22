import React from "react";
import DrillingImage from "../../assets/Drilling.jpeg";

const WarehouseHero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={DrillingImage}
          alt="Modern warehouse interior with industrial shelving and lighting"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-white font-bold text-3xl leading-tight mb-8 tracking-wide">
          WE ARE DEDICATED TO PROVIDE THE BEST SERVICES AT THE LOWEST POSSIBLE
          COST
        </h1>

        {/* Call to Action Button */}
        <div className="mt-8 sm:mt-12">
          <button
            onClick={() => (window.location.href = "tel:9532888668")}
            className="bg-yellow-500 hover:bg-yellow-600 cursor-pointer text-black font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg uppercase tracking-wider"
          >
            REQUEST A QUOTE
          </button>
        </div>
      </div>
    </section>
  );
};

export default WarehouseHero;
