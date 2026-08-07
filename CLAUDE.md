# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal site for Deepak RJ, built with [Astro](https://astro.build/) and hosted on GitHub Pages at deepakrj.com. Deliberately minimal: a landing page with a short bio, and a Writing page listing posts in two columns.

## Build & Preview Commands

All commands run from `astro-site/`:

```bash
npm run dev      # Local dev server with hot reload
npm run build    # Full build — output goes to ../docs/ (tracked, served by GitHub Pages)
npm run preview  # Serve the built output
```

## Architecture

- **Astro project** lives in `astro-site/`; `astro.config.mjs` sets `outDir: '../docs'` and `site: 'https://deepakrj.com'`
- **Pages**: `src/pages/index.astro` (landing), `src/pages/writing.astro` (post index), `src/pages/blog/[...slug].astro` (post permalinks at `/blog/<slug>/`)
- **Layouts**: `BaseLayout.astro` (nav + footer; pass `bare` to drop the nav, as the landing page does) and `BlogPost.astro`
- **Posts**: `src/content/blog/*.mdx`, schema in `src/content.config.ts`
- **Styles**: a single stylesheet, `src/styles/global.css`, imported globally by `BaseLayout`
- **Analytics**: `src/components/ViewTracker.astro` (Umami)
- **Legacy**: the root-level Quarto site (`_quarto.yml`, `*.qmd`, `posts/`, `custom.scss`, `_site/`) is dead and no longer builds anything

## Key Conventions

- Every post declares `section: "Medical AI"` or `section: "MindTech"` in its frontmatter — this picks its column on the Writing page. Posts are listed newest-first within each column.
- Post URLs stay at `/blog/<slug>/`. `/blog` and `/about` are meta-refresh redirects declared in `astro.config.mjs`.
- `docs/` is committed — rebuild and commit it whenever site source changes, or the live site won't update.
