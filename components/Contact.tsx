import { motion, motion, useScroll, useScroll, useTransform, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import Magnetic from './Magnetic';

const Contact = () => {
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
    <div className="pb-10  pt-42 px-20 grid grid-cols-4 grid-rows-4 gap-4 ">
      <div className="font-thin text-6xl">Contacts</div>
      <div className="col-start-1 row-start-4 ">
        <h1 className=" text-gray-400 text-2xl">Write me a message</h1>
        <p className="font-bold  text-xl">ggokay.akkus@gmail.com</p>
        <h1 className="text-gray-400 text-2xl">Socials</h1>
        <p className="font-bold text-xl">LinkedIn</p>
        <p className="font-bold text-xl">Github</p>
        <p className="font-bold text-xl">Instagram</p>
      </div>
      <div className="col-span-4 col-start-2 row-start-4">
        <div className="flex items-end">
          <p className="text-9xl font-bold">Hello</p>
          <p className="text-8xl font-thin">l</p>
        </div>
        <div className="w-full border-b-2 border-black"></div>
      </div>
    </div>
  );
};

export default Contact;
