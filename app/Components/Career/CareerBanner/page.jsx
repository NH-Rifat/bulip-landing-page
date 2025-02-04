"use client";

import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import line from "../../../../assets/Line-Graphic-01.png";

const careerBannerData = {
  header: {
    title: "Empowering Careers with Bulipe Tech’s Expert Guidance",
    subtitle: "About Us",
    description:
      "Bulipe Tech provides expert career guidance, resume building, and interview preparation to help you secure your dream job. With guaranteed job placements, hands-on internships, and a strong global network of 3000+ companies, we connect you to exciting opportunities worldwide. Build your portfolio, gain practical experience, and confidently advance your career in the digital workforce.",
    image: {
      src: line,
      alt: "graphic line",
    },
  },
  stats: [
    { value: "23", label: "Office Locations", linkText: "LOCATION" },
    { value: "300+", label: "Training Partners", linkText: "TRAINING CENTERS" },
    { value: "3K+", label: "Global Partners", linkText: "PARTNERS" },
    { value: "20+", label: "Offered Courses", linkText: "COURSES" },
  ],
};

// Utility function to convert values like "300+" and "3K+" to numbers
const convertToNumber = (value) => {
  if (value.includes("K")) {
    return parseFloat(value.replace("K+", "")) * 1000;
  } else if (value.includes("+")) {
    return parseFloat(value.replace("+", ""));
  }
  return parseFloat(value);
};

const CareerBanner = () => {
  const { header, stats } = careerBannerData;

  return (
    <div>
      <div>
        <div className="bg-info-danger-light p-8 lg:p-16 py-16 px-8 ">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row justify-center items-center">
              <div>
                <div className="text-justify lg:text-left">
                  <h2 className="text-xl text-gray-600 font-medium uppercase">
                    {header.subtitle}
                  </h2>
                  <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mt-2">
                    {header.title}
                  </h1>
                </div>

                {/* Paragraph Section */}
                <p className="text-gray-700 text-justify text-lg mt-6 leading-8 lg:leading-9">
                  {header.description}
                </p>
              </div>
              <Image
                src={header.image.src}
                alt={header.image.alt}
                className="h-full lg:w-full"
                width={300}
                height={200}
              />
            </div>

            {/* Statistics Section */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <h3 className="text-4xl font-bold text-orange-500">
                    <CountUp end={convertToNumber(stat.value)} duration={3} />+
                  </h3>
                  <p className="text-gray-600 mt-2">{stat.label}</p>
                  <p className="text-gray-600 font-medium hover:underline">
                    {stat.linkText}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerBanner;
