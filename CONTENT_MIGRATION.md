# Content migration notes

## Authority used

The July 2026 accreditation page was treated as the current source for status:

- NABCB accreditation to ISO/IEC 17065:2012
- Product Certification Body certificate PC 050
- Initial accreditation on 18 December 2025
- Valid through 17 December 2028
- Published IAF scope 18 — Machinery & Equipment
- SASO-notified Certification Body recognition remains in progress

Older homepage and service-page language saying that ISO/IEC 17065 accreditation was still being sought was not carried forward.

## Deliberately excluded

- Casino, adult, multilingual SEO, and duplicate posts from the compromised blog/cache
- Hidden outbound links injected into the cached homepage
- Gerow theme demo testimonials, names, partner logos, and WordPress FAQs
- Unsupported claims about decades of experience, multiple accredited offices, or completed SASO notification
- Stale phone numbers on individual country pages

## Content that needs ongoing review

- Accreditation certificate, dates, and published scope
- SASO-notification status
- Product lists, programme rules, indicative timelines, and certificate validity
- Country-programme availability
- Legal text before a production launch

## Deployment

The legacy site is preserved in `public_html/`. The Next.js application is configured as a static export and produces `out/`. Keep a verified backup of WordPress and its database before replacing any live document root.
