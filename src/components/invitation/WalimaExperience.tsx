import { ArrowDown, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import attire from "@/assets/walima-attire.jpg";
import rings from "@/assets/walima-rings.jpg";
import silhouette from "@/assets/walima-silhouette.jpg";
import ballroom from "@/assets/walima-ballroom.jpg";
import { Button } from "@/components/ui/button";
import { coupleNames, invitation, walimaDate } from "@/data/invitation";
import { LocationButton } from "./Controls";
import { IslamicPattern, ParticleField } from "./Atmosphere";
import { Appear, CameraImage, CelebrationReveal, CharsReveal, GhostWord, InvitationMotionContext, LabelRule, ParallaxRing, ReadingProgress, ScrollSpin, SheenTitle, TitleBeat, TitleSequence } from "./CinematicMotion";
import { ScratchReveal } from "./ScratchReveal";
import { MarkedCalendar } from "./MarkedCalendar";
import { CountdownDigits } from "./CountdownDigits";

export type InvitationLanguage = "en" | "ur";

const copy = {
  en: {
    specialInvitation: "A special invitation",
    blessings: "With the blessings of Allah",
    openInvitation: "Open invitation",
    nikah: "The Nikah",
    walima: "Valima / Reception",
    littleSurprise: "",
    scratchTitle: "Scratch to reveal",
    scratchIntro: "A little heart holds the details of the day we celebrate our love.",
    invited: "You’re invited to celebrate the Valima / Reception of",
    scratchHint: "Scratch here to uncover",
    scratchStatus: "Scratch the heart to reveal the invitation, or use the button below.",
    revealedStatus: "Your Valima / Reception invitation is revealed.",
    revealButton: "Reveal with love",
    untilCelebrate: "Until we celebrate",
    countdownTitle: "Counting down to our Valima / Reception",
    anticipation: "A blessed moment is drawing near",
    countdownUnits: ["Days", "Hours", "Minutes", "Seconds"],
    today: "Today is the day. Alhamdulillah.",
    verseTranslation: invitation.verse.english,
    love: "With all our love",
    rsvpTitle: "Join us as our forever begins.",
    rsvpMessage: "Your presence, prayers and blessings would make our Valima / Reception celebration complete.",
    rsvpButton: "RSVP on WhatsApp",
    location: "Open location",
    date: (day: string, month: string, year: string) => `${day} · ${month} · ${year}`,
    walimaDate: (day: string, month: string, year: string) => `${day} ${month} ${year}`,
    walimaTime: (day: string, time: string) => `${day} · ${time}`,
    whatsapp: (names: string, date: string) => `Assalamu Alaikum! I would love to attend the Valima / Reception celebration of ${names} on ${date}. Looking forward to celebrating with you!`,
  },
  ur: {
    specialInvitation: "خصوصی دعوت نامہ",
    blessings: "اللہ کے فضل و کرم سے",
    openInvitation: "دعوت نامہ کھولیں",
    nikah: "نکاح",
    walima: "ولیمہ / استقبال",
    littleSurprise: "محبت بھرا ایک چھوٹا سا تحفہ",
    scratchTitle: "دل کو کھرچ کر دعوت دیکھیے",
    scratchIntro: "ہمارے جشن کی تفصیلات جاننے کے لیے دل کو آہستہ سے کھرچیں۔",
    invited: "آپ کو ولیمہ / استقبال میں شرکت کی دعوت ہے",
    scratchHint: "دعوت دیکھنے کے لیے یہاں کھرچیں",
    scratchStatus: "دعوت دیکھنے کے لیے دل کو کھرچیں یا نیچے بٹن دبائیں۔",
    revealedStatus: "آپ کے ولیمے / استقبال کی دعوت ظاہر ہو گئی ہے۔",
    revealButton: "محبت سے دعوت دیکھیے",
    untilCelebrate: "جشن تک باقی وقت",
    countdownTitle: "ولیمہ / استقبال میں باقی وقت",
    anticipation: "ایک بابرکت لمحہ قریب آ رہا ہے",
    countdownUnits: ["دن", "گھنٹے", "منٹ", "سیکنڈ"],
    today: "آج خوشی کا دن ہے، الحمدللہ۔",
    verseTranslation: "اور ہم نے تمہیں جوڑوں کی صورت میں پیدا کیا۔",
    love: "ڈھیروں محبت کے ساتھ",
    rsvpTitle: "ہماری نئی زندگی کی خوشی میں شریک ہوں۔",
    rsvpMessage: "آپ کی آمد، دعائیں اور نیک تمنائیں ہماری خوشیوں کو دوبالا کریں گی۔",
    rsvpButton: "واٹس ایپ پر جواب دیں",
    location: "مقام دیکھیے",
    date: (day: string, month: string, year: string) => `${urduDigits(day)} · ${urduMonth(month)} · ${urduDigits(year)}`,
    walimaDate: (day: string, month: string, year: string) => `${urduDigits(day)} ${urduMonth(month)} ${urduDigits(year)}`,
    walimaTime: (day: string, time: string) => `${urduDay(day)} · ${urduTime(time)}`,
    whatsapp: (names: string, date: string) => `السلام علیکم! ${date} کو ${names} کے ولیمہ / استقبال میں شرکت کی تصدیق ہے۔ آپ کی خوشی میں شریک ہونے کی خوشی ہوگی۔`,
  },
} as const;

type Language = InvitationLanguage;
export type InvitationCopy = (typeof copy)[InvitationLanguage];

function urduDigits(value: string) {
  return value.replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)] ?? digit);
}

function urduMonth(month: string) {
  const months: Record<string, string> = {
    January: "جنوری", February: "فروری", March: "مارچ", April: "اپریل", May: "مئی", June: "جون",
    July: "جولائی", August: "اگست", September: "ستمبر", October: "اکتوبر", November: "نومبر", December: "دسمبر",
  };
  return months[month] ?? month;
}

function urduDay(day: string) {
  const days: Record<string, string> = {
    Sunday: "اتوار", Monday: "پیر", Tuesday: "منگل", Wednesday: "بدھ",
    Thursday: "جمعرات", Friday: "جمعہ", Saturday: "ہفتہ",
  };
  return days[day] ?? day;
}

function urduTime(time: string) {
  const match = /^(\d{1,2}):(\d{2})\s*(AM|PM)$/i.exec(time);
  if (!match) return time;
  return `${match[3]?.toUpperCase() === "PM" ? "شام" : "صبح"} ${urduDigits(`${match[1]}:${match[2]}`)}`;
}

function Bloom() {
  return <span className="bloom" aria-hidden="true">✦</span>;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

function RevealTitle({ language, text }: { language: Language; text: string }) {
  return <h4>{<SheenTitle>{language === "en" ? <CharsReveal text={text}/> : text}</SheenTitle>}</h4>;
}

function Countdown({ language }: { language: Language }) {
  const text = copy[language];
  const [remaining, setRemaining] = useState<number | null>(null);
  useEffect(() => {
    const update = () => setRemaining(Math.max(0, walimaDate.getTime() - Date.now()));
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);
  const seconds = Math.floor((remaining ?? 0) / 1000);
  const values = [
    Math.floor(seconds / 86400),
    Math.floor((seconds % 86400) / 3600),
    Math.floor((seconds % 3600) / 60),
    seconds % 60,
  ];

  return <section id="countdown" className="royal-section cinematic-section countdown-section">
    <div className="cinematic-backdrop"><CameraImage src={rings} alt=""/></div>
    <GhostWord text="FOREVER"/>
    <ParallaxRing className="countdown-ring"/>
    <Appear>
      <Bloom/>
      <p className="countdown-anticipation">{text.anticipation}</p>
      <blockquote className="countdown-verse">
        <p className="countdown-verse-arabic" lang="ar" dir="rtl">{invitation.verse.arabic}</p>
        <footer dir={language === "ur" ? "rtl" : "ltr"}>
          <span>{text.verseTranslation}</span>
          <cite dir="ltr">{invitation.verse.reference}</cite>
        </footer>
      </blockquote>
      <SectionLabel>{text.untilCelebrate}</SectionLabel>
      <RevealTitle language={language} text={text.countdownTitle}/>
      <ScrollSpin className="countdown-clock-spin" from={-30} to={30}><div className="countdown-clock-face" aria-hidden="true"><span>✦</span><i/><span>✦</span></div></ScrollSpin>
      <div className="countdown-grid">{text.countdownUnits.map((label, index) => <CountdownDigits key={label} label={label} value={remaining === null ? "--" : language === "ur" ? urduDigits(String(values[index] ?? 0).padStart(2, "0")) : String(values[index] ?? 0).padStart(2, "0")}/>)}</div>
      <p className="countdown-event-date">{text.walimaDate(invitation.walima.dateNumber, invitation.walima.month, invitation.walima.year)}<span>{text.walimaTime(invitation.walima.day, invitation.walima.time)}</span></p>
      {remaining === 0 && <p>{text.today}</p>}
    </Appear>
    <MarkedCalendar language={language}/>
  </section>;
}

export function walimaExperience() {
  const [opening, setOpening] = useState<"closed" | "opening" | "open">("closed");
  const [language, setLanguage] = useState<Language>("en");
  const reducedMotion = useReducedMotion();
  const text: InvitationCopy = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    if (opening !== "opening") return;
    const timer = window.setTimeout(() => {
      setOpening("open");
      document.getElementById("invitation")?.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth" });
    }, reducedMotion ? 50 : 2100);
    return () => window.clearTimeout(timer);
  }, [opening, reducedMotion]);

  useEffect(() => {
    if (opening === "open") return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [opening]);

  const localizedRsvp = text.whatsapp(coupleNames, text.walimaDate(invitation.walima.dateNumber, invitation.walima.month, invitation.walima.year));
  const whatsapp = `https://wa.me/${invitation.rsvp.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(localizedRsvp)}`;

  return <InvitationMotionContext.Provider value={opening === "open"}><main lang={language} dir={language === "ur" ? "rtl" : "ltr"} className={`invitation-page ${language === "ur" ? "invitation-urdu" : ""}`}>
    {/* <div className={`language-switch ${opening === "open" ? "language-switch-open" : ""}`} role="group" aria-label={language === "ur" ? "زبان منتخب کریں" : "Choose invitation language"}>
      <button type="button" lang="en" aria-pressed={language === "en"} onClick={() => setLanguage("en")}>English</button>
      <button type="button" lang="ur" aria-pressed={language === "ur"} onClick={() => setLanguage("ur")}>اردو</button>
    </div> */}
    {opening === "open" && <ReadingProgress/>}
    {opening !== "open" && <div className={`cover-screen ${opening === "opening" ? "cover-opening" : ""}`}>
      <div className="cover-leaf cover-leaf-left"/><div className="cover-leaf cover-leaf-right"/><div className="cover-seam" aria-hidden="true"/><div className="cover-sparkles" aria-hidden="true">{Array.from({length: 8}, (_, i) => <i key={i}/>)}</div>
      <div className="cover-content"><p className="cover-top" lang="ar" dir="rtl">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p><div className="cover-medallion"><IslamicPattern/><div className="cover-seal"><span className="cover-seal-mark" aria-hidden="true">♥</span><span className="cover-kicker">{text.specialInvitation}</span><span className="cover-seal-arabic" lang="ar" dir="rtl">دعوة</span></div></div><p className="cover-foot">{text.blessings}</p></div>
      <Button variant="cinemaOutline" size="cinema" className="open-invitation" disabled={opening === "opening"} onClick={() => { if (opening === "closed") setOpening("opening"); }}>{text.openInvitation} <ArrowDown size={15}/></Button>
    </div>}
    <section id="invitation" className="paper-section hero-section cinematic-section">
      <div className="cinematic-backdrop"><CameraImage src={silhouette} alt=""/></div>
      <GhostWord text="دعوة" className="ghost-arabic"/>
      <ParallaxRing className="hero-ring"/>
      <ParticleField/>
      <div className="frame-corner frame-top"/><div className="frame-corner frame-bottom"/>
      <TitleSequence className="hero-inner"><TitleBeat><Bloom/></TitleBeat><TitleBeat><p className="arabic-intro" lang="ar" dir="rtl">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p><LabelRule className="section-label">{text.blessings}</LabelRule></TitleBeat><h1><TitleBeat><span lang="en" dir="ltr">{invitation.groom}</span></TitleBeat><TitleBeat><em>&</em></TitleBeat><TitleBeat><span lang="en" dir="ltr">{invitation.bride}</span></TitleBeat></h1><TitleBeat><div className="hero-divider"/><p className="hero-event">{text.nikah}</p><p className="hero-date">{text.date(invitation.nikah.day, invitation.nikah.month, invitation.nikah.year)}</p></TitleBeat></TitleSequence>
      <a className="next-cue" href="#walima" aria-label={language === "ur" ? "ولیمے کی دعوت جاری رکھیں" : "Continue to the Valima invitation"}><ArrowDown size={18}/></a>
    </section>
    <CelebrationReveal src={ballroom} title={text.walima}/>
    <section id="walima" className="paper-section scratch-section cinematic-section">
      <div className="cinematic-backdrop"><CameraImage src={ballroom} alt=""/></div>
      <GhostWord text="VALIMA / RECEPTION" className="ghost-valima"/>
      <ParallaxRing className="scratch-ring"/>
      <Appear>
        <Bloom/>
        {/* <SectionLabel>{text.littleSurprise}</SectionLabel> */}
        <RevealTitle language={language} text={text.scratchTitle}/>
        <p className="scratch-intro">{text.scratchIntro}</p>
        <ScratchReveal language={language} text={text}>
          <p className="scratch-kicker">{text.invited}</p>
          <p className="scratch-names" lang="en" dir="ltr">{coupleNames}</p>
          <span className="scratch-rule" aria-hidden="true">✦</span>
          <strong className="scratch-date">{language === "ur" ? urduDigits(invitation.walima.dateNumber) : invitation.walima.dateNumber}</strong>
          <span className="scratch-month">{text.walimaDate("", invitation.walima.month, invitation.walima.year).trim()}</span>
          <span className="scratch-time" dir={language === "ur" ? "rtl" : "ltr"}>{text.walimaTime(invitation.walima.day, invitation.walima.time)}</span>
          <span className="scratch-venue" lang="en" dir="ltr">{invitation.walima.venue}</span>
          <span className="scratch-address" lang="en" dir="ltr">{invitation.walima.address}</span>
        </ScratchReveal>
        <div className="scratch-actions">
          <LocationButton label={text.location}/>
        </div>
      </Appear>
    </section>
      <Countdown language={language}/>
      <section id="rsvp" className="royal-section rsvp-section cinematic-section">
      <div className="cinematic-backdrop"><CameraImage src={attire} alt=""/></div>
      <GhostWord text="CELEBRATE" className="ghost-royal"/>
      <ParallaxRing className="rsvp-ring"/>
      <ParticleField/>
      <Appear><Bloom/><LabelRule className="section-label">{text.love}</LabelRule><RevealTitle language={language} text={text.rsvpTitle}/><p>{text.rsvpMessage}</p><Button variant="cinema" size="cinemaLarge" asChild><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle/> {text.rsvpButton}</a></Button><p className="rsvp-signoff" lang="en" dir="ltr">{coupleNames}</p></Appear>
    </section>
  </main></InvitationMotionContext.Provider>;
}
