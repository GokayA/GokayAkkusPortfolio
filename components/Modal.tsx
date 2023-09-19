'use client';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Image from 'next/image';
import { FC, useEffect, useRef } from 'react';
import { scaleAnimation } from './transitions/transitions';

interface ModalProps {
  projects: {
    title: string;
    src: string;
    color: string;
  }[];
  modal: { active: boolean; index: number };
  className?: string;
}

const Modal: FC<ModalProps> = ({ projects, modal, className }) => {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const cursorLabelRef = useRef(null);

  const { active, index } = modal;

  useEffect(() => {
    const ctx = gsap.context((self) => {
      const moveContainerX = gsap.quickTo(containerRef.current, 'left', {
        duration: 0.8,
        ease: 'power3',
      });
      const moveContainerY = gsap.quickTo(containerRef.current, 'top', {
        duration: 0.8,
        ease: 'power3',
      });
      const moveCursorX = gsap.quickTo(cursorRef.current, 'left', {
        duration: 0.5,
        ease: 'power3',
      });
      const moveCursorY = gsap.quickTo(cursorRef.current, 'top', {
        duration: 0.5,
        ease: 'power3',
      });
      const moveCursorLabelX = gsap.quickTo(cursorLabelRef.current, 'left', {
        duration: 0.45,
        ease: 'power3',
      });
      const moveCursorLabelY = gsap.quickTo(cursorLabelRef.current, 'top', {
        duration: 0.45,
        ease: 'power3',
      });
      window.addEventListener('mousemove', (e) => {
        const { pageX, pageY } = e;
        moveContainerX(pageX);
        moveContainerY(pageY);
        moveCursorX(pageX);
        moveCursorY(pageY);
        moveCursorLabelX(pageX);
        moveCursorLabelY(pageY);
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <motion.div
        ref={containerRef}
        variants={scaleAnimation}
        animate={active ? 'enter' : 'closed'}
        initial="initial"
        className={`${className} pointer-events-none  h-[350px] w-[400px] flex items-center justify-center absolute overflow-hidden`}
      >
        <div
          style={{ top: index * -100 + '%' }}
          className="h-full w-full   absolute transition-all duration-500 ease-in-expo"
        >
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className={`${project.color}  relative flex justify-center items-center h-full `}
              >
                <Image
                  src={project.src}
                  alt={project.title}
                  width={350}
                  height={0}
                  className="h-auto"
                />
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        variants={scaleAnimation}
        animate={active ? 'enter' : 'closed'}
        initial="initial"
        ref={cursorRef}
        className="w-20 h-20 bg-yellow-500 absolute pointer-events-none flex items-center justify-center rounded-full text-white"
      ></motion.div>
      <motion.div
        variants={scaleAnimation}
        animate={active ? 'enter' : 'closed'}
        initial="initial"
        className="flex w-20 h-20 bg-transparent absolute pointer-events-none justify-center items-center rounded-full text-white"
        ref={cursorLabelRef}
      >
        View
      </motion.div>
    </>
  );
};

export default Modal;
