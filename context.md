# Project Context

## Snapshot

This repository is the Complia Regulatory Services website: a curated Next.js rebuild of the legacy WordPress site preserved in `public_html/`.

The active application lives at the repository root and uses the Next.js App Router. The legacy WordPress tree is retained only as a migration/reference archive and should normally be left untouched.

## Stack And Commands

- Framework: Next.js 16.3.4, React 19.2.8, TypeScript 5.9.
- Styling: one global stylesheet at `app/globals.css`.
- Icons: `lucide-react`.
- Static export: `next.config.ts` sets `output: "export"`, `images.unoptimized: true`, and `trailingSlash: true`.
- Local development: `npm run dev`, then open `http://localhost:3000`.
- Validation: `npm run lint`, `npm run typecheck`, `npm run build`.
- Static output: `out/`.
- Static preview: `npm start` serves `out/`.

## Important Files

- `lib/site-data.ts`: central source for services, market groups, industry groups, contact details, and legal-page content.
- `app/layout.tsx`: global metadata, organization JSON-LD, header/footer shell.
- `app/page.tsx`: homepage with hero, trust strip, about preview, services, process, markets, industries, accreditation, and CTA.
- `app/services/page.tsx`: service index.
- `app/services/[slug]/page.tsx`: generated service detail pages from `services`.
- `app/about/page.tsx`, `app/accreditation/page.tsx`, `app/markets/page.tsx`, `app/industries/page.tsx`, `app/contact/page.tsx`: main static pages.
- `app/legal/[slug]/page.tsx`: generated legal pages from `legalPages`.
- `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`, `app/not-found.tsx`: static metadata/support routes.
- `components/header.tsx`: client component for primary navigation and mobile menu.
- `components/inquiry-form.tsx`: client component that opens a WhatsApp enquiry URL; form data is not stored by the static site.
- `components/page-hero.tsx`, `components/section-heading.tsx`, `components/service-card.tsx`, `components/cta-band.tsx`, `components/footer.tsx`: shared presentational components.
- `theme.md`: current logo/header/footer theme notes.
- `CONTENT_MIGRATION.md`: migration authority, exclusions, and production checklist notes.

## Routes

- `/`
- `/about`
- `/services`
- `/services/saso-saber`
- `/services/pcoc-scoc`
- `/services/energy-efficiency`
- `/services/iecee-recognition`
- `/markets`
- `/industries`
- `/accreditation`
- `/contact`
- `/legal/privacy-policy`
- `/legal/terms-and-conditions`
- `/legal/regulatory-disclaimer`

## Content Model

`lib/site-data.ts` defines:

- `Service`: `slug`, `index`, `kicker`, `title`, `shortTitle`, `summary`, `intro`, `image`, `imageAlt`, `bestFor`, `facts`, `steps`, `sections`, and `faq`.
- `services`: four current service entries: SASO / SABER, PCoC & SCoC, SASO energy efficiency rating, and SASO IECEE recognition.
- `marketGroups`: Africa, Middle East, and Eurasia destination groups.
- `industryGroups`: seven broad industry/product groups.
- `contact`: New Delhi phone, WhatsApp number, feedback email, address, and hours.
- `legalPages`: privacy policy, terms and conditions, and regulatory disclaimer.

When adding content-driven pages, prefer extending `lib/site-data.ts` and reusing the existing generated page patterns.

## Claims That Must Stay Accurate

- Complia Regulatory Services Private Limited is presented as NABCB-accredited to ISO/IEC 17065:2012.
- Product Certification Body certificate: PC 050.
- Initial accreditation date: 18 December 2025.
- Valid through: 17 December 2028.
- Published IAF scope: 18 - Machinery & Equipment.
- Certification scheme shown on the site: CQS-01 / KSA SALEEM Type 1a.
- SASO-notified Certification Body recognition is in progress. Do not describe it as complete unless verified and intentionally updated.
- Regulatory requirements, platform rules, product lists, timelines, validity periods, and legal text require review before production or when official rules change.

## Legacy WordPress Archive

- `public_html/` is about 661 MB and contains the old WordPress installation, theme/plugin files, cache output, uploads, and legacy content.
- TypeScript and ESLint exclude `public_html/`.
- Keep it untouched unless the user explicitly asks for migration archaeology or legacy cleanup.
- The migration deliberately excluded compromised blog/cache content, hidden outbound links, Gerow theme demo material, unsupported experience/accreditation claims, and stale country-page phone numbers.

## Assets

Important active assets live in `public/assets/`:

- Logos: `complia-logo-white-red.png`, `complia-logo.png`, `nabcb.png`.
- Main imagery: `complia-hero.webp`, `compliance-partner.webp`, `who-we-are.webp`.
- Service imagery: `saso-logo.webp`, `scoc-pcoc.webp`, `energy-rating.webp`, `iecee.webp`.
- Documents: `documents/certification-agreement.pdf`, `documents/complaints-and-appeals.pdf`.
- Font: `fonts/plus-jakarta-sans.woff2`.

## Design System

- Font: Plus Jakarta Sans via local `@font-face`.
- Main palette: dark navy surfaces (`--navy-950`, `--navy-900`), coral CTA/accent (`--coral-500`), blue primary (`--blue-700`), paper/ivory backgrounds, slate body text.
- Header and footer use dark navy with the white/red Complia logo variant.
- Buttons, text links, cards, page heroes, CTA bands, forms, and route-specific layouts are styled in `app/globals.css`.
- Responsive breakpoints are at 1120px, 900px, and 640px.
- Existing visual language is premium, structured, evidence-led, and corporate. Keep layouts crisp, spacious, and practical rather than playful or marketing-heavy.

## Implementation Notes

- Default to server components. Use `"use client"` only when state, browser APIs, or effects are required.
- Use `next/image` and `next/link` for site assets and navigation.
- Use `lucide-react` icons consistently with the existing components.
- Keep metadata and canonical URLs updated when adding routes.
- Update `app/sitemap.ts` when adding generated or static pages.
- Preserve static-export compatibility; avoid runtime server-only features unless the deployment plan changes.
- The contact form currently opens WhatsApp with an encoded message to `contact.whatsapp`; it does not persist or email submissions.
- Read this file first on future turns, then open only the specific implementation files needed for the task.
