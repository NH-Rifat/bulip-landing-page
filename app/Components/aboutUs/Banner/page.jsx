"use client";

import Image from "next/image";
import React from "react";

import line from "../../../../assets/Line-Graphic-01.png";
import CountUp from "react-countup";

const headerData = {
  title: "We aim to eliminate unemployment in Bangladesh",
  subtitle: "About Us",
  description:
    "Bulipe Tech aims to eliminate unemployment in Bangladesh with our Digital Skill Development Projects. The goal is to educate people with the necessary digital tools and technology by developing the IT skills & knowledge that will help them in their careers. The main focus is to create a bridge between the digital skills gap by providing training, resources, and support to individuals, communities, and organizations. The ultimate goal is to guide people to succeed in this growing digital and globalized society.",
};

const statsData = [
  { value: "23", label: "Office Locations", linkText: "LOCATION" },
  { value: "300+", label: "Training Partners", linkText: "TRAINING CENTERS" },
  { value: "3K+", label: "Global Partners", linkText: "PARTNERS" },
  { value: "20+", label: "Offered Courses", linkText: "COURSES" },
];
// Utility function to convert values like "300+" and "3K+" to numbers
const convertToNumber = (value) => {
  if (value.includes("K")) {
    return parseFloat(value.replace("K+", "")) * 1000;
  } else if (value.includes("+")) {
    return parseFloat(value.replace("+", ""));
  }
  return parseFloat(value);
};

export default function AboutUSBanner() {
  return (
    <div>
      <div className="bg-teal-100 p-8 lg:p-16 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div>
              <div className="text-justify lg:text-left">
                <h2 className="text-xl text-gray-600 font-medium uppercase">
                  {headerData.subtitle}
                </h2>
                <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mt-2">
                  {headerData.title}
                </h1>
              </div>

              <p className="text-gray-700 text-justify text-lg mt-6 leading-8 lg:leading-9">
                {headerData.description}
              </p>
            </div>
            <Image
              src={line}
              alt="graphic line"
              className="h-full lg:w-full"
              width={300}
              height={200}
            />
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {statsData.map((stat, index) => (
              <div key={index}>
                <h3 className="text-4xl font-bold text-orange-500">
                  <CountUp end={convertToNumber(stat.value)} duration={2.5} />+
                </h3>
                <p className="text-gray-600 mt-2">{stat.label}</p>
                <p className="text-gray-600 mt-2 hover:underline">{stat.linkText}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
