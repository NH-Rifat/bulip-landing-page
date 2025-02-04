"use client";

import React, { useState } from "react";

const bannerData = {
  title: "News & Media",
  filterButtons: ["UI/UX Design", "QA Engineering", "Development"],
  searchPlaceholder: "Search Here",
};

const NewsBanner = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    console.log("Search Query:", e.target.value);
  };

  return (
    <div className="bg-blue-900 py-8 px-4 mt-[30%] md:mt-[2%]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between md:mt-[7%] md:mb-[2%] p-5">
        {/* Title */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">{bannerData.title}</h2>
          <div className="h-0.5 w-16 bg-orange-500 mt-2 mx-auto md:mx-0"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mt-6 md:mt-0">
          {bannerData.filterButtons.map((buttonText, index) => (
            <button
              key={index}
              className="bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm shadow hover:bg-blue-200 transition"
            >
              {buttonText}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative mt-6 md:mt-0 w-full md:w-64">
          <input
            type="text"
            placeholder={bannerData.searchPlaceholder}
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full py-2 px-4 rounded-full bg-white text-gray-700 placeholder-gray-400 shadow focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 17a6 6 0 100-12 6 6 0 000 12zM21 21l-4.35-4.35"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsBanner;
