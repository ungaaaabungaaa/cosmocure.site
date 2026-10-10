import { CelestialAccent } from "@/components/CelestialAccent";
import { Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { clinicContact, clinicHours } from "@/lib/contact";

type ContactCard = {
  description: React.ReactNode;
  actionLabel: string;
  href: string;
  icon: LucideIcon;
  title: string;
};

const contactCards: ContactCard[] = [
  {
    title: "Email",
    description: (
      <>
        Our friendly team is here
        <br />
        to help.
      </>
    ),
    actionLabel: "Email",
    href: clinicContact.emailHref,
    icon: Mail,
  },
  {
    title: "Phone",
    description: (
      <>
        {clinicHours.weekdays}
        <br />
        {clinicHours.sunday}
      </>
    ),
    actionLabel: "Call me",
    href: clinicContact.phoneHref,
    icon: Phone,
  },
  {
    title: "Office",
    description: (
      <>
        Come say hello
        <br />
        at our clinic.
      </>
    ),
    actionLabel: "Google Maps",
    href: clinicContact.mapsHref,
    icon: MapPin,
  },
];

export function ContactSection() {
  return (
    <section data-reveal className="relative px-6 py-20 text-center text-muted sm:py-24">
      <CelestialAccent variant="moon" className="left-5 top-5 sm:left-12" />
      <div className="relative mx-auto max-w-6xl">
        <p className="font-body text-sm text-caramel">Contact us</p>
        <h2 className="mt-2 font-display text-espresso type-h2">
          Get In Touch
        </h2>
        <p className="mt-4 text-sm font-light text-muted">
          Our friendly team is always here to chat.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {contactCards.map(
            ({ actionLabel, description, href, icon: Icon, title }) => (
            <article
              key={title}
              className="rounded-[2.25rem] bg-white/70 px-6 py-10 shadow-[0_20px_60px_rgba(30,27,24,0.06)] backdrop-blur"
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-caramel text-white">
                <Icon aria-hidden="true" size={18} strokeWidth={1.8} />
              </div>
              <h3 className="mt-5 font-display text-espresso type-h3">
                {title}
              </h3>
              <p className="mt-3 text-sm font-light leading-6">{description}</p>
              <a
                href={href}
                className="mx-auto mt-8 block max-w-56 rounded-full bg-[#2a1f1d] px-6 py-3 text-center text-[#fff8ef] transition-colors hover:bg-[#3a2a27]"
                aria-label={`${actionLabel}: ${title.toLowerCase()}`}
                target={href === clinicContact.mapsHref ? "_blank" : undefined}
                rel={href === clinicContact.mapsHref ? "noreferrer" : undefined}
              >
                {actionLabel}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
