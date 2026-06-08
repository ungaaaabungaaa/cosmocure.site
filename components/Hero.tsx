import Link from "next/link";
import { clinicContact } from "@/lib/contact";

export function Hero() {
  return (
    <section id="hero" className="px-6 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-2xl space-y-6">
          <p className="font-body text-sm uppercase tracking-[0.24em] text-caramel">
            Cosmocure
          </p>

          <h2 className="font-display text-5xl font-bold leading-none text-espresso sm:text-7xl">
            Calm, clean, and softly refined.
          </h2>

          <p className="max-w-xl text-base font-light leading-8 text-muted sm:text-lg">
            A simple hero space ready for your photo. Keep the layout minimal,
            let the image lead, and use this section for a quiet first
            impression.
          </p>

          <Link
            href={clinicContact.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-[#2a1f1d] px-6 py-3 text-sm font-medium tracking-wide text-[#fff8ef] transition-colors hover:bg-[#3a2a27]"
          >
            Book Now
          </Link>
        </div>

        <div className="rounded-[2.5rem] bg-white/45 p-4 shadow-[0_20px_60px_rgba(30,27,24,0.06)]">
          <div className="flex aspect-[4/5] items-center justify-center rounded-[2rem] bg-[#f7f1ea] text-center">
            <img></img>
          </div>
        </div>
      </div>
    </section>
  );
}
