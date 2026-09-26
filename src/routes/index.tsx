import { createFileRoute } from "@tanstack/react-router";
import { WalimaExperience } from "@/components/invitation/WalimaExperience";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohammed Ashhad & Lubna Fathima — Nikah & Walima Invitation" },
      { name: "description", content: "With the blessings of Allah, join Mohammed Ashhad and Lubna Fathima for their Nikah and Walima celebrations in December 2026." },
      { property: "og:title", content: "Mohammed Ashhad & Lubna Fathima — Nikah & Walima Invitation" },
      { property: "og:description", content: "With the blessings of Allah, join Mohammed Ashhad and Lubna Fathima for their Nikah and Walima celebrations in December 2026." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WalimaExperience,
});
