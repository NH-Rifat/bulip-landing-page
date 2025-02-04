"use client";

import Image from "next/image";
import React from "react";

const BuyCard = ({ image, title, reviews, price, rating }) => {
  console.log(price);
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-black text-white p-6 rounded-xl shadow-lg">
      {/* Left Section */}
      <div className="space-y-4 max-w-xl">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p className="text-lg">
          Prepare for a career in IT support with comprehensive training in
          technology maintenance and client interaction. Have a brief look at
          what you’ll learn with this program.
        </p>
        {/* Info Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div>
            <h3 className="text-xl font-medium">Duration</h3>
            <p className="text-lg">3 Month</p>
          </div>
          <div>
            <h3 className="text-xl font-medium">Cost</h3>
            <p className="text-lg">{price}</p>
          </div>
          <div>
            <h3 className="text-xl font-medium">Availability</h3>
            <p className="text-lg">On-Site</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="mt-6 lg:mt-0 flex flex-col items-center bg-white p-6 rounded-full shadow-xl max-w-xs w-full">
        <Image
          src={image}
          alt="IT Support Specialist"
          className="rounded-full mb-4 w-24 h-24 object-cover"
        />
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-2">
            <span className="text-yellow-500">
              {" "}
              {"★".repeat(Math.floor(rating))}
            </span>
            <span className="ml-2 text-gray-400">{reviews}</span>
          </div>
          <button className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition duration-200">
            Button text
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyCard;
