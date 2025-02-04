'use client';

import { motion } from 'framer-motion';
import { ChevronRight, UserRoundPlus } from 'lucide-react';
import Image from 'next/image';
import hero from '../../../public/assets/hero-image.jpg';

const heroData = {
  title: 'IT Service Industry with Digital Skills Development',
  description:
    'Bulipe Tech as a visionary agent collaborates with its parent companies from the USA and UK to bring forth a far-reaching Digital Skills Development project for the ever-changing workforce of Bangladesh.',
  enrollNowText: 'Enroll Now',
  learnMoreText: 'Learn More',
  heroImage: {
    src: hero,
    alt: 'Hero Image Alt Text',
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Banner = () => {
  return (
    <div>
      <section
        className="hero-section div_home_banner_bg_and_text_color py-16 px-8 w-full"
        aria-label="Hero section"
      >
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center -mx-4">
            <motion.div
              className="w-full lg:w-1/2 px-4 text-justify"
              initial="hidden"
              animate="visible"
              variants={textVariants}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-2xl lg:text-5xl font-bold text-white mb-6 text-start">
                {heroData.title}
              </h1>
              <p className="text-lg lg:text-xl text-white mb-8">
                {heroData.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a className="btn_primary_full p-2 px-5 rounded-full text-white flex justify-center items-center gap-2">
                  <span>{heroData.enrollNowText}</span>
                  <UserRoundPlus strokeWidth={3} size={16} />
                </a>
                <a className="bg-transparent btn_border-pill p-2 px-5 rounded-full cursor-pointer flex justify-center items-center gap-1">
                  {heroData.learnMoreText}
                  <ChevronRight strokeWidth={1.25} size={18} />
                </a>
              </div>
            </motion.div>
            <motion.div
              className="w-full lg:w-1/2 px-4 mt-8 lg:mt-0 items-center justify-center flex"
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image
                src={heroData.heroImage.src}
                alt={heroData.heroImage.alt}
                width={600}
                height={400}
                className="w-1/2 h-[50%] md:w-[70%]"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
