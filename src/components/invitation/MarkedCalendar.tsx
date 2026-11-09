import { useState } from "react";
import { Heart } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { invitation } from "@/data/invitation";
import { Appear } from "./CinematicMotion";
import { CalendarActions } from "./Controls";

// Calendar days represent local event dates, not the viewer's timezone.
function eventDay(iso: string) {
  const [year, month, day] = iso.slice(0, 10).split("-").map(Number);
  return new Date(year ?? 2026, (month ?? 1) - 1, day ?? 1);
}

const nikah = eventDay(invitation.nikah.iso);
const walima = eventDay(invitation.walima.iso);

export function MarkedCalendar({ language }: { language: "en" | "ur" }) {
  const [selected, setSelected] = useState(walima);
  const iswalima = selected.getTime() === walima.getTime();
  return <section id="calendar" className="marked-calendar-panel" aria-labelledby="calendar-heading">
    <Appear className="marked-calendar-inner">
      <Heart className="calendar-heart" size={24} aria-hidden="true"/>
      <p className="section-label">{language === "ur" ? "ایک یادگار دن" : "A day to remember"}</p>
      <h3 id="calendar-heading">{language === "ur" ? "ہماری شادی کی تاریخیں" : "Our wedding dates"}</h3>
      <div className="wedding-calendar-wrap pointer-events-auto" dir="ltr">
        <Calendar mode="single" required selected={selected} onSelect={(day) => { if (day) setSelected(day); }} defaultMonth={walima} hideNavigation showOutsideDays={false}
          disabled={(day) => day.getTime() !== walima.getTime() && day.getTime() !== nikah.getTime()}
          modifiers={{ wedding: walima, nikah }} modifiersClassNames={{ wedding: "walima-calendar-day", nikah: "nikah-calendar-day" }}
          className="wedding-calendar pointer-events-auto"/>
      </div>
      <div className="calendar-legend"><span><i className="nikah-dot"/>{language === "ur" ? "نکاح" : "Nikah"}</span><span><Heart size={12}/>{language === "ur" ? "ولیمہ" : "Walima"}</span></div>
      <p className="calendar-hint">{language === "ur" ? "تفصیلات دیکھنے کے لیے نشان زد تاریخ منتخب کریں" : "Select a marked date to see its details"}</p>
      <div className="calendar-event" aria-live="polite" aria-atomic="true">
        <p className="calendar-event-name">{iswalima ? (language === "ur" ? "ولیمہ" : "The Walima") : (language === "ur" ? "نکاح" : "The Nikah")}</p>
        <p>{iswalima ? invitation.walima.date : invitation.nikah.date}{iswalima && <> · {invitation.walima.time}</>}</p>
      </div>
      {iswalima && <CalendarActions/>}
    </Appear>
  </section>;
}