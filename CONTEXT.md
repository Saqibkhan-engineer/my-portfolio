# Portfolio Project — Context & Progress Tracker

## Owner
**Muhammad Saqib** — Software Engineer | Data Analyst | BI | ML & AI Automation

## Tech Stack
- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS v3
- Animations: Framer Motion
- Icons: Lucide React
- Language: TypeScript
- Theme: Dark-mode first, sleek & modern

## Color Palette (Design System)
- Background: #0a0a0f (deep near-black)
- Surface: #111118 / #16161f
- Accent Primary: #7c3aed to #a78bfa (violet/purple gradient)
- Accent Secondary: #06b6d4 (cyan)
- Text Primary: #f1f5f9
- Text Muted: #94a3b8
- Border: rgba(255,255,255,0.08)

## Font
- Inter (Google Fonts)

---

## Build Phases & Status

| Phase | Section                   | Status  |
|-------|---------------------------|---------|
| 1     | Hero Section              | DONE    |
| 2     | Technical Skills & Tools  | DONE    |
| 3     | Certifications            | DONE    |
| 4     | Featured Projects         | DONE    |
| 5     | Connect With Me (Footer)  | DONE    |

---

## File Structure

```
src/
  app/
    layout.tsx          - Root layout, fonts, metadata
    page.tsx            - Main page assembling all sections
    globals.css         - Global styles, CSS variables, animations
  components/
    Navbar.tsx          - Top navigation bar
    Hero.tsx            - Phase 1: Hero section
    Skills.tsx          - Phase 2: Technical skills grid
    Certifications.tsx  - Phase 3: Certification cards
    Projects.tsx        - Phase 4: Featured projects
    Contact.tsx         - Phase 5: Connect With Me / Footer
```

---

## Section Details

### Phase 1 - Hero
- Headline: "Hi, I'm Muhammad Saqib."
- Typewriter sub-headline cycling roles
- Left: text + CTA buttons (View My Work, Contact Me)
- Right: circular profile image placeholder with purple glow ring
- Animated mesh gradient background

### Phase 2 - Skills
- 6 category cards in responsive grid
- Categories: Data Science/ML/AI | BI & Analytics | Databases | Backend/APIs/Cloud | Frontend | DevOps/Tools
- Skills rendered as pill/tag badges

### Phase 3 - Certifications
- 2 certificate cards: Google Advanced Data Analytics + Google BI Professional
- "See All" button centered below

### Phase 4 - Projects
- 2 project cards with hover effects
  1. FYP Management System (NLP, Cosine Similarity, React, Vite, Python, PostgreSQL)
  2. Google Fiber Analytics Dashboard (PostgreSQL ETL, DAX, MoM, Pareto, What-If)
- "See All Projects" button below

### Phase 5 - Contact/Footer
- Email, LinkedIn, GitHub with Lucide icons
- Dark minimalist footer

---

## Progress Log
- [2026-09-30] Full rebuild initiated - all 5 phases completed
