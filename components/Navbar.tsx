import { motion } from 'framer-motion';
import Link from 'next/link';
import { FC } from 'react';
import Footer from './Footer';
import { navbarMenuSlide, navbarSlide } from './transitions/transitions';

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
    <motion.div
      className="overflow-hidden flex justify-between  sm:p-10  h-full fixed right-0 top-0 bg-[#292929] text-white z-[30]"
      variants={navbarMenuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className="p-10 sm:p-20 box-border h-full w-full flex flex-col justify-between">
        <div className="flex flex-col text-6xl gap-3 mt-20">
          {navItems.map((item, i) => {
            return (
              <motion.div
                custom={i}
                variants={navbarSlide}
                animate="enter"
                exit="exit"
                initial="initial"
                key={i}
                className="relative flex items-center"
              >
                <Link href={item.href}>{item.title}</Link>
              </motion.div>
            );
          })}
        </div>
        <Footer />
      </div>
    </motion.div>
  );
};

export default Navbar;
