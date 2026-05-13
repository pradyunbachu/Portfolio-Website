# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current Bloomberg-terminal portfolio with an Apple-style, monospace, type-only minimal site per [spec](../specs/2026-05-13-portfolio-redesign-design.md).

**Architecture:** Single-page React app with one component per section, a shared `<Section>` wrapper that handles the fade-in-on-scroll behavior via `IntersectionObserver`, all data extracted to `src/data/content.js`, and a single global stylesheet using CSS custom properties for light/dark theming.

**Tech Stack:** React 18, Vite, plain CSS. No new dependencies. JetBrains Mono via Google Fonts.

**Note on testing:** This project has no test framework and adding one for a visual redesign would be churn. Verification is visual via `npm run dev` — each task lists specific things to check in the browser at http://localhost:5173.

---

## File Structure

**Create:**
- `src/data/content.js` — All content data: about copy, skills, experience, projects, contact links
- `src/components/Section.jsx` — Reusable section wrapper (label + fade-on-scroll)
- `src/components/Nav.jsx` — Sticky top nav with theme toggle
- `src/components/Landing.jsx` — Full-viewport hero
- `src/components/About.jsx`
- `src/components/Experience.jsx`
- `src/components/Projects.jsx`
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`

**Modify:**
- `src/App.jsx` — Full rewrite (currently 1147 lines, will become ~50 lines of composition)
- `src/style.css` — Full rewrite with new tokens and component styles
- `src/main.jsx` — Remove `./mediaqueries.css` import
- `index.html` — Remove Inter font and Font Awesome; keep JetBrains Mono only

**Delete:**
- `src/mediaqueries.css` — Empty (1 line), no longer imported

---

## Task 1: Extract content data to `src/data/content.js`

**Files:**
- Create: `src/data/content.js`

This task is pure data extraction. No visual changes yet. Pulling the data out first means every subsequent component can import from one place.

- [ ] **Step 1: Create the data file**

Create `src/data/content.js` with the following exact contents:

```js
export const about = {
  paragraph:
    "I'm a CS and Economics student at UW–Madison interested in data engineering, full-stack development, and quantitative work. I like building things end-to-end — data pipelines, APIs, dashboards, and the occasional game.",
};

export const skills = [
  "Python", "Java", "C", "R", "SQL", "JavaScript", "HTML/CSS",
  "React", "FastAPI", "Flask", "Vite",
  "Git", "Docker", "Supabase", "PostgreSQL",
  "Pandas", "NumPy", "Matplotlib", "OpenCV", "YOLOv8",
];

export const experience = [
  {
    title: "Data Engineer Intern",
    org: "Allocore",
    date: "May 2026 – August 2026",
    location: "Mechanicsburg, PA",
  },
  {
    title: "Data Analyst Intern",
    org: "United Nations: DESA",
    date: "May 2025 – August 2025",
    location: "New York, NY",
  },
  {
    title: "B.S. Computer Science, Economics with Math Emphasis",
    org: "University of Wisconsin–Madison",
    date: "2024 – 2027 (expected)",
    location: "Madison, WI",
  },
  {
    title: "Senior Engineer",
    org: "Peddie Robotics",
    date: "September 2021 – May 2024",
    location: "Hightstown, NJ",
  },
  {
    title: "Event Day Judge & Logistics Team Lead",
    org: "PeddieHacks",
    date: "September 2020 – August 2025",
    location: "Hightstown, NJ",
  },
];

export const projects = [
  {
    title: "Pulse",
    date: "March 2026 – Present",
    description:
      "An end-to-end financial data pipeline using Airflow to ingest daily OHLCV data for 15 tickers (300+ rows) into an AWS S3 landing zone and TimescaleDB hypertable across 30 days of history. dbt transforms raw data into moving averages, daily returns, z-score anomaly detection flagging 40+ unusual events, and a cross-ticker correlation matrix. Served transformed data via FastAPI to a React dashboard with candlestick charts, anomaly markers, correlation heatmap, and inline sparklines; automated dbt data quality tests run after each DAG to validate schema and detect missing trading days.",
    tech: ["Python", "Apache Airflow", "TimescaleDB", "dbt", "FastAPI", "React", "AWS (S3)", "Docker"],
    links: [
      { label: "GitHub", url: "https://github.com/pradyunbachu/FinMarketPipeline" },
    ],
  },
  {
    title: "Lotus",
    date: "February 2026 – Present",
    description:
      "Collaborated with a team to build a healthcare cost projection platform using Deepgram speech-to-text and a two-layer detection system (regex + Groq LLM) to map symptoms to 40+ ICD-10 conditions. Features a simulation engine using odds ratios from 1.5M+ MEPS patient records, interactive Cytoscape.js disease progression visualization, and side-by-side CMS marketplace insurance plan comparison with Supabase Google OAuth authentication.",
    tech: ["Python", "React", "FastAPI", "Groq LLM", "Deepgram", "Cytoscape.js", "Supabase", "Vite"],
    links: [
      { label: "GitHub", url: "https://github.com/pradyunbachu/Lotus" },
    ],
  },
  {
    title: "Voxal",
    date: "December 2025 – Present",
    description:
      "A voice-powered personal assistant for expense tracking, pantry management, and meal planning using Deepgram STT and Groq LLM for multi-intent classification. Features Groq Vision OCR receipt scanning, AI spending insights, budget alerts, a drag-and-drop pantry with expiration tracking, and AI meal recommendations. Built with async FastAPI backend, Supabase Auth, PostgreSQL real-time subscriptions, and shared shopping lists.",
    tech: ["Python", "React", "FastAPI", "Groq LLM", "Groq Vision", "Deepgram", "Supabase", "PostgreSQL"],
    links: [
      { label: "GitHub", url: "https://github.com/pradyunbachu/VoiceP_App" },
      { label: "Live App", url: "https://voxal.vercel.app/" },
    ],
  },
  {
    title: "Redline",
    date: "November 2025 – Present",
    description:
      "A full-stack web app using YOLOv8 to detect and classify vehicle damage from 3000+ images with automated cost estimation. Built Flask REST API and React frontend with real-time damage visualization and Groq LLM chatbot for support. Trained YOLOv8 model with OpenCV preprocessing, classifying damage severity across multiple vehicle components.",
    tech: ["Python", "React", "YOLOv8", "Groq LLM", "Flask", "OpenCV"],
    links: [
      { label: "GitHub", url: "https://github.com/UniqueRed/badger-buildhacks" },
      { label: "Video Demo", url: "https://youtu.be/6G34sUlco60" },
    ],
  },
  {
    title: "Shadows & Suits",
    date: "October 2025",
    description:
      "Medieval twist on poker Texas Hold'em with a rustic UI where players are able to experience poker in a completely new way.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    links: [
      { label: "GitHub", url: "https://github.com/pradyunbachu/PokerGame" },
      { label: "Live Demo", url: "https://poker-game-iota.vercel.app/" },
    ],
  },
  {
    title: "Risk Dashboard Analyzer",
    date: "Coming Soon",
    description:
      "A full-stack analytics tool that pulls historical market data, stores it in a PostgreSQL database, and calculates key risk metrics used by financial institutions. Users can build custom portfolios and visualize how their holdings might perform under different market conditions.",
    tech: ["Python", "PostgreSQL", "SQL", "Pandas", "Streamlit"],
    links: [
      { label: "GitHub", url: "https://github.com/pradyunbachu/Risk-Dashboard-Analyzer" },
    ],
  },
];

export const contact = {
  prompt: "Reach out — I'm always up for a conversation.",
  links: [
    { label: "Email", value: "pbachu@wisc.edu", url: "mailto:pbachu@wisc.edu" },
    { label: "GitHub", value: "github.com/pradyunbachu", url: "https://github.com/pradyunbachu" },
    { label: "LinkedIn", value: "linkedin.com/in/pradyun-bachu", url: "https://www.linkedin.com/in/pradyun-bachu/" },
    { label: "Resume", value: "Bachu_Pradyun_Resume.pdf", url: "/Bachu_Pradyun_Resume.pdf" },
  ],
};
```

- [ ] **Step 2: Verify file imports cleanly**

Run: `node --input-type=module -e "import('./src/data/content.js').then(m => console.log(Object.keys(m)))"`
Expected output: `[ 'about', 'skills', 'experience', 'projects', 'contact' ]`

- [ ] **Step 3: Commit**

```bash
git add src/data/content.js
git commit -m "Extract site content to src/data/content.js"
```

---

## Task 2: Rewrite `index.html` and global stylesheet

**Files:**
- Modify: `index.html`
- Modify: `src/style.css` (full rewrite)
- Modify: `src/main.jsx` (remove mediaqueries.css import)
- Delete: `src/mediaqueries.css`

This task installs the new design tokens, base styles, and font. After this task the existing site will look broken — that's expected, the next tasks replace the React tree.

- [ ] **Step 1: Update `index.html`**

Replace the entire file with:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pradyun Bachu</title>
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='4' fill='%23111'/><text x='16' y='22' font-family='monospace' font-size='16' font-weight='500' fill='%23fff' text-anchor='middle'>p</text></svg>" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap"
      rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

Changes: dropped Inter, dropped Font Awesome, simplified favicon to a mono "p".

- [ ] **Step 2: Replace `src/style.css` with the new stylesheet**

Replace the entire contents of `src/style.css` with:

```css
/* ===== Tokens ===== */
:root {
  --bg: #ffffff;
  --text-primary: #111111;
  --text-secondary: #666666;
  --divider: #e5e5e5;

  --mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;

  --max-width: 720px;
  --page-padding-desktop: 32px;
  --page-padding-mobile: 20px;
  --section-gap-desktop: 160px;
  --section-gap-mobile: 96px;
}

html[data-theme='dark'] {
  --bg: #0a0a0a;
  --text-primary: #f5f5f5;
  --text-secondary: #888888;
  --divider: #222222;
}

/* ===== Reset / base ===== */
*, *::before, *::after { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body {
  background: var(--bg);
  color: var(--text-primary);
  font-family: var(--mono);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: background-color 250ms ease, color 250ms ease;
}
a {
  color: inherit;
  text-decoration: none;
}
button {
  font-family: inherit;
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
  padding: 0;
}

/* ===== Layout ===== */
.page {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--page-padding-desktop);
}
@media (max-width: 640px) {
  .page { padding: 0 var(--page-padding-mobile); }
}

/* ===== Nav ===== */
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--bg);
  border-bottom: 1px solid transparent;
  transition: border-color 250ms ease, background-color 250ms ease;
}
.nav[data-scrolled='true'] {
  border-bottom-color: var(--divider);
}
.nav-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 16px var(--page-padding-desktop);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: var(--text-secondary);
}
@media (max-width: 640px) {
  .nav-inner { padding: 14px var(--page-padding-mobile); font-size: 11px; }
}
.nav-links { display: flex; gap: 14px; }
.nav-links a {
  cursor: pointer;
  transition: color 200ms ease;
}
.nav-links a:hover { color: var(--text-primary); }
.nav-toggle {
  font-size: 14px;
  line-height: 1;
}
.nav-toggle:hover { color: var(--text-primary); }

/* ===== Landing ===== */
.landing {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 0 80px;
  position: relative;
}
.landing-headline {
  font-size: 64px;
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1.05;
  margin: 0;
  color: var(--text-primary);
}
.landing-sub {
  font-size: 16px;
  color: var(--text-secondary);
  margin-top: 16px;
}
.landing-scroll {
  position: absolute;
  bottom: 32px;
  left: 0;
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-secondary);
}
@media (max-width: 640px) {
  .landing-headline { font-size: 40px; }
  .landing-sub { font-size: 14px; }
}

/* ===== Section ===== */
.section {
  padding-top: var(--section-gap-desktop);
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 500ms ease-out, transform 500ms ease-out;
}
.section[data-visible='true'] {
  opacity: 1;
  transform: none;
}
@media (max-width: 640px) {
  .section { padding-top: var(--section-gap-mobile); }
}
.section-label {
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
  margin: 0 0 32px 0;
  font-weight: 500;
}

/* ===== About ===== */
.about-body {
  font-size: 16px;
  color: var(--text-primary);
  margin: 0;
}
.about-skills {
  font-size: 13px;
  color: var(--text-secondary);
  margin-top: 24px;
}
.about-skills-label {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-right: 8px;
}

/* ===== Experience ===== */
.exp-list { display: flex; flex-direction: column; }
.exp-item {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 24px;
  padding: 20px 0;
  border-top: 1px solid var(--divider);
}
.exp-item:last-child { border-bottom: 1px solid var(--divider); }
.exp-date {
  font-size: 13px;
  color: var(--text-secondary);
}
.exp-body { display: flex; flex-direction: column; gap: 4px; }
.exp-title {
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
}
.exp-org {
  font-size: 13px;
  color: var(--text-secondary);
}
@media (max-width: 640px) {
  .exp-item {
    grid-template-columns: 1fr;
    gap: 6px;
  }
}

/* ===== Projects ===== */
.proj-list { display: flex; flex-direction: column; }
.proj-item {
  padding: 24px 0;
  border-top: 1px solid var(--divider);
}
.proj-item:last-child { border-bottom: 1px solid var(--divider); }
.proj-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 12px;
}
.proj-title {
  font-size: 22px;
  font-weight: 500;
  color: var(--text-primary);
  margin: 0;
}
.proj-date {
  font-size: 13px;
  color: var(--text-secondary);
  white-space: nowrap;
}
.proj-desc {
  font-size: 15px;
  color: var(--text-primary);
  margin: 0 0 12px 0;
}
.proj-tech {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 12px;
}
.proj-links {
  display: flex;
  gap: 20px;
  font-size: 13px;
}
.proj-links a {
  color: var(--text-primary);
  border-bottom: 1px solid var(--divider);
  padding-bottom: 1px;
  transition: border-color 200ms ease;
}
.proj-links a:hover { border-bottom-color: var(--text-primary); }
@media (max-width: 640px) {
  .proj-head { flex-direction: column; gap: 4px; }
  .proj-title { font-size: 18px; }
}

/* ===== Contact ===== */
.contact-prompt {
  font-size: 15px;
  color: var(--text-primary);
  margin: 0 0 24px 0;
}
.contact-list {
  display: grid;
  grid-template-columns: 100px 1fr;
  row-gap: 10px;
  column-gap: 16px;
  font-size: 14px;
}
.contact-label {
  color: var(--text-secondary);
}
.contact-list a {
  color: var(--text-primary);
  border-bottom: 1px solid var(--divider);
  padding-bottom: 1px;
  width: fit-content;
  transition: border-color 200ms ease;
}
.contact-list a:hover { border-bottom-color: var(--text-primary); }

/* ===== Footer ===== */
.footer {
  margin-top: var(--section-gap-desktop);
  padding: 32px 0;
  border-top: 1px solid var(--divider);
  text-align: center;
  font-size: 12px;
  color: var(--text-secondary);
}
.footer-links {
  display: inline-flex;
  gap: 12px;
  margin-left: 12px;
}
.footer-links a:hover { color: var(--text-primary); }
@media (max-width: 640px) {
  .footer { margin-top: var(--section-gap-mobile); }
  .footer-links { display: flex; justify-content: center; margin: 8px 0 0 0; }
}
```

- [ ] **Step 3: Remove the mediaqueries.css import from main.jsx**

Edit `src/main.jsx`:

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

- [ ] **Step 4: Delete mediaqueries.css**

```bash
rm src/mediaqueries.css
```

- [ ] **Step 5: Commit**

```bash
git add index.html src/style.css src/main.jsx
git rm src/mediaqueries.css
git commit -m "Reset global styles, fonts, and HTML for redesign"
```

---

## Task 3: Build `<Section>` wrapper

**Files:**
- Create: `src/components/Section.jsx`

A reusable wrapper that renders a section label and uses `IntersectionObserver` to set `data-visible="true"` once the section enters the viewport. Triggers the CSS fade/slide-up.

- [ ] **Step 1: Create the component**

Create `src/components/Section.jsx`:

```jsx
import { useEffect, useRef, useState } from 'react';

export default function Section({ id, label, children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className="section"
      data-visible={visible || undefined}
    >
      {label && <h2 className="section-label">{label}</h2>}
      {children}
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Section.jsx
git commit -m "Add Section wrapper with fade-on-scroll"
```

---

## Task 4: Build `<Nav>`

**Files:**
- Create: `src/components/Nav.jsx`

Sticky nav with dot-separated links + a theme toggle button. Adds `data-scrolled="true"` once the user scrolls past the top so the border appears.

- [ ] **Step 1: Create the component**

Create `src/components/Nav.jsx`:

```jsx
import { useEffect, useState } from 'react';

const LINKS = [
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'contact', label: 'contact' },
];

export default function Nav({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - 64;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <nav className="nav" data-scrolled={scrolled || undefined}>
      <div className="nav-inner">
        <div className="nav-links">
          {LINKS.map((link, i) => (
            <span key={link.id} style={{ display: 'inline-flex', gap: 14 }}>
              <a onClick={() => scrollTo(link.id)}>{link.label}</a>
              {i < LINKS.length - 1 && <span aria-hidden>·</span>}
            </span>
          ))}
        </div>
        <button
          className="nav-toggle"
          aria-label="Toggle theme"
          onClick={onToggleTheme}
        >
          {theme === 'dark' ? '☀' : '☾'}
        </button>
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Nav.jsx
git commit -m "Add sticky Nav with theme toggle"
```

---

## Task 5: Build `<Landing>`

**Files:**
- Create: `src/components/Landing.jsx`

Full viewport hero with headline + subtitle + scroll cue. Fades in on mount.

- [ ] **Step 1: Create the component**

Create `src/components/Landing.jsx`:

```jsx
import { useEffect, useState } from 'react';

export default function Landing() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <header
      className="landing"
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 600ms ease-out',
      }}
    >
      <h1 className="landing-headline">Hi, I'm Pradyun</h1>
      <p className="landing-sub">CS + Econ @ UW–Madison. Building things.</p>
      <span className="landing-scroll">↓ scroll</span>
    </header>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Landing.jsx
git commit -m "Add Landing hero"
```

---

## Task 6: Build `<About>`

**Files:**
- Create: `src/components/About.jsx`

Section with one paragraph and a comma-separated skills line.

- [ ] **Step 1: Create the component**

Create `src/components/About.jsx`:

```jsx
import Section from './Section';
import { about, skills } from '../data/content';

export default function About() {
  return (
    <Section id="about" label="About">
      <p className="about-body">{about.paragraph}</p>
      <div className="about-skills">
        <span className="about-skills-label">Skills</span>
        {skills.join(', ')}
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/About.jsx
git commit -m "Add About section"
```

---

## Task 7: Build `<Experience>`

**Files:**
- Create: `src/components/Experience.jsx`

Vertical list. Date column on the left, title + org on the right.

- [ ] **Step 1: Create the component**

Create `src/components/Experience.jsx`:

```jsx
import Section from './Section';
import { experience } from '../data/content';

export default function Experience() {
  return (
    <Section id="experience" label="Experience">
      <div className="exp-list">
        {experience.map((item) => (
          <div className="exp-item" key={`${item.org}-${item.date}`}>
            <div className="exp-date">{item.date}</div>
            <div className="exp-body">
              <div className="exp-title">{item.title}</div>
              <div className="exp-org">
                {item.org}
                {item.location ? ` · ${item.location}` : ''}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Experience.jsx
git commit -m "Add Experience section"
```

---

## Task 8: Build `<Projects>`

**Files:**
- Create: `src/components/Projects.jsx`

Stack of project blocks. Title left + date right, description, tech stack (` · `-joined), links with `↗` arrows.

- [ ] **Step 1: Create the component**

Create `src/components/Projects.jsx`:

```jsx
import Section from './Section';
import { projects } from '../data/content';

export default function Projects() {
  return (
    <Section id="projects" label="Projects">
      <div className="proj-list">
        {projects.map((p) => (
          <article className="proj-item" key={p.title}>
            <div className="proj-head">
              <h3 className="proj-title">{p.title}</h3>
              <span className="proj-date">{p.date}</span>
            </div>
            {p.description && <p className="proj-desc">{p.description}</p>}
            <div className="proj-tech">{p.tech.join(' · ')}</div>
            {p.links.length > 0 && (
              <div className="proj-links">
                {p.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Projects.jsx
git commit -m "Add Projects section"
```

---

## Task 9: Build `<Contact>`

**Files:**
- Create: `src/components/Contact.jsx`

Prompt + label/value grid of links.

- [ ] **Step 1: Create the component**

Create `src/components/Contact.jsx`:

```jsx
import Section from './Section';
import { contact } from '../data/content';

export default function Contact() {
  return (
    <Section id="contact" label="Contact">
      <p className="contact-prompt">{contact.prompt}</p>
      <div className="contact-list">
        {contact.links.map((link) => (
          <Row key={link.label} link={link} />
        ))}
      </div>
    </Section>
  );
}

function Row({ link }) {
  const external = link.url.startsWith('http') || link.url.startsWith('/');
  return (
    <>
      <div className="contact-label">{link.label}</div>
      <a
        href={link.url}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {link.value} ↗
      </a>
    </>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Contact.jsx
git commit -m "Add Contact section"
```

---

## Task 10: Build `<Footer>`

**Files:**
- Create: `src/components/Footer.jsx`

Thin centered line with copyright + quick links.

- [ ] **Step 1: Create the component**

Create `src/components/Footer.jsx`:

```jsx
import { contact } from '../data/content';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <span>© {year} Pradyun Bachu</span>
      <span className="footer-links">
        {contact.links.map((link) => {
          const external = link.url.startsWith('http') || link.url.startsWith('/');
          return (
            <a
              key={link.label}
              href={link.url}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
            >
              {link.label.toLowerCase()}
            </a>
          );
        })}
      </span>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Footer.jsx
git commit -m "Add Footer"
```

---

## Task 11: Rewrite `<App>` to compose everything

**Files:**
- Modify: `src/App.jsx` (full rewrite)

Replace the entire 1147-line App.jsx with a thin composition root that owns theme state, hydrates the initial theme from localStorage/`prefers-color-scheme`, and renders the sections in order.

- [ ] **Step 1: Replace `src/App.jsx`**

Replace the entire contents of `src/App.jsx` with:

```jsx
import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Landing from './components/Landing';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light';
  const stored = window.localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <main className="page">
        <Landing />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
```

- [ ] **Step 2: Run the dev server and verify visually**

Run: `npm run dev`
Open http://localhost:5173 and verify:
- Landing fills the viewport. Headline reads "Hi, I'm Pradyun" in monospace, subtitle below it, `↓ scroll` at bottom-left.
- Scrolling down reveals About (with skills line), Experience (vertical list with date column), Projects (stack with title/date/desc/tech/links), Contact (label/value grid), Footer (single centered line).
- Sticky nav at top with `about · experience · projects · contact` links and a theme glyph (☾ or ☀). Clicking links smooth-scrolls.
- Theme toggle inverts colors. Choice persists across reload (check by reloading).
- Sections fade + slide up as they enter the viewport (visible by scrolling slowly).
- No console errors.
- Resize browser to ~400px width — layout collapses cleanly (date column above title in experience, project head stacks vertically).

Stop the dev server when done.

- [ ] **Step 3: Commit**

```bash
git add src/App.jsx
git commit -m "Compose redesigned portfolio in App"
```

---

## Task 12: Production build verification

**Files:** none

Confirm the production build works.

- [ ] **Step 1: Run the production build**

Run: `npm run build`
Expected: build completes with no errors. Output shows assets written to `dist/`.

- [ ] **Step 2: Preview the production build**

Run: `npm run preview`
Open the preview URL printed in the terminal and re-verify the same checks from Task 11 Step 2. Stop the preview server when done.

- [ ] **Step 3: Done**

No commit needed — `dist/` is gitignored. Plan complete.
