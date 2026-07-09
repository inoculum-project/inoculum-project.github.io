# INOCULUM — Project Website

> Boosting the Immunity of Storage Systems Against Ransomware  
> NORTE2030-FEDER-00868400 · INESC TEC · University of Minho

## Tech Stack

- **Framework**: [Hugo](https://gohugo.io/) (extended, v0.147+)
- **Hosting**: GitHub Pages via GitHub Actions
- **Theme**: Custom (no external theme dependency)
- **Fonts**: Cormorant Garamond + Outfit + JetBrains Mono (Google Fonts)

## Local Development

### Prerequisites

Install Hugo extended (v0.147+):

```bash
# macOS
brew install hugo

# Linux (Debian/Ubuntu) — or download from GitHub releases
sudo snap install hugo

# Windows
choco install hugo-extended
```

### Run locally

```bash
git clone https://github.com/YOUR-ORG/inoculum.git
cd inoculum
hugo server -D
# Open http://localhost:1313
```

## Project Structure

```
inoculum-site/
├── .github/workflows/hugo.yml   # Auto-deploy to GitHub Pages on push to main
├── assets/
│   ├── css/main.css             # All styles — edit here for design changes
│   └── js/main.js               # Nav scroll, mobile menu, scroll-reveal
├── content/
│   ├── _index.md                # Homepage
│   ├── about.md                 # About page
│   ├── team.md                  # Team page
│   ├── workplan.md              # Work plan page
│   ├── outputs.md               # Publications page
│   └── news/                   # News posts (add .md files here)
│       ├── _index.md
│       └── YYYY-MM-title.md
├── data/
│   ├── team.yaml                # ← Add/edit team members here
│   ├── publications.yaml        # ← Add publications here
│   ├── tasks.yaml               # ← Task descriptions
│   └── milestones.yaml          # ← Milestone descriptions
├── layouts/
│   ├── _default/                # Base, single, list templates
│   ├── page/                    # Custom layouts: about, team, workplan, outputs
│   └── partials/                # nav, footer, funding-bar
├── static/
│   └── favicon.svg
└── hugo.toml                    # Site config
```

## How to Update Content

### Add a news post

Create a new file in `content/news/`:

```bash
hugo new content/news/2026-01-my-news-post.md
```

Or manually create `content/news/YYYY-MM-title.md`:

```markdown
---
title: "Your Post Title"
date: 2026-01-15
summary: "A short summary shown on the news listing."
tags: ["publication", "milestone"]
---

Full content here in Markdown.
```

### Add a publication

Edit `data/publications.yaml`, add a new entry:

```yaml
- title: "Your Paper Title"
  authors: "Author A, Author B, and Author C"
  venue: "Conference Name"
  year: 2026
  doi: "10.xxxx/xxxxx"
  pdf: "https://link-to-pdf.pdf"
  type: "conference"
  tags: ["ransomware", "storage"]
```

### Add / update a team member

Edit `data/team.yaml`.

### Change site metadata

Edit `hugo.toml` → `[params]` section.

## Deployment

The site auto-deploys to GitHub Pages on every push to `main` via the included
GitHub Actions workflow (`.github/workflows/hugo.yml`).

**One-time setup:**
1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set **Source** to **GitHub Actions**
4. Push to `main` — the workflow handles the rest

The site will be available at `https://YOUR-ORG.github.io/` (or a custom domain
configured in Settings → Pages).

## Design System

The Fear Inoculum–inspired palette lives in CSS variables at the top of
`assets/css/main.css`:

| Variable        | Value       | Usage                      |
|-----------------|-------------|----------------------------|
| `--amber`       | `#c8922a`   | Primary accent, headings   |
| `--teal`        | `#4a8f87`   | Secondary accent, labels   |
| `--parchment`   | `#d4c9a8`   | Hover states, highlights   |
| `--deep`        | `#0d0f14`   | Alternate section bg       |
| `--black`       | `#08090c`   | Main background            |

Fonts: **Cormorant Garamond** (display/headings) · **Outfit** (body) · **JetBrains Mono** (labels/code)

## License

Content: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)  
Code: MIT
