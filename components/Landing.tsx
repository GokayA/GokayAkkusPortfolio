import Image from 'next/image';
import { FC } from 'react';

interface LandingProps {}

const Landing: FC<LandingProps> = ({}) => {
  return (
    <div className="flex relative h-[100vh] overflow-hidden text-white  justify-between p-4 sm:p-20">
      <div className="flex flex-col justify-between">
        {/* NEED TO CHANGE FONT AND TEXT LEADING MAYBE TO MAKE IT BEAUTIFUL ! */}
        <div>
          <h1 className="text-6xl sm:text-9xl ">I&apos;m Gokay</h1>
          <h1 className="text-6xl sm:text-9xl ">Akkus</h1>
        </div>
        <div className="flex lg:flex-row flex-col sm:gap-40 gap-20 pb-32">
          <div>
            <h1 className="text-4xl md:text-6xl pt-20 sm:pt-0">
              Web Developer
            </h1>
          </div>
          <div>
            <p className="text-4xl sm:text-6xl xl:w-3/5 break-words">
              Here you can learn more about me
            </p>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex gap-4">
        <p>Projects</p>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Landing;
