'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { FC, useRef } from 'react';
import {
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiSolidFileCss,
} from 'react-icons/bi';
import { TbBrandNextjs } from 'react-icons/tb';

interface SlidingImagesProps {}

const slider1 = [
  {
    color: '#e3e5e7',
    src: <BiLogoHtml5 size={150} />,
  },
  {
    color: '#d6d7dc',
    src: <BiLogoJavascript size={150} />,
  },
  {
    color: '#e3e3e3',
    src: <BiLogoReact size={150} />,
  },
  {
    color: '#21242b',
    src: <BiSolidFileCss size={150} />,
  },
];

const slider2 = [
  {
    color: '#d4e3ec',
    src: <BiLogoTailwindCss size={150} />,
  },
  {
    color: '#e5e0e1',
    src: <BiLogoTypescript size={150} />,
  },
  {
    color: '#d7d4cf',
    src: <TbBrandNextjs size={150} />,
  },
  {
    color: '#e1dad6',
    src: <BiLogoMongodb size={150} />,
  },
];

const SlidingIcons: FC<SlidingImagesProps> = ({}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div
      ref={containerRef}
      className="overflow-x-visible slidingImages flex flex-col relative z-[2] gap-[3vw] pt-48  pb-12 bg-[#f4f4f4]"
    >
      <motion.div
        style={{ x: x1 }}
        className="slider relative flex w-full sm:w-[120vw] -left-[10vw] gap-[3vw]"
      >
        {slider1.map((project, index) => {
          return (
            <div
              key={index}
              className={`bg-${project.color} project w-[25%] h-[20vw] flex items-center justify-center`}
            >
              <div className="imageContainer relative w-[80%] h-[80%]">
                <p>{project.src} </p>
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div
        style={{ x: x2 }}
        className="slider2 relative flex w-[120vw] left-[-10vw] gap-[3vw]"
      >
        {slider2.map((project, index) => {
          return (
            <div
              key={index}
              className={`bg-${project.color} project w-[25%] h-[20vw] flex items-center justify-center`}
            >
              <div className="imageContainer relative w-[80%] h-[80%]">
                <p>{project.src}</p>
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ height }} className="circleContainer relative mt-24">
        <div className="circle shadow-[0_60px_50px_rgba(0,0,0,0.748)] absolute h-[1550%] w-[120%] -left-[10%] bg-[##f4f4f4] rounded-[0%_0%_50%_50%] z-10"></div>
      </motion.div>
    </div>
  );
};

export default SlidingIcons;
