import { useScroll } from "motion/react";
import type { RefObject } from "react";

export function useScrollProgress(target: RefObject<HTMLElement | null>) {
  return useScroll({ target, offset: ["start end", "end start"] }).scrollYProgress;
}
