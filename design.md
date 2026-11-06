# Design System — Metro Dental BD
> A calm, flat clinical surface where one orange does all the talking. No gradients, no glows, no stock fonts.

**Theme:** mixed (light page canvas, flat dark panels)

This file describes the design system as implemented in `tailwind.config.js` and `src/styles/index.css`. If code and this file disagree, fix one of them — do not let both drift.

## Design Principles

- **Anti-slop rules (hard).** No Inter, Geist, Space Grotesk, or Instrument Serif anywhere. No decorative gradients, gradient text, blurred glow orbs, or ✨/Sparkles glyphs. At most one gradient on a page, and only with structural purpose — currently there are zero.
- **Flat system.** Separation comes from surface steps (Cloud → Ash, Cosmic → Cinder) and hairline borders, never shadows (`shadow-card` and `shadow-header` are deliberately `none` in the Tailwind config).
- **Left-aligned, asymmetric hero.** Hero copy sits left (`max-w-xl`, `md:max-w-[46rem]`) over a full-bleed video with a flat `bg-cosmic/70` scrim. No `text-center` on the H1 + subhead + CTA stack.
- **Orange is rationed.** `#e75e15` appears on the hero accent line, one CTA per pair, eyebrows, and small markers — never as a background fill or card tint.

## Colors

| Name | Value | Role |
|------|-------|------|
| Cosmic Ink | `#15252d` | Hero/panel background, headline text on light surfaces, footer, dark-mode layer |
| Cinder | `#254250` | Secondary dark surface (testimonial cards) — a lifted step above Cosmic Ink |
| Fog | `#9fb2bc` | Muted dividers, icon strokes, and secondary text on dark surfaces |
| Mist | `#e2e8f0` | Hairline borders and section dividers on light surfaces |
| Cloud | `#f8f8f8` | Page canvas, card surface, input fill — the default light ground |
| Ash | `#efefef` | Alternate section background that breaks Cloud bands without a new hue |
| Signal Orange | `#e75e15` | Single accent: CTAs, eyebrow labels, hero accent line, focus outline |

State and feedback stay in the orange + neutral family; never introduce blue/green/red accents.

## Typography

### Archivo — Display and heading face (Omnibus-Type foundry, Google Fonts)
- **Loaded weights:** 600, 700, 800, 900
- **Roles:** 700 for h1–h5 baseline and section headings, 900 for the hero headline only (`.type-hero`), 600 for card titles
- **Tracking:** −0.02em headings, −0.03em hero (reset to 0 for Bangla)

### System UI stack — Body copy
`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` (`font-body`). The native OS font for reading text; no web font is downloaded for body copy.

### Hind Siliguri — Bangla
Applied to everything under `html[lang="bn"]` (headings included), with widened line heights and zero negative tracking per the rules in `index.css`.

### Fira Code — Micro-labels only
Used exclusively for `.eyebrow` section labels: weight 500, 12px, uppercase, 0.08em tracking, Signal Orange. Never body copy, never headings.

### Type Scale (as implemented in `.type-*` classes)

| Role | Size (mobile → desktop) | Weight | Line height | Tracking |
|------|--------------------------|--------|-------------|----------|
| hero | 38px → 50px | 900 | 1.1 | −0.03em |
| section | 28px → 38px | 700 | 1.25 | −0.02em |
| card | 20px → 24px | 600 | 1.35 | −0.01em |
| body-lg | 17px → 20px | 400 | 1.6 | — |
| body | 16px | 400 | 1.5 | — |
| small | 14px | 400 | 1.45 | — |
| button | 15px | 500 | 1.1 | — |

## Spacing & Layout

**Base unit:** 8px · **Density:** comfortable

- **Page max-width:** 1200px (`max-w-page`, via `.container-page`)
- **Section padding:** 48px mobile / 80px desktop (`md:py-20`)
- **Card padding:** 24–48px depending on panel
- **Border radius:** nav/controls 8px, cards 24px (`rounded-card`), panels 32px (`rounded-panel`), buttons 999px

## Components

### Pill Primary Button
Signal Orange fill, white text, 15px/500 label, icon left of text, radius 999px. No border, no shadow. Hover shifts background color and lifts 1px — no glow.

### Ghost / On-Dark Button
Transparent fill with 1px border (Signal Orange on light surfaces, Fog on dark). Always paired with the primary in every CTA pair.

### Hero
Full-bleed looping video (`/videos/hero.mp4|webm`, poster `hero-poster.webp`) under a flat `bg-cosmic/70` scrim. Left-aligned stack: pill eyebrow with dot marker → orange accent line + white remainder H1 → muted subtitle → CTA pair → hours/landmark meta row with top border. The video is the visual; nothing decorative is layered on top.

### Dark Panels (PageHero, CTABanner, DoctorIntro, OfferBanner, booking success, problem CTA)
Flat Cosmic Ink fill, 24–32px radius, 1px Fog/20 borders where needed. Depth comes only from the step between light band and dark panel. Text inside: headings Signal Orange or white, body white at 70–80%.

### Testimonial Card
Cinder `#254250` background, 24px radius. Avatar + name (white) + role (white/60), dashed Fog divider, full-opacity quote.

## Icons

- lucide-react, mono-stroke at 1.6–1.8 strokeWidth, 16–20px, in Cosmic Ink / Fog / Signal Orange only.
- **Every icon must depict the specific action**, chosen from the allowlist in `src/utils/icons.js`. `Sparkles`/✨ is banned outright — the map fallback for an unknown name is `Stethoscope`.
- Current service mapping: implant → Anchor, braces → Smile, cleaning → Droplets, root canal → ShieldCheck, whitening → Sun, fillings → CircleDot, crowns/bridges → Layers. Trust strip: HeartHandshake, MessageSquareText, Wind, MapPin.

## Do's and Don'ts

### Do
- Reserve Archivo 900 for the hero headline; section headings stay 700, body copy 400 in the system stack.
- Keep dark panels flat Cosmic Ink; separation via the Cinder/step surfaces and Fog/20 hairlines.
- Pair every primary orange pill with a ghost sibling.
- Set headings `text-cosmic` on light bands and `text-white` on dark; body on dark at white/70–80%.
- Respect `prefers-reduced-motion` — the fade-up reveal and mount animations already degrade there.

### Don't
- Don't reintroduce Inter, Geist, Space Grotesk, Instrument Serif, or Poppins.
- Don't add gradient backgrounds, gradient text, radial "starfield" textures, or blurred glow orbs (`blur-3xl` blobs) — all were removed as AI-slop tells; keep them out.
- Don't use the Sparkles icon or ✨ emoji as a "magic/clean/premium" label; name the capability and pick an icon that depicts it.
- Don't center the hero H1 + subhead + CTA stack.
- Don't fill large surfaces with Signal Orange, and don't square off a pill control.
- Don't hardcode clinic facts or user-facing strings in components — they come from `src/data/*` and `src/i18n/*`.

## Elevation

- All panels and cards: `none` — flat fills and surface steps only.

## Surfaces

- **Page Canvas** (`#f8f8f8`) — default body background
- **Alt Band** (`#efefef`) — variation between Cloud bands
- **Cosmic Panel** (`#15252d`) — hero, CTA banners, dark cards — the flat dark stage
- **Cinder Card** (`#254250`) — testimonial surface lifted one step above Cosmic

## Imagery

One full-bleed hero video, service illustrations in `/images/service-*.svg`, the doctor portrait, Google Maps embed, and 40px testimonial avatars. No decorative texture layers, no abstract blobs, no gradient posters. Everything lazy-loads except the hero poster.

## Layout

Max-width 1200px, centered container with generous outer padding; content itself is left-aligned. Bands alternate Cloud → Ash → Cosmic panels; dark panels never sit directly adjacent to each other without a light band between. Mobile-first: base styles at 360px, `md:` at 768px, `lg:` at 1280px. Sticky top bar plus a floating Call/WhatsApp CTA on mobile.
