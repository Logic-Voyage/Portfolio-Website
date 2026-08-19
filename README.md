# Sumedh S Khobragade — Portfolio

A single-page neo-brutalist portfolio site built with React and Tailwind CSS. Raw borders, hard offset shadows, oversized type, no gradients, no soft corners.

**Live site:** [add your deployed link here]

![status](https://img.shields.io/badge/status-shipped-FF3EA5?style=flat-square&labelColor=000000)
![stack](https://img.shields.io/badge/stack-React%20%2B%20Tailwind-FFE500?style=flat-square&labelColor=000000)

---

## About

This is the personal portfolio of **Sumedh S Khobragade**, a B.Tech Electronics & Telecommunication Engineering undergraduate at YCCE Nagpur, and an Android & IoT developer. The site covers his background, projects, skills, experience, and certifications in a single scrollable page.

## Design

Built in a **neo-brutalist** style:

- Thick black borders (3–4px) on every card, button, and divider
- Hard offset drop shadows instead of soft blurred ones
- Palette: cream background, black borders/text, with electric yellow, hot pink, and lime green accents
- Bold grotesk and monospace type — Archivo Black, Space Grotesk, JetBrains Mono
- Sharp corners throughout — no border-radius, no gradients
- Slight rotation on project cards for a deliberate unpolished feel
- "Press down" hover effect on buttons
- CSS-only dot-grid background texture

## Sections

1. **Hero** — name, tagline, resume/projects CTAs, social links
2. **About** — bio and stat highlights
3. **Projects** — AuraStand, Smart Water Quality & Overflow Detection System, Emotion Detection System
4. **Skills** — grouped by languages, mobile, IoT/embedded, and tools
5. **Experience** — VNIT Nagpur 5G & IoT Summer School internship
6. **Certifications** — NPTEL, IIT Bombay Techfest, MATLAB, NIT Raipur, VNIT Nagpur
7. **Contact** — email, GitHub, LinkedIn

## Tech stack

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) components where useful
- [lucide-react](https://lucide.dev/) icons
- Google Fonts — Archivo Black, Space Grotesk, JetBrains Mono

No backend or database — fully static.

## Running locally

```bash
# clone the repo
git clone https://github.com/Logic-Voyage/<repo-name>.git
cd <repo-name>

# install dependencies
npm install

# start the dev server
npm run dev
```

## Project structure

```
├── portfolio.jsx     # main single-file page component
├── resume.pdf         # downloadable resume (add your own)
└── README.md
```

## Deployment

The site is a static build and can be deployed on any static host — Vercel, Netlify, or GitHub Pages.

```bash
npm run build
```

## Contact

- **GitHub:** [github.com/Logic-Voyage](https://github.com/Logic-Voyage)
- **LinkedIn:** [linkedin.com/in/sumedh-khobragade](https://linkedin.com/in/sumedh-khobragade)

---

Built by Sumedh S Khobragade.
