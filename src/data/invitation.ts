export const invitation = {
  groom: "Mohammed Ashhad",
  bride: "Lubna Fathima",
  nikah: { date: "12 December 2026" },
  walima: {
    date: "13 December 2026",
    day: "Sunday",
    time: "7:30 PM",
    venue: "Royal Orchid Grand Ballroom",
    address: "Airport Road, Bengaluru, Karnataka, India",
  },
  rsvp: { whatsapp: "+919876543210" },
  verse: {
    arabic: "وَخَلَقْنَاكُمْ أَزْوَاجًا",
    english: "And We created you in pairs.",
    reference: "Qur'an 78:8",
  },
} as const;

export const walimaDate = new Date("2026-12-13T19:30:00+05:30");

export const rsvpMessage =
  "Assalamu Alaikum! I would love to attend the Walima celebration of Mohammed Ashhad & Lubna Fathima on 13 December 2026. Looking forward to celebrating with you!";
