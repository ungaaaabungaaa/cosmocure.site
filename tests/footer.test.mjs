import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (file) => readFileSync(path.join(root, file), "utf8");

const requiredFiles = [
  "components/SiteFooter.tsx",
  "app/page.tsx",
  "app/services/page.tsx",
  "app/contact/page.tsx",
  "app/privacy-policy/page.tsx",
];

for (const file of requiredFiles) {
  assert.ok(existsSync(path.join(root, file)), `${file} should exist`);
}

const layout = read("app/layout.tsx");
assert.match(
  layout,
  /import\s+\{\s*SiteFooter\s*\}\s+from\s+["']@\/components\/SiteFooter["']/,
  "Root layout should import SiteFooter"
);
assert.match(
  layout,
  /<SiteFooter\s*\/>/,
  "Root layout should render SiteFooter for every page"
);

const footer = read("components/SiteFooter.tsx");
const expectedLabels = [
  "Cosmocure",
  "Home",
  "Services",
  "Contact",
  "Privacy Policy",
  "Instagram",
  "Social Media",
];
const expectedHrefs = [
  'href="/"',
  'href="/services"',
  'href="/contact"',
  'href="/privacy-policy"',
];

for (const label of expectedLabels) {
  assert.match(footer, new RegExp(label), `Footer should include ${label}`);
}

for (const href of expectedHrefs) {
  assert.ok(footer.includes(href), `Footer should link ${href}`);
}

assert.doesNotMatch(footer, /Blog|href=["']\/blog["']/, "Footer should not include a blog link");
assert.match(
  footer,
  /rounded-t-\[\d+px\]/,
  "Footer should keep the rounded top edge from the screenshot"
);
assert.match(
  footer,
  /Cosmetic care\./,
  "Footer should include the two-line brand descriptor"
);

const home = read("app/page.tsx");
assert.match(home, /Cosmocure Aesthetic Clinic/, "Home page should not be empty");
assert.match(home, /Calm cosmetic care/, "Home page should include a visible hero heading");
