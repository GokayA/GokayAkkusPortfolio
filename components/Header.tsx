'use client';
import { AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X } from 'lucide-react';
import { FC, useLayoutEffect, useRef, useState } from 'react';
import Navbar from './Navbar';

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const burgerRef = useRef(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(burgerRef.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: '0',
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(burgerRef.current, {
            scale: 1,
            duration: 0.25,
            ease: 'power1.out',
          });
        },
        onEnterBack: () => {
          gsap.to(burgerRef.current, {
            scale: 0,
            duration: 0.25,
            ease: 'power1.out',
          });
          setIsActive(false);
        },
      },
    });
  }, []);
  return (
    <div className="flex justify-between p-10 w-full font-light absolute z-10 top-0 text-white  items-center">
      <div className="">Gokay Akkus</div>
      <div className="flex items-center">
        <div className="flex flex-col relative z-10 p-4 cursor-pointer group">
          <p>Home</p>
          <div className="indicator bg-white w-2 h-2 scale-0 group group-hover:scale-100 absolute left-1/2 translate-x-1/2 transition-transform ease-in duration-100 rounded-full top-11 font-bold text-white"></div>
        </div>
        <div className="flex flex-col relative z-10 p-4 cursor-pointer group">
          <p>Projects</p>
          <div className="indicator bg-white w-2 h-2 scale-0 group group-hover:scale-100 absolute left-1/2 translate-x-1/2 transition-transform ease-in duration-100 rounded-full top-11 font-bold text-white"></div>
        </div>
        <div className="flex flex-col relative z-10 p-4 cursor-pointer group">
          <p>About</p>
          <div className="indicator bg-white w-2 h-2 scale-0 group group-hover:scale-100 absolute left-1/2 translate-x-1/2 transition-transform ease-in duration-100 rounded-full top-11 font-bold text-white"></div>
        </div>
      </div>
      <div
        ref={burgerRef}
        onClick={() => setIsActive(!isActive)}
        className="z-40 scale-0 fixed right-0 m-5 w-20 h-20"
      >
        <div className="relative before:transition before:duration-[0.5s] after:transition after:duration-[05.s] w-full before:block after-w-[40%] before:relative before:top-0 before-w-[40%] after:block">
          {isActive ? (
            <X className="text-red-500 " />
          ) : (
            <Menu className="text-red-500 " />
          )}
        </div>
      </div>
      <AnimatePresence mode="wait"> {isActive && <Navbar />}</AnimatePresence>
    </div>
  );
};

export default Header;
