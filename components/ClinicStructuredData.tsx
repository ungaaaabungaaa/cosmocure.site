import { clinicContact, clinicHours } from "@/lib/contact";
import { siteConfig } from "@/lib/site";

export function ClinicStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": `${siteConfig.url}/#clinic`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        telephone: clinicContact.phoneHref.replace("tel:", ""),
        email: clinicContact.email,
        logo: `${siteConfig.url}/android-chrome-512x512.png`,
        image: `${siteConfig.url}${siteConfig.ogImage}`,
        hasMap: clinicContact.mapsHref,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Ground floor, Yomcha building, Medical line, behind General Hospital",
          addressLocality: "Aalo, West Siang",
          addressRegion: "Arunachal Pradesh",
          addressCountry: "IN",
        },
        openingHoursSpecification: clinicHours.specifications,
      },
      { "@type": "WebSite", "@id": `${siteConfig.url}/#website`, name: siteConfig.name, url: siteConfig.url, inLanguage: "en-IN", publisher: { "@id": `${siteConfig.url}/#clinic` } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
