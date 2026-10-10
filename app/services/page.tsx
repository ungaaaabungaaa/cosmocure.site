
import { CelestialAccent } from "@/components/CelestialAccent";
import { ServicesSection } from "@/components/ServicesSection";
import { pageMetadata } from "@/lib/site";
import { ServiceAboutSection } from "@/components/ServiceAboutSection";
import { ContactSection } from "@/components/ContactSection";
import { FaqSection } from "@/components/FaqSection";

export const metadata = pageMetadata('Skin, Hair & Facial Treatments in Aalo', 'Explore medi facials, advanced skin care, pigmentation, hair treatments and consultations at Cosmocure in Aalo, Arunachal Pradesh.', "/services");

export default function ServicesPage() {
  return (
    <main className="text-muted">
      <h1 className="mx-auto max-w-6xl px-6 pb-8 pt-7 font-display sm:pb-12 sm:pt-12 text-espresso type-h1">Skin, Hair &amp; Aesthetic Treatments in Aalo</h1>
      <ServiceAboutSection />
      <ServicesSection />
      <section className="px-6 pb-24 sm:pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <div className="space-y-6 rounded-[2rem] border border-[#eadfcd] bg-[#fcf7f1] p-8 sm:p-10">
              <p className="font-body text-sm uppercase tracking-[0.24em] text-[#9a7556]">
                The Founder
              </p>
              <h2 className="max-w-xl font-display text-[#2a1f1d] type-h2">
                Dr. Higam Ete
              </h2>
              <p className="text-base leading-8 text-[#483b33] sm:text-lg">
                A passionate physician dedicated to integrative healing — combining
                classical homoeopathic medicine with contemporary aesthetic
                protocols to deliver outcomes that look as good as they feel.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.25rem] bg-[#f6ede3] px-4 py-4 text-[#4b3b32] ring-1 ring-[#e6d3bb]">
                  <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#9a7556]">
                    Qualification
                  </p>
                  <p className="mt-2 text-sm leading-6 sm:text-base">
                    BHMS · Fellowship in Medical Cosmetology (FMC)
                  </p>
                </div>
                <div className="rounded-[1.25rem] bg-[#f6ede3] px-4 py-4 text-[#4b3b32] ring-1 ring-[#e6d3bb]">
                  <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#9a7556]">
                    Reach
                  </p>
                  <p className="mt-2 text-sm leading-6 sm:text-base">
                    10,000+ patients treated across Northeast India
                  </p>
                </div>
                <div className="rounded-[1.25rem] bg-[#f6ede3] px-4 py-4 text-[#4b3b32] ring-1 ring-[#e6d3bb]">
                  <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#9a7556]">
                    Membership
                  </p>
                  <p className="mt-2 text-sm leading-6 sm:text-base">
                    Member, leading aesthetic & homoeopathic associations
                  </p>
                </div>
                <div className="rounded-[1.25rem] bg-[#f6ede3] px-4 py-4 text-[#4b3b32] ring-1 ring-[#e6d3bb]">
                  <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#9a7556]">
                    Speaker
                  </p>
                  <p className="mt-2 text-sm leading-6 sm:text-base">
                    Featured speaker on integrative skin & hair wellness
                  </p>
                </div>
              </div>
            </div>

            <aside className="relative rounded-[2rem] border border-[#d4b9a0]/50 bg-[#fff8ef]/60 p-8 sm:p-12">
              <CelestialAccent variant="moon" className="right-6 top-6" />
              <p className="max-w-xs pt-16 font-display type-h3 text-espresso">Care that begins with a conversation.</p>
              <p className="mt-5 text-base leading-8">Speak with the clinic about your concerns, treatment options, and appointment availability.</p>
              <a href="/contact" className="mt-7 inline-flex rounded-full bg-[#2a1f1d] px-6 py-3 text-sm text-[#fff8ef]">Plan your visit</a>
            </aside>
          </div>
        </div>
      </section>
      <ContactSection />
      <FaqSection />  
    </main>
  );
}
