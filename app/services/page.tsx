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
      <section className="px-6 pb-24 sm:pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <div className="space-y-6 rounded-[2rem] border border-[#eadfcd] bg-[#fcf7f1] p-8 sm:p-10">
              <p className="font-body text-sm uppercase tracking-[0.24em] text-[#9a7556]">
                The Founder
              </p>
              <h2 className="max-w-xl font-display text-4xl font-bold leading-none text-[#2a1f1d] sm:text-5xl">
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

            <div className="ml-auto flex h-full w-full items-center justify-center">
              <div className="aspect-[4/5] w-full max-w-[380px] rounded-[2rem] border border-dashed border-[#d4b9a0] bg-[#fff8ef] text-[#8d7057]">
                <div className="flex h-full items-center justify-center text-center">
                  <p className="font-body text-xs uppercase tracking-[0.2em]">
                    Founder photo placeholder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
      <FaqSection />  
    </main>
  );
}
