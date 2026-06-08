import { Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { clinicContact } from "@/lib/contact";

type ContactCard = {
  description: string;
  detail: React.ReactNode;
  href: string;
  icon: LucideIcon;
  title: string;
};

const contactCards: ContactCard[] = [
  {
    title: "Email",
    description: "Our friendly team is here to help.",
    detail: clinicContact.email,
    href: clinicContact.emailHref,
    icon: Mail,
  },
  {
    title: "Phone",
    description: "Open daily: 10 AM - 8 PM",
    detail: clinicContact.phone,
    href: clinicContact.phoneHref,
    icon: Phone,
  },
  {
    title: "Office",
    description: "Come say hello at our clinic.",
    detail: (
      <>
        {clinicContact.addressLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </>
    ),
    href: clinicContact.mapsHref,
    icon: MapPin,
  },
];

export function ContactSection() {
  return (
    <section className="bg-cream px-6 py-20 text-center text-muted sm:py-24">
      <div className="relative mx-auto max-w-6xl">
        <p className="font-body text-sm text-caramel">Contact us</p>
        <h2 className="mt-2 font-display text-4xl font-bold leading-tight text-espresso sm:text-5xl">
          Get In Touch
        </h2>
        <p className="mt-4 text-sm font-light text-muted">
          Our friendly team is always here to chat.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {contactCards.map(({ description, detail, href, icon: Icon, title }) => (
            <article
              key={title}
              className="rounded-lg bg-white/70 px-6 py-10 shadow-[0_20px_60px_rgba(30,27,24,0.06)] backdrop-blur"
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-caramel text-white">
                <Icon aria-hidden="true" size={18} strokeWidth={1.8} />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-espresso">
                {title}
              </h3>
              <p className="mt-3 text-sm font-light leading-6">{description}</p>
              <a
                href={href}
                className="mx-auto mt-6 block max-w-56 text-sm font-semibold leading-6 text-espresso transition-colors hover:text-caramel"
                target={href === clinicContact.mapsHref ? "_blank" : undefined}
                rel={href === clinicContact.mapsHref ? "noreferrer" : undefined}
              >
                {detail}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
