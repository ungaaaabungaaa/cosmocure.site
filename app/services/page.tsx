import type { Metadata } from "next";

import { ServicesSection } from "@/components/ServicesSection";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: `${siteConfig.name} services and treatment menu.`,
};

export default function ServicesPage() {
  return (
    <main className="text-muted">
      <ServicesSection />
    </main>
  );
}
