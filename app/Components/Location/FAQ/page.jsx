"use client";

import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import React, { useState } from "react"; // Importing Heroicons
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What Courses/Training Programs Do You Offer?",
      answer:
        "We offer a wide variety of courses including Data Science, Web Development, Cybersecurity, and more.",
    },
    {
      question: "Do Your Courses Have Accreditation?",
      answer:
        "Yes, all our courses are accredited by recognized industry bodies.",
    },
    {
      question: "How Can I Register for a Course in a Bulipe Training Center?",
      answer:
        "You can register for a course online through our website or visit one of our training centers.",
    },
    {
      question: "What Are the Fees for our Courses?",
      answer:
        "The fees vary depending on the course. Please contact our support team for detailed pricing.",
    },
    {
      question: "How Do I Select the Most Suitable Course for Me?",
      answer:
        "We provide guidance through consultation with our experts to help you select the right course based on your career goals.",
    },
    {
      question: "How Long Does a Course Typically Take to Complete?",
      answer:
        "Courses generally take between 6 to 12 weeks depending on the course and your pace.",
    },
    {
      question: "Will I Get Any Job Placement Assistance?",
      answer:
        "Yes, we offer job placement assistance and career support to help you transition into the workforce.",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle between null and the selected index
  };

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-10 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-8">FAQ</h2>
      <p className="text-center mb-8">
        Contact us for more info via call 01825 004 976, 01804 181 257
      </p>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 md:mx-[20%]">
            <div
              className="flex items-center justify-between cursor-pointer py-3 text-lg font-medium text-gray-800 hover:text-gray-600"
              onClick={() => toggleAnswer(index)}
            >
              <span>{`${index + 1}. ${faq.question}`}</span>
              <div className="transform transition-transform duration-300">
                {openIndex === index ? (
                  <ChevronUpIcon className="w-6 h-6 text-gray-600" />
                ) : (
                  <ChevronDownIcon className="w-6 h-6 text-gray-600" />
                )}
              </div>
            </div>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-96" : "max-h-0"
              }`}
              style={{ maxHeight: openIndex === index ? "500px" : "0" }}
            >
              <div className="py-2 pl-4 pr-6 text-gray-600">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
