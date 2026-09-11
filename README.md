# Complia premium website

A curated Next.js rebuild of the legacy WordPress site in `public_html/`. The new app lives at the repository root so the WordPress archive remains untouched during migration.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validate and export

```bash
npm run lint
npm run typecheck
npm run build
```

The production-ready static site is exported to `out/`. Preview it with `npm start`.

## Content and behaviour

- Company, service, accreditation, market, industry, contact, and legal content was curated from the rendered WordPress cache.
- The compromised WordPress blog and theme-demo testimonials/team content were intentionally excluded.
- The contact form hands the completed enquiry to WhatsApp. It does not claim to save or email data from the static site.
- Regulatory claims should be reviewed whenever accreditation or notification status changes.

See [CONTENT_MIGRATION.md](./CONTENT_MIGRATION.md) for source notes and the production checklist.
