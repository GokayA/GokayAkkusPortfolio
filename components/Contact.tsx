import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Magnetic from './Magnetic';
import Link from 'next/link';

const Contact = () => {
  const contactRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: contactRef,
    offset: ['start end', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  return (
    <motion.div
      style={{ y }}
      ref={contactRef}
      className="overflow-hidden relative z-0 flex flex-col h-full justify-between px-20 w-full   items-start content-start bg-[#141516]"
    >
      <div className="pt-80 sm:pt-52 sm:h-[80vh] w-full Top h-full text-6xl font-thin text-white">
        Contacts
      </div>
      <div className="Bottom pb-10" id="contact">
        <div className="flex md:flex-row flex-col-reverse gap-2 sm:gap-10">
          <div className="left">
            <h1 className="text-xl text-gray-400 ">Send me a message</h1>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a
                href="mailto:ggokay.akkus@gmail.com"
                className="font-bold text-xl text-white"
              >
                ggokay.akkus@gmail.com
              </a>
            </motion.div>
            <div className="pt-10 flex gap-2 flex-col">
              <h1 className="text-xl text-gray-400  ">Socials</h1>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/gokay-akkus"
                  className="font-bold text-xl text-white"
                >
                  LinkedIn
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link
                  target="_blank"
                  href="https://github.com/GokayA"
                  className="font-bold text-xl text-white"
                >
                  GitHub
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="Right">
            <Magnetic>
              <div className="flex items-end">
                <motion.h1
                  style={{ x }}
                  className="sm:p-0 text-8xl sm:text-9xl font-bold text-gray-500"
                >
                  Hello
                </motion.h1>
                <motion.p
                  style={{ x }}
                  className="text-7xl sm:text-7xl font-thin pb-2 text-gray-500"
                >
                  |
                </motion.p>
              </div>
            </Magnetic>
            <div className="absolute border-b-2 border-[#f4f4f4] w-full"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
