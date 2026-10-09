<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the invitation as a phone-width, scroll-driven experience with reusable scenes and structured wedding facts; this preserves its physical-invitation feel across devices.
- Keep scroll choreography in reusable motion primitives with a shared opening-ready context and reduced-motion fallbacks; this prevents hidden-cover reveals and keeps each scene consistent.
- Derive countdown, calendar exports, RSVP messages, and displayed dates from the structured invitation data; this prevents event-date drift across actions.
- Build marked calendar days from the date portion of event ISO values in local calendar coordinates; this keeps highlighted dates stable across guest timezones.
