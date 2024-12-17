const transition = { duration: 0.5, ease: [0.76, 0, 0.24, 1] };

export const listVariants = {
  initial: { height: 0 },
  open: {
    height: "auto",
    transition: {
      staggerChildren: 0.35,
      staggerDirection: 1,
      delayChildren: 0.35,
      duration: 1.5,
    },
  },
  exit: {
    height: 0,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
      delayChildren: 0.1,
      duration: 1,
    },
  },
};

export const itemVariants = {
  initial: { opacity: 0, y: -20 },
  open: { opacity: 1, y: 0, transition },
  exit: { opacity: 0, y: -20, transition },
};

export const inputVariants = {
  initial: { width: 0, opacity: 0 },
  expanded: { width: 125, opacity: 1 },
  exit: { width: 0, opacity: 0 },
};

export const sideNavVariants = {
  initial: { opacity: 0, x: 20 },
  expanded: { opacity: 1, x: 0, transition: { duration: 1 } },
  exit: { opacity: 0, x: 20, transition: { duration: 0.3 } },
};
