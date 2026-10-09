import { createContext, useContext, useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

export const InvitationMotionContext = createContext(false);

export function Appear({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ready = useContext(InvitationMotionContext);
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : "hidden"} whileInView={ready ? "visible" : "hidden"} viewport={{ once: true, amount: .16 }} variants={{ hidden: { opacity: 0, y: 36, scale: .97 }, visible: { opacity: 1, y: 0, scale: 1 } }} transition={{ duration: reduced ? 0 : 1.25, ease: [.16, 1, .3, 1] }}>{children}</motion.div>;
}

export function TitleSequence({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ready = useContext(InvitationMotionContext);
  const reduced = useReducedMotion();
  return <motion.div className={`title-sequence ${className}`} initial="hidden" animate={ready ? "visible" : "hidden"} variants={{ hidden: {}, visible: { transition: { staggerChildren: reduced ? 0 : .22, delayChildren: reduced ? 0 : .15 } } }}>{children}</motion.div>;
}

export function TitleBeat({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} variants={{ hidden: { opacity: 0, y: reduced ? 0 : 22 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: reduced ? 0 : 1.3, ease: [.16, 1, .3, 1] }}>{children}</motion.div>;
}

export function CameraImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.16, 1.04]);
  return <div ref={ref} className="camera-image"><motion.img src={src} alt={alt} loading="lazy" style={reduced ? {} : { y, scale }}/></div>;
}

export function CelebrationReveal({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const aperture = useTransform(scrollYProgress, [0, .7], ["inset(18% 20% 18% 20% round 180px 180px 0 0)", "inset(0% 0% 0% 0% round 0px 0px 0 0)"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.22, 1]);
  const y = useTransform(scrollYProgress, [0, .8], [30, -16]);
  const titleScale = useTransform(scrollYProgress, [0, .8], [.88, 1]);
  const lineScale = useTransform(scrollYProgress, [0, .65], [.08, 1]);
  return <section ref={ref} className={`celebration-reveal ${reduced ? "celebration-still" : ""}`} aria-label={title}>
    <div className="celebration-sticky">
      <motion.div className="celebration-aperture" style={reduced ? {} : { clipPath: aperture }}><motion.img src={src} alt="" loading="lazy" style={reduced ? {} : { scale }}/></motion.div>
      <div className="celebration-title"><span className="celebration-ornament" aria-hidden="true">✦</span><motion.span className="celebration-line" style={reduced ? {} : { scaleX: lineScale }}/><motion.h2 style={reduced ? {} : { y, scale: titleScale }}>{title}</motion.h2><motion.span className="celebration-line" style={reduced ? {} : { scaleX: lineScale }}/></div>
    </div>
  </section>;
}

export function CelebrationTransition() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const lineScale = useTransform(scrollYProgress, [0, .7], [.04, 1]);
  const firstOpacity = useTransform(scrollYProgress, [0, .15, .4, .55], [0, 1, 1, 0]);
  const secondOpacity = useTransform(scrollYProgress, [.35, .6, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [.35, .8], [35, 0]);
  return <section ref={ref} className={`film-transition ${reduced ? "film-still" : ""}`} aria-label="From a beautiful beginning to a beautiful celebration"><div className="film-sticky"><motion.p className="section-label" style={reduced ? {} : { opacity: firstOpacity }}>A beautiful beginning</motion.p><motion.span className="film-line" style={reduced ? {} : { scaleX: lineScale }}/><motion.h2 style={reduced ? {} : { opacity: secondOpacity, y }}>And now,<br/><em>we celebrate.</em></motion.h2><span className="film-diamond" aria-hidden="true">✦</span></div></section>;
}

export function ReadingProgress() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });
  return <motion.div className="reading-progress" style={{ scaleX: reduced ? scrollYProgress : scaleX }} aria-hidden="true"/>;
}