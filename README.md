# Portfolio — Onwujekwe Uba Ibe

Professional portfolio website for Onwujekwe Uba Ibe, a software engineer specializing in AI, Web3, and full-stack development.

## Technology Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- Motion for React
- Lucide React
- Vercel (deployment target)

## Project Structure

```
src/
  app/
    layout.tsx          — Root layout with fonts and navigation
    page.tsx            — Home page (hero + scroll typography)
    globals.css         — Design tokens and global styles
    projects/
      page.tsx          — Projects listing (placeholder for Phase 2)
      [slug]/
        page.tsx        — Individual project page (placeholder for Phase 2)
    about/
      page.tsx          — About page (placeholder for Phase 2)

  components/
    navigation/         — Sticky header with scroll effects
    hero/               — Hero section with technical visualization
    sections/           — Scroll typography, footer
    animations/         — Reusable animation primitives
    ui/                 — Shared UI components

  data/                 — Site content, skills, projects, hackathons
  lib/                  — Utility functions
```

## Design System

Centralized design tokens defined in `globals.css` and `tailwind.config`:

- Primary background: `#080B0F`
- Primary text: `#E8EAED`
- Primary accent: `#55DDE0` (cyan)
- Secondary accent: `#8274FF` (violet — restrained)
- Typography: Space Grotesk (headings) + Inter (body)

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build

```bash
npm run build
```

## Future Roadmap

- Phase 2: Project pages with case studies
- Phase 3: Hackathons section
- Phase 4: Full About section and Contact form
- Phase 5: Liquick section
- Phase 6: Dark/light theme refinement and performance optimization

## License

Private — All rights reserved.
