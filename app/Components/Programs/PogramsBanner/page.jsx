"use client";
import React from "react";
import CountUp from "react-countup";

// Utility function to convert values like "10M+" to numbers
const convertToNumber = (value) => {
  if (value.includes('M')) {
    return parseFloat(value.replace('M+', '')) * 1000000;
  } else if (value.includes('K')) {
    return parseFloat(value.replace('K+', '')) * 1000;
  }
  return parseFloat(value);
};

const programData = {
  heading: "Our Programs",
  title:
    "Join our Digital Skill Development Program today and be part of a life-changing journey.",
  description:
    "Join for just BDT 25,000 and gain benefits worth BDT 1,28,500! We connect skilled workers to international opportunities while partnering with local businesses and startups to retain talent within Bangladesh.",
  stats: [
    { value: "10M+", label: "Employment Community" },
    { value: "300K+", label: "Earning Opportunity" },
    { value: "128K+", label: "Worth BDT Benefit" },
  ],
  diamondGraphic: {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64",
    className: "w-32 h-32 lg:w-48 lg:h-48 stroke-orange-500 fill-none",
    polygonPoints: "32 2 62 24 48 62 16 62 2 24",
    lines: [
      { x1: "32", y1: "2", x2: "16", y2: "62" },
      { x1: "32", y1: "2", x2: "48", y2: "62" },
      { x1: "2", y1: "24", x2: "62", y2: "24" },
      { x1: "16", y1: "62", x2: "48", y2: "62" },
    ],
  },
  decorativeStar: {
    xmlns: "http://www.w3.org/2000/svg",
    className: "w-6 h-6 lg:w-8 lg:h-8 text-blue-500",
    viewBox: "0 0 24 24",
    fill: "none",
    path: {
      d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.24L7 14.14 2 9.27l6.91-1.01L12 2z",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinejoin: "round",
    },
  },
};

export default function DigitalSkillProgram() {
  return (
    <div>
      <section className="bg-black text-white py-16 px-8 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          {/* Left Content Section */}
          <div className="lg:w-2/3 text-center lg:text-left">
            <p className="text-sm uppercase tracking-wide text-gray-400 mb-2">
              {programData.heading}
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-4">
              {programData.title}
            </h2>
            <p className="text-gray-400 text-base lg:text-lg mb-6">
              {programData.description}
            </p>
          </div>

          {/* Right Graphic Section */}
          <div className="lg:w-1/3 flex justify-center mt-6 lg:mt-0">
            <div className="relative">
              {/* Diamond Graphic */}
              <svg
                xmlns={programData.diamondGraphic.xmlns}
                viewBox={programData.diamondGraphic.viewBox}
                className={programData.diamondGraphic.className}
              >
                <polygon
                  points={programData.diamondGraphic.polygonPoints}
                  strokeWidth="2"
                />
                {programData.diamondGraphic.lines.map((line, index) => (
                  <line
                    key={index}
                    x1={line.x1}
                    y1={line.y1}
                    x2={line.x2}
                    y2={line.y2}
                    strokeWidth="2"
                  />
                ))}
              </svg>
              {/* Decorative Stars */}
              <div className="absolute top-0 -right-4 lg:-right-8">
                <svg
                  xmlns={programData.decorativeStar.xmlns}
                  className={programData.decorativeStar.className}
                  viewBox={programData.decorativeStar.viewBox}
                  fill={programData.decorativeStar.fill}
                >
                  <path
                    d={programData.decorativeStar.path.d}
                    stroke={programData.decorativeStar.path.stroke}
                    strokeWidth={programData.decorativeStar.path.strokeWidth}
                    strokeLinejoin={
                      programData.decorativeStar.path.strokeLinejoin
                    }
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {programData.stats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-orange-500 text-4xl lg:text-5xl font-bold">
                <CountUp end={convertToNumber(stat.value)} duration={2.5} />
                {stat.value.includes("+") && "+"}
              </h3>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
