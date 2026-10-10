import type { Metadata } from "next";

export const siteConfig = {
  name: "Cosmocure",
  description: "Skin, hair and aesthetic care in Aalo, Arunachal Pradesh. Explore medi facials, skin treatments and consultations at Cosmocure. Book your visit today.",
  url: "https://www.cosmocure.clinic",
  ogImage: "/social-card.png",
};

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title: { absolute: `${title} | Cosmocure` },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website", locale: "en_IN", siteName: siteConfig.name,
      url: `${siteConfig.url}${path}`, title: `${title} | Cosmocure`, description,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Cosmocure — skin, hair and aesthetic care in Aalo" }],
    },
    twitter: { card: "summary_large_image", title: `${title} | Cosmocure`, description, images: [siteConfig.ogImage] },
  };
}
