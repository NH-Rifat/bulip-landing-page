import React from "react";

import {
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTimes,
} from "react-icons/fa";
import LeadershipCard from "../LeadershipCards/page";
import img1 from "../../../../assets/team/1.png";
import img2 from "../../../../assets/team/2.png";
import img3 from "../../../../assets/team/3.webp";
import img4 from "../../../../assets/team/4.png";
import img5 from "../../../../assets/team/5.webp";
import img6 from "../../../../assets/team/6.png";
import img7 from "../../../../assets/team/7.webp";
import img8 from "../../../../assets/team/8.png";
import img9 from "../../../../assets/team/9.png";
import img10 from "../../../../assets/team/10.png";
import img11 from "../../../../assets/team/11.png";
import img12 from "../../../../assets/team/12.png";
import img13 from "../../../../assets/team/13.webp";
import img14 from "../../../../assets/team/14.png";

export default function LeaderShip() {
  const teamData = [
    {
      name: "Sazzad Hossain",
      title: "Managing Director",
      image: img1,
      socialLinks: [
        { icon: <FaLinkedin />, url: "https://linkedin.com" },
        { icon: <FaFacebook />, url: "https://facebook.com" },
        { icon: <FaTimes />, url: "#" },
      ],
    },
    {
      name: "GB Chowdhury",
      title: "Director (Admin)",
      image: img2,
      socialLinks: [
        { icon: <FaLinkedin />, url: "https://linkedin.com" },
        { icon: <FaFacebook />, url: "https://facebook.com" },
        { icon: <FaTimes />, url: "#" },
      ],
    },
    {
      name: "Md Tayab Anwar",
      title: "Director",
      image: img3,
      socialLinks: [
        { icon: <FaLinkedin />, url: "https://linkedin.com" },
        { icon: <FaFacebook />, url: "https://facebook.com" },
        { icon: <FaTimes />, url: "#" },
      ],
    },
    {
      name: "Saifuddin Ahmed",
      title: "Director (Finance, Audit & Accounts)",
      image: img4,
      socialLinks: [
        { icon: <FaLinkedin />, url: "https://linkedin.com" },
        { icon: <FaFacebook />, url: "https://facebook.com" },
        { icon: <FaTimes />, url: "#" },
      ],
    },
    {
      name: "Md Azharul Haque",
      title: "Director (Operation)",
      image: img5,
      socialLinks: [
        { icon: <FaLinkedin />, url: "https://linkedin.com" },
        { icon: <FaFacebook />, url: "https://facebook.com" },
        { icon: <FaTimes />, url: "#" },
      ],
    },
    {
      name: "Noore Alam Siddiki",
      title: "Director (Business Development)",
      image: img6,
      socialLinks: [
        { icon: <FaLinkedin />, url: "https://linkedin.com" },
        { icon: <FaFacebook />, url: "https://facebook.com" },
        { icon: <FaTimes />, url: "#" },
      ],
    },
    {
      name: "Musa Reza Chowdhury",
      title: "Director (Overseas)",
      image: img7,
      socialLinks: [
        { icon: <FaLinkedin />, url: "https://linkedin.com" },
        { icon: <FaFacebook />, url: "https://facebook.com" },
        { icon: <FaTimes />, url: "#" },
      ],
    },
    {
      name: "Monwar Pasha",
      title: "Director (Marketing)",
      image: img8,
      socialLinks: [
        { icon: <FaLinkedin />, url: "https://linkedin.com" },
        { icon: <FaFacebook />, url: "https://facebook.com" },
        { icon: <FaTimes />, url: "#" },
      ],
    },
    {
      name: "Mia Forruk Ahmed Khan",
      title: "Director (Logistics & Procurement)",
      image: img9,
      socialLinks: [
        { icon: <FaLinkedin />, url: "https://linkedin.com" },
        { icon: <FaFacebook />, url: "https://facebook.com" },
        { icon: <FaTimes />, url: "#" },
      ],
    },
    {
      name: "Masuma Akhter Urmi",
      title: "Director (European Union)",
      image: img10,
      socialLinks: [
        { icon: <FaLinkedin />, url: "https://linkedin.com" },
        { icon: <FaFacebook />, url: "https://facebook.com" },
        { icon: <FaTimes />, url: "#" },
      ],
    },
    {
      name: "J.I.M Fahim",
      title: "Director",
      image: img11,
      socialLinks: [
        { icon: <FaLinkedin />, url: "https://linkedin.com" },
        { icon: <FaFacebook />, url: "https://facebook.com" },
        { icon: <FaTimes />, url: "#" },
      ],
    },
    {
      name: "Suman Majumder",
      title: "Director",
      image: img12,
      socialLinks: [
        { icon: <FaLinkedin />, url: "https://linkedin.com" },
        { icon: <FaFacebook />, url: "https://facebook.com" },
        { icon: <FaTimes />, url: "#" },
      ],
    },
    {
      name: "Najnin Chowdhury",
      title: "Director",
      image: img13,
      socialLinks: [
        { icon: <FaLinkedin />, url: "https://linkedin.com" },
        { icon: <FaFacebook />, url: "https://facebook.com" },
        { icon: <FaTimes />, url: "#" },
      ],
    },
    {
      name: "Aman Ullah",
      title: "Director",
      image: img14,
      socialLinks: [
        { icon: <FaLinkedin />, url: "https://linkedin.com" },
        { icon: <FaFacebook />, url: "https://facebook.com" },
        { icon: <FaTimes />, url: "#" },
      ],
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-8">
          <div className="h-60 w-full bg-white"></div>
          <div className="max-w-5xl max-md:max-w-xl max-sm:max-w-sm mx-auto -mt-48 px-6">
            <h2 className="text-4xl max-md:text-3xl text-center font-bold text-black mb-12">
              Our Leadership Team
            </h2>
            <div className="w-16 h-0.5 bg-primary-normal mx-auto mt-2"></div>
          </div>
        </div>

        <div className="font-[sans-serif] lg:max-w-7xl sm:max-w-2xl max-sm:max-w-sm mx-auto mt-4">
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 max-sm:justify-center text-center items-center  bg-gray-100 p-4 rounded-lg relative">
            {teamData?.map((member, index) => (
              <LeadershipCard
                key={index}
                image={member.image}
                name={member.name}
                title={member.title}
                socialLinks={member.socialLinks}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
