# 3 Day Weekend Lab

Responsive bilingual website for 3 Day Weekend Lab and its first product, Kkiu.

## Pages

- `/` and `/en/`
- `/privacy/` and `/en/privacy/`
- `/terms/` and `/en/terms/`
- `/delete-account/` and `/en/delete-account/`

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

Before publishing the policy pages for Google Play or OAuth verification,
replace the clearly marked draft notices with the app's confirmed data scopes,
storage, retention, third-party service, operator, and support details.

The Supabase migration used by the account deletion page is tracked in
`supabase/migrations/`. The production project must allow both
`https://www.3dayweekendlab.com/delete-account/` and
`https://www.3dayweekendlab.com/en/delete-account/` as Auth redirect URLs.
