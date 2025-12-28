# Repository Guidelines

## Project Structure & Module Organization

- `src/pages/` contains Astro pages (entry point is `src/pages/index.astro`).
- `src/styles/` holds global styles (`global.css`) and Tailwind directives.
- `public/assets/` stores static images (logo, portraits, hero art).
- `.github/workflows/` includes the GitHub Pages deploy workflow.
- Build output goes to `dist/` (generated; do not edit).

## Build, Test, and Development Commands

- `npm install` installs dependencies.
- `npm run dev` starts the local Astro dev server at `http://localhost:4321/`.
- `npm run build` builds the static site into `dist/`.
- `npm run preview` serves the production build locally.

## Coding Style & Naming Conventions

- Indentation: 2 spaces in HTML/Astro, CSS, and JS blocks.
- Keep content in French; preserve accents and punctuation.
- Use semantic, descriptive section ids (e.g., `#equipe`, `#services`).
- Assets: use lowercase filenames and store in `public/assets/`.

## Testing Guidelines

- No automated tests are configured.
- Manual checks: run `npm run dev` and `npm run build` before pushing.
- If tests are added later, document the framework and naming rules here.

## Commit & Pull Request Guidelines

- No commit message conventions are established yet (empty history). Use clear, short messages like `Add hero image` or `Refine team section`.
- PRs should include: a concise summary, screenshots of the landing page, and any deployment notes.

## Configuration & Deployment Notes

- GitHub Pages deployment is configured for `https://xjodoin.github.io/unpetitcoeuralafois/`.
- `astro.config.mjs` sets `site` and `base` for project Pages.
- Do not commit `dist/`, `node_modules/`, or `.env` files.
