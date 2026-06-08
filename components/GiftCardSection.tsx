import Image from "next/image";

export function GiftCardSection() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-xl">
          <p className="font-body text-sm uppercase tracking-[0.28em] text-caramel">
            Gift Card
          </p>
          <h2 className="mt-4 font-display text-5xl font-bold leading-none text-espresso sm:text-7xl">
            Gift Card
          </h2>
          <p className="mt-6 text-lg font-light leading-8 text-muted sm:text-xl">
            A simple way to treat someone to a cosmetic appointment. Perfect for
            birthdays, special occasions, or a thoughtful surprise.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="overflow-hidden">
            <Image
              src="/gift-card.webp"
              alt="Cosmocure gift card"
              width={900}
              height={1125}
              className="aspect-[4/5] w-full max-w-[28rem] rounded-[2rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
