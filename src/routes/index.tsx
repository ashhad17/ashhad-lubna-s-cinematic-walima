import { createFileRoute } from "@tanstack/react-router";
import { walimaExperience } from "@/components/invitation/WalimaExperience";
import { coupleNames, invitation } from "@/data/invitation";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${coupleNames} — Nikah & Valima Invitation` },
      { name: "description", content: `With the blessings of Allah, join ${coupleNames} for their Nikah on ${invitation.nikah.date} and Valima on ${invitation.walima.date}.` },
      { property: "og:title", content: `${coupleNames} — Nikah & Valima Invitation` },
      { property: "og:description", content: `Nikah · ${invitation.nikah.date}. Valima · ${invitation.walima.date}, ${invitation.walima.time}, ${invitation.walima.venue}.` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: walimaExperience,
});
