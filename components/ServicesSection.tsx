import Image from "next/image";
import Link from "next/link";
import { clinicContact } from "@/lib/contact";

type ServiceItem = {
  name: string;
  price: string;
};

type ServiceBlock = {
  description: string;
  imageAlt: string;
  imageSrc: string;
  items: ServiceItem[];
  title: string;
};

const serviceBlocks: ServiceBlock[] = [
  {
    title: "Medi Facials",
    description:
      "Skin-focused facial care options for deep cleansing, glow, and refreshment.",
    imageAlt: "Medi facials treatment",
    imageSrc: "/MediFacials.jpg",
    items: [
      { name: "Hydrafacial + LED", price: "2000" },
      { name: "Advanced hydrafacial", price: "3500" },
      { name: "Chemical peel + LED", price: "2500" },
      { name: "Carbon facial", price: "4000" },
      { name: "Microdermabrasion crystal / diamond tip", price: "1000" },
      { name: "Oxygeneo facial", price: "3000" },
      { name: "High frequency facial", price: "699" },
      { name: "Mesoelectroporation", price: "2000" },
      { name: "Vampire facial", price: "5000" },
    ],
  },
  {
    title: "Advanced Skin",
    description:
      "Advanced skin-focused treatments for smoother texture and visible refinement.",
    imageAlt: "Advanced skin treatment",
    imageSrc: "/AdvancedSkin.jpg",
    items: [
      { name: "PRP face", price: "3500" },
      { name: "Microneedling with serum", price: "3500" },
      { name: "Microneedling with PRP / PDRN", price: "5000" },
      { name: "MNRF", price: "5000" },
      { name: "MNRF with PRP", price: "7000" },
    ],
  },
  {
    title: "Pigmentation",
    description:
      "Targeted pigmentation care for lips, freckles, melasma, and underarms.",
    imageAlt: "Pigmentation treatment",
    imageSrc: "/Pigmentation.avif",
    items: [
      { name: "Lip and other pigmentation", price: "3000" },
      { name: "Freckles", price: "3500" },
      { name: "Melasma", price: "4000" },
      { name: "Underarm brightening", price: "3000" },
    ],
  },
  {
    title: "Hair Treatments",
    description:
      "Hair-focused treatments for strengthening, restoration, and scalp care.",
    imageAlt: "Hair treatment",
    imageSrc: "/HairTreatments.jpg",
    items: [
      { name: "PRP hair", price: "3500" },
      { name: "GFC hair", price: "5000" },
      { name: "Dandruff removal", price: "2000" },
    ],
  },
  {
    title: "Body Contouring",
    description:
      "Body contouring treatments designed for a cleaner, more sculpted feel.",
    imageAlt: "Body contouring treatment",
    imageSrc: "/BodyContouring.avif",
    items: [
      { name: "RF face", price: "2500" },
      { name: "RF body + cavitation", price: "3500" },
    ],
  },
  {
    title: "Skin Correction",
    description:
      "Small correction treatments for unwanted tags and similar concerns.",
    imageAlt: "Skin correction treatment",
    imageSrc: "/SkinCorrection.avif",
    items: [{ name: "Mole / tag removal", price: "500" }],
  },
];

function ServiceImageView({
  alt,
  src,
}: {
  alt: string;
  src: string;
}) {
  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] shadow-[0_24px_70px_rgba(30,27,24,0.08)]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 40vw, 100vw"
      />
    </div>
  );
}

export function ServicesSection() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="font-body text-sm uppercase tracking-[0.28em] text-caramel">
            Services
          </p>
          <h2 className="mt-4 font-display text-5xl font-bold leading-none text-espresso sm:text-7xl">
            Price-based services, laid out clearly.
          </h2>
          <p className="mt-6 max-w-2xl text-lg font-light leading-8 text-muted">
            Each section includes an image view on either side. Drop in your
            photos whenever you are ready.
          </p>
        </div>

        <div className="mt-16 space-y-20 sm:space-y-28">
          {serviceBlocks.map((block, index) => {
            const imageFirst = index % 2 === 0;

            return (
              <article
                key={block.title}
                className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
              >
                <div
                  className={`space-y-6 ${imageFirst ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div>
                    <p className="font-body text-sm uppercase tracking-[0.22em] text-caramel">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 font-display text-4xl font-bold leading-none text-espresso sm:text-5xl">
                      {block.title}
                    </h3>
                    <p className="mt-5 max-w-xl text-base font-light leading-8 text-muted sm:text-lg">
                      {block.description}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {block.items.map((item) => (
                      <li
                        key={item.name}
                        className="flex items-start justify-between gap-6 border-b border-caramel/20 pb-3 text-sm leading-6 text-espresso sm:text-base"
                      >
                        <span>{item.name}</span>
                        <span className="shrink-0 font-medium">
                          ₹{item.price}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={clinicContact.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-[#2a1f1d] px-6 py-3 text-sm font-medium tracking-wide text-[#fff8ef] transition-colors hover:bg-[#3a2a27]"
                  >
                    Book Now
                  </Link>
                </div>

                <div className={imageFirst ? "lg:order-1" : "lg:order-2"}>
                  <ServiceImageView alt={block.imageAlt} src={block.imageSrc} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
