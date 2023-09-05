export const navbarMenuSlide = {
  initial: { x: 'calc(100% + 100px)' },
  enter: {
    x: '0%',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    x: '100%',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const navbarSlide = {
  initial: {
    x: '80px',
  },
  enter: (i: number) => ({
    x: '0px',
    transition: { duration: 0.8 },
    ease: [0.76, 0, 0.24, 1],
    delat: 0.05 * i,
  }),
  exit: (i: number) => ({
    x: '80px',
    transition: { duration: 0.8 },
    ease: [0.76, 0, 0.24, 1],
    delat: 0.05 * i,
  }),
};
