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
    <motion.div
      style={{ y }}
      ref={contactRef}
      className="text-white flex flex-col items-center justify-center bg-blue-500"
    >
      <div className="pt-52 w-full bg-stone-800">
        <div className="border-b-2 pb-24 mx-52 relative">
          <span className="flex items-center">
            <div className="w-24 h-24 relative rounded-full overflow-hidden">
              <Image
                src="/background.png"
                alt="background image"
                fill
                className="oject-cover"
              />
            </div>
            <h2 className="text-6xl">Reach</h2>
          </span>
          <h2 className="text-7xl font-thin ">Out Me</h2>
          <motion.div
            style={{ x }}
            className="absolute left-[calc(100%-400px)] top-(calc(100%-75px)]"
          >
            <Magnetic>
              <div className="bg-red-500 w-44 h-44 text-white rounded-full absolute flex items-center justify-center cursor-pointer">
                <p className="m-0 text-base font-light z- after:content-[''] after:width-[0%] after:h-0.5 after:bg-white after:block after:mt-0.5 after:relative after:left-[50%] after:-translate-x-[50%] after:ease-linear hover:after:w-full20 relative">
                  Get in touch
                </p>
              </div>
            </Magnetic>
          </motion.div>
          <motion.svg
            style={{ rotate, scale: 2 }}
            className="absolute top-32 left-full"
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </div>
        <div className="flex gap-5 mt-24 mx-48">
          <div>
            <button>ggokay.akkus@gmail.com</button>
          </div>
        </div>
        <div className="flex mt-48 p-5 justify-between">
          <div className="flex justify-between items-center gap-2 w-full h-full ">
            <div className="left flex gap-2 pt-20 text-lg">
              <div>
                <p>2023</p>
                <div className="border-b-[1px] flex border-white"></div>
              </div>
              <div>-</div>
              <div>
                <p>01.14 PM</p>
                <div className="border-b-[1px] border-white"></div>
              </div>
            </div>
            <div className="right flex flex-col text-lg">
              <h3 className="text-gray-300 font-thin text-2xl">Socials</h3>

              <Link href="https://linkedin.com" target="_blank">
                LinkedIn
              </Link>
              <div className="border-b-[1px] border-white"></div>
              <Link href="https://www.github.com" target="_blank">
                Github
              </Link>
              <div className="border-b-[1px] border-white"></div>
              <Link href="https://www.discord.com" target="_blank">
                Discordd
              </Link>
              <div className="border-b-[1px] border-white"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
