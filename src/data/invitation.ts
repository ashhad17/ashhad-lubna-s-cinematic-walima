export const invitation = {
  groom: "Mohammed Ashhad",
  bride: "Lubna Fathima",
  nikah: { date: "10 December 2026", iso: "2026-12-10T00:00:00+05:30", day: "10", month: "December", year: "2026" },
  walima: {
    date: "12 December 2026",
    iso: "2026-12-12T14:00:00+05:30",
    dateNumber: "12",
    month: "December",
    year: "2026",
    day: "Saturday",
    time: "2:00 PM",
    venue: "Star Convention Hall",
    address: "Ring Road, Tumakur, Karnataka 572101",
  },
  rsvp: { whatsapp: "+918197172781" },
  verse: {
    arabic: "وَخَلَقْنَاكُمْ أَزْوَاجًا",
    english: "And We created you in pairs.",
    reference: "Qur'an 78:8",
  },
} as const;

export const walimaDate = new Date(invitation.walima.iso);
export const walimaEndDate = new Date(walimaDate.getTime() + 3.5 * 60 * 60 * 1000);
export const compactDate = (date: Date) => date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
export const coupleNames = `${invitation.groom} & ${invitation.bride}`;

export const rsvpMessage =
  `Assalamu Alaikum! I would love to attend the Valima celebration of ${coupleNames} on ${invitation.walima.date}. Looking forward to celebrating with you!`;
