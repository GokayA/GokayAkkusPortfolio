import Link from 'next/link';
import { FC } from 'react';

interface ModalState {
  active: boolean;
  index: number;
}

interface ProjectProps {
  index: number;
  title: string;
  setModal: React.Dispatch<React.SetStateAction<ModalState>>;
  href: string;
}

const Project: FC<ProjectProps> = ({ setModal, title, index, href }) => {
  return (
    <Link href={href} target="_blank" className="w-full h-full">
      <div
        onMouseOver={() => setModal({ active: true, index: index })}
        onMouseOutCapture={() => setModal({ active: false, index: index })}
        className="flex sm:flex-row flex-col gap-2 justify-between items-center w-full py-12 px-24 transition-all ease-linear group border-t-2 hover:opacity-40 "
      >
        <h2 className="text-5xl sm:text-6xl group-hover:-translate-x-2 transition-all ease-linear font-normal">
          {title}
        </h2>
        <p className="font-light group-hover:translate-x-2 transition-all ease-linear">
          Design & Development
        </p>
      </div>
    </Link>
  );
};

export default Project;
