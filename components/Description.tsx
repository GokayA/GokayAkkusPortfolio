'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Magnetic from './Magnetic';
import {
  descriptionOpacity,
  descriptionSlideUp,
} from './transitions/transitions';

const Description = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const phrase =
    "I'm a web developer with a strong understanding of design principles and user experience.";

  return (
    <div
      id="about"
      className="overflow-hidden pt-48 px-8 flex justify-center rounded-t-[4rem] bg-[#f4f4f4] pb-20"
    >
      <div className="flex  items-center  flex-col w-[40rem] relative gap-12  text-center">
        <Magnetic>
          <div
            data-scroll
            data-scroll-speed={0.1}
            className="font-bold text-2xl button w-44 h-44 bg-[#1c1d20] text-white rounded-full  flex items-center justify-center cursor-pointer"
          >
            About Me
          </div>
        </Magnetic>
        <p className="m-0 uppercase ">
          {phrase.split(' ').map((word, index) => {
            return (
              <span
                key={index}
                ref={containerRef}
                className="gap-2 mr-1 inline-flex relative overflow-hidden "
              >
                <motion.span
                  custom={index}
                  variants={descriptionSlideUp}
                  initial="initial"
                  animate={isInView ? 'open' : 'closed'}
                  className="text-2xl w-[80%] font-semibold leading-7 "
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p
          variants={descriptionOpacity}
          initial="initial"
          animate={isInView ? 'open' : 'closed'}
          className="font-semibold text-2xl leading-7 uppercase"
        >
          I consider my self passionate about{' '}
          <span className="text-red-800">technology</span>. I like researching
          and learning about new technologies also I am using them into my
          projects to improve my skills. Nowadays, I am
          <span className="text-red-800"> working on </span>my latest project
          which is building an e-commerce website that will help me learn new
          skills.
        </motion.p>
      </div>
    </div>
  );
};

export default Description;
