import { Mail, MapPin, Phone, type LucideIcon } from "lucide-react";

type ContactCard = {
  description: string;
  detail: string;
  icon: LucideIcon;
  title: string;
};

const contactCards: ContactCard[] = [
  {
    title: "Email",
    description: "Our friendly team is here to help.",
    detail: "hello@cosmocure.site",
    icon: Mail,
  },
  {
    title: "Phone",
    description: "Open daily: 10am-8pm.",
    detail: "(929) 727-4089",
    icon: Phone,
  },
  {
    title: "Office",
    description: "Come say hello at our clinic.",
    detail: "11 Broadway, Ste 804, New York, NY 10004",
    icon: MapPin,
  },
];

export function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-cream px-6 py-20 text-center text-muted sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-24 h-40 w-40 rounded-full border border-espresso/45"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-24 h-40 w-40 rounded-full border border-espresso/45"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 left-12 h-44 w-44 rounded-full border border-espresso/45"
      />

      <div className="relative mx-auto max-w-6xl">
        <p className="font-body text-sm text-caramel">Contact us</p>
        <h2 className="mt-2 font-display text-4xl font-bold leading-tight text-espresso sm:text-5xl">
          Get In Touch
        </h2>
        <p className="mt-4 text-sm font-light text-muted">
          Our friendly team is always here to chat.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {contactCards.map(({ description, detail, icon: Icon, title }) => (
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
              <p className="mx-auto mt-6 max-w-48 text-sm font-semibold leading-6 text-espresso">
                {detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
