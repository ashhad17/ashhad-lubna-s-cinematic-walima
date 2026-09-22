import { createFileRoute } from "@tanstack/react-router";
import { WalimaExperience } from "@/components/invitation/WalimaExperience";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohammed Ashhad & Lubna Fathima — Walima" },
      { name: "description", content: "With the blessings of Allah and our families, we invite you to celebrate our Walima." },
      { property: "og:title", content: "Mohammed Ashhad & Lubna Fathima — Walima" },
      { property: "og:description", content: "With the blessings of Allah and our families, we invite you to celebrate our Walima." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WalimaExperience,
});
