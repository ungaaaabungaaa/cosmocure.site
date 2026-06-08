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
    question: "Do I need to confirm my appointment in advance?",
    answer:
      "Yes. Please message us on WhatsApp first so we can confirm availability and share the appointment details.",
  },
  {
    question: "Can I ask about prices before booking?",
    answer:
      "Yes. You can message us on WhatsApp and we will share the pricing details before your appointment.",
  },
  {
    question: "How should I reach you to book?",
    answer:
      "WhatsApp is the easiest way to book. Send your name, preferred time, and the service you want.",
  },
  {
    question: "Can I pay after the appointment?",
    answer:
      "Yes. Payment is made after the service is completed.",
  },
  {
    question: "What if I need to reschedule?",
    answer:
      "Just message us on WhatsApp as soon as possible and we will help you move the appointment.",
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
