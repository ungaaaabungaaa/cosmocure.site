import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

// Test the actual production HTML. Run pnpm build first.
const origin = "https://www.cosmocure.clinic";
for (const [path, file] of [["/", "index"], ["/services", "services"], ["/contact", "contact"], ["/privacy-policy", "privacy-policy"]]) {
  const html = readFileSync(`.next/server/app/${file}.html`, "utf8");
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `${path}: one main heading`);
  assert.match(html, /<title>[^<]*Cosmocure<\/title>/, `${path}: branded title`);
  assert.ok(html.includes(`rel="canonical" href="${origin}${path === "/" ? "" : path}"`) || html.includes(`rel="canonical" href="${origin}${path}"`), `${path}: self canonical`);
  assert.match(html, /name="description" content="[^"]{60,}/, `${path}: useful description`);
  assert.ok(html.includes(`property="og:url" content="${origin}${path === "/" ? "" : path}"`) || html.includes(`property="og:url" content="${origin}${path}"`), `${path}: social URL`);
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
  const footer = html.match(/<footer[\s\S]*?<\/footer>/)?.[0];
  assert.ok(footer, `${path}: footer`);
  for (const href of ["/services", "/contact", "/privacy-policy", "tel:+918794201743", "mailto:cosmocure7@gmail.com"]) assert.ok(footer.includes(`href="${href}"`), `${path}: footer link ${href}`);
  const json = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
  const clinic = json["@graph"].find(item => item["@type"] === "MedicalClinic");
  assert.equal(clinic.url, origin);
  const sunday = clinic.openingHoursSpecification.find(day => day.dayOfWeek === "Sunday");
  assert.equal(sunday.opens, "09:00");
  assert.equal(sunday.closes, "19:00");
  if (path !== "/privacy-policy") assert.match(html, /Sunday: 9 AM - 7 PM/);
  assert.doesNotMatch(html, /Sunday by prior appointment|A simple hero space ready/);
  assert.doesNotMatch(html, /<(?:video|audio)\b/);
  assert.doesNotMatch(html, /\/_next\/image\?/, `${path}: no hosted image optimizer`);
  for (const match of html.matchAll(/<img[^>]*src="([^"]+)"/g)) {
    const src = match[1];
    assert.match(src, /\.webp$/, `${path}: WebP photo ${src}`);
    assert.ok(existsSync(`public${src}`), `${path}: image exists ${src}`);
  }
  const sets = [...html.matchAll(/data-image-sources="([^"]+)"/g)].map(match => match[1].split(","));
  for (const set of sets) assert.ok(set.length >= 2, `${path}: each section has at least two images`);
  const sources = sets.flat();
  assert.equal(new Set(sources).size, sources.length, `${path}: each block has its own images`);
  console.log(`PASS ${path}: heading, metadata, footer, clinic hours and unique WebP image sets`);
}
const sitemap = readFileSync('.next/server/app/sitemap.xml.body', 'utf8');
for (const path of ["", "/services", "/contact", "/privacy-policy"]) assert.ok(sitemap.includes(`<loc>${origin}${path}</loc>`));
assert.doesNotMatch(sitemap, /cosmocure\.site/);
const robots = readFileSync('.next/server/app/robots.txt.body', 'utf8');
assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
console.log('PASS sitemap and robots use the connected clinic domain');

const og = readFileSync('public/social-card.png');
assert.equal(og.subarray(1, 4).toString(), 'PNG');
assert.equal(og.readUInt32BE(16), 1200);
assert.equal(og.readUInt32BE(20), 630);
console.log('PASS social image is a 1200 x 630 PNG');
