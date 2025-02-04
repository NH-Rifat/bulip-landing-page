'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import heros from '../../../public/assets/what-we-do.png';

const serviceSectionData = {
  heading: 'What We Do?',
  subHeading: 'Bulipe Tech is a dynamic and innovative company',
  description:
    'We empower individuals to unlock career opportunities through our proven Digital Skill Development program. Partnering with 300 local organisations and 3,000+ global partners in 21 countries, we provide access to top U.S. certifications and salary-based employment starting at $250, with the potential to exceed $3,000 through continuous up-skilling.',
  buttonText: 'Read More',
  buttonLink: '#',
  image: {
    src: heros,
    alt: 'Abstract technology visual',
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export default function Services() {
  return (
    <div>
      <section className="py-10 px-4 md:px-10 lg:px-[10%] items-center">
        {/* Heading */}
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-6"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {serviceSectionData.heading}
        </motion.h2>
        <div className="w-16 h-0.5 bg-red-500 mx-auto mb-8"></div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Section: Text */}
          <motion.div
            className="div_hero_bg_and_text_color p-6 md:p-10 rounded-l-xl lg:w-1/2 justify-end items-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={textVariants}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.h3
              className="text-xl md:text-2xl font-bold mb-4"
              initial="hidden"
              animate="visible"
              variants={textVariants}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {serviceSectionData.subHeading}
            </motion.h3>
            <motion.p
              className="leading-relaxed mb-6"
              initial="hidden"
              animate="visible"
              variants={textVariants}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {serviceSectionData.description}
            </motion.p>
            <a
              href={serviceSectionData.buttonLink}
              className="bg-[#004464] hover:bg-[#29BDBF] px-6 py-2 rounded-full flex text-white items-center gap-2 transition lg:w-1/3"
            >
              {serviceSectionData.buttonText}{' '}
              <span className="text-lg">&rarr;</span>
            </a>
          </motion.div>

          {/* Right Section: Image */}
          <motion.div
            className="lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={imageVariants}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Image
              src={serviceSectionData.image.src}
              alt={serviceSectionData.image.alt}
              width={800}
              height={800}
              className="rounded-r-lg object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
