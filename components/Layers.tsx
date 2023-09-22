import React, { useContext, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TransitionContext from './transitions/TransitionContext';
import Description from './Description';
import Landing from './Landing';

export default function Layers() {
  const main = useRef(null);
  const scrollTween = useRef<gsap.TweenTarget>();
  const [ctx] = useState(gsap.context(() => {}, main));
  const { completed } = useContext(TransitionContext);

  const goToSection = (i: number) => {
    // Remove the GSAP instance with the specific ID
    // to prevent memory leak
    ctx.data.forEach((e: gsap.TweenVars) => {
      if (e.vars && e.vars.id === 'scrollTween') {
        e.kill();
      }
    });
    ctx.add(() => {
      scrollTween.current = gsap.to(window, {
        scrollTo: { y: i * window.innerHeight, autoKill: false },
        duration: 1,
        id: 'scrollTween',
        onComplete: () => (scrollTween.current = null),
        overwrite: true,
      });
    });
  };

  useLayoutEffect(() => {
    if (!completed) return;
    ctx.add(() => {
      const panels = gsap.utils.toArray('.panel');
      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel as gsap.DOMTarget,
          start: 'top bottom',
          end: '+=200%',
          onToggle: (self) =>
            self.isActive && !scrollTween.current && goToSection(i),
        });
      });
      ScrollTrigger.create({
        start: 0,
        end: 'max',
        snap: 1 / (panels.length - 1),
      });
    });
    return () => ctx.revert();
  }, [completed]);

  return (
    <main ref={main}>
      <section className=" sticky h-[100vh] top-0">
        <Landing />
      </section>
      <section className="  sticky  top-0">
        <Description />
      </section>
    </main>
  );
}
