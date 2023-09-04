import Link from 'next/link';
import { FC } from 'react';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const navItems = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Projects',
      href: '/projects',
    },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
  ];
  return (
    <div className="flex justify-between p-10 h-full fixed right-0 top-0 bg-black text-white z-[30]">
      <div className="p-28 box-border h-full w-full flex flex-col justify-between">
        <div className="flex flex-col  gap-2 mt-20">
          {navItems.map((item, i) => {
            return (
              <div className=" " key={i}>
                <Link href={item.href}>{item.title}</Link>
              </div>
            );
          })}
        </div>
      </div>{' '}
    </div>
  );
};

export default Navbar;
