import { MobileQuickActions } from "@/components/MobileQuickActions";
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost, Playfair_Display } from "next/font/google";
import { ClinicStructuredData } from "@/components/ClinicStructuredData";
import { SiteNavBar } from "@/components/SiteNavBar";
import { SiteMotion } from "@/components/SiteMotion";
import { SiteFooter } from "@/components/SiteFooter";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-display",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["italic"],
  variable: "--font-accent",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-body",
});

// Declare the light-only design before styles load to prevent automatic darkening.
export const viewport: Viewport = {
  colorScheme: "only light",
  themeColor: "#f5f0ea",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Cosmocure | Skin & Aesthetic Clinic in Aalo",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: ["/favicon.ico"],
  },
  keywords: [
    "Cosmocure",
    "cosmetic salon",
    "aesthetic clinic",
    "nail salon",
    "facial treatments",
    "skin treatments",
    "Arunachal Pradesh",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Cosmocure cosmetic salon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${cormorant.variable} ${jost.variable} h-full`}
    >
      <body className="flex min-h-full flex-col font-body text-muted">
        <ClinicStructuredData />
        <SiteMotion />
        <div id="site-content" className="flex min-h-screen flex-col">
        <SiteNavBar />
        <div className="flex-1">{children}</div>
        <SiteFooter />
        <MobileQuickActions />
        </div>
      </body>
    </html>
  );
}
