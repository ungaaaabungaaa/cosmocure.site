import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";
import { ContactSection } from "@/components/ContactSection";
import { FaqSection } from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Contact",
  description: `Book an appointment or reach ${siteConfig.name}.`,
};

export default function ContactPage() {
  return (
    <>
    <ContactSection />
    <FaqSection />
    </>
  );
}
