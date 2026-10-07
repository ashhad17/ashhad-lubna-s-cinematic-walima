import { CalendarPlus, MapPin, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { compactDate, invitation, walimaDate, walimaEndDate } from "@/data/invitation";

const scenes = [
  ["01", "Intro"], ["02", "Beginning"], ["03", "Walima"], ["04", "Celebration"], ["05", "RSVP"],
] as const;

export function SceneIndicator({ active }: { active: number }) {
  return (
    <nav className="scene-indicator" aria-label="Invitation chapters">
      {scenes.map(([number, label], index) => (
        <a key={number} href={`#chapter-${index + 1}`} className={active === index ? "is-active" : ""}>
          <span>{number}</span><b>{label}</b>
        </a>
      ))}
    </nav>
  );
}

export function SoundControl() {
  const [playing, setPlaying] = useState(false);
  const contextRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<Array<AudioNode>>([]);

  const toggle = () => {
    if (playing) {
      contextRef.current?.close();
      contextRef.current = null;
      nodesRef.current = [];
      setPlaying(false);
      return;
    }
    const AudioContextClass = window.AudioContext;
    const context = new AudioContextClass();
    const master = context.createGain();
    const filter = context.createBiquadFilter();
    master.gain.value = 0.022;
    filter.type = "lowpass";
    filter.frequency.value = 420;
    filter.connect(master).connect(context.destination);
    [110, 164.8, 220].forEach((frequency, index) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = index === 1 ? "sine" : "triangle";
      oscillator.frequency.value = frequency;
      gain.gain.value = index === 0 ? 0.28 : 0.09;
      oscillator.connect(gain).connect(filter);
      oscillator.start();
      nodesRef.current.push(oscillator, gain);
    });
    contextRef.current = context;
    nodesRef.current.push(filter, master);
    setPlaying(true);
  };

  useEffect(() => () => { contextRef.current?.close(); }, []);

  return (
    <Button variant="cinemaGhost" size="cinemaIcon" className="sound-control" onClick={toggle} aria-label={playing ? "Turn ambient sound off" : "Turn ambient sound on"}>
      {playing ? <Volume2 /> : <VolumeX />}<span>Sound {playing ? "on" : "off"}</span>
    </Button>
  );
}

function calendarUrl() {
  const start = compactDate(walimaDate);
  const end = compactDate(walimaEndDate);
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `Walima of ${invitation.groom} & ${invitation.bride}`,
    dates: `${start}/${end}`,
    details: "With the blessings of Allah and our families, we invite you to celebrate our Walima.",
    location: `${invitation.walima.venue}, ${invitation.walima.address}`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function downloadCalendar() {
  const contents = [
    "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Walima Invitation//EN", "BEGIN:VEVENT",
    `UID:walima-${compactDate(walimaDate)}@invitation`,
    `DTSTAMP:${compactDate(new Date())}`, `DTSTART:${compactDate(walimaDate)}`, `DTEND:${compactDate(walimaEndDate)}`,
    `SUMMARY:Walima of ${invitation.groom} & ${invitation.bride}`,
    `LOCATION:${invitation.walima.venue}\\, ${invitation.walima.address}`,
    "DESCRIPTION:With the blessings of Allah and our families\\, we invite you to celebrate our Walima.",
    "END:VEVENT", "END:VCALENDAR",
  ].join("\r\n");
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([contents], { type: "text/calendar" }));
  link.download = "Ashhad-Lubna-Walima.ics";
  link.click();
  URL.revokeObjectURL(link.href);
}

export function CalendarActions() {
  return (
    <div className="calendar-actions">
      <Button asChild variant="cinema" size="cinema"><a href={calendarUrl()} target="_blank" rel="noreferrer"><CalendarPlus /> Google Calendar</a></Button>
      <Button variant="cinemaOutline" size="cinema" onClick={downloadCalendar}>Download .ics</Button>
    </div>
  );
}

export function LocationButton({ label = "Open location" }: { label?: string }) {
  const location = encodeURIComponent(`${invitation.walima.venue}, ${invitation.walima.address}`);
  return <Button asChild variant="cinema" size="cinema"><a href={`https://www.google.com/maps/search/?api=1&query=${location}`} target="_blank" rel="noreferrer" aria-label={label}><MapPin /> {label}</a></Button>;
}

export function ScrollCue() {
  return <a className="scroll-cue" href="#chapter-2"><span>Scroll to begin</span><i /></a>;
}

export function IntroSkip({ done, onSkip }: { done: boolean; onSkip: () => void }) {
  return <Button variant="cinemaGhost" size="cinemaIcon" className={`intro-skip ${done ? "is-paused" : ""}`} onClick={onSkip} aria-label={done ? "Introduction complete" : "Skip introduction"}>{done ? <Pause /> : <Play />}<span>{done ? "Opened" : "Enter"}</span></Button>;
}

export { walimaDate };
