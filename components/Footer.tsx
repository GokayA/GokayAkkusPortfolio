import { FC } from 'react';

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="overflow-hidden flex gap-10 justify-between text-sm w-full">
      <p>Instagram</p>
      <p>Twitter</p>
      <p>LinkedIn</p>
      <p>Github</p>
    </div>
  );
};

export default Footer;
