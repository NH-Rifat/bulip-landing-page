"use client";
import React from "react";
import Image from "next/image";
import icon1 from "../../../../assets/contact/contact_us 1.png";
import icon2 from "../../../../assets/contact/call_center.png";
import icon3 from "../../../../assets/contact/icon_email.png";
import icon4 from "../../../../assets/contact/location.png";

const headerData = {
  title: "We aim to eliminate unemployment in Bangladesh",
  subtitle: "Contact Us",
  image: icon1,
};

const contactDetails = [
  {
    title: "Corporate Office",
    icon: icon4,
    description: "House: 82, Road: 23/16\nBlock-A, Banani, Dhaka.",
  },
  {
    title: "Call us 24/7",
    icon: icon2,
    description: "01825 004 976\n01804 181 257",
  },
  {
    title: "Say hello via Email",
    icon: icon3,
    description: "info@bulipetech.com\nhr@bulipetech.com",
  },
];

const HeaderOfContactUs = () => {
  return (
    <div className="bg-[#014463] text-white py-16 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left mt-[7%] ">
        {/* Title */}
        <div className="flex-1">
          <h2 className="text-sm uppercase tracking-wide font-medium">
            {headerData.subtitle}
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold mt-4">
            {headerData.title}
          </h1>
        </div>
        {/* Image */}
        <div className="flex-0 mt-8 md:mt-0">
          <Image
            src={headerData.image}
            alt="Contact Us"
            className="w-full max-w-sm mx-auto md:mx-0"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-12 max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
        {contactDetails.map((detail, index) => (
          <div
            key={index}
            className="bg-white flex justify-center items-center gap-5 text-blue-900 rounded-lg shadow-lg p-6 text-center"
          >
            <div className="flex justify-center mb-4">
              <Image
                src={detail.icon}
                alt={detail.title}
                className="w-full max-w-sm mx-auto md:mx-0"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg">{detail.title}</h3>
              <p className="mt-2 text-sm whitespace-pre-line">
                {detail.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderOfContactUs;
