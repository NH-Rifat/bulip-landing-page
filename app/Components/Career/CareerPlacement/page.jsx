import React from "react";
import Image from "next/image";
import careerBlogimg from "../../../../assets/career/Blog-IMG.png";

const careerData = [
  {
    id: 1,
    title: "Your Career Starts Here with Guaranteed Job Placement",
    subTitle: "Job Placement and Internship Opportunities",
    description:
      "Your Career Starts Here with Guaranteed Job Placement. Bulipe Tech guarantees job placements for all certified graduates, ensuring you step into the digital workforce with confidence. Our internship programs provide hands-on experience, helping you apply your digital skills development to real-world projects.",
    image: careerBlogimg,
    alt: "Job Placement",
  },
  {
    id: 2,
    title: "Connecting Talent to Global Opportunities",
    subTitle: "Partnership with Global Companies and Platforms",
    description:
      "Connecting Talent to Global Opportunities. Connect with 350+ companies worldwide for exciting career opportunities. Find opportunities with top brands and startups across different industries. Our global network opens doors to job markets worldwide.",
    image: careerBlogimg,
    alt: "Global Partnerships",
  },
  {
    id: 3,
    title: "Showcase Your Skills, Transform Your Future",
    subTitle: "Career Guidance and Portfolio Building",
    description:
      "Showcase Your Skills, Transform Your Future. We help you prepare for your dream career. Our experts guide you in creating a strong resume and getting ready for interviews. We also help you build a professional portfolio to showcase your skills and projects.",
    image: careerBlogimg,
    alt: "Career Guidance",
  },
];

const headerData = {
  title: "Career & Placement",
  description:
    "Start your journey with Bulipe today and take the first step toward building a successful career.",
};

const CareerPlacement = () => {
  return (
    <div>
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-8 lg:px-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 mb-6">
            {headerData.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            {headerData.description}
          </p>
        </div>

        {/* Content blocks */}
        <div className="mt-12 space-y-12">
          {careerData.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col sm:flex-row items-center p-6 rounded-lg lg:mx-[15%] ${
                index % 2 !== 0 ? "sm:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full sm:w-1/2">
                <Image
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-auto rounded-lg"
                  width={500}
                  height={500}
                />
              </div>
              <div className="sm:w-1/2 sm:pl-8 mt-6 sm:mt-0">
                <h5 className="text-sm text-info-secondary-dark">
                  {item.subTitle}
                </h5>
                <h3 className="text-2xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CareerPlacement;
