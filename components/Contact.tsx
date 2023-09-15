import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Magnetic from './Magnetic';

const Contact = () => {
  const contactRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: contactRef,
    offset: ['start end', 'end end'],
  });
  const x = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  return (
    <motion.div
      style={{ y }}
      ref={contactRef}
      className="overflow-hidden relative z-0 flex flex-col h-full justify-between px-20 w-full   items-start content-start bg-[#141516] "
    >
      <div className="pt-80 sm:pt-52 sm:h-[80vh] w-full Top h-full text-6xl font-thin text-white">
        Contacts
      </div>
      <div className="Bottom pb-10">
        <div className="flex md:flex-row flex-col-reverse gap-2 sm:gap-10">
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
