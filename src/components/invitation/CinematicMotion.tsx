import { createContext, useContext, useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { IslamicPattern } from "./Atmosphere";

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
  const glowY = useTransform(scrollYProgress, [0, 1], ["-14%", "14%"]);
  const titleScale = useTransform(scrollYProgress, [0, .8], [.88, 1]);
  const lineScale = useTransform(scrollYProgress, [0, .65], [.08, 1]);
  return <section ref={ref} className={`celebration-reveal ${reduced ? "celebration-still" : ""}`} aria-label={title}>
    <div className="celebration-sticky">
      <motion.div className="celebration-glow" style={reduced ? {} : { y: glowY }} aria-hidden="true"/>
      <div className="cover-sparkles" aria-hidden="true">{Array.from({ length: 6 }, (_, i) => <i key={i}/>)}</div>
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

export function GhostWord({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["16%", "-16%"]);
  const x = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, .92]);
  return <div ref={ref} className={`ghost-layer ${className}`} aria-hidden="true">
    <motion.span style={reduced ? {} : { y, x, scale }}>{text}</motion.span>
  </div>;
}

export function ParallaxRing({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const y = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [.9, 1.1]);
  return <div ref={ref} className={`parallax-ring ${className}`} aria-hidden="true">
    <motion.div style={reduced ? {} : { rotate, y, scale }}><IslamicPattern /></motion.div>
  </div>;
}

export function LabelRule({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.p className={`label-rule ${className}`} initial={reduced ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: .6 }}>
    <motion.i variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }} transition={{ duration: reduced ? 0 : 1, ease: [.16, 1, .3, 1] }} />
    <span>{children}</span>
    <motion.i variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }} transition={{ duration: reduced ? 0 : 1, delay: reduced ? 0 : .18, ease: [.16, 1, .3, 1] }} />
  </motion.p>;
}

export function SheenTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <span className={`sheen-title ${className}`}>{children}{!reduced && <i aria-hidden="true" />}</span>;
}

export function CharsReveal({ text, className = "" }: { text: string; className?: string }) {
  const reduced = useReducedMotion();
  return <span className={`chars-reveal ${className}`} aria-label={text}>
    {Array.from(text).map((char, index) => (
      <motion.span key={`${char}-${index}`} aria-hidden="true" initial={reduced ? false : { opacity: 0, y: ".55em", rotate: 5 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true, amount: .7 }} transition={{ duration: reduced ? 0 : .9, delay: reduced ? 0 : index * .04, ease: [.16, 1, .3, 1] }}>{char === " " ? "\u00A0" : char}</motion.span>
    ))}
  </span>;
}

export function ScrollSpin({ children, className = "", from = -25, to = 35 }: { children: ReactNode; className?: string; from?: number; to?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [from, to]);
  return <div ref={ref} className={className}><motion.div style={reduced ? {} : { rotate }}>{children}</motion.div></div>;
}

export function ReadingProgress() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });
  return <motion.div className="reading-progress" style={{ scaleX: reduced ? scrollYProgress : scaleX }} aria-hidden="true"/>;
}