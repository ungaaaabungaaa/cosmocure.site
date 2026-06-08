import { ContactSection } from "@/components/ContactSection";
import { GiftCardSection } from "@/components/GiftCardSection";
import { FaqSection } from "@/components/FaqSection";
import { Hero } from "@/components/Hero";
import { ServiceAboutSection } from "@/components/ServiceAboutSection";
import { SiteNavBar } from "@/components/SiteNavBar";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main className="text-muted">
      <SiteNavBar />
      <Hero></Hero>
      <ServiceAboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <GiftCardSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
