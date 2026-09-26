import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ChevronLeft, ChevronRight, Heart, MapPin, Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import attire from "@/assets/walima-attire.jpg";
import ballroom from "@/assets/walima-ballroom.jpg";
import rings from "@/assets/walima-rings.jpg";
import silhouette from "@/assets/walima-silhouette.jpg";
import { Button } from "@/components/ui/button";
import { invitation, rsvpMessage, walimaDate } from "@/data/invitation";
import { CalendarActions, LocationButton, SoundControl } from "./Controls";
import { IslamicPattern } from "./Atmosphere";

const images = [
  { src: silhouette, alt: "A couple beneath an Islamic arch", caption: "A beautiful beginning" },
  { src: attire, alt: "Wedding attire and jasmine flowers", caption: "The details of our day" },
  { src: rings, alt: "Wedding rings on emerald velvet", caption: "A promise to cherish" },
  { src: ballroom, alt: "Grand ballroom with Islamic arches", caption: "A place to celebrate" },
];
const chapters = [
  ["invitation", "Invitation"], ["story", "Our story"], ["date", "The date"],
  ["ceremony", "Nikah"], ["walima", "Walima"], ["gallery", "Gallery"], ["rsvp", "RSVP"],
];

function Bloom({ light = false }: { light?: boolean }) {
  return <span className={`bloom ${light ? "bloom-light" : ""}`} aria-hidden="true">✦</span>;
}
function Appear({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 32, scale: .97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: .16 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>{children}</motion.div>;
}
function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}
function Countdown() {
  const [remaining, setRemaining] = useState<number | null>(null);
  useEffect(() => {
    const update = () => setRemaining(Math.max(0, walimaDate.getTime() - Date.now()));
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);
  const seconds = Math.floor((remaining ?? 0) / 1000);
  const values = [Math.floor(seconds / 86400), Math.floor(seconds % 86400 / 3600), Math.floor(seconds % 3600 / 60), seconds % 60];
  return <section className="paper-section countdown-section" aria-label="Countdown to the Walima"><Appear><Bloom/><SectionLabel>Counting down to forever</SectionLabel><h2>Until we celebrate</h2><div className="countdown-grid">{["Days", "Hours", "Minutes", "Seconds"].map((label, index) => <div key={label}><strong>{remaining === null ? "--" : String(values[index]).padStart(2, "0")}</strong><span>{label}</span></div>)}</div>{remaining === 0 && <p>Today is the day. Alhamdulillah.</p>}</Appear></section>;
}
function Details({ title, rows }: { title: string; rows: [string, string][] }) {
  return <div className="event-details"><h2>{title}</h2><dl>{rows.map(([key, value]) => <div key={key}><dt>{key}</dt><dd>{value}</dd></div>)}</dl></div>;
}

export function WalimaExperience() {
  const [opening, setOpening] = useState<"closed" | "opening" | "open">("closed");
  const [menu, setMenu] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [imageIndex, setImageIndex] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    if (opening !== "opening") return;
    const timer = window.setTimeout(() => { setOpening("open"); document.getElementById("invitation")?.scrollIntoView({ behavior: "smooth" }); }, reducedMotion ? 50 : 1750);
    return () => window.clearTimeout(timer);
  }, [opening, reducedMotion]);
  useEffect(() => {
    if (opening === "open") return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [opening]);
  useEffect(() => {
    if (imageIndex === null) return;
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setImageIndex(null);
      if (event.key === "ArrowLeft") setImageIndex(i => i === null ? null : (i + images.length - 1) % images.length);
      if (event.key === "ArrowRight") setImageIndex(i => i === null ? null : (i + 1) % images.length);
    };
    window.addEventListener("keydown", keydown);
    return () => window.removeEventListener("keydown", keydown);
  }, [imageIndex]);
  const whatsapp = `https://wa.me/${invitation.rsvp.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(rsvpMessage)}`;
  return <main className="invitation-page">
    {opening !== "open" && <div className={`cover-screen ${opening === "opening" ? "cover-opening" : ""}`}>
      <div className="cover-leaf cover-leaf-left"/><div className="cover-leaf cover-leaf-right"/>
      <div className="cover-content"><p className="cover-top">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p><div className="cover-medallion"><IslamicPattern/><div><span className="cover-kicker">The Nikah & Walima of</span><strong>Mohammed<br/>Ashhad</strong><em>&</em><strong>Lubna<br/>Fathima</strong></div></div><p className="cover-foot">With the blessings of Allah</p></div>
      <Button variant="cinemaOutline" size="cinema" className="open-invitation" disabled={opening === "opening"} onClick={() => setOpening("opening")}>Open invitation <ArrowDown size={15}/></Button>
    </div>}
    {opening === "open" && <><Button variant="cinemaGhost" size="cinemaIcon" className="mobile-menu" aria-label={menu ? "Close navigation" : "Open navigation"} onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</Button><SoundControl/>{menu && <nav className="chapter-menu" aria-label="Invitation chapters">{chapters.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>{label}</a>)}</nav>}</>}
    <section id="invitation" className="paper-section hero-section"><div className="frame-corner frame-top"/><div className="frame-corner frame-bottom"/><Appear className="hero-inner"><Bloom/><p className="arabic-intro" lang="ar" dir="rtl">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p><SectionLabel>With the blessings of Allah</SectionLabel><h1><span>Mohammed Ashhad</span><em>&</em><span>Lubna Fathima</span></h1><div className="hero-divider"/><p className="hero-event">The Nikah</p><p className="hero-date">12 · 12 · 2026</p></Appear><a className="next-cue" href="#message" aria-label="Continue to invitation message"><ArrowDown size={18}/></a></section>
    <section id="message" className="paper-section message-section"><Appear><Bloom/><SectionLabel>A heartfelt invitation</SectionLabel><h2>Two hearts, one beautiful beginning.</h2><p>By the grace of Allah, and with the blessings of our families, we invite you to share in the joy of our Nikah and celebrate the beginning of our life together.</p><span className="ornament-rule"/></Appear></section>
    <section className="ornament-section" aria-label="Islamic ornament"><IslamicPattern/><Appear><p lang="ar" dir="rtl">وَخَلَقْنَاكُمْ أَزْوَاجًا</p><span>“And We created you in pairs.”</span><small>Qur’an 78:8</small></Appear></section>
    <section id="story" className="paper-section story-section"><Appear><SectionLabel>Our story</SectionLabel><h2>A beautiful beginning</h2></Appear><Appear className="story-image"><img src={silhouette} alt="A couple walking beneath an Islamic arch" loading="lazy"/></Appear><Appear className="story-copy"><Bloom/><p>On the twelfth of December, by the grace of Allah, two lives become one.</p></Appear><Appear className="story-image story-image-second"><img src={rings} alt="Wedding rings on emerald velvet" loading="lazy"/></Appear><Appear className="story-copy"><p>And the following evening, we gather with those we love to celebrate.</p></Appear></section>
    <section id="date" className="royal-section save-section"><Appear><SectionLabel>Save the date</SectionLabel><Button variant="cinemaGhost" size="cinemaIcon" className={`heart-control ${revealed ? "heart-open" : ""}`} aria-label="Reveal the celebration date" aria-expanded={revealed} onClick={() => setRevealed(!revealed)}><Heart strokeWidth={1}/></Button><div className={`save-date ${revealed ? "is-revealed" : ""}`}><strong>13</strong><span>December</span><small>2026 · Sunday</small></div><p className="save-caption">The Walima celebration</p><CalendarActions/></Appear></section>
    <Countdown/>
    <section id="ceremony" className="paper-section ceremony-section"><Appear><Bloom/><SectionLabel>The first chapter</SectionLabel><Details title="Nikah ceremony" rows={[["Date", invitation.nikah.date], ["The moment", "Our Nikah"]]}/><p className="detail-note">Details for the ceremony are yet to be shared.</p></Appear></section>
    <section id="venue" className="venue-section"><Appear><img src={ballroom} alt="Elegant ballroom with Islamic arches" loading="lazy"/><div className="venue-content"><SectionLabel>The celebration awaits</SectionLabel><h2>{invitation.walima.venue}</h2><p>{invitation.walima.address}</p><LocationButton/></div></Appear></section>
    <section id="walima" className="royal-section walima-section"><IslamicPattern/><Appear><Bloom light/><SectionLabel>The second chapter</SectionLabel><h2>Walima</h2><p className="walima-intro">With joy, we invite you to celebrate with us.</p><Details title="Together in celebration" rows={[["Date", invitation.walima.date], ["Time", invitation.walima.time], ["Venue", invitation.walima.venue]]}/></Appear></section>
    <section className="paper-section schedule-section"><Appear><SectionLabel>Our celebrations</SectionLabel><h2>A journey together</h2></Appear><div className="schedule-timeline">{[["12 Dec", "Nikah", "A new beginning"], ["13 Dec", "Walima", "An evening of celebration"], ["Forever", "Our next chapter", "With your prayers & blessings"]].map(([date, title, description]) => <Appear key={title} className="schedule-item"><span>{date}</span><h3>{title}</h3><p>{description}</p></Appear>)}</div></section>
    <section id="gallery" className="paper-section gallery-section"><Appear><SectionLabel>Little moments, lasting memories</SectionLabel><h2>In every detail</h2></Appear><div className="gallery-flow">{images.map((image, index) => <Appear key={image.src} className={`gallery-image gallery-image-${index}`}><Button variant="cinemaGhost" size="cinemaIcon" className="gallery-tap" aria-label={`View image ${index + 1}: ${image.caption}`} onClick={() => setImageIndex(index)}><img src={image.src} alt={image.alt} loading="lazy"/></Button><p>0{index + 1} <span>{image.caption}</span></p></Appear>)}</div></section>
    <section className="paper-section practical-section"><Appear><Bloom/><SectionLabel>With care</SectionLabel><h2>For our guests</h2><div className="practical-line"><MapPin size={20}/><div><h3>Getting there</h3><p>{invitation.walima.venue}, {invitation.walima.address}.</p><p>Parking and transport details will be shared closer to the celebration.</p></div></div></Appear></section>
    <section className="paper-section blessing-section"><Appear><Bloom/><SectionLabel>Your presence is a gift</SectionLabel><h2>Your prayers mean the world to us.</h2><p>We ask only for your duas and blessings as we begin this new chapter together.</p></Appear></section>
    <section id="rsvp" className="royal-section rsvp-section"><Appear><Bloom light/><SectionLabel>Celebrate with us</SectionLabel><h2>We would love to have you there.</h2><p>Your presence, prayers and blessings would make our evening even more meaningful.</p><Button variant="cinema" size="cinemaLarge" asChild><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle/> RSVP on WhatsApp</a></Button></Appear></section>
    <section className="royal-section final-section"><IslamicPattern/><Appear><p className="final-arabic" lang="ar" dir="rtl">الحمد لله</p><SectionLabel>With love and gratitude</SectionLabel><h2>Mohammed Ashhad <em>&</em> Lubna Fathima</h2><p>May Allah bless this union and fill it with love, mercy and peace.</p><span className="ornament-rule"/><small>13 · 12 · 2026</small></Appear></section>
    {imageIndex !== null && <div className="gallery-viewer" role="dialog" aria-modal="true" aria-label="Photo gallery" onTouchStart={e => { e.currentTarget.dataset.touchX = String(e.touches[0].clientX); }} onTouchEnd={e => { const start = Number(e.currentTarget.dataset.touchX); const difference = e.changedTouches[0].clientX - start; if (Math.abs(difference) > 55) setImageIndex((imageIndex + (difference < 0 ? 1 : images.length - 1)) % images.length); }}><Button variant="cinemaGhost" size="cinemaIcon" className="viewer-close" aria-label="Close gallery" onClick={() => setImageIndex(null)}><X/></Button><Button variant="cinemaGhost" size="cinemaIcon" className="viewer-prev" aria-label="Previous photo" onClick={() => setImageIndex((imageIndex + images.length - 1) % images.length)}><ChevronLeft/></Button><img src={images[imageIndex].src} alt={images[imageIndex].alt}/><Button variant="cinemaGhost" size="cinemaIcon" className="viewer-next" aria-label="Next photo" onClick={() => setImageIndex((imageIndex + 1) % images.length)}><ChevronRight/></Button><p>{images[imageIndex].caption} · {imageIndex + 1} / {images.length}</p></div>}
  </main>;
}
