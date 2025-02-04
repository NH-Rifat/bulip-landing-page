'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { default as program1 } from '../../../public/assets/program/programs1.png';
import { default as program2 } from '../../../public/assets/program/programs2.png';
import program3 from '../../../public/assets/program/programs3.png';
import program5 from '../../../public/assets/program/programs5.png';

const sectionData = {
  heading: 'Our Programs',
  subHeading:
    'Explore our diverse range of programs designed to equip you with the skills needed for the digital age.',
  buttons: [
    { text: 'Digital Skills Development', isActive: true },
    { text: 'Skill Development', isActive: false },
    { text: 'All', isActive: false },
  ],
};

const data = [
  {
    id: 1,
    title: 'IT Support Specialist',
    rating: 5,
    reviews: 255,
    price: '$250',
    image: program1,
  },
  {
    id: 2,
    title: 'Data Analyst',
    rating: 4.8,
    reviews: 180,
    price: '$300',
    image: program2,
  },
  {
    id: 3,
    title: 'Software Engineer',
    rating: 4.7,
    reviews: 300,
    price: '$500',
    image: program3,
  },
  {
    id: 4,
    title: 'Cloud Engineer',
    rating: 4.9,
    reviews: 220,
    price: '$400',
    image: program2,
  },
  {
    id: 5,
    title: 'Cybersecurity Specialist',
    rating: 4.6,
    reviews: 190,
    price: '$300',
    image: program5,
  },
  {
    id: 6,
    title: 'AI/ML Engineer',
    rating: 5,
    reviews: 310,
    price: '$600',
    image: program2,
  },
];

export default function Programs() {
  const router = useRouter();

  // Function to handle Enroll Now button click
  // const handleEnrollNowClick = (id) => {
  //   router.push(`/program/${id}`);
  // };
  return (
    <div>
      <div className="text-center py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            {sectionData.heading}
          </h2>
          <div className="w-16 h-0.5 bg-red-500 mx-auto mt-2"></div>
        </div>
        <div className="flex justify-center space-x-8 mt-2">
          {sectionData.buttons.map((button, index) => (
            <button
              key={index}
              className={`text-sm font-medium text-gray-600 ${
                button.isActive
                  ? 'border-b-2 border-[#eef2f3]'
                  : 'hover:border-b-2 hover:border-[#e5e7e7]'
              }`}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {data.map((item) => (
          <div
            key={item.id}
            className="div_Enroll_card_bg_and_text_color rounded-xl shadow-xl overflow-hidden "
          >
            <Image
              src={item.image}
              width={300}
              height={200}
              alt={item.title}
              className="w-full object-cover p-4"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold ">{item.title}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center mt-2">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(Math.floor(item.rating))}{' '}
                  </div>
                  <span className="ml-2 text-sm">({item.reviews})</span>
                </div>
                <div className="text-lg font-bold ">{item.price}</div>
              </div>

              <div className="flex items-center justify-between mt-2">
                <button className="text-[#004464] hover:border-2 hover:border-[#004464] rounded-full font-medium px-2">
                  More Info
                </button>
                <button className="px-2 py-1.5 capitalize bg-[#F15B2D] text-white rounded">
                  enroll now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
