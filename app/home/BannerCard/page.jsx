'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import icon1 from '../../../public/assets/icon_05.png';
import icon2 from '../../../public/assets/icon_06.png';
import icon3 from '../../../public/assets/icon_12.png';

export default function BannerCard() {
  const cardData = [
    {
      id: 1,
      title: 'Master In-Demand Digital Skills to Advance Your Career',
      icon: icon1,
      description:
        'Unlock career opportunities through our industry-recognized Digital Skill Development program. Begin your journey today with 300 local partners to stay ahead of the curve!',
    },
    {
      id: 2,
      title: 'Get Certified by Top Institutions Globally',
      icon: icon2,
      description:
        'Access globally recognized certifications that help you stand out in the competitive job market. Build your expertise with our specialized training programs.',
    },
    {
      id: 3,
      title: 'Join a Network of Over 3,000+ Partners Worldwide',
      icon: icon3,
      description:
        'Collaborate with top companies and organizations to gain real-world experience. Our network ensures you have the best opportunities for growth.',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="md:-mt-28">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-12 xl:mx-[10%]">
        {cardData?.map((card, index) => (
          <motion.div
            key={card.id}
            className="div_home_card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={cardVariants}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Top Rounded Shape */}
            <div className="absolute top-0 left-0 right-0 mx-auto w-28 h-28 rounded-full border-8 border-sky-800 bg-white shadow-md transform -translate-y-1/2">
              <div className="bg-secondary-normal rounded-full border-4 border-white">
                <Image
                  src={card.icon}
                  width={300}
                  height={200}
                  alt={card.title}
                  className="w-full object-cover p-4"
                />
              </div>
            </div>

            {/* Icon Section */}
            <div className="flex justify-center items-center mb-8"></div>

            {/* Title */}
            <h2 className="text-center text-2xl font-bold text-gray-900 mb-4">
              {card.title}
            </h2>

            {/* Description */}
            <p className="text-center text-gray-600 leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
