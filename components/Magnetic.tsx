'use client';
import { gsap } from 'gsap';
import React, { FC, useEffect, useRef } from 'react';

interface MagneticProps {
  children: React.ReactElement;
}

const Magnetic: FC<MagneticProps> = ({ children }) => {
  const magneticRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const xTo = gsap.quickTo(magneticRef.current, 'x', {
      duration: 1,
      ease: 'elastic.out(1,0,3)',
    });
    const yTo = gsap.quickTo(magneticRef.current, 'y', {
      duration: 1,
      ease: 'elastic.out(1,0,3)',
    });
    magneticRef.current?.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } =
        magneticRef.current!.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.5);
      yTo(y * 0.5);
    });
    magneticRef.current?.addEventListener('mouseleave', (e) => {
      xTo(0);
      yTo(0);
    });
  }, []);
  return React.cloneElement(children, { ref: magneticRef });
};

export default Magnetic;
