import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { clinicContact } from "@/lib/contact";

const faqItems = [
  {
    question: "How do I book an appointment?",
    answer:
      "Appointments are booked through WhatsApp. Send us a message and we will confirm your preferred slot.",
  },
  {
    question: "When do I pay for the service?",
    answer:
      "Payment is collected after the service is completed, so you can settle it at the end of your appointment.",
  },
  {
    question: "What Medi Facials do you offer?",
    answer: (
      <ul className="space-y-2">
        <li>Hydrafacial + LED - 2000</li>
        <li>Advanced hydrafacial - 3500</li>
        <li>Chemical peel + LED - 2500</li>
        <li>Carbon facial - 4000</li>
        <li>Microdermabrasion crystal / diamond tip - 1000</li>
        <li>Oxygeneo facial - 3000</li>
        <li>High frequency facial - 699</li>
        <li>Mesoelectroporation - 2000</li>
        <li>Vampire facial - 5000</li>
      </ul>
    ),
  },
  {
    question: "What advanced skin treatments are available?",
    answer: (
      <ul className="space-y-2">
        <li>PRP face - 3500</li>
        <li>Microneedling with serum - 3500</li>
        <li>Microneedling with PRP/PDRN - 5000</li>
        <li>MNRF - 5000</li>
        <li>MNRF with PRP - 7000</li>
      </ul>
    ),
  },
  {
    question: "Do you offer pigmentation and hair treatments?",
    answer: (
      <div className="space-y-4">
        <ul className="space-y-2">
          <li>Lip and other pigmentation - 3000</li>
          <li>Freckles - 3500</li>
          <li>Melasma - 4000</li>
          <li>Underarm brightening - 3000</li>
        </ul>
        <ul className="space-y-2">
          <li>PRP hair - 3500</li>
          <li>GFC hair - 5000</li>
          <li>Dandruff removal - 2000</li>
        </ul>
      </div>
    ),
  },
  {
    question: "What body contouring and skin correction services are available?",
    answer: (
      <ul className="space-y-2">
        <li>RF face - 2500</li>
        <li>RF body + cavitation - 3500</li>
        <li>Mole / tag removal - 500</li>
      </ul>
    ),
  },
];

export function FaqSection() {
  return (
    <section className="px-6 py-24 text-muted sm:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-body text-sm uppercase tracking-[0.28em] text-caramel">
            FAQ
          </p>
          <h2 className="mt-4 font-display text-5xl font-bold leading-none text-espresso sm:text-7xl">
            Have Questions?
          </h2>
          <p className="mt-6 text-base font-light leading-8 text-muted sm:text-lg">
            A simple guide to booking, payment, and the treatments we offer.
          </p>
        </div>

        <div className="mt-14">
          <Accordion type="single" collapsible className="space-y-5">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.question}
                value={item.question}
                className="rounded-[2rem] border border-caramel/35 bg-white/55 px-6 shadow-[0_18px_50px_rgba(30,27,24,0.05)] backdrop-blur-sm"
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm font-light leading-6 text-muted">
          To book, message us on{" "}
          <a
            href={clinicContact.whatsappHref}
            className="font-medium text-espresso underline decoration-caramel/50 underline-offset-4 transition-colors hover:text-caramel"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          .
        </p>
      </div>
    </section>
  );
}
