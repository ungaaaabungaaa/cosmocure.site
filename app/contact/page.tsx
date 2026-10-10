
import { pageMetadata } from "@/lib/site";
import { ContactSection } from "@/components/ContactSection";
import { FaqSection } from "@/components/FaqSection";

export const metadata = pageMetadata('Contact & Opening Hours in Aalo', 'Contact Cosmocure in Aalo. Monday–Saturday: 9 AM–10 PM. Sunday: 9 AM–7 PM. Call or message on WhatsApp to book a visit.', "/contact");

export default function ContactPage() {
  return (
    <main>
    <h1 className="mx-auto max-w-6xl px-6 pt-7 text-center font-display sm:pt-12 text-espresso type-h1">Visit Cosmocure in Aalo</h1>
    <ContactSection />
    <FaqSection />
    </main>
  );
}
