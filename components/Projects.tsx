import { motion, useScroll, useTransform } from 'framer-motion';
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
    <div className="overflow-hidden mt-48 mb-12 bg-white  flex items-center  justify-center h-[100vh]">
      <div className="w-[1000px] flex items-center justify-center flex-col">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              index={index}
              title={project.title}
              setModal={setModal}
            />
          );
        })}
      </div>
      <Modal modal={modal} projects={projects} />
    </div>
  );
};

export default Projects;
