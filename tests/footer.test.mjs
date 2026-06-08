import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (file) => readFileSync(path.join(root, file), "utf8");

const requiredFiles = [
  "lib/contact.ts",
  "components/SiteFooter.tsx",
  "components/ContactSection.tsx",
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
  /suppressHydrationWarning/,
  "Root html should suppress extension-injected attribute hydration warnings"
);
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
const contactInfo = read("lib/contact.ts");
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
  'href={clinicContact.emailHref}',
  'href={clinicContact.phoneHref}',
  'href={clinicContact.mapsHref}',
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
assert.match(footer, /clinicContact/, "Footer should render shared clinic contact details");

const home = read("app/page.tsx");
assert.match(home, /Cosmocure Aesthetic Clinic/, "Home page should not be empty");
assert.match(home, /Calm cosmetic care/, "Home page should include a visible hero heading");
assert.match(
  home,
  /import\s+\{\s*ContactSection\s*\}\s+from\s+["']@\/components\/ContactSection["']/,
  "Home page should import ContactSection"
);
assert.match(home, /<ContactSection\s*\/>/, "Home page should render ContactSection");

const contactSection = read("components/ContactSection.tsx");
assert.doesNotMatch(
  contactSection,
  /pointer-events-none absolute|rounded-full border border-espresso\/45/,
  "Contact section should not include decorative curve line elements"
);
assert.match(
  contactSection,
  /clinicContact/,
  "Contact section should render shared clinic contact details"
);
for (const icon of ["Mail", "Phone", "MapPin"]) {
  assert.match(contactSection, new RegExp(icon), `Contact section should use ${icon}`);
}

for (const label of ["Contact us", "Get In Touch", "Email", "Phone", "Office"]) {
  assert.match(contactSection, new RegExp(label), `Contact section should include ${label}`);
}

const packageJson = read("package.json");
assert.match(packageJson, /"lucide-react"/, "Project should depend on lucide-react");

for (const detail of [
  "contact@cosmocure.site",
  "8794201743",
  "Ground floor, Yomcha building Medical line",
  "Behind General Hospital Aalo",
  "West siang, Arunachal Pradesh",
  "https://www.google.com/maps/search/?api=1&query=",
  "tel:+918794201743",
  "mailto:contact@cosmocure.site",
]) {
  assert.match(contactInfo, new RegExp(detail.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), `Contact info should include ${detail}`);
}
