import type { Metadata } from "next";

import { ServicesSection } from "@/components/ServicesSection";
import { siteConfig } from "@/lib/site";
import { ServiceAboutSection } from "@/components/ServiceAboutSection";
import { ContactSection } from "@/components/ContactSection";
import { FaqSection } from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Services",
  description: `${siteConfig.name} services and treatment menu.`,
};

export default function ServicesPage() {
  return (
    <main className="text-muted">
       <ServiceAboutSection />
      <ServicesSection />
      <ContactSection />
      <FaqSection />  
    </main>
  );
}
