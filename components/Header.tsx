'use client';
import { AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X } from 'lucide-react';
import { useLayoutEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import { useOnClickOutside } from '@/hooks/use-on-click-outside';

const Header = () => {
  const burgerRef = useRef(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState<boolean>(false);

  useOnClickOutside(navbarRef, () => {
    setIsActive(false);
  });
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
    <div
      ref={navbarRef}
      className="overflow-hidden  flex justify-end p-10 w-full font-light absolute z-10 top-0 text-white  items-center"
    >
      <div
        ref={burgerRef}
        onClick={() => setIsActive(!isActive)}
        className="z-40 scale-0 fixed  m-5 w-20 h-20"
      >
        <div className="relative text-[#4A55A2] pt-10">
          {isActive ? <X size={40} /> : <Menu size={40} />}
        </div>
      </div>
      <AnimatePresence mode="wait"> {isActive && <Navbar />}</AnimatePresence>
    </div>
  );
};

export default Header;
