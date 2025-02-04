"use client";
import Image from "next/image";
import React from "react";
import newsfire from "../../../../assets/News/Image.png";

const articleData = {
  image: {
    src: newsfire,
    alt: "Wildfire",
  },
  author: "Olivia Rhye",
  date: "20 Jan 2025",
  title:
    "Flames ignite homes and cars as 30,000 people ordered to evacuate from Los Angeles wildfire",
  description:
    "The fire exploded from 20 acres to 1,200 acres in mere hours and wind speeds could soon reach 100mph (160km/h).",
  readMoreLink: "#",
};

const NewsArticleCard = () => {
  return (
    <div className="bg-white  max-w-3xl mx-auto mt-2 md:mt-[5%] md:mb-[5%]">
      {/* Image Section */}
      <div className="overflow-hidden rounded-t-md">
        <Image
          src={articleData.image.src}
          alt={articleData.image.alt}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="mt-4">
        {/* Author and Date */}
        <p className="text-sm text-info-secondary-dark">
          {articleData.author} • <span>{articleData.date}</span>
        </p>

        {/* Title */}
        <h3 className="mt-2 text-xl font-semibold text-gray-900">
          {articleData.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-600">{articleData.description}</p>

        {/* Read More Link */}
        <div className="mt-4">
          <a
            href={articleData.readMoreLink}
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 transition"
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
  );
};

export default NewsArticleCard;
