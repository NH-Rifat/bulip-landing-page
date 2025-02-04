"use client";

import React, { useEffect, useState } from "react";
import newsfire from "../../../../assets/News/Image.png";
import Image from "next/image";

const newsData = [
  {
    id: 1,
    image: newsfire,
    title: "Nunc ex felis, maximus Praesent in maximus amet",
    description:
      "Lorem viverra hendrerit cursus libero, elit non non, vel faucibus convallis.",
    readMoreLink: "#",
  },
  {
    id: 2,
    image: newsfire,
    title: "Sed feugiat, nisi in cursus pellentesque",
    description:
      "Elementum ultricies non dui dui vitae ex viverra cursus libero elit non.",
    readMoreLink: "#",
  },
  {
    id: 3,
    image: newsfire,
    title: "Vestibulum ante ipsum primis",
    description:
      "Vel faucibus convallis cursus libero elit non viverra hendrerit.",
    readMoreLink: "#",
  },
  {
    id: 4,
    image: newsfire,
    title: "Donec euismod nisl in justo",
    description:
      "Non vel faucibus convallis cursus libero viverra elit hendrerit.",
    readMoreLink: "#",
  },
  {
    id: 5,
    image: newsfire,
    title: "Nullam accumsan augue nec odio",
    description: "Felis viverra cursus libero elit non vel faucibus hendrerit.",
    readMoreLink: "#",
  },
  {
    id: 6,
    image: newsfire,
    title: "Aliquam congue elit quis augue",
    description:
      "Hendrerit cursus libero elit viverra non vel faucibus convallis.",
    readMoreLink: "#",
  },
];

const NewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0 ? newsData.length - 3 : prevIndex - 3
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= newsData.length ? 0 : prevIndex + 3
    );
  };



  return (
    <div className="w-full max-w-5xl mx-auto mt-8 mb-8">
      <h2 className="text-2xl font-bold mb-4">Latest News</h2>
      <div className="relative">
        {/* News Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {newsData.slice(currentIndex, currentIndex + 3).map((news) => (
            <div
              key={news.id}
              className="bg-white border rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{news.title}</h3>
                <p className="text-sm text-gray-600">{news.description}</p>
                {/* Read More Link */}
                <div className="mt-4 bottom-0">
                  <a
                    href={news.readMoreLink}
                    className="inline-flex  items-center text-sm text-blue-600 hover:text-blue-800 transition"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 px-3 rounded-full hover:bg-gray-900"
        >
          &#9664;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 px-3 rounded-full hover:bg-gray-900"
        >
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default NewsCarousel;
