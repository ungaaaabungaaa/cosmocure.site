import Image from "next/image";

type FloralVariant = "hero" | "service" | "gift";
const ornaments: Record<FloralVariant, { src: string; className: string }> = {
  hero: { src: "/images/gold-cosmos.webp", className: "bottom-[1%] left-[4%] h-[82%] w-[49%] -rotate-[24deg]" },
  service: { src: "/images/service-flowers.webp", className: "bottom-[1%] left-[2%] h-[88%] w-[51%] -rotate-[18deg]" },
  gift: { src: "/images/gift-ginkgo.webp", className: "bottom-[3%] right-[1%] h-[82%] w-[52%] rotate-[22deg]" },
};

/** Larger individual branches sit behind the photo, with no freestanding frame. */
export function FloralAccent({ variant = "hero" }: { variant?: FloralVariant }) {
  const ornament = ornaments[variant];
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className={`absolute ${ornament.className}`}>
        <Image src={ornament.src} alt="" fill sizes="(min-width: 1024px) 280px, 180px" className="object-contain" />
      </div>
    </div>
  );
}
