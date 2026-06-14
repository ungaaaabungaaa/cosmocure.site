import Image from "next/image";
import Link from "next/link";
import { clinicContact } from "@/lib/contact";

type ServiceItem = {
  name: string;
};

type ServiceBlock = {
  imageAlt: string;
  imageSrc: string;
  items: ServiceItem[];
  title: string;
};

const serviceBlocks: ServiceBlock[] = [
  {
    title: "MEDI FACIALS",
    imageAlt: "Aesthetic facial treatment",
    imageSrc:
      "https://images.unsplash.com/photo-1761718209852-54ca4210183e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    items: [
      { name: "Hydrafacial + LED" },
      { name: "Advanced hydrafacial" },
      { name: "Chemical peel + LED" },
      { name: "Carbon facial" },
      { name: "Microdermabrasion crystal / diamond tip" },
      { name: "Oxygeno facial" },
      { name: "High frequency facial" },
      { name: "Mesoelectroporation" },
      { name: "Vampire facial" },
    ],
  },
  {
    title: "ADVANCED SKIN",
    imageAlt: "Advanced skin treatment",
    imageSrc:
      "https://images.unsplash.com/photo-1731355771304-bc2f23167bea?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    items: [
      { name: "Prp face" },
      { name: "Microneedling with serum" },
      { name: "Microneedling with prp/pdrn" },
      { name: "MNRF" },
      { name: "MNRF with prp" },
    ],
  },
  {
    title: "PIGMENTATION",
    imageAlt: "Pigmentation treatment",
    imageSrc:
      "https://images.unsplash.com/photo-1733685372465-b828971f8c95?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    items: [
      { name: "Lip and other pigmentation" },
      { name: "Freckles" },
      { name: "Malesma" },
      { name: "Underarm brightening" },
    ],
  },
  {
    title: "HAIR TREATMENTS",
    imageAlt: "Hair treatment",
    imageSrc:
      "https://images.unsplash.com/photo-1573651235591-221193be5229?q=80&w=1305&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    items: [
      { name: "Prp hair" },
      { name: "GFC hair" },
      { name: "Dandruff removal" },
    ],
  },
  {
    title: "BODY CONTOURING",
    imageAlt: "Body contouring treatment",
    imageSrc:
      "https://images.pexels.com/photos/33327683/pexels-photo-33327683.jpeg",
    items: [
      { name: "Rf face" },
      { name: "Rf Body + cavitation" },
    ],
  },
  {
    title: "SKIN CORRECTION",
    imageAlt: "Skin correction treatment",
    imageSrc:
      "https://images.pexels.com/photos/30809947/pexels-photo-30809947.jpeg",
    items: [{ name: "Mole / Tag removal" }],
  },
  {
    title: "Classical Homoeopathy",
    imageAlt: "Classical homoeopathy consultation",
    imageSrc: "/Homoeopathy.jpg",
    items: [
      { name: "Hormonal balance" },
      { name: "Digestive disorders" },
      { name: "Stress & anxiety" },
      { name: "Women's health" },
      { name: "Children's health" },
      { name: "Immunity & lifestyle" },
    ],
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
                  </div>

                  <ul className="grid gap-x-4 gap-y-0">
                    {block.items.map((item) => (
                      <li
                        key={item.name}
                        className="border-b border-espresso/10 py-3 text-lg leading-8 text-espresso last:border-b-0 sm:text-xl sm:leading-9"
                      >
                        {item.name}
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
