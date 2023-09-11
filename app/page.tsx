'use client';
import Contact from '@/components/Contact';
import Description from '@/components/Description';
import Landing from '@/components/Landing';
import Projects from '@/components/Projects';
import SlidingIcons from '@/components/SlidingIcons';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  });
  return (
    <main>
      <Landing />
      <Description />
      <Projects />
      <SlidingIcons />
      <Contact />
    </main>
  );
}
