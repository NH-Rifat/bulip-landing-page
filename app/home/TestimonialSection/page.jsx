'use client';
import Image from 'next/image';
import { useState } from 'react';
import image from '../../../public/assets/Ellipse 5.png';

const testimonials = [
  {
    id: 1,
    name: 'Asharaful Islam',
    role: 'SEO Specialist',
    image: image,
    text: 'I was skeptical about learning Website Development and SEO as a beginner, but Buipe Tech made it so easy. The trainers are knowledgeable, and the materials are straightforward.',
  },
  {
    id: 2,
    name: 'Jane Doe',
    role: 'Web Developer',
    image: image,
    text: 'The learning experience was fantastic. The materials were clear, and the trainers were patient and knowledgeable. Highly recommend Buipe Tech!',
  },
  {
    id: 3,
    name: 'John Smith',
    role: 'Digital Marketer',
    image: image,
    text: 'Buipe Tech exceeded my expectations! The lessons were concise and easy to understand, and the support team was incredibly helpful.',
  },
  {
    id: 4,
    name: 'Emily Johnson',
    role: 'Graphic Designer',
    image: image,
    text: 'The courses at Buipe Tech are top-notch. I learned so much and was able to apply my skills immediately in my job.',
  },
  {
    id: 5,
    name: 'Michael Brown',
    role: 'Project Manager',
    image: image,
    text: 'Buipe Tech provided me with the skills I needed to advance my career. The support from the instructors was amazing.',
  },
  {
    id: 6,
    name: 'Sarah Davis',
    role: 'Content Writer',
    image: image,
    text: 'I highly recommend Buipe Tech for anyone looking to improve their digital skills. The courses are well-structured and easy to follow.',
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div>
      <section className="py-8 bg-gray-100">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold">Testimonials</h2>
          <hr className="w-12 mx-auto border-t-2 border-orange-500 mt-2" />
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-12 h-60">
            {testimonials
              .slice(currentIndex, currentIndex + 3)
              .map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="div_testimonials transition-opacity duration-2000 ease-in-out"
                >
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="rounded-full w-12 h-12"
                      width={48}
                      height={48}
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.text}</p>
                </div>
              ))}
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 left-0">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border hover:bg-gray-100 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
            <button
              onClick={handleNext}
              className="p-2 rounded-full border hover:bg-gray-100 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
