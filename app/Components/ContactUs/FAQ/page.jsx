"use client";
import React, { useState } from "react";

const ContactUsFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What Courses/Training Programs Do You Offer?",
      answer:
        "We offer a variety of courses ranging from web development, data science, digital marketing, and more.",
    },
    {
      question: "Do Your Courses Have Accreditation?",
      answer:
        "Yes, all our courses are accredited and meet industry standards.",
    },
    {
      question: "How Can I Register for a Course in a Bulipe Training Center?",
      answer:
        "You can register online through our website or visit our training center in person.",
    },
    {
      question: "What Are the Fees for our Courses?",
      answer:
        "Course fees vary depending on the course. Please contact us for more information.",
    },
    {
      question: "How Do I Select the Most Suitable Course for Me?",
      answer:
        "We offer a consultation service to help you choose the course that best suits your goals.",
    },
    {
      question: "How Long Does a Course Typically Take to Complete?",
      answer:
        "Course duration varies from 4 weeks to 12 weeks depending on the program.",
    },
    {
      question: "Will I Get Any Job Placement Assistance?",
      answer:
        "Yes, we provide job placement support and networking opportunities for our students.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-gray-900">FAQ</h2>
        <div className="w-28 h-0.5 bg-orange-500 mx-auto mt-2"></div>
        <p className="mt-4 text-center text-gray-600">
          Contact us for more info via call{" "}
          <span className="font-medium">01825 004 976</span>,{" "}
          <span className="font-medium">01804 181 257</span>
        </p>

        {/* FAQ List */}
        <div className="mt-10">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className="w-full py-4 flex justify-between items-center text-left text-gray-900 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="flex items-center">
                  <span className="font-medium text-orange-500">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  <span className="ml-4">{faq.question}</span>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transform transition-transform ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="px-8 py-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUsFAQ;
