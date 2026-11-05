# agent.md: Metro Dental BD

Instructions for any AI coding agent working on this repository. Read this file and `PROJECT.md` , `architecture.md` , `design.md` , `tasks.md` , `content.md` before making changes. If they conflict, `PROJECT.md` describes *what* to build and this file describes *how to work*.

---

## 1. Project Summary

A multi-page, mobile-first website for **Metro Dental BD**, a dental clinic in Dhaka, Bangladesh. The single goal of the site is to get visitors to **call or book an appointment**. Every page and component should support that goal.

**Clinic facts (single source of truth: `src/data/clinic.js`)**
- Dentist: Dr. Mustak
- Featured treatments: Dental Implant, Braces Care
- Address: 59 Kazi Alauddin Rd, Bangshal, Dhaka 1100 (beside Beauty Lacchi and Alom Khan Tea)
- Phone: 01716374977
- Hours: [10 AM to 9 PM]

Never hardcode these facts inside components. Import them from the data file.

---

## 2. Tech Stack

- Vite + React
- React Router
- Tailwind CSS (theme tokens in `tailwind.config`)
- lucide-react (icons)
- react-helmet-async (SEO per page)
- i18n via JSON files (`src/i18n/en.json`, `src/i18n/bn.json`), default language English
- No backend for the booking form: it opens a WhatsApp (`wa.me`) link with prefilled text

Do not add new dependencies without a clear reason. Prefer what is already installed.

---

## 3. Commands

```bash
npm install        # install dependencies
npm run dev        # start the dev server
npm run build      # production build (must pass with zero errors)
npm run preview    # preview the production build
npm run lint       # lint (if configured)
```

Run `npm run build` before declaring any task finished.

---

## 4. Folder Structure

```
src/
  components/   reusable UI (Button, SectionHeading, ServiceCard, Accordion, TestimonialCard)
  pages/        one file per route
  data/         clinic.js, services.js, faqs.js, reviews.js (all editable content)
  i18n/         en.json, bn.json
  hooks/        custom hooks
  assets/       images and fonts imported by code
public/
  images/       placeholder and real photos, plus sitemap.xml and robots.txt
```

Rules:
- One component per file. Keep components small and focused.
- All service pages use ONE shared template component fed by `src/data/services.js`.
- Text visible to users lives in the i18n files or data files, never inline in JSX.

---

## 5. Coding Conventions

- Functional components and hooks only.
- Tailwind utility classes for styling. Use theme tokens (`primary`, `accent`) instead of raw hex colors.
- Mobile-first: write the base styles for phones, then add `md:` and `lg:` overrides.
- Semantic HTML: one `h1` per page, correct heading order, `button` for actions, `a` for links.
- Every image needs meaningful `alt` text and lazy loading (except the hero image).
- Every form field needs a visible label and an accessible error message.
- Add comments only where the logic is not obvious.
- Keep file and variable names descriptive and consistent (components in PascalCase, everything else camelCase).

---

## 6. Design Rules

- Clean, modern, trustworthy, lots of white space.
- One primary color, one accent color for buttons, neutral grays.
- Two fonts at most (heading + body). Use a Bangla-friendly font (Hind Siliguri or Noto Sans Bengali) for Bangla text.
- Repeat the call to action (Call Now / Book Appointment) at least 5 times down the home page.
- On mobile, keep a floating tap-to-call and WhatsApp button visible.
- Animations must be subtle and must respect `prefers-reduced-motion`.
- Test layouts at 360px, 768px, and 1280px.

---

## 7. Content Rules

- Do not invent medical claims, prices, qualifications, awards, or statistics.
- Anything unknown must be a clearly marked placeholder, for example `[TODO: add opening hours]`.
- Placeholder reviews must be labeled as placeholders in the data file so they are replaced before launch.
- Do not copy text or images from other clinic websites. Use them as layout inspiration only.
- Keep the tone friendly, simple, and reassuring. Avoid heavy jargon.

---

## 8. SEO and Performance Requirements

- Every page has a unique title and meta description (react-helmet-async).
- Add Open Graph tags and `Dentist` / `LocalBusiness` JSON-LD with the address, phone, and hours.
- Keep `sitemap.xml` and `robots.txt` up to date when routes change.
- Compress images, lazy-load below-the-fold media, and avoid large unused libraries.
- Target a Lighthouse performance score above 90 on mobile.

---

## 9. Booking Form Behavior

- Fields: name, phone, preferred date, preferred time, treatment (dropdown), message (optional).
- Validate required fields and the phone number format (Bangladesh mobile numbers).
- On submit, open WhatsApp with a prefilled message, then show a success state.
- Must be fully keyboard accessible.

---

## 10. Planned Feature: AI Chatbot

The clinic wants a chatbot widget that answers visitor questions from provided documents (services, prices, FAQs, hours) and can search the internet when the documents do not cover the question.

When this is built:
- Keep it as a separate component and module (`src/components/chatbot/`), so the site works fully without it.
- **Never put API keys in front-end code.** Route all model calls through a small backend or serverless function.
- Answer from the clinic documents first. Only use web search for general dental questions, and label such answers as general information.
- The bot must not diagnose, prescribe, or give personal medical advice. For symptoms, pain, or emergencies, it should tell the visitor to call the clinic.
- Always show a Call and WhatsApp option inside the chat.
- Support English and Bangla.
- Ask the project owner before choosing the model provider or hosting, because that decision affects cost and setup.

---

## 11. How to Work

1. **Plan first.** For any task larger than a small fix, state your plan and the files you will touch before editing.
2. **Make small, focused changes.** Do not refactor unrelated code or rename files without being asked.
3. **Build page by page.** Finish and verify one page or section before starting the next.
4. **Reuse before creating.** Check `src/components` and `src/data` for an existing piece first.
5. **Ask when unsure.** If a requirement, fact, or choice is missing, ask or use a marked placeholder. Do not guess.
6. **Never commit secrets.** No keys, tokens, or personal data in the repository.

---

## 12. Definition of Done

A task is done only when all of these are true:

- [ ] `npm run build` passes with no errors or warnings
- [ ] Works at 360px, 768px, and 1280px
- [ ] Both English and Bangla text render correctly
- [ ] Links, buttons, and the booking flow work
- [ ] No hardcoded clinic facts or user-facing text in components
- [ ] Page has a title, meta description, and proper heading order
- [ ] Remaining placeholders are listed in your final message

---

## 13. Final Message Format

When you finish a task, reply with:

1. **What changed:** a short list of files created or edited.
2. **How to check it:** the commands to run and the pages to open.
3. **Open items:** placeholders or decisions still needed from the owner.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

When the user types `/graphify`, use the installed graphify skill or instructions before doing anything else.

Rules:
- When graphify-out/graph.json exists, run `graphify query "<question>"` before your first grep, search or source-file read for a codebase question, and put this rule in every subagent prompt that explores code. Read raw files only for lines the graph or an earlier read already located. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- Dirty graphify-out/ files are expected after hooks or incremental updates; dirty graph files are not a reason to skip graphify. Only skip graphify if the task is about stale or incorrect graph output, or the user explicitly says not to use it.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
- A committed graphify-out/graph.json is rewritten whole on every build, so a large diff to it in a pull request is expected. Do not flag it as churn or suggest skipping the graph rebuild or its hooks.
