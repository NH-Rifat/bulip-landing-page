"use client";

import React from "react";
import CountUp from "react-countup";
import bannerLocation from "../../../../assets/location/office-location.png";
import Image from "next/image";

const statsData = [
  { value: "23", label: "Office Locations" },
  { value: "300+", label: "Training Partners" },
  { value: "3K+", label: "Global Partners" },
  { value: "20+", label: "Offered Courses" },
];

const dynamicData = {
  heading: "LOCATIONS",
  title: "Visit our offices and training partner across the globe today.",
  description:
    "Discover Bulipe's global presence through our strategically positioned offices and advanced training facilities across various countries.",
  backgroundImage: bannerLocation,
  statsData: statsData,
};

const convertToNumber = (value) => {
  if (value.includes("K")) {
    return parseFloat(value.replace("K+", "")) * 1000;
  } else if (value.includes("+")) {
    return parseFloat(value.replace("+", ""));
  }
  return parseFloat(value);
};

const BannerLocations = () => {
  const { heading, title, description, backgroundImage, statsData } = dynamicData;
  // console.log("Background Image URL:", backgroundImage); // Log the background image URL

  return (
    <div className="relative w-full h-[700px] bg-[#FFD83B94] overflow-hidden py-16 px-8">
      {/* Background map */}
      <div className="absolute inset-0 bg-cover bg-center opacity-30 ">
        <Image
          src={backgroundImage}
          layout="fill"
          objectFit="cover"
          alt="Background Image"
        />
      </div>

      {/* Content */}
      <div className="relative z-6 flex flex-col  p-8 sm:p-6 md:p-4 md:mt-[10%]">
        <div className="lg:w-1/2 lg:mx-[10%] grid grid-cols-1">
          <h1 className="text-sm md:text-xl text-gray-800">{heading}</h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-600">
            {title}
          </p>
          <p className="mt-2 text-sm text-gray-500">{description}</p>
        </div>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center space-x-6 mt-6 sm:space-x-6 sm:flex-col sm:space-y-6 md:space-y-0 md:flex-row">
          {statsData.map((stat, index) => (
            <div key={index} className="text-center mb-6 sm:mb-0">
              <div className="text-4xl font-bold text-[#F15B2D]">
                <CountUp end={convertToNumber(stat.value)} duration={2.5} />+
              </div>
              <p className="text-md hover:underline text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerLocations;
