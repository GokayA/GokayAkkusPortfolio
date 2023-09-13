import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import Magnetic from './Magnetic';

const Contact = () => {
  const contactRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: contactRef,
    offset: ['start end', 'end end'],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  return (
    <div className="overflow-hidden relative z-0 flex flex-col justify-between px-20 w-full h-[100vh]  pt-52 items-start content-start bg-[#141516] ">
      <div className="Top h-full text-6xl font-thin text-white">Contacts</div>
      <div className="Bottom pb-10">
        <div className="flex sm:flex-row flex-col gap-2 sm:gap-10">
          <div className="left">
            <h1 className="text-xl text-gray-400 ">Send me a message</h1>
            <p className="font-bold text-xl text-white">
              ggokay.akkus@gmail.com
            </p>
            <div className="pt-10">
              <h1 className="text-xl text-gray-400 ">Socials</h1>
              <p className="font-bold text-xl text-white">LinkedIn</p>
              <p className="font-bold text-xl text-white">LinkedIn</p>
              <p className="font-bold text-xl text-white">LinkedIn</p>
            </div>
          </div>
          <div className="Right">
            <Magnetic>
              <div className="flex items-end">
                <h1 className="text-8xl sm:text-9xl font-bold text-gray-500">
                  Hello
                </h1>
                <p className="text-7xl sm:text-7xl font-thin pb-2 text-gray-500">
                  |
                </p>
              </div>
            </Magnetic>
            <div className="absolute border-b-2 border-white w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
