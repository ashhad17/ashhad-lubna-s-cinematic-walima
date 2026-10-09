import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export function CountdownDigits({ value, label }: { value: string; label: string }) {
  const reduced = useReducedMotion();
  return <div className="countdown-unit">
    <span className="countdown-numeral" aria-label={`${value} ${label}`}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.strong key={value} aria-hidden="true" initial={reduced ? false : { y: "65%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={reduced ? { opacity: 0 } : { y: "-65%", opacity: 0 }} transition={{ duration: reduced ? 0 : .45, ease: [.16, 1, .3, 1] }}>{value}</motion.strong>
      </AnimatePresence>
    </span>
    <span className="countdown-unit-label">{label}</span>
  </div>;
}