'use client';
import { FC, useState } from 'react';
import Navbar from './Navbar';

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <div className="flex justify-between p-10">
      <div className="">Gokay Akkus</div>
      <div className="flex gap-3">Home about projects</div>
      <div>
        <button
          className="text-red-500 relative z-40"
          onClick={() => setIsActive(!isActive)}
        >
          X
        </button>
      </div>
      {isActive && <Navbar />}
    </div>
  );
};

export default Header;
