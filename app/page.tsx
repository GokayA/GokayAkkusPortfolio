'use client';
import Contact from '@/components/Contact';
import Starter from '@/components/Starter';
import Projects from '@/components/Projects';
import SlidingIcons from '@/components/SlidingIcons';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
      }, 2000);
    })();
  }, []);
  return (
    <main className="bg-[#141516]">
      <Starter />
      <Projects />
      <SlidingIcons />
      <Contact />
    </main>
  );
}
