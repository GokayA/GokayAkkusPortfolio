'use client';
import { Mouse, Shell } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { landingAnimation, landingButtons } from './transitions/transitions';
import { useRef } from 'react';

const Landing = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  return (
    <div className="flex relative h-[100vh] overflow-hidden text-white  justify-between p-4 sm:p-20">
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-8xl sm:text-9xl">I&apos;m Gokay</h1>
          <h1 className="text-8xl sm:text-9xl">Akkus</h1>
        </div>
        <div
          ref={containerRef}
          className="flex lg:flex-row flex-col sm:gap-40 gap-20 pb-32"
        >
          <motion.div
            variants={landingAnimation}
            initial="initial"
            animate={isInView ? 'enter' : 'exit'}
          >
            <h1 className="text-4xl md:text-6xl pt-20 sm:pt-0">
              Web Developer
            </h1>
          </motion.div>
          <div className="flex flex-col justify-center items-center">
            <motion.p
              variants={landingAnimation}
              initial="initial"
              animate={isInView ? 'enter' : 'exit'}
              className="text-4xl sm:text-6xl xl:w-3/5 break-words flex"
            >
              <Shell size={60} /> Learn more about me
            </motion.p>
            <p>
              <Mouse
                className="animate-bounce pt-4 absolute bottom-5 text-center left-0 right-0 m-auto"
                size={60}
              />
            </p>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex gap-4">
        <Link href="#projects" className="text-lg font-semibold">
          <motion.div
            variants={landingButtons}
            initial="initial"
            animate={isInView ? 'enter' : 'exit'}
            className="rounded-full bg-zinc-800 text-white w-24 h-14 flex justify-center items-center hover:bg-[#4A55A2] transition-all duration-500"
          >
            Projects
          </motion.div>
        </Link>
        <Link href="#contact" className="text-lg font-semibold">
          <motion.div
            variants={landingButtons}
            initial="initial"
            animate={isInView ? 'enter' : 'exit'}
            className="rounded-full bg-zinc-800 text-white w-24 h-14 flex justify-center items-center hover:bg-[#4A55A2] transition-all duration-500"
          >
            Contact
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
