'use client';
import Description from '@/components/Description';
import Landing from '@/components/Landing';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    };
  });
  return (
    <main>
      <Landing />
      <Description />
    </main>
  );
}
