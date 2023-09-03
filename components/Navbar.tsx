import Link from 'next/link';
import { FC } from 'react';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="flex justify-between p-10">
      <div className="">Gokay Akkus</div>
      <div className="flex gap-3">
        <Link href="/home">
          <button>Home</button>
        </Link>
        <Link href="/about">
          <button>About</button>
        </Link>
        <Link href="/projects">
          <button>Projects</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
