# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog/website for Deepak RJ, built with [Quarto](https://quarto.org/) and hosted on GitHub Pages. The site focuses on medical AI writing for clinicians.

## Build & Preview Commands

```bash
quarto preview          # Local dev server with hot reload
quarto render           # Full site build (output goes to docs/)
quarto render index.qmd # Render a single page
```

## Architecture

- **Quarto website project** configured in `_quarto.yml` with output to `docs/` for GitHub Pages deployment
- **Pages**: `index.qmd` (landing page), `blog.qmd` (blog listing), `about.qmd` (about page)
- **Blog posts**: Each post lives in `posts/<post-name>/index.qmd`. Shared post metadata (freeze, title-block-banner) is in `posts/_metadata.yml`
- **Custom listing template**: `simple-posts.ejs` — an EJS template used for the "Most Recent" section on the landing page
- **Theming**: `custom.scss` provides all custom styles on top of the `cosmo` Bootstrap theme. Font is Lato.
- **Analytics**: `counterdev.html` is included after body via `_quarto.yml`
- **`_site/`**: Old build output (legacy). **`docs/`** is the current output directory used for GitHub Pages.

## Key Conventions

- Posts use `freeze: true` (set in `posts/_metadata.yml`) — computational output is cached, not re-executed on render
- The landing page uses a `page-layout: full` with a custom grid layout showing projects and writing
- External links open in new windows with icons (`link-external-newwindow: true`)
- The `.gitignore` excludes `.quarto/` and `*.quarto_ipynb` but the `docs/` output is tracked for GitHub Pages deployment
