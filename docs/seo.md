# SEO configuration

Canonical origin: https://www.cosmocure.clinic

- Each public page has its own title, description, canonical URL and social metadata.
- A 1200 × 630 PNG Open Graph image uses the brand and campaign portrait.
- The root layout includes MedicalClinic and WebSite JSON-LD using existing public clinic contact details. Sunday opens at 09:00 and closes at 19:00; Monday–Saturday closes at 22:00.
- Each page has one H1. The footer links to all public pages and exposes the address and contact details.
- The sitemap and robots file use the connected clinic domain.
- Images have descriptive alt text, stable frames and local sources. Non-hero images load lazily.

## Checks

Run `pnpm build`, `pnpm test:footer`, and `pnpm lint`. The test reads the built HTML and checks headings, titles, canonical URLs, social metadata, clinic hours, footer links, WebP image sources, sitemap and robots.

## After publication

Check the live canonical URLs and social card image, then use Google Search Console to submit https://www.cosmocure.clinic/sitemap.xml and inspect the public pages. Check the clinic's structured data in Google's Rich Results Test. Match Sunday hours in Google Business Profile. These account-level tasks require access and cannot be completed through website code alone.

Google documentation: https://developers.google.com/search/docs/appearance/structured-data/local-business

## Image delivery and cost

`images.unoptimized` is enabled globally. Page images use direct `/images/*.webp` and artwork `.webp` URLs, with no `/_next/image` endpoint. Photos are compressed before deployment; artwork retains alpha transparency. Next.js still supplies stable image sizing and lazy loading. Icons and the static social-sharing card remain PNG for compatibility. No Vercel image transformation is requested.

## Local verification on 10 October 2026

- Production build, TypeScript compilation, ESLint and built-page tests passed.
- All four pages have one H1, correct canonical metadata and public contact links.
- Ten homepage galleries have twenty distinct image sources. All 22 rendered images, including splash artwork, loaded successfully in the browser.
- Browser requests used direct WebP paths, with no `/_next/image` requests or console errors observed.
- The splash completed and released the page, and did not repeat on reload in the same session.
- Under reduced motion, gallery slide indexes stayed unchanged over an eight-second check.
- Desktop and 390 px mobile checks showed no horizontal overflow. Sunday hours were present on the mobile contact page.

The website changes were approved and pushed on 11 October 2026. Vercel reported a successful deployment. Google Search Console and Google Business Profile account submissions remain separate account-level tasks.
