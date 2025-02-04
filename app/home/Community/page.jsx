'use client';

import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const communityData = {
  heading: 'Our community',
  description:
    'Bulipe Tech aims to train unemployed individuals in Bangladesh, equipping them with essential digital skills and linking them to job opportunities across 23 countries worldwide.',
  stats: [
    { value: '3K+', label: 'Global partners worldwide' },
    { value: '23+', label: 'Countries and adding' },
    { value: '300+', label: 'Local training partners' },
  ],
};

const convertToNumber = (value) => {
  if (value.includes('K')) {
    return parseFloat(value.replace('K+', '')) * 1000;
  } else if (value.includes('+')) {
    return parseFloat(value.replace('+', ''));
  }
  return parseFloat(value);
};

const textVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants = [
  {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
];

export default function OurCommunity() {
  return (
    <div>
      <section className="div_community_bg_and_text_color py-16 lg:mt-10 lg:mb-10">
        <div className="container mx-auto px-6 sm:px-12 lg:px-[8%] text-start">
          <motion.div
            className="items-start"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
              {communityData.heading}
            </h2>
            <div className="w-20 h-0.5 bg-red-500 rounded-full mt-2 mb-4"></div>
            <p className="text-gray-400 max-w-2xl mb-12 text-start">
              {communityData.description}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0.5 mt-8  border-b-[1px] border-l-[1px] border-r-[1px] items-center text-center">
            {communityData.stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-6 "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                variants={cardVariants[index]}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <h3 className="text-4xl font-bold text-white">
                  <CountUp end={convertToNumber(stat.value)} duration={2.5} /> +
                </h3>
                <p className="text-gray-400 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
