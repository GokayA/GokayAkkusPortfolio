import Link from 'next/link';
import { motion } from 'framer-motion';
const Footer = () => {
  return (
    <div className="overflow-hidden flex gap-10 justify-between text-sm w-full">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/gokay-akkus"
          className="text-lg font-thin pl-2 "
        >
          LinkedIn
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link
          target="_blank"
          href="https://github.com/GokayA"
          className="text-lg font-thin pr-2"
        >
          Github
        </Link>
      </motion.div>
    </div>
  );
};

export default Footer;
