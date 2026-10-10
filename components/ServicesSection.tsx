import Image from "next/image";
import { CelestialAccent } from "@/components/CelestialAccent";
import { ImageCycle, type CycleImage } from "@/components/ImageCycle";
import { hairPortrait } from "@/lib/images";
import Link from "next/link";
import { clinicContact } from "@/lib/contact";

type ServiceItem = {
  name: string;
};

type ServiceBlock = {
  images: CycleImage[];
  items: ServiceItem[];
  title: string;
};

const serviceBlocks: ServiceBlock[] = [
  {
    title: "MEDI FACIALS",
    images: [
      { src: "/images/medi-facial.webp", alt: "Illustrative facial care with a soft mask brush" },
      { src: "/images/medi-facials-original.webp", alt: "Gentle facial massage during a skincare appointment" },
    ],
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
    images: [
      { src: "/images/advanced-skin.webp", alt: "Illustrative advanced skin-care instruments and serum ampoules" },
      { src: "/images/advanced-skin-original.webp", alt: "A facial mask applied during a skin treatment" },
    ],
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
    images: [
      { src: "/images/pigmentation-care.webp", alt: "Illustrative close-up of naturally pigmented skin during a mirror check" },
      { src: "/images/pigmentation-original.webp", alt: "Portrait showing natural freckles and skin pigmentation" },
    ],
    items: [
      { name: "Lip and other pigmentation" },
      { name: "Freckles" },
      { name: "Melasma" },
      { name: "Underarm brightening" },
    ],
  },
  {
    title: "HAIR TREATMENTS",
    images: [
      { src: "/images/scalp-care.webp", alt: "Illustrative hair and scalp examination with an inspection camera" },
      hairPortrait,
    ],
    items: [
      { name: "Prp hair" },
      { name: "GFC hair" },
      { name: "Dandruff removal" },
    ],
  },
  {
    title: "BODY CONTOURING",
    images: [
      { src: "/images/body-contouring.webp", alt: "Illustrative radiofrequency and ultrasound body-care applicators" },
      { src: "/images/body-care.webp", alt: "Illustrative body-care consultation setup with a wooden figure and clipboard" },
    ],
    items: [
      { name: "Rf face" },
      { name: "Rf Body + cavitation" },
    ],
  },
  {
    title: "SKIN CORRECTION",
    images: [
      { src: "/images/skin-assessment.webp", alt: "Illustrative examination of a skin mark with a dermatoscope" },
      { src: "/images/skin-correction-original.webp", alt: "Close-up of skin during a clinic appointment" },
    ],
    items: [{ name: "Mole / Tag removal" }],
  },
  {
    title: "Classical Homoeopathy",
    images: [
      { src: "/images/homoeopathy-consultation.webp", alt: "Illustrative homoeopathy consultation desk with a vial and notebook" },
      { src: "/images/homoeopathy.webp", alt: "Classical homoeopathy consultation illustration" },
    ],
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

export function ServicesSection() {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <CelestialAccent variant="orbit" className="left-6 top-8 sm:left-12 sm:top-12" />
      <div className="mx-auto max-w-6xl">
        <div className="mt-16 space-y-20 sm:space-y-28">
          {serviceBlocks.map((block, index) => {
            const imageFirst = index % 2 === 0;

            return (
              <article
                data-reveal
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
                    <h2 className="mt-3 font-display text-espresso type-h2">
                      {block.title}
                    </h2>
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

                <div className={`relative isolate px-3 py-5 sm:px-5 ${imageFirst ? "lg:order-1" : "lg:order-2"}`}>
                  <Image src={index % 2 === 0 ? "/images/treatment-orbit.webp" : "/images/footer-stars.webp"} alt="" width={160} height={110} className={`pointer-events-none absolute w-24 opacity-65 sm:w-32 ${imageFirst ? "-right-1 -top-2 rotate-[18deg]" : "-left-1 -bottom-2 -rotate-[25deg]"}`} />
                  <ImageCycle images={block.images} intervalMs={8300 + index * 1370} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
