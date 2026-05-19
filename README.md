# Lotus Dental Care — Website

Marketing website for Lotus Dental Care, a multi-doctor dental clinic. Built with Next.js 16, React 19, and Tailwind CSS 4.

## Highlights

- **10 dedicated service pages** — general dentistry, cosmetic, orthodontics, root canal, oral surgery, periodontics, child dentistry, sleeping dentistry, tooth replacement, extraction — each with its own route under `/services/[treatment]`.
- **Doctor and testimonial data driven from JSON** — `src/data/doctors.json`, `src/data/services.json`, `src/data/testimonials.json` keep content editable without code changes.
- **Hero video + gallery** — full-bleed clinic video on the homepage, image gallery showcasing the waiting area and treatment rooms.
- **Mobile-first responsive design** — header collapses to a hamburger menu, sections stack cleanly, CTAs stay prominent on small screens.
- **Static-by-default for speed** — Next.js App Router with mostly static pages; fast first-paint and easy to host anywhere.

## Tech stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| UI | React 19 |
| Styling | Tailwind CSS 4 |
| Linting | ESLint 9 with `eslint-config-next` |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm start
```

## Project structure

```
src/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles + Tailwind
│   └── services/             # 10 service-specific pages
│       ├── general-dentistry/
│       ├── cosmetic-dentistry/
│       ├── orthodontics/
│       └── ...
├── components/
│   ├── layout/               # Header, Footer
│   └── sections/             # Hero, WhyChooseUs, Services, etc.
└── data/
    ├── doctors.json          # Doctor profiles
    ├── services.json         # Service descriptions
    └── testimonials.json     # Patient testimonials
```

## Deployment

Deploys cleanly to Vercel (zero config), Netlify, or any host that supports Next.js. For Vercel: connect the repo, and the build settings are auto-detected.

## License

MIT — see [LICENSE](./LICENSE).
