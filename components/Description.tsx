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
    'I AM CURRENTLY PART OF THE DESIGN TEAM AT SOPRA STERIA IN MADRID, AND I HAVE HAD THE OPPORTUNITY TO HELP CREATE DIGITAL EXPERIENCES AND SOLUTIONS FOR BIG BRANDS FOR THE LAST 20 YEARS OF MY LIFE. I CONSIDER MYSELF PASSIONATE ABOUT TECHNOLOGY, WORKING AT THE INTERSECTION BETWEEN BRANDING AND DIGITAL PRODUCT DESIGN.';
  return (
    <div
      id="about"
      className=" overflow-hidden pt-48 px-8 flex justify-center rounded-t-[4rem] bg-[#f4f4f4] pb-20"
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
        <p className="m-0">
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
                  className="text-lg w-[80%] font-semibold leading-6"
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
          className="font-semibold leading-6"
        >
          NOW, I WORK HAND IN HAND WITH BBVA DESIGN AND USER EXPERIENCE TEAM
          HELPING TO IMPROVE THEIR DIGITAL PRODUCTS BY BALANCING BUSINESS
          PRIORITIES WITH THOSE OF THE THOUSANDS OF USERS WHO USE THEIR
          SERVICES. FROM THE EARLY STAGES OF DEFINITION AND IDEATION, TO THE
          REVIEW OF INTERACTION FLOWS AND USER TESTING.
        </motion.p>
      </div>
    </div>
  );
};

export default Description;
