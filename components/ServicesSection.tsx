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
    title: "Aesthetic Skin Care",
    imageAlt: "Aesthetic skin care treatment",
    imageSrc: "https://images.unsplash.com/photo-1731514771613-991a02407132?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    items: [
      { name: "Acne & scar treatment" },
      { name: "Pigmentation & melasma" },
      { name: "Anti-aging programs" },
      { name: "Medical facials & peels" },
      { name: "Skin brightening & glow" },
      { name: "Sensitive skin care" },
    ],
  },
  {
    title: "Hair & Scalp",
    imageAlt: "Hair and scalp treatment",
    imageSrc: "https://images.unsplash.com/photo-1742280159636-3a06652ac9d9?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    items: [
      { name: "Hair-fall control" },
      { name: "Hair regrowth therapy" },
      { name: "Scalp analysis" },
      { name: "Dandruff treatment" },
      { name: "Strengthening programs" },
      { name: "Hair wellness coaching" },
    ],
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

                  <ul className="grid gap-x-4 gap-y-3 sm:grid-cols-2">
                    {block.items.map((item) => (
                      <li
                        key={item.name}
                        className="flex items-start gap-3 text-base leading-7 text-espresso sm:text-lg sm:leading-8"
                      >
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-caramel" />
                        <span>{item.name}</span>
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
