import { FC } from 'react';

interface ModalState {
  active: boolean;
  index: number;
}

interface ProjectProps {
  index: number;
  title: string;
  setModal: React.Dispatch<React.SetStateAction<ModalState>>;
}

const Project: FC<ProjectProps> = ({ setModal, title, index }) => {
  return (
    <div
      onMouseEnter={() => setModal({ active: true, index: index })}
      onMouseLeave={() => setModal({ active: false, index: index })}
      className="flex justify-between items-center w-full py-12 px-24 transition-all ease-linear group border-t-2 hover:opacity-40 "
    >
      <h2 className="text-6xl group-hover:-translate-x-2 transition-all ease-linear font-normal">
        {title}
      </h2>
      <p className="font-light group-hover:translate-x-2 transition-all ease-linear">
        Design & Development
      </p>
    </div>
  );
};

export default Project;
