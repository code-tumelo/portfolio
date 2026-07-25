# Tumelo Moletsane, portfolio

Next.js 14 (App Router) + TypeScript (strict) + Tailwind CSS.

This build matches the dark, violet glow visual language from the
original reference sketch (film grain, glow headlines, the premium
depth card with a tilting dashboard mockup, the skills marquee),
rebuilt as reusable Next.js components and named CSS classes instead
of a single static HTML file.

## Run it

```
npm install
npm run dev
```

Then open http://localhost:3000.

## Where things live

- `app/globals.css`: every design token (the RGB triplets at the top:
  `--bg`, `--ink`, `--violet`, `--indigo`, `--emerald`) and every named
  component class (`.hero`, `.premium-depth-card`, `.browser-bezel`,
  `.project-card`, `.marquee-track`, and so on). No inline styles are
  used for static values, colors, spacing, or gradients all live in
  these classes.
- `tailwind.config.ts`: maps the CSS variables into Tailwind's color
  scale, plus the grid background and marquee keyframes.
- `lib/data.ts`: all editable content lives here, projects (each with a
  `tone` of violet, cyan, orange or emerald for its card glow), the
  tech stack list for the marquee, the three step process, the
  showcase stat/counter target, social links and the contact email.
- `components/`: one component per section.
  - `Hero`: the glow headline and grid backdrop.
  - `Showcase`: the premium depth card, with a mouse tilt effect on
    the dashboard mockup and an animated stat ring, both client side.
  - `Work`: the project grid, including the empty state shown when
    `projects` in `lib/data.ts` is emptied out.
  - `Stack`: the infinite skills marquee.
  - `Process`: the three step "how a project runs" cards.
  - `Contact`: the closing CTA card with the working contact form.
  - `Reveal`: shared scroll fade in wrapper, respects
    `prefers-reduced-motion`.
- `app/api/contact/route.ts`: the contact form posts here. It
  currently validates the payload, logs it, and returns a success
  message. Wire it up to a real email service (Resend, Postmark, SES)
  or a database before relying on it.

## Swapping in your own content

Open `lib/data.ts` and edit:

- `projects`: add, remove, or edit entries, each needs a `tone` of
  `"violet"`, `"cyan"`, `"orange"` or `"emerald"`. Leave the array
  empty to see the built in empty state on the work section.
- `showcaseStats`: the target number, label and subtext under the
  progress ring in the showcase card.
- `stack`: the list of tools in the marquee.
- `processSteps`: the three step process section.
- `socials` and `email`: footer links and the contact email.

Everything else (headline, hero copy, section copy) lives directly in
the matching component file under `components/`.

## Notes on the build

- Fonts (Bricolage Grotesque, Inter) load through `next/font/google`,
  which is part of Next.js itself, not an added dependency.
- No component library was added. Every element (buttons, cards, the
  mockup chrome, form fields) is a plain element styled with the named
  classes in `globals.css`, since the project did not already have a
  UI kit to reuse.
- The contact form covers loading (button disabled while sending),
  error (inline field validation and a server error message), and
  success states. The work grid covers an empty state.
- The tilt and sheen effect on the dashboard mockup, and the animated
  stat ring, are done with `useRef` and direct style/attribute updates
  in `Showcase.tsx`, mirroring the mouse tracking script from the
  original sketch, rather than a state update on every mouse move.
