# Mirza Abdullah Bin Abrar — Portfolio

A heavily animated single-page portfolio. Dark canvas, electric-lime accent, kinetic type,
pinned horizontal project gallery, animated tech-logo grid, custom cursor and smooth scroll.

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · GSAP ScrollTrigger · Lenis

---

## Deploy to Vercel

### Option A — via GitHub (recommended)

```bash
git init                       # already initialised by create-next-app
git add -A
git commit -m "feat: portfolio"
git branch -M main
gh repo create portfolio --public --source=. --push
# or: create an empty repo on github.com, then
# git remote add origin https://github.com/MABA1001/portfolio.git && git push -u origin main
```

Then go to [vercel.com/new](https://vercel.com/new), import the repo, and click **Deploy**.
No environment variables, no build settings, no config — Vercel auto-detects Next.js.

### Option B — straight from your machine

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

### After the first deploy

Open `src/lib/data.ts` and set `site.url` to your real domain (e.g. `https://mirzaabdullah.com`).
That value feeds the canonical URL, `sitemap.xml`, `robots.txt` and the OG/Twitter card metadata.

---

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

Node 20+ required.

---

## Editing content

**Everything lives in one file: `src/lib/data.ts`.** No component changes needed to update copy.

| What                                    | Where in `data.ts`             |
| --------------------------------------- | ------------------------------ |
| Name, role, headline, email, phone, bio | `site`                         |
| Social links                            | `socials`                      |
| The four big animated numbers           | `stats`                        |
| Scrolling word ticker                   | `ticker`                       |
| Jobs (the expandable timeline)          | `experience`                   |
| Project cards (horizontal gallery)      | `projects`                     |
| Tech logo groups + proficiency bars     | `skillGroups`, `marqueeIcons`  |
| Leadership & volunteer cards            | `leadership`                   |
| Education & certifications              | `education`, `certifications`  |
| Nav items                               | `navLinks`                     |

### Two things to fill in

1. **PostgresHub link.** In `projects[0]` there's a commented-out `href`. Uncomment it and paste
   the public URL — the card then becomes clickable and shows the "Visit" cursor and arrow button.
   Any project without an `href` renders as a non-clickable case study, which is what the
   NDA'd entries rely on.
2. **`site.url`** — see "After the first deploy" above.

### Swapping the photos

Replace `public/mirza-hero.png` (arms crossed, hero) and `public/mirza-about.png` (About section).
Use transparent-background PNGs, roughly 2:3 portrait. Both are bottom-anchored with a soft
fade-out mask, so the subject should be centred horizontally and cropped no higher than the waist.

### Résumé download

`public/Mirza_Abdullah_Resume.pdf` is what the "Résumé" and "Download résumé" buttons serve.
Drop in a new file at the same path to update it, or change `site.resume`.

---

## Adding a tech logo

Icons are centralised in `src/components/ui/TechIcon.tsx` as a `key → { Icon, label, color }` map.
The colour drives the hover state (logos are grey until hovered, then flash their brand colour).

```ts
// 1. import from react-icons
import { SiPrisma } from "react-icons/si";

// 2. add to the TECH map
prisma: { Icon: SiPrisma, label: "Prisma", color: "#2D3748" },

// 3. reference the key in data.ts
{ name: "Prisma", icon: "prisma" }
```

---

## How the motion works

| Piece                    | File                                     | Notes                                                                                                     |
| ------------------------ | ---------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Smooth scroll            | `components/providers/SmoothScroll.tsx`  | Lenis driven off GSAP's ticker so ScrollTrigger stays in sync; also smooths in-page anchor jumps.          |
| Intro curtain            | `components/ui/Preloader.tsx`            | Counts to 100 cycling stack words, then splits into two panels.                                            |
| Custom cursor            | `components/ui/Cursor.tsx`               | Dot tracks 1:1, ring lags on a spring. Add `data-cursor="hover"` or `data-cursor="view"` to any element.   |
| Masked text reveals      | `components/ui/Reveal.tsx`               | `SplitText` (per word or per char), `FadeIn`, `Counter`, `LineGrow`.                                       |
| Magnetic buttons         | `components/ui/Magnetic.tsx`             | Pulls children toward the pointer.                                                                        |
| Pinned horizontal work   | `components/sections/Projects.tsx`       | Section is pinned for its own height; the track translates on `scrollYProgress`. Falls back to a vertical stack under 1024px. |
| Hero layered parallax    | `components/sections/Hero.tsx`           | "MIRZA" behind the portrait, "ABDULLAH" in front, all three moving at different rates.                     |

Add `data-cursor="view" data-cursor-label="Visit"` to any element to make the cursor become a
filled lime disc with a label.

**Reduced motion is respected throughout** — the preloader, custom cursor, Lenis and the pinned
horizontal gallery all disable themselves under `prefers-reduced-motion: reduce`.

---

## Fonts

Inter Tight (display), Inter (body) and JetBrains Mono (labels) are self-hosted via
`@fontsource-variable/*` npm packages and imported in `globals.css`. No Google Fonts request at
runtime, nothing to configure, and no layout shift on first paint.

---

## Design tokens

Defined once in `src/app/globals.css` under `@theme`:

```
--color-ink    #08090A   page background
--color-ink-2  #0E1011   card background
--color-ink-3  #16191B   nested / hover surface
--color-line   #23272A   hairlines & borders
--color-bone   #EDEDED   primary text
--color-mute   #8B9096   secondary text
--color-mute-2 #5D6368   tertiary text
--color-acid   #C8FF00   the accent
```

To rebrand, change `--color-acid` and the whole site follows.

---

## SEO

Already wired: per-page metadata, canonical URL, `robots.txt`, `sitemap.xml`, JSON-LD `Person`
schema (in `layout.tsx`), and a dynamically generated 1200×630 OG image at
`src/app/opengraph-image.tsx` — no static image to maintain.
