'use client';
import { motion, useInView } from 'framer-motion';
import { FC, useRef } from 'react';
import Magnetic from './Magnetic';
import {
  descriptionOpacity,
  descriptionSlideUp,
} from './transitions/transitions';

interface DescriptionProps {}

const Description: FC<DescriptionProps> = ({}) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const phrase =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit necessitatibus ex fugiat, accusamus ea vel ratione consequatur sequi qui ipsum nisi aut quas nemo ipsa, laborum itaque, officiis unde. Consequuntur.';
  return (
    <div className="mt-48 px-8 flex justify-center ">
      <div className="flex sm:flex-row flex-col max-w-[1400px] relative gap-12">
        <p className="m-0">
          {phrase.split(' ').map((word, index) => {
            return (
              <span
                key={index}
                ref={containerRef}
                className="gap-2 text-3xl mr-1 inline-flex relative overflow-hidden font-light"
              >
                <motion.span
                  custom={index}
                  variants={descriptionSlideUp}
                  initial="initial"
                  animate={isInView ? 'open' : 'closed'}
                  className="text-lg w-[80%] font-medium"
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
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
          provident, perspiciatis explicabo eum eius excepturi nisi corporis,
          hic, corrupti quos neque ex nemo. Vero quae temporibus nemo, facilis
          quas deleniti!
        </motion.p>
        <Magnetic>
          <div
            data-scroll
            data-scroll-speed={0.1}
            className="button top-[80%] left-[calc(100%-200px)] w-44 h-44 bg-[#1c1d20] text-white rounded-full absolute flex items-center justify-center cursor-pointer"
          >
            About Me
          </div>
        </Magnetic>
      </div>
    </div>
  );
};

export default Description;
