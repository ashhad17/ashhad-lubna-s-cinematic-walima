# Cinematic Walima Invitation

## Experience
- Build one continuous, mobile-first cinematic journey across all 15 requested scenes, from darkness and Nikah memory through the Walima reveal, date, venue, RSVP, and finale.
- Use oversized editorial typography, emerald-black atmospheres, restrained foil-gold light, geometric linework, haze, grain, and depth instead of stacked cards or conventional sections.
- Add a restrained 3D opening invitation, scroll-linked camera movement, scene transitions, particles, an interactive golden story path, desktop cursor effects, and reduced-motion alternatives.

## Content and actions
- Centralize all names, dates, venue details, verse, and RSVP details in one invitation data file.
- Implement the live countdown, WhatsApp RSVP, Google Calendar link, downloadable calendar file, venue map link, floating scene indicator, and optional sound control without autoplay.
- Create a cinematic photography sequence using a cohesive set of generated imagery focused on architecture, attire, flowers, rings, hands, venue detail, and silhouettes.

## Mobile and performance
- Compose specifically for phone screens first, using fewer particles and lighter depth effects on small devices.
- Lazy-load photography, animate only transform/opacity/filter properties, pause effects outside active scenes, and respect reduced-motion preferences.
- Verify the full journey at phone and desktop sizes, including controls, text fit, links, countdown behavior, and motion fallbacks.

## Sharing and polish
- Add invitation-specific page metadata, WhatsApp/Open Graph preview artwork, favicon, accessible controls, and cinematic loading behavior.
- Keep the root page as the complete invitation and use reusable scene components and shared animation utilities.

## Technical details
- React 19 with TanStack Start, Tailwind CSS v4 semantic tokens, Motion for React for scroll-linked choreography, and lightweight CSS/SVG effects where they perform better.
- No backend is required; calendar, map, countdown, and WhatsApp actions remain browser-based.
