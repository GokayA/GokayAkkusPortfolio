import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
  return (
    <motion.div className="text-white flex flex-col items-center justify-center bg-blue-500 relative">
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
            <h2>Let&apos;work</h2>
          </span>
          <h2>together</h2>
          <motion.div
            style={{ x: 'x' }}
            className="absolute left-[calc(100%-400px)] top-(calc(100%-75px)]"
          >
            <div className="bg-red-500 w-44 h-44 text-white rounded-full absolute flex items-center justify-center cursor-pointer">
              <p>Get in touch</p>
            </div>
          </motion.div>
          <motion.svg
            style={{ rotate: 'rotate', scale: 2 }}
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
          </motion.svg>{' '}
        </div>
        <div className="flex gap-5 mt-24 mx-48">
          <div>
            <p>info@gmail.com</p>
          </div>
          <div>
            <p>+90 000000000</p>
          </div>
          <div className="flex justify-between mt-48 p-5">
            <div className="flex gap-2 items-end">
              <span className="flex flex-col gap-4">
                <h3 className="m-0 p-0.5 text-gray-300 cursor-default font-thin text-[1em]">
                  V
                </h3>
                <p className="m-0 p-0.5 cursor-pointer">2023 c Edition</p>
              </span>
              <span>
                <h3>V</h3>

                <p>Clock</p>
              </span>
            </div>
          </div>
          <div>
            <span className="flex flex-col gap-4">
              <h3>Socials</h3>
              <p>aww</p>
            </span>
            <span>Instagram</span>
            <span>Github</span>
            <span>Linkedin</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
