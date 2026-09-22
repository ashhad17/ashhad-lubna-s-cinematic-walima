export const reveal = {
  hidden: { opacity: 0, y: 48, filter: "blur(14px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export const revealTransition = {
  duration: 1.2,
  ease: [0.16, 1, 0.3, 1] as const,
};

export const stagger = { visible: { transition: { staggerChildren: 0.16 } } };
