import { ContactSection } from "@/components/ContactSection";
import { GiftCardSection } from "@/components/GiftCardSection";
import { FaqSection } from "@/components/FaqSection";
import { ServicesSection } from "@/components/ServicesSection";

export default function Home() {
  return (
    <main className="text-muted">
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 font-body text-sm uppercase text-caramel">
            Cosmocure Aesthetic Clinic
          </p>
          <h1 className="max-w-3xl font-display text-5xl font-bold leading-tight text-espresso sm:text-7xl">
            Calm cosmetic care with polished, natural results.
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-light leading-8">
            A focused cosmetic salon experience for beauty treatments,
            consultations, and everyday care.
          </p>
        </div>
      </section>
      <ServicesSection />
      <GiftCardSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
