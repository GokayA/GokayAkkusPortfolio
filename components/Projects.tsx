import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { FC, useState } from 'react';
import Modal from './Modal';
import Project from './Project';

interface ProjectsProps {}

const projects = [
  {
    title: 'Project1',
    src: '/place.png',
    color: 'bg-red-500',
  },
  {
    title: 'Project2',
    src: '/place.png',
    color: 'bg-yellow-500',
  },
  {
    title: 'Project3',
    src: '/place.png',
    color: 'bg-purple-500',
  },
  {
    title: 'Project4',
    src: '/place.png',
    color: 'bg-black',
  },
];

const Projects: FC<ProjectsProps> = ({}) => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <div className=" flex overflow-hidden pt-48 placeholder:b-12 items-center  justify-center border-t-4 h-full bg-[#f4f4f4]">
      <div className="sm:flex hidden w-[1000px]  items-center justify-center flex-col">
        {projects.map((project, index) => {
          return (
            <>
              <Project
                key={index}
                index={index}
                title={project.title}
                setModal={setModal}
              />
            </>
          );
        })}
      </div>
      <motion.div
        initial="initial"
        className="pointer-events-none w-[400px]  flex items-center justify-center  overflow-hidden"
      >
        <div className="sm:hidden h-full w-full flex flex-col">
          {projects.map((project, index) => {
            return (
              <>
                <Project
                  key={project.title}
                  index={index}
                  title={project.title}
                  setModal={setModal}
                />
                <div
                  className={`${project.color}  relative flex justify-center items-center h-full `}
                >
                  <Image
                    src={project.src}
                    alt={project.title}
                    width={300}
                    height={0}
                    className="h-auto"
                  />
                </div>
              </>
            );
          })}
        </div>
      </motion.div>
      <Modal modal={modal} projects={projects} />
    </div>
  );
};

export default Projects;
