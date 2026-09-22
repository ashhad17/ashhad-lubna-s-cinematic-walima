import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, Check, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import attire from "@/assets/walima-attire.jpg";
import ballroom from "@/assets/walima-ballroom.jpg";
import rings from "@/assets/walima-rings.jpg";
import silhouette from "@/assets/walima-silhouette.jpg";
import { Button } from "@/components/ui/button";
import { invitation, rsvpMessage } from "@/data/invitation";
import { reveal, revealTransition, stagger } from "@/animations/variants";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { CalendarActions, LocationButton, SceneIndicator, ScrollCue, SoundControl, walimaDate } from "./Controls";
import { CustomCursor, IslamicPattern, ParticleField } from "./Atmosphere";

const sceneView = { once: false, amount: 0.3 } as const;

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <motion.p variants={reveal} transition={revealTransition} className="eyebrow">{children}</motion.p>;
}
function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <motion.div className={className} variants={stagger} initial="hidden" whileInView="visible" viewport={sceneView}>{children}</motion.div>;
}
function Word({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <motion.span className={className} variants={reveal} transition={revealTransition}>{children}</motion.span>;
}

function IntroScene() {
  const [entered, setEntered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const tilt = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!cardRef.current || event.pointerType !== "mouse") return;
    const rect = cardRef.current.getBoundingClientRect();
    const rx = ((event.clientY - rect.top) / rect.height - 0.5) * -7;
    const ry = ((event.clientX - rect.left) / rect.width - 0.5) * 7;
    cardRef.current.style.setProperty("--rx", `${rx}deg`);
    cardRef.current.style.setProperty("--ry", `${ry}deg`);
  };
  return (
    <section id="chapter-1" className={`scene intro-scene ${entered ? "is-entered" : ""}`}>
      <ParticleField /><IslamicPattern className="intro-pattern" />
      <div className="intro-line" />
      <p className="bismillah" lang="ar" dir="rtl">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
      <div ref={cardRef} onPointerMove={tilt} onPointerLeave={() => { cardRef.current?.style.setProperty("--rx", "0deg"); cardRef.current?.style.setProperty("--ry", "0deg"); }} className="invitation-object">
        <div className="invitation-face">
          <span>Walima</span><strong>M <i>&</i> L</strong><small>13 · 12 · 2026</small>
        </div>
      </div>
      <Button variant="cinema" size="cinema" className="enter-invitation" onClick={() => setEntered(true)}>Enter the invitation <ArrowDown /></Button>
      {entered && <ScrollCue />}
    </section>
  );
}

function RevealScene() {
  return (
    <section id="chapter-2" className="scene reveal-scene">
      <IslamicPattern className="reveal-pattern" />
      <Reveal className="reveal-copy"><Eyebrow>A beautiful beginning</Eyebrow><Word>Mohammed</Word><Word>Ashhad</Word><Word className="ampersand">&</Word><Word>Lubna</Word><Word>Fathima</Word></Reveal>
    </section>
  );
}

function NamesScene() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -120]);
  const x = useTransform(scrollYProgress, [0, 1], [-35, 35]);
  return (
    <section ref={ref} className="scene names-scene">
      <motion.div className="editorial-names" style={{ y }}><span>Mohammed</span><span>Ashhad</span><i>×</i><span>Lubna</span><span>Fathima</span></motion.div>
      <motion.div className="travel-line" style={{ x }} />
      <span className="scene-number">03 / A union</span>
    </section>
  );
}

function QuranSection() {
  return (
    <section className="scene quran-scene"><Reveal className="quran-copy"><Word className="arabic-verse"><span lang="ar" dir="rtl">{invitation.verse.arabic}</span></Word><Word className="verse-translation">“{invitation.verse.english}”</Word><Word className="verse-reference">— {invitation.verse.reference}</Word></Reveal></section>
  );
}

function NikahStory() {
  return (
    <section className="scene nikah-scene"><div className="warm-haze"/><Reveal className="nikah-copy"><Eyebrow>The beginning</Eyebrow><Word className="day-number">12</Word><Word className="month">December</Word><Word className="year">2026</Word><Word className="milestone">The Nikah · A chapter complete</Word><Word className="story-line">By the grace of Allah, two lives became one.</Word></Reveal></section>
  );
}

function WalimaReveal() {
  return (
    <section id="chapter-3" className="scene walima-reveal"><Reveal className="transition-copy"><Word>And now…</Word><span className="expanding-line"/><Word className="celebrate">We celebrate.</Word><Word className="walima-title">Walima</Word></Reveal></section>
  );
}

function InvitationScene() {
  return (
    <section className="scene invitation-scene"><IslamicPattern className="invitation-pattern"/><Reveal className="invited-copy"><Eyebrow>You are invited</Eyebrow><Word className="to-celebrate">To celebrate the Walima of</Word><Word className="couple-name">Mohammed Ashhad</Word><Word className="ampersand">&</Word><Word className="couple-name">Lubna Fathima</Word></Reveal></section>
  );
}

function DateReveal() {
  return (
    <section id="chapter-4" className="scene date-scene"><ParticleField/><Reveal className="date-copy"><Eyebrow>{invitation.walima.day}</Eyebrow><Word className="date-number">13</Word><Word className="date-month">December</Word><Word className="date-year">2026</Word><Word className="date-time">{invitation.walima.time}</Word></Reveal></section>
  );
}

function GoldenPath() {
  return (
    <section className="scene path-scene"><div className="path-intro"><span>The path to celebration</span></div><div className="golden-path"><i/><ol><li><small>12 Dec</small><strong>Nikah</strong></li><li><small>Two lives</small><strong>A new chapter</strong></li><li><small>13 Dec</small><strong>Walima</strong></li><li><small>Together</small><strong>Celebration</strong></li></ol></div></section>
  );
}

const photos = [
  { src: attire, alt: "Emerald wedding attire and jasmine flowers", width: 1104, height: 1504 },
  { src: rings, alt: "Wedding rings on emerald velvet", width: 1504, height: 1008 },
  { src: silhouette, alt: "Couple walking beneath an Islamic arch at sunset", width: 1104, height: 1504 },
];
function CinematicGallery() {
  return (
    <section className="gallery-scene"><p className="gallery-kicker">Details of a beautiful beginning</p>{photos.map((photo, index) => <figure key={photo.src} className={`floating-photo photo-${index + 1}`}><div><img src={photo.src} alt={photo.alt} loading="lazy" width={photo.width} height={photo.height}/></div><figcaption>0{index + 1} <span>{index === 0 ? "Tradition" : index === 1 ? "A promise" : "A new chapter"}</span></figcaption></figure>)}</section>
  );
}

function VenueScene() {
  return (
    <section className="scene venue-scene"><img className="venue-image" src={ballroom} alt="Grand emerald ballroom with Islamic arches" loading="lazy" width={1600} height={1008}/><div className="venue-shade"/><Reveal className="venue-copy"><Eyebrow>The celebration</Eyebrow><Word className="venue-name">Royal Orchid</Word><Word className="venue-ballroom">Grand Ballroom</Word><Word className="venue-address">Airport Road<br/>Bengaluru, Karnataka</Word><motion.div variants={reveal} transition={revealTransition}><LocationButton /></motion.div></Reveal></section>
  );
}

function Countdown() {
  const [time, setTime] = useState(() => walimaDate.getTime() - Date.now());
  useEffect(() => { const timer = window.setInterval(() => setTime(walimaDate.getTime() - Date.now()), 1000); return () => window.clearInterval(timer); }, []);
  if (time <= 0) return <section className="scene countdown-scene"><h2>The day has arrived</h2></section>;
  const seconds = Math.floor(time / 1000);
  const values = { days: Math.floor(seconds / 86400), hours: Math.floor((seconds % 86400) / 3600), minutes: Math.floor((seconds % 3600) / 60), seconds: seconds % 60 };
  return <section className="scene countdown-scene"><Eyebrow>The celebration begins in</Eyebrow><div className="countdown-primary"><strong>{values.days}</strong><span>Days</span></div><div className="countdown-secondary">{(["hours", "minutes", "seconds"] as const).map((unit) => <div key={unit}><strong>{String(values[unit]).padStart(2, "0")}</strong><span>{unit}</span></div>)}</div><CalendarActions /></section>;
}

function RSVP() {
  const [attending, setAttending] = useState(false);
  const whatsapp = `https://wa.me/${invitation.rsvp.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(rsvpMessage)}`;
  return (
    <section id="chapter-5" className="scene rsvp-scene"><IslamicPattern className="rsvp-pattern"/><Reveal className="rsvp-copy"><Eyebrow>In the company of those we love</Eyebrow><Word className="rsvp-title">We would love to have you with us</Word><Word className="rsvp-message">Your presence, prayers and blessings would make our celebration even more meaningful.</Word><motion.div variants={reveal} transition={revealTransition} className="rsvp-actions"><Button variant="cinema" size="cinemaLarge" onClick={() => setAttending(true)}>{attending ? <><Check/> We’ll see you there</> : "I’ll be there"}</Button><Button asChild variant="cinemaOutline" size="cinemaLarge"><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle/> RSVP on WhatsApp</a></Button></motion.div></Reveal></section>
  );
}

function FinalScene() {
  return (
    <section className="scene finale-scene"><ParticleField/><Reveal className="finale-copy"><Word>From a beautiful beginning…</Word><Word>To a beautiful celebration.</Word><Word className="alhamdulillah">Alhamdulillah</Word><Word className="final-names">Mohammed Ashhad <i>&</i> Lubna Fathima</Word><Word className="final-date">13 • 12 • 2026</Word><Word className="farewell">We look forward to celebrating with you.</Word></Reveal><span className="final-light"/></section>
  );
}

export function WalimaExperience() {
  const [active, setActive] = useState(0);
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    const ids = ["chapter-1", "chapter-2", "chapter-3", "chapter-4", "chapter-5"];
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActive(ids.indexOf(entry.target.id)); }), { threshold: 0.35 });
    ids.forEach((id) => { const node = document.getElementById(id); if (node) observer.observe(node); });
    return () => observer.disconnect();
  }, []);
  return <main className={`cinematic-page ${reducedMotion ? "reduced-motion" : ""}`}><CustomCursor/><SoundControl/><SceneIndicator active={active}/><IntroScene/><RevealScene/><NamesScene/><QuranSection/><NikahStory/><WalimaReveal/><InvitationScene/><DateReveal/><GoldenPath/><CinematicGallery/><VenueScene/><Countdown/><RSVP/><FinalScene/></main>;
}
