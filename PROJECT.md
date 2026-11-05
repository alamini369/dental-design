# Metro Dental BD: Website Specs

You are a senior front-end engineer and UI designer. Build a complete, production-ready, multi-page website for a dental clinic using React. Work step by step: first propose the file structure, then build it, then run it and fix any errors. Read this file and `architecture.md` , `design.md` , `tasks.md` , `content.md` before making changes

---

## 1. Project Info

- **Clinic name:** One Denta
- **Dentist:** Dr. Dental
- **Special treatments:** Dental Implant and Braces Care
- **Address:**  Dhaka 1100, Bangladesh
- **Phone:** 01700000000
- **Opening hours:** [add hours]
- **Goal of the site:** get visitors to call or book an appointment. Every page must push toward this one action.

---

## 2. Tech Stack

- Vite + React (JavaScript or TypeScript, but be consistent)
- React Router for multiple pages
- Tailwind CSS for styling
- lucide-react for icons
- react-helmet-async for per-page SEO titles and descriptions
- No backend. The booking form opens a WhatsApp message (wa.me link with the form data prefilled) and also offers a tap-to-call button.

---

## 3. Pages and Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About the clinic and Dr. Mustak |
| `/services` | All services overview |
| `/services/dental-implant` | Dental Implant |
| `/services/braces-care` | Braces Care |
| `/services/[slug]` | Other services: cleaning, root canal, whitening, filling, crown |
| `/problems` | Problems we treat: toothache, bleeding gums, crooked teeth, missing teeth, sensitivity, bad breath |
| `/new-patients` | What to expect, what to bring |
| `/contact` | Address, phone, hours, map, booking form |
| `/book` | Appointment form |
| `*` | 404 page |

Build all service pages from ONE reusable template component that takes data from a services data file (title, intro, who it is for, process steps, FAQs, benefits).

---

## 4. Homepage Sections (in this order)

1. **Sticky header:** logo, nav (About, Services, Problems We Treat, New Patients, Contact), phone number, and a "Book Appointment" button. Services is a dropdown on desktop and an accordion in the mobile menu.
2. **Hero:** strong headline, one supporting sentence, two buttons (Call Now and Book Appointment), and a clinic photo or soft background video. Text must stay readable over the media.
3. **Trust strip:** 3 to 4 short points (experienced dentist, modern equipment, clean and comfortable clinic, affordable care).
4. **Meet Dr. Mustak:** photo, short bio, qualifications placeholder.
5. **Featured treatments:** two large cards for Dental Implant and Braces Care, then a grid of other services.
6. **Technology and comfort:** 3 cards describing the clinic's equipment and patient comfort (editable placeholders).
7. **Offer banner:** a free consultation or a payment/discount offer (editable text).
8. **Patient reviews:** carousel of 4 to 5 testimonials (placeholder text, clearly marked to replace with real ones), plus a link to Google reviews.
9. **FAQ:** accordion with 6 questions about implants, braces, pain, cost, and appointments.
10. **Location:** address with landmarks, hours, embedded Google Map, and a Get Directions button.
11. **Final call to action banner:** "Book your visit today" with Call and WhatsApp buttons.
12. **Footer:** services links, practice info, address, phone, social links, copyright.

---

## 5. Design Requirements

- **Style:** clean, modern, trustworthy, lots of white space.
- **Colors:** one primary (teal or medical blue), one accent for buttons, neutral grays. Define them as Tailwind theme tokens.
- **Fonts:** one heading font and one body font from Google Fonts, with a Bangla-friendly fallback (Hind Siliguri or Noto Sans Bengali).
- Rounded cards, soft shadows, smooth hover effects, subtle scroll animations (keep them light).
- Fully responsive, designed mobile-first. Test at 360px, 768px, and 1280px.
- A floating tap-to-call and WhatsApp button on mobile.
- A Bangla/English language toggle, with all text stored in translation files (`en.json`, `bn.json`). Default to English.

---

## 6. Booking Form

- **Fields:** name, phone, preferred date, preferred time, treatment (dropdown), message (optional).
- Validate required fields and the phone number format.
- On submit, open WhatsApp with a prefilled message and show a success state.
- Make the form accessible (labels, error messages, keyboard use).

---

## 7. SEO and Performance

- Unique title and meta description for every page.
- Open Graph tags.
- `Dentist` / `LocalBusiness` JSON-LD schema with the address, phone, and hours.
- Semantic HTML (one `h1` per page, proper heading order), alt text on all images.
- Lazy-load images, compress assets, and keep the Lighthouse performance score above 90.
- Generate `sitemap.xml` and `robots.txt`.

---

## 8. Code Quality

- **Folder structure:** `src/components`, `src/pages`, `src/data`, `src/i18n`, `src/assets`, `src/hooks`.
- Small reusable components (Button, SectionHeading, ServiceCard, Accordion, TestimonialCard).
- Keep all content (services, FAQs, reviews, clinic info) in data files so text can be edited without touching components.
- Use placeholder images from `/public/images` with clear file names, and list which real photos need to be replaced.
- Add comments only where the logic is not obvious.
- Include a README with setup, run, build, and deploy steps (Vercel or Netlify).

---

## 9. Deliverables

1. Full working code.
2. Instructions to run it locally (`npm install`, `npm run dev`).
3. A checklist of placeholders to replace (photos, hours, reviews, Google Map link, WhatsApp number format).
4. Run the build and fix all errors and warnings before finishing.

---

## 10. How to Start

Show the file tree and the color/font choices first, then build page by page, starting with the Home page.
