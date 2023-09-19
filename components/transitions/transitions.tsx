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

export const descriptionSlideUp = {
  initial: {
    y: '100%',
  },
  open: (i: number) => ({
    y: 0,
    transition: { duration: 0.5, delay: 0.02 * i },
  }),
  closed: {
    y: '100%',
  },
};

export const descriptionOpacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  closed: {
    opacity: 0,
  },
};

export const scaleAnimation = {
  initial: { scale: 0, x: '-50%', y: '-50%' },
  enter: {
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};
