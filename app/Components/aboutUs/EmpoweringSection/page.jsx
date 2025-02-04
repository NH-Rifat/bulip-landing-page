import Image from "next/image";
import React from "react";
import empower from "../../../../assets/empower-2.webp";
import { IoShieldSharp } from "react-icons/io5";

const empoweringSectionData = {
  heading: "Empowering Lives, Transforming Futures",
  description:
    "Bulipe Tech provides global-standard training led by industry experts to help unlock the full potential of young minds for a brighter future. Our skill development programs focus on developing essential soft skills, technical expertise, and hands-on project experience. We guarantee job placement for all graduates upon certification through our global network of 350+ partner businesses across Europe, America, Asia, and Africa. Bulipe Tech's IT training programs create valuable opportunities for growth, including:",
  image: {
    src: empower,
    alt: "Hexagon graphic",
  },
  listItems: [
    "Adaptability",
    "Increased Employment Opportunities",
    "Social Inclusion",
    "Empowerment",
    "Internships Opportunity",
    "Economic Growth",
  ],
  readMoreLink: {
    text: "READ MORE",
    url: "#",
  },
};

const EmpoweringSection = () => {
  const { heading, description, image, listItems, readMoreLink } =
    empoweringSectionData;

  return (
    <section className="flex flex-col lg:flex-row items-center bg-gray-100 p-6 lg:p-0 mb-5 lg:mb-10">
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image src={image.src} alt={image.alt} className="shadow-md" />
      </div>

      <div className="w-full lg:w-1/2 mt-6 lg:mt-0 text-start">
        <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-4">
          {heading}
        </h2>
        <p className="text-gray-600 text-base lg:text-lg mb-6">{description}</p>
        <ul className="grid grid-cols-2 gap-4 text-gray-800">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="w-6 h-6 border border-[#004464] rounded-full hover:bg-info-secondary-dark text-[#004464] hover:text-white hover:border-0 p-1">
                <IoShieldSharp className="text-center" />
              </span>
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <a
            href={readMoreLink.url}
            className="text-blue-600 hover:underline text-base lg:text-sm font-medium"
          >
            {readMoreLink.text}
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmpoweringSection;
