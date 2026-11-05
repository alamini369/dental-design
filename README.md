# Metro Dental BD — website

A multi-page website for a dental clinic in Bangshal, Dhaka. Built with Vite, React, React Router, Tailwind CSS, and lucide-react. There is no backend: the booking form opens a prefilled WhatsApp message, and every page pushes the visitor to call or book.

## 1. Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173`).

## 2. Build and preview

```bash
npm run build     # production build in dist/
npm run preview   # preview the production build
```

`npm run build` must pass with no errors before shipping.

## 3. Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About the clinic and Dr. Mustak |
| `/services` | All services |
| `/services/dental-implant` | Dental Implants |
| `/services/braces-care` | Braces Care |
| `/services/teeth-cleaning` | Teeth Cleaning |
| `/services/root-canal` | Root Canal Treatment |
| `/services/teeth-whitening` | Teeth Whitening |
| `/services/fillings` | Dental Fillings |
| `/services/crowns-bridges` | Crowns and Bridges |
| `/problems` | Problems we treat |
| `/new-patients` | Your first visit |
| `/contact` | Contact, map, and booking form |
| `/book` | Appointment form |
| `*` | 404 |

Every service page is generated from `src/data/services.js` through `ServicePageTemplate`. Adding a service means adding one data entry plus its i18n keys.

## 4. Project structure

```
public/
  images/                 placeholder SVGs to replace with real photos
  favicon.svg, robots.txt, sitemap.xml, _redirects
src/
  components/
    layout/               Header, MobileMenu, Footer, FloatingCTA, Logo, LanguageToggle
    sections/             Hero, TrustStrip, DoctorIntro, FeaturedTreatments, ServicesGrid,
                          Comfort, OfferBanner, Reviews, FAQSection, Location, CTABanner, PageHero
    services/             ServiceCard, ServicePageTemplate
    booking/              BookingForm
    ui/                   Button, Card, Section, SectionHeading, Accordion, ScrollReveal,
                          StarRating, SEO
  pages/                  one component per route
  data/                   clinic.js, services.js, problems.js, faqs.js, reviews.js
  i18n/                   en.json, bn.json, LanguageContext.jsx
  utils/                  WhatsApp link, phone validation, date/time formatting, analytics, schema
  styles/                 Tailwind layers and the design token type scale
```

## 5. Editing content

- **Clinic facts** (phone, WhatsApp, address, hours, map, social links, offer): `src/data/clinic.js`.
- **Services and their page content**: `src/data/services.js` + `services.<slug>.*` keys in `src/i18n/en.json` and `bn.json`.
- **FAQ, problems, reviews**: `src/data/faqs.js`, `problems.js`, `reviews.js`.
- **All UI text**: `src/i18n/en.json` and `src/i18n/bn.json`. Bangla falls back to English when a key is missing.
- **Colors, fonts, shadows**: `tailwind.config.js` and `src/styles/index.css` (tokens match `design.md`).

## 6. Language toggle

The header toggle switches between English and Bangla, saves the choice in `localStorage` under `metro-dental-language`, and sets `<html lang>`. Bangla uses Hind Siliguri with larger line height.

## 7. Booking flow

`BookingForm` validates name, phone (Bangladeshi mobile formats), date (today or later), and time. On submit it builds a `wa.me` link with the message template from i18n, opens WhatsApp in a new tab, and shows a success state with a Call fallback. Bookings are requests, not confirmed appointments — the clinic confirms on WhatsApp.

## 8. SEO

- Per-page title, description, canonical, and Open Graph tags through `components/ui/SEO.jsx`.
- `Dentist` JSON-LD on Home and Contact, built from `clinic.js`.
- `sitemap.xml` and `robots.txt` in `public/`.
- Routes are code-split with `React.lazy`.

Set `VITE_SITE_URL` at build time (see `.env.example`) so canonical URLs, OG URLs, and JSON-LD include the live domain:

```bash
VITE_SITE_URL=https://your-domain.com npm run build
```

## 9. Deploy

**Vercel**: import the repository. Build command `npm run build`, output `dist`. `vercel.json` adds SPA rewrites, cache headers, and basic security headers.

**Netlify**: import the repository. `netlify.toml` sets the build, publish directory, SPA redirect, and headers. `public/_redirects` is also included.

After deploying:

1. Replace `REPLACE-WITH-YOUR-DOMAIN` in `public/sitemap.xml` and `public/robots.txt`.
2. Set `VITE_SITE_URL` in the host dashboard.
3. Submit the sitemap in Google Search Console.

## 10. Placeholders to replace before launch

- [ ] Real photos: `public/images/hero-clinic.svg`, `doctor-mustak.svg`, `clinic-interior.svg`, and the seven `service-*.svg` files. Use WebP under 200 KB, keep the same filenames or update `services.js`.
- [ ] Dr. Mustak's qualifications (currently in i18n but not rendered) and confirmed Bangla spelling.
- [ ] Opening hours: the site currently shows **10:00 AM – 9:00 PM every day** (from `AGENTS.md`). Confirm days and exact times in `src/data/clinic.js` and the `clinic.hours.*` keys.
- [ ] Real patient reviews with written permission. Sample reviews are labelled as placeholders in `src/data/reviews.js` and on the Home page; remove the note when real reviews are in.
- [ ] Offer banner: `clinic.offer.enabled` is `false`. Add real copy, then enable it.
- [ ] Google Maps embed URL (`clinic.mapEmbedUrl`) and Google Business Profile review link (`clinic.googleReviewsUrl`).
- [ ] Facebook and Instagram links (`clinic.social`).
- [ ] Sterilization practices and equipment names (`comfort.2.text`, `comfort.3.text`).
- [ ] Clinic story for the About page (`about.story`).
- [ ] Accepted payment methods (`newPatients.payment`).
- [ ] Confirm the service list and the details for the five short service pages.
- [ ] Native-speaker review of every Bangla line in `src/i18n/bn.json`.
- [ ] Analytics provider (events already fire through `src/utils/analytics.js`).
- [ ] Optional: pre-render public pages at build time for stronger local SEO (the site currently uses client-side rendering).

## 11. Notes

- No API keys or personal data are stored in the repository or sent to a server.
- Booking data only leaves the browser when the visitor presses send inside WhatsApp.
- The planned AI chatbot is not built. When added, it must live outside the front-end bundle and route model calls through a serverless function.
