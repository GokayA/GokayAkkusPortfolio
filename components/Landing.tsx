import Image from 'next/image';
import { FC } from 'react';

interface LandingProps {}

const Landing: FC<LandingProps> = ({}) => {
  return (
    <div className="flex relative h-[100vh] overflow-hidden">
      <Image
        className="object-cover"
        src="/background.png"
        alt="landing background image"
        fill
      />
      <div className="flex justiy-center items-center">
        <p className="relative m-0 text-white text-8xl">will change</p>
      </div>
    </div>
  );
};

export default Landing;
