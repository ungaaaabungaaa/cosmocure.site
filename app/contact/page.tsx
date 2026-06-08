import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Book an appointment or reach ${siteConfig.name}.`,
};

export default function ContactPage() {
  return (
    <main className="px-6 py-24 text-muted sm:py-32">
      <section className="mx-auto max-w-5xl">
        <p className="mb-4 font-body text-sm uppercase text-caramel">
          Contact
        </p>
        <h1 className="max-w-3xl font-display text-5xl font-bold leading-tight text-espresso sm:text-6xl">
          Start with a simple appointment request.
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-light leading-8">
          For bookings and treatment questions, contact Cosmocure through
          Instagram or the clinic appointment desk.
        </p>
      </section>
    </main>
  );
}
