import { Mouse, Shell } from 'lucide-react';

const Landing = () => {
  return (
    <div className="flex relative h-[100vh] overflow-hidden text-white  justify-between p-4 sm:p-20 ">
      <div className="flex flex-col justify-between">
        {/* NEED TO CHANGE FONT AND TEXT LEADING MAYBE TO MAKE IT BEAUTIFUL ! */}
        <div>
          <h1 className="text-8xl sm:text-9xl ">I&apos;m Gokay</h1>
          <h1 className="text-8xl sm:text-9xl ">Akkus</h1>
        </div>
        <div className="flex lg:flex-row flex-col sm:gap-40 gap-20 pb-32">
          <div>
            <h1 className="text-4xl md:text-6xl pt-20 sm:pt-0">
              Web Developer
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-4xl sm:text-6xl xl:w-3/5 break-words flex ">
              <Shell size={60} /> Learn more about me
            </p>
            <Mouse
              className="animate-bounce pt-4 absolute bottom-5 text-center left-0 right-0 m-auto  "
              size={60}
            />
          </div>
        </div>
      </div>
      <div className="hidden sm:flex gap-4">
        <div className="rounded-full bg-zinc-800 text-white w-24 h-14 flex justify-center items-center">
          <p className="text-lg font-semibold">Projects</p>
        </div>
        <div className="rounded-full bg-zinc-800 text-white w-24 h-14 flex justify-center items-center">
          <p className="text-lg font-semibold">Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
