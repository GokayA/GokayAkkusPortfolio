import Link from 'next/link';

const Footer = () => {
  return (
    <div className="overflow-hidden flex gap-10 justify-between text-sm w-full">
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/gokay-akkus"
        className="text-lg font-thin hover:text-2xl"
      >
        LinkedIn
      </Link>
      <Link
        target="_blank"
        href="https://github.com/GokayA"
        className="text-lg font-thin hover:text-2xl"
      >
        Github
      </Link>
    </div>
  );
};

export default Footer;
