import { pageMetadata, siteConfig } from "@/lib/site";
import { ContactSection } from "@/components/ContactSection";
import { GiftCardSection } from "@/components/GiftCardSection";
import { FaqSection } from "@/components/FaqSection";
import { Hero } from "@/components/Hero";
import { ServiceAboutSection } from "@/components/ServiceAboutSection";
import { ServicesSection } from "@/components/ServicesSection";

export const metadata = pageMetadata("Skin & Aesthetic Clinic in Aalo", siteConfig.description, "/");

export default function Home() {
  return (
    <main className="text-muted">
      <Hero></Hero>
      <ServiceAboutSection />
      <ServicesSection />
      <GiftCardSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
