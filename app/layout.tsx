import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Playfair_Display } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
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

export const metadata: Metadata = {
  title: "Cosmocure",
  description: "Cosmocure cosmetic salon.",
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
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
