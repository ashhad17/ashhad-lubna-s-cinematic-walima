import { createFileRoute } from "@tanstack/react-router";
import { walimaExperience } from "@/components/invitation/WalimaExperience";
import { coupleNames } from "@/data/invitation";

const invitationDescription =
  "By the grace of Allah, we joyfully invite you to celebrate our wedding reception as we begin our new journey together, united in faith, love, and companionship. Your presence would be a blessing and a cherished gift to us. Please join us in sharing this special and blessed occasion with our family and friends.";
const invitationTitle = `${coupleNames} — The Valima / Reception Invitation`;
const siteUrl = import.meta.env["VITE_SITE_URL"]
  ? new URL(import.meta.env["VITE_SITE_URL"]).origin
  : "https://ashhad-lubna-wedding-invitation.onrender.com";
const invitationCoverImage = new URL(
  "/Green%20and%20Gold%20Elegant%20Wedding%20Invitation%20Card.png",
  siteUrl,
).href;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: invitationTitle },
      { name: "description", content: invitationDescription },
      { property: "og:title", content: invitationTitle },
      { property: "og:description", content: invitationDescription },
      { property: "og:url", content: siteUrl },
      { property: "og:image", content: invitationCoverImage },
      { property: "og:image:alt", content: `${coupleNames} wedding reception invitation` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: invitationTitle },
      { name: "twitter:description", content: invitationDescription },
      { name: "twitter:image", content: invitationCoverImage },
    ],
    links: [{ rel: "canonical", href: siteUrl }],
  }),
  component: walimaExperience,
});
