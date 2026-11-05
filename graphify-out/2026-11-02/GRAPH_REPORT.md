# Graph Report - Dental-Design  (2026-11-01)

## Corpus Check
- 72 files · ~34,666 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 6 file(s) not represented in the graph (top: (none) 2, .example 1, .toml 1)

## Summary
- 312 nodes · 922 edges · 41 communities (23 shown, 18 thin omitted)
- Extraction: 93% EXTRACTED · 6% INFERRED · 0% AMBIGUOUS · INFERRED: 59 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- App.jsx
- UI Sections and Layout
- Booking Flow and Clinic Data
- Header.jsx
- Project Dependencies and Build Tools
- AI Chatbot and Design Requirements
- Booking Process and WhatsApp Integration
- Clinic Core Facts and Localization
- Architecture and Design Principles
- SEO and Performance Strategy
- Dental Fillings Service
- Project Management and Placeholders
- Braces Care Service
- Content Management and Layers
- Clinic Interior Illustration
- Doctor Portrait and Medical Symbols
- Dental Cleaning Service
- Accessibility and Motion Rules
- Routing and Navigation Tables
- Dental Crowns Service
- Dental Implant Illustration
- Vercel Deployment Configuration
- Deployment and Build Guide
- Main Layout Structure
- System Architecture Context
- Global Navigation Elements
- Treatment Problem Content
- Layout and Spacing Tokens
- LanguageContext.jsx
- Clinic Hero Visuals
- Social Media Metadata
- Root Canal Service
- Teeth Whitening Service
- FAQSection.jsx
- Problems.jsx
- validatePhone.js

## God Nodes (most connected - your core abstractions)
1. `useLanguage()` - 66 edges
2. `Button()` - 37 edges
3. `trackEvent()` - 37 edges
4. `ScrollReveal()` - 29 edges
5. `lucide-react` - 28 edges
6. `clinic` - 21 edges
7. `CTABanner()` - 20 edges
8. `SEO()` - 20 edges
9. `App()` - 19 edges
10. `ANALYTICS_EVENTS` - 19 edges

## Surprising Connections (you probably didn't know these)
- `Project Info (One Denta / Stale)` --semantically_similar_to--> `Clinic Info Content`  [AMBIGUOUS] [semantically similar]
  PROJECT.md → content.md
- `Folder Structure Rules` --semantically_similar_to--> `Folder Structure (Architecture)`  [INFERRED] [semantically similar]
  AGENTS.md → architecture.md
- `Booking Form Behavior` --semantically_similar_to--> `Booking Flow (Architecture)`  [INFERRED] [semantically similar]
  AGENTS.md → architecture.md
- `Booking Form Behavior` --semantically_similar_to--> `Booking Form (PROJECT.md)`  [INFERRED] [semantically similar]
  AGENTS.md → PROJECT.md
- `Booking Form Behavior` --semantically_similar_to--> `Booking Flow (README)`  [INFERRED] [semantically similar]
  AGENTS.md → README.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Spec Document Cross-Reference Web** — agents_md_project_summary, project_md_project_info, architecture_md_overview, design_md_colors, content_md_clinic_info, tasks_md_build_plan [EXTRACTED 1.00]
- **SEO and Performance Cluster** — agents_md_seo_performance, architecture_md_seo_per_page, architecture_md_performance, readme_md_seo, content_md_seo_text, public_robots_txt_config, index_html_entry [INFERRED 0.85]
- **Booking Flow Ecosystem** — agents_md_booking_form, architecture_md_booking_flow, content_md_contact_booking, whatsapp_booking_pattern, readme_md_booking_flow, project_md_booking_form [INFERRED 0.90]

## Communities (41 total, 18 thin omitted)

### Community 0 - "App.jsx"
Cohesion: 0.16
Nodes (18): react-dom, About, App(), Book, Contact, Home, NewPatients, NotFound (+10 more)

### Community 1 - "UI Sections and Layout"
Cohesion: 0.26
Nodes (29): Comfort(), CTABanner(), DoctorIntro(), FAQSection(), FeaturedTreatments(), Hero(), Location(), OfferBanner() (+21 more)

### Community 2 - "Booking Flow and Clinic Data"
Cohesion: 0.17
Nodes (19): lucide-react, BookingForm(), emptyValues, fieldOrder, quickLinks, sizes, variants, clinic (+11 more)

### Community 3 - "Header.jsx"
Cohesion: 0.31
Nodes (11): react, react-router-dom, Header(), HeaderNavLink(), LanguageToggle(), Logo(), ToothMark(), MobileMenu() (+3 more)

### Community 4 - "Project Dependencies and Build Tools"
Cohesion: 0.07
Nodes (26): dependencies, lucide-react, react, react-dom, react-helmet-async, react-router-dom, devDependencies, autoprefixer (+18 more)

### Community 5 - "AI Chatbot and Design Requirements"
Cohesion: 0.16
Nodes (14): Planned AI Chatbot, Definition of Done, Design Rules, Planned Chatbot Architecture, Folder Structure (Architecture), Home Page Content, SEO Text (Titles and Descriptions), Color System (+6 more)

### Community 6 - "Booking Process and WhatsApp Integration"
Cohesion: 0.22
Nodes (8): Booking Form Behavior, Tech Stack, Booking Flow (Architecture), Tech Stack and Reasons, Contact and Booking Content, Booking Form (PROJECT.md), Tech Stack (PROJECT.md), Booking Flow (README)

### Community 7 - "Clinic Core Facts and Localization"
Cohesion: 0.20
Nodes (9): Clinic Facts (Single Source of Truth), Graphify Knowledge Graph Rules, Project Summary (Metro Dental BD), Data Architecture, Language Toggle Flow, Clinic Info Content, Language Toggle, README Overview (+1 more)

### Community 8 - "Architecture and Design Principles"
Cohesion: 0.25
Nodes (4): Folder Structure Rules, Architecture Overview, Code Quality Requirements, Project Structure (README)

### Community 9 - "SEO and Performance Strategy"
Cohesion: 0.25
Nodes (7): SEO and Performance Requirements, SEO Per Page, Typography System, HTML Entry Point, SEO and Performance (PROJECT.md), Robots.txt Configuration, SEO Setup (README)

### Community 10 - "Dental Fillings Service"
Cohesion: 0.29
Nodes (8): Amber Color #F59E0B, Teal Color #0F8582, Decorative Star, Dental Fillings Service, Fillings Service Icon, Gradient Background, Medical Cross Symbol, Tooth Shape

### Community 11 - "Project Management and Placeholders"
Cohesion: 0.29
Nodes (6): Known Risks and Decisions, Placeholder Checklist, Project Info (One Denta / Stale), Placeholders Checklist (README), Open Items, Progress Log (2026-10-21)

### Community 12 - "Braces Care Service"
Cohesion: 0.40
Nodes (6): Amber Accent Color #F59E0B, Primary Teal Color #0F8582, Braces Care Service, Braces Service Icon, Orthodontic Archwire, Braces Brackets

### Community 13 - "Content Management and Layers"
Cohesion: 0.40
Nodes (3): Extension Points, Services Content, Editing Content Guide

### Community 14 - "Clinic Interior Illustration"
Cohesion: 0.50
Nodes (4): Clinic Interior Illustration, Dental Chairs, Reception Desk, Tooth Symbol

### Community 15 - "Doctor Portrait and Medical Symbols"
Cohesion: 0.50
Nodes (4): Doctor Mustak Portrait Illustration, Medical Attire (White Coat and Teal Scrubs), Stethoscope, Tooth Icon

### Community 16 - "Dental Cleaning Service"
Cohesion: 0.50
Nodes (4): Dental Cleaning Service Icon, Teal and Amber Color Palette, Sparkle Decorations, Tooth Icon

### Community 18 - "Routing and Navigation Tables"
Cohesion: 0.67
Nodes (3): Routing Table, Pages and Routes, Pages Table (README)

### Community 19 - "Dental Crowns Service"
Cohesion: 0.67
Nodes (3): Color Palette: Teal, Light Teal, Gold, White, Dental Crowns Service Icon, Visual Elements: Stylized Crown Shape with Teal Stroke and Gold Accents

### Community 20 - "Dental Implant Illustration"
Cohesion: 0.67
Nodes (3): Decorative Stars and Dots, Implant Service Icon, Dental Implant Illustration

### Community 33 - "LanguageContext.jsx"
Cohesion: 0.17
Nodes (10): StarRating(), reviews, BANGLA_DIGITS, dictionaries, interpolate(), LanguageContext, LanguageProvider(), LANGUAGES (+2 more)

### Community 39 - "Problems.jsx"
Cohesion: 0.17
Nodes (11): cards, items, ServiceCard(), getProblem(), problems, featuredServices, getService(), getServiceTitleKey() (+3 more)

### Community 40 - "validatePhone.js"
Cohesion: 0.83
Nodes (3): normalizePhone(), toInternationalPhone(), validatePhone()

## Ambiguous Edges - Review These
- `Project Info (One Denta / Stale)` → `Clinic Info Content`  [AMBIGUOUS]
  PROJECT.md · relation: semantically_similar_to

## Knowledge Gaps
- **56 isolated node(s):** `autoprefixer`, `postcss`, `tailwindcss`, `Dental Fillings Service`, `Amber Color #F59E0B` (+51 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 108 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **18 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useLanguage()` connect `UI Sections and Layout` to `App.jsx`, `LanguageContext.jsx`, `Booking Flow and Clinic Data`, `Header.jsx`, `FAQSection.jsx`, `Problems.jsx`?**
  _High betweenness centrality (0.058) - this node is a cross-community bridge._
- **What connects `autoprefixer`, `postcss`, `tailwindcss` to the rest of the system?**
  _56 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Project Dependencies and Build Tools` be split into smaller, more focused modules?**
  _Cohesion score 0.07407407407407407 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `Booking Flow and Clinic Data` to `UI Sections and Layout`, `LanguageContext.jsx`, `Header.jsx`, `Project Dependencies and Build Tools`, `FAQSection.jsx`, `Problems.jsx`?**
  _High betweenness centrality (0.049) - this node is a cross-community bridge._
- **Why does `react` connect `Header.jsx` to `App.jsx`, `LanguageContext.jsx`, `Booking Flow and Clinic Data`, `Project Dependencies and Build Tools`, `FAQSection.jsx`, `Problems.jsx`?**
  _High betweenness centrality (0.031) - this node is a cross-community bridge._

### Low-confidence Hints
_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `Project Info (One Denta / Stale)` and `Clinic Info Content`?**
  _Edge tagged AMBIGUOUS (relation: semantically_similar_to) - confidence is low._