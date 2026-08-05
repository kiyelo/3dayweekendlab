# 3 Day Weekend Lab

Responsive bilingual website for 3 Day Weekend Lab and its first product, Kkiu.

## Pages

- `/` and `/en/`
- Kkiu policies, terms, and membership withdrawal pages are hosted at
  `https://kkiu.3dayweekendlab.com/`.

## Local development

```bash
pnpm install
pnpm dev
```

## Production build

```bash
pnpm build
```

The static output is written to `out/`. Pushes to `main` or `master` deploy
that directory to GitHub Pages through `.github/workflows/deploy-pages.yml`.
