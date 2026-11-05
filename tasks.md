# tasks.md: Build Plan for Metro Dental BD

The step-by-step build order. Work through the phases in order. Finish and check one task before starting the next. Tick the box (`[x]`) when a task is done and passes its check.

## How to use this file

1. Read `AGENTS.md`, `PROJECT.md`, `architecture.md`, `design.md`, and `content.md` before starting.
2. Do one phase at a time. At the end of each phase, run `npm run build` and fix every error.
3. Do not skip ahead. Later phases depend on earlier ones.
4. If you are blocked or a fact is missing, use a placeholder from `content.md`, add a line to the **Open Items** list at the bottom, and keep going.
5. After each phase, write a short note in the **Progress Log** at the bottom: what was done, what changed, and anything unfinished.

---

## Phase 0: Project Setup

- [ ] Create the project with Vite + React (`npm create vite@latest`)
- [ ] Install dependencies: `react-router-dom`, `react-helmet-async`, `lucide-react`, `tailwindcss` (with PostCSS and Autoprefixer)
- [ ] Configure Tailwind with the tokens from `design.md` section 10
- [ ] Add Google Fonts (Poppins, Inter, Hind Siliguri) with `font-display: swap`
- [ ] Create the folder structure from `architecture.md` section 4
- [ ] Add `.gitignore`, a basic `README.md`, and an `.env.example`
- [ ] **Check:** `npm run dev` shows a blank page with the right font and no console errors; `npm run build` passes

---

## Phase 1: Data, Language, and Utilities

- [ ] Create `src/data/clinic.js` with the facts from `content.md` section 1
- [ ] Create `src/i18n/en.json` and `src/i18n/bn.json` with the keys from `content.md` (start with navigation, buttons, hero, footer)
- [ ] Build `LanguageContext` with `t(key)`, a language toggle, `localStorage` persistence, English fallback, and `lang` attribute on `<html>`
- [ ] Create `src/data/services.js`, `problems.js`, `faqs.js`, `reviews.js` from `content.md` (reviews stay placeholders)
- [ ] Build `utils/buildWhatsAppLink.js` using the message template in `content.md` section 8
- [ ] Build `utils/validatePhone.js` for Bangladesh mobile numbers (accept `01XXXXXXXXX`, `+8801XXXXXXXXX`, `8801XXXXXXXXX`)
- [ ] **Check:** switching language changes text with no reload; a missing Bangla key falls back to English; the WhatsApp link opens with the right prefilled text

---

## Phase 2: UI Primitives

Build from `design.md` section 5. Each one must work on mobile and have visible focus states.

- [ ] `Button` (primary, secondary, on-dark, whatsapp, text link variants)
- [ ] `SectionHeading`
- [ ] `Card`
- [ ] `Accordion` (keyboard accessible, animated height)
- [ ] `Container` / `Section` wrapper with the section padding and alternate backgrounds
- [ ] `SEO` helper component using react-helmet-async
- [ ] `ScrollReveal` hook or component (respects reduced motion)
- [ ] **Check:** make a temporary test page showing every primitive at 360px and 1280px, then delete the test page

---

## Phase 3: Layout Shell

- [ ] `Header`: logo, nav, Services dropdown (desktop), phone link, Book button, language toggle
- [ ] `MobileMenu`: full-height panel, Services accordion, closes on route change, focus handled correctly
- [ ] `Footer`: 4 columns on desktop, stacked on mobile, contact details from `clinic.js`
- [ ] `FloatingCTA`: mobile-only bottom bar with Call and WhatsApp
- [ ] `App.jsx`: router, providers, layout, scroll to top on route change
- [ ] Add temporary empty pages for all routes in `architecture.md` section 5.2, plus `NotFound`
- [ ] **Check:** every nav link works; menu works with keyboard and touch; no horizontal scrolling at 360px; the phone link calls on mobile

---

## Phase 4: Home Page (build one section at a time)

For each section, use the layout in `design.md` section 8 and the text in `content.md` section 3. Check each section at 360px, 768px, and 1280px before moving on.

- [ ] Hero (image or soft video with poster, text readable, 2 buttons)
- [ ] Trust strip
- [ ] Meet Dr. Mustak
- [ ] Featured treatments (2 large cards) and services grid
- [ ] Comfort and technology (3 cards)
- [ ] Offer banner (hidden unless an offer is enabled in data)
- [ ] Reviews carousel (arrows, swipe, dots, keyboard accessible)
- [ ] FAQ accordion
- [ ] Location section (details, hours placeholder, Google Map embed placeholder, Get Directions)
- [ ] Final call to action banner
- [ ] **Check:** the Book and Call buttons appear at least 5 times down the page; one `h1` only; images have alt text; no layout shift

---

## Phase 5: Services Pages

- [ ] `ServiceCard` component
- [ ] `Services` overview page with the card grid and SEO text
- [ ] `ServicePageTemplate` (hero, who it is for, steps, benefits, FAQs, Book button, related problems)
- [ ] `ServiceDetail` page reading `:slug` and redirecting unknown slugs to `NotFound`
- [ ] Fill Dental Implants and Braces Care fully from `content.md`
- [ ] Add the five short services with the standard structure; mark missing details as placeholders
- [ ] **Check:** all 7 service URLs load; a wrong slug shows the 404 page; each page has a unique title and description

---

## Phase 6: Other Pages

- [ ] About page
- [ ] Problems We Treat page (links to services, urgent-care note at the bottom)
- [ ] New Patients page
- [ ] 404 page
- [ ] **Check:** all text comes from i18n or data files; Bangla version looks correct and has comfortable line spacing

---

## Phase 7: Booking and Contact

- [ ] `BookingForm` with all fields, validation, accessible errors, and `aria-live` feedback
- [ ] Treatment dropdown populated from `services.js` plus "Not sure yet"
- [ ] Submit opens WhatsApp with the prefilled message, then shows the success state with the Call fallback
- [ ] Contact page: details, hours, map embed, form
- [ ] Book page: the form with a short intro
- [ ] **Check:** empty submit shows errors; an invalid phone shows an error; a valid submit opens WhatsApp in a new tab with correct text in both languages; the form works with keyboard only

---

## Phase 8: Bangla Pass

- [ ] Confirm every English key has a Bangla key (write a small script that lists missing keys)
- [ ] Check long Bangla strings do not overflow buttons, cards, or the header
- [ ] Confirm Hind Siliguri loads and the fallback looks acceptable
- [ ] Confirm form errors, success messages, and the WhatsApp template work in Bangla
- [ ] **Check:** walk the whole site in Bangla at 360px and 1280px with no broken layouts

---

## Phase 9: SEO and Performance

- [ ] Unique title and description on every page (`content.md` section 10)
- [ ] Open Graph tags and a default share image
- [ ] `Dentist` JSON-LD on Home and Contact, built from `clinic.js`
- [ ] `sitemap.xml` and `robots.txt` in `public/`
- [ ] Pre-render the public pages at build time (see `architecture.md` section 3), or note the decision in the Progress Log
- [ ] Route-level code splitting with `React.lazy`
- [ ] Compress images to WebP, set width and height, lazy-load below the fold
- [ ] **Check:** Lighthouse on mobile for Home and one service page. Targets: Performance above 90, Accessibility above 95, SEO above 95. Record scores in the Progress Log

---

## Phase 10: Accessibility and QA

- [ ] Keyboard-only walkthrough of every page (menu, accordion, carousel, form)
- [ ] Contrast check on every color pair used
- [ ] Heading order check on every page
- [ ] Reduced-motion check (animations off or simplified)
- [ ] Test on real devices or emulators: small Android phone, iPhone size, tablet, desktop
- [ ] Test slow network (throttle to Slow 4G) and confirm the hero does not block the page
- [ ] Check for console errors and warnings on every route
- [ ] Final `npm run build` and `npm run preview` check

---

## Phase 11: Content Finalization (owner tasks)

These need the clinic owner. Do not invent anything.

- [ ] Replace placeholder images with real photos (clinic, Dr. Mustak, equipment)
- [ ] Add Dr. Mustak's qualifications and confirm the Bangla name spelling
- [ ] Add opening hours
- [ ] Add real reviews with permission, remove all placeholder reviews
- [ ] Confirm the offer or leave the banner hidden
- [ ] Add the Google Maps embed link and social links
- [ ] Add the clinic story and payment methods
- [ ] Native-speaker review of all Bangla text
- [ ] Confirm the service list and fill in details for the short service pages

---

## Phase 12: Launch

- [ ] Push to Git and connect to Vercel or Netlify
- [ ] Add the custom domain and confirm HTTPS
- [ ] Update `sitemap.xml` and canonical URLs with the real domain
- [ ] Submit the sitemap to Google Search Console
- [ ] Make sure the Google Business Profile name, address, and phone match the website exactly
- [ ] Add analytics for clicks on Call, WhatsApp, and Book, and for form submissions
- [ ] Do a final test of the live site on a phone: call button, WhatsApp, form, language toggle

---

## Phase 13 (Later): AI Chatbot

Start only after the site is live. Follow `architecture.md` section 8.

- [ ] Decide the model provider and hosting with the owner
- [ ] Write `chatbot.md` with the system prompt, safety rules, and sample questions
- [ ] Prepare the clinic knowledge documents in `api/knowledge/`
- [ ] Build the serverless function with retrieval, a web search fallback, rate limiting, and message caps
- [ ] Build `ChatWidget` (lazy-loaded, English and Bangla, always shows Call and WhatsApp buttons)
- [ ] Test: questions answered from documents, unknown questions, off-topic questions, medical-advice questions (must redirect to the clinic), abuse and spam
- [ ] Add a visible disclaimer that the chatbot is not medical advice

---

## Open Items

Add anything blocked or missing here as you work. Format: `- [ ] item (phase, who must answer)`

- [ ] Opening hours (Phase 4, owner)
- [ ] Dr. Mustak's qualifications and Bangla spelling (Phase 4, owner)
- [ ] Real reviews and permission (Phase 4, owner)
- [ ] Chatbot provider and hosting decision (Phase 13, owner)

---

## Progress Log

Add one entry per work session. Format:

```
### YYYY-MM-DD, Phase X
- Done: ...
- Changed or decided: ...
- Not finished / next: ...
```

### 2026-10-21, Phases 0-11 (build + QA)
- Done: full Vite/React site scaffold, Tailwind theme tokens, i18n (317 EN + 317 BN keys, parity checked), data files, all UI primitives, layout shell, Home, About, Services overview + 7 shared-template service pages, Problems, New Patients, Contact, Book, 404, SEO/OG/JSON-LD, sitemap, robots, deploy configs.
- Done: `npm run build` passes with no errors. Playwright/Firefox QA at 360/768/1280: all 11 routes load, one `h1` each, no console errors, no horizontal overflow, booking validation + WhatsApp link (EN and BN), `?treatment=` prefill, mobile menu (route close, Escape, language toggle, focus handling), review carousel dots/arrows.
- Changed or decided: clinic facts come from `AGENTS.md`/`content.md` (PROJECT.md's generic "One Denta" values treated as stale). Opening hours shown as every day 10:00 AM - 9:00 PM pending owner confirmation. WhatsApp `8801716374977`. Offer banner disabled. Map embed and social links empty with graceful fallbacks. Sample reviews labelled as placeholders. Service pages share one template; short services use generic, non-medical copy.
- Changed: OG share image regenerated as `public/images/og-cover.png` (1200x630) and referenced from `SEO.jsx` + `index.html`. Map placeholder restyled with a soft grid and visitor-friendly copy.
- Changed: the home trust strip now displays four separate cards across the grid (matching the hero container width), with dedicated padding and spacing for mobile and desktop.
- Changed: refined button hover animation to be shadow-first and ultra-smooth (shadow blooms immediately upon hover, followed by a fluid scale pulse returning to scale 1 over ~1s, with no border color shifts).
- Changed: converted the navbar into a floating, rounded sticky island (`rounded-2xl md:rounded-full` with frosted glass backdrop blur) positioned over the upper hero section, allowing the hero background (and future video background) to flow seamlessly to the top edge behind the navbar.
- Changed: streamlined navbar header space: removed clinic text from navbar logo (icon only), fixed menu items to stay on one single line (`whitespace-nowrap`, `text-[13px] xl:text-sm`), and fixed appointment button by adding `whitespace-nowrap` to `Button` base and sizing it as a sleek `min-h-10 px-4 py-2 text-sm` pill.
- Changed: added site-wide smooth momentum scrolling (`useSmoothScroll` hook with inertia damping and reduced-motion guard) and slowed down the section scroll-reveal animation to 750ms with `cubic-bezier(0.22, 1, 0.36, 1)` and a 22px fade-up. Added ScrollReveal to TrustStrip and FAQSection.
- Not finished / next: replace placeholder illustrations with real photos, confirm hours/qualifications/service details, add real reviews with permission, add Maps embed + Google review + social links, native-speaker review of Bangla, add analytics provider, optional pre-render for SEO.

### 2026-11-05, Design system pass (design.md)
- Done: applied the new Apollo-style reference across the whole site — Cosmic Ink / Cinder dark surfaces, one Signal Orange accent, Cloud / Ash light bands, Inter with Fira Code micro-labels, 1200px page width, 24–32px card radii, 48px card padding, pill buttons, and the starfield texture on dark panels.
- Changed: solid Cosmic Ink sticky header (logo lockup, ghost language/phone controls, orange Book pill), dark starfield hero with a two-line orange/white headline, flat trust row, split doctor row with a dark image panel, dark featured-treatment panels on Ash, Cinder testimonial cards with dashed dividers, Ash FAQ/location bands, cosmic 404/CTA/success states, and flat form fields.
- Changed: replaced the hero background video and heavy hover shadow animation with the starfield stage and flat color transitions; added `hero.titleAccent` / `hero.titleRest` to both i18n files (319 keys each, parity checked).
- Not finished / next: same owner placeholders as above (photos, hours, qualifications, reviews, map/social links, Bangla review).
