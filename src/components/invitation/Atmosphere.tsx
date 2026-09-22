import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useMemo } from "react";

export function IslamicPattern({ className = "" }: { className?: string }) {
  return (
    <svg className={`pattern-draw ${className}`} viewBox="0 0 800 800" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="0.75">
        <path d="M400 45 505 155 660 140 645 295 755 400 645 505 660 660 505 645 400 755 295 645 140 660 155 505 45 400 155 295 140 140 295 155Z" />
        <path d="M400 120 480 210 600 200 590 320 680 400 590 480 600 600 480 590 400 680 320 590 200 600 210 480 120 400 210 320 200 200 320 210Z" />
        <path d="M400 198 454 272 545 255 528 346 602 400 528 454 545 545 454 528 400 602 346 528 255 545 272 454 198 400 272 346 255 255 346 272Z" />
        <circle cx="400" cy="400" r="120" /><circle cx="400" cy="400" r="205" /><circle cx="400" cy="400" r="282" />
        <path d="M400 45v710M45 400h710M150 150l500 500M650 150 150 650" />
      </g>
    </svg>
  );
}

export function ParticleField() {
  const particles = useMemo(
    () => Array.from({ length: 24 }, (_, index) => ({
      id: index,
      left: `${(index * 37) % 97}%`,
      top: `${(index * 61) % 91}%`,
      delay: `${(index % 8) * -1.4}s`,
      duration: `${9 + (index % 7)}s`,
      size: `${1 + (index % 3)}px`,
    })),
    [],
  );
  return (
    <div className="particles" aria-hidden="true">
      {particles.map((particle) => (
        <i key={particle.id} style={particle} />
      ))}
    </div>
  );
}

export function CustomCursor() {
  const x = useMotionValue(-20);
  const y = useMotionValue(-20);
  const smoothX = useSpring(x, { stiffness: 550, damping: 42 });
  const smoothY = useSpring(y, { stiffness: 550, damping: 42 });

  useEffect(() => {
    const move = (event: MouseEvent) => { x.set(event.clientX); y.set(event.clientY); };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return <motion.div className="cinema-cursor" style={{ x: smoothX, y: smoothY }} aria-hidden="true"><span>VIEW</span></motion.div>;
}
