import { CelestialAccent } from "@/components/CelestialAccent";
import { ImageCycle } from "@/components/ImageCycle";

export function GiftCardSection() {
  return (
    <section id="gift-cards" data-reveal className="relative px-6 h-auto py-24 sm:py-32">
      <CelestialAccent className="right-6 top-6 sm:right-12" />
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-xl">
          <p className="font-body text-sm uppercase tracking-[0.28em] text-caramel">
            Gift Card
          </p>
          <h2 className="mt-4 font-display text-espresso type-h2">
            Gift Card
          </h2>
          <p className="mt-6 text-base font-light leading-8 text-muted sm:text-lg">
            A simple way to treat someone to a cosmetic appointment. It is
            perfect for birthdays, special occasions, celebrations, or just a
            thoughtful surprise when you want to make someone feel special.
            Easy to gift, easy to book, and a lovely way to share a beauty
            experience.
          </p>
        </div>

        <ImageCycle intervalMs={19300} images={[{ src: "/giftcard.webp", alt: "Cosmocure gift card" }, { src: "/images/beauty-gift.webp", alt: "Illustrative beauty gift with a cream envelope, satin ribbon and manicured hands" }]} artwork={{aspectRatio: "607 / 560", floralFrame: "gift", clip: "inset(6% 22.3% 0 20.2% round 50% 50% 0 0 / 34% 34% 0 0)", photoWindow: {left: "20.2%", top: "6%", width: "57.5%", height: "94%", borderRadius: "50% 50% 0 0 / 34% 34% 0 0"}}} />
      </div>
    </section>
  );
}
