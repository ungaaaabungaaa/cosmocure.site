import Link from "next/link";
import { clinicContact } from "@/lib/contact";

export function Hero() {
  return (
    <section id="hero" className="px-6 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-2xl space-y-6">
        
          <h2 className="font-display text-5xl font-bold leading-none text-espresso sm:text-7xl">
            Heal Within, Glow Beyond
          </h2>

          <p className="max-w-xl text-base font-light leading-8 text-muted sm:text-lg">
            A simple hero space ready for your photo. Keep the layout minimal,
            let the image lead, and use this section for a quiet first
            impression.
          </p>

          <Link
            href={clinicContact.phoneHref}
            className="inline-flex items-center gap-3 rounded-full  px-0 py-0 text-[#2a1f1d] transition-none          shrink-0 whitespace-nowrap rounded-full bg-[#2a1f1d] px-4 py-2.5 text-[0.68rem] font-medium tracking-[0.12em] text-[#fff8ef] transition-colors hover:bg-[#3a2a27] sm:px-7 sm:py-4 sm:text-sm sm:tracking-[0.16em]"
            aria-label={`Call ${clinicContact.phone}`}
          >
            <span aria-hidden="true" className="flex h-5 w-5 items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-none stroke-current stroke-[1.8]"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4.5 5.5c0 8.28 5.72 14 14 14l1.5-1.5a1.5 1.5 0 0 0-.15-2.28l-3.07-2.36a1.5 1.5 0 0 0-1.86.04l-1.16.93a11.1 11.1 0 0 1-5.7-5.7l.93-1.16a1.5 1.5 0 0 0 .04-1.86L7.83 4.15a1.5 1.5 0 0 0-2.28-.15L4.5 5.5Z" />
              </svg>
            </span>
            <span className="text-sm font-medium tracking-wide">{clinicContact.phone}</span>
          </Link>
        </div>

        <div className="p-2">
          <div className="flex aspect-[4/5] items-center justify-center text-center">
          <img
              src="/hero.png"
              alt="Cosmocure gift card"
              className="w-full max-w-[99%] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
