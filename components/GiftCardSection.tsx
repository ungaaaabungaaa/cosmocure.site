import Image from "next/image";

export function GiftCardSection() {
  return (
    <section className="px-6 h-auto py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-xl">
          <p className="font-body text-sm uppercase tracking-[0.28em] text-caramel">
            Gift Card
          </p>
          <h2 className="mt-4 font-display text-5xl font-bold leading-none text-espresso sm:text-7xl">
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

        <div className="flex justify-center lg:justify-end">
          <div className="overflow-hidden">
            <img
              src="/giftcard.png"
              alt="Cosmocure gift card"
              className="w-full max-w-[99%] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
