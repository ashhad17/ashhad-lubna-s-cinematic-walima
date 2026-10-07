import { createFileRoute } from "@tanstack/react-router";
import { WalimaExperience } from "@/components/invitation/WalimaExperience";
import { coupleNames, invitation } from "@/data/invitation";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${coupleNames} — Nikah & Walima Invitation` },
      { name: "description", content: `With the blessings of Allah, join ${coupleNames} for their Nikah on ${invitation.nikah.date} and Walima on ${invitation.walima.date}.` },
      { property: "og:title", content: `${coupleNames} — Nikah & Walima Invitation` },
      { property: "og:description", content: `Nikah · ${invitation.nikah.date}. Walima · ${invitation.walima.date}, ${invitation.walima.time}, ${invitation.walima.venue}.` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WalimaExperience,
});
