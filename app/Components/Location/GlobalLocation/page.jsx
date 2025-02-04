"use client";

import React, { useState } from "react";

import globalLocation from "../../../../assets/location/World-Map.png";
import Image from "next/image";

const GlobalLocations = () => {
  const [showCard, setShowCard] = useState(false);

  return (
    <div className="relative w-full h-screen bg-[#f9f9f9] overflow-hidden">
      <div className="absolute inset-0 z-10 flex items-center justify-center flex-col text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Our Locations
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600">
          Discover our offices across the globe!
        </p>
      </div>
      {/* Background map */}

      <div className="absolute inset-0 bg-cover bg-center opacity-30"></div>

   

      {/* Blips (Locations) */}
      <div className="absolute inset-0 pointer-events-none">
       
      </div>
      <div>
        <Image
          src={globalLocation}
          alt="Global Locations"
          width={300}
          height={300}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default GlobalLocations;
