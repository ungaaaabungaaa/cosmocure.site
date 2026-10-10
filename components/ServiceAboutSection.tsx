import Link from "next/link";
import { FloralAccent } from "@/components/FloralAccent";
import { ImageCycle } from "@/components/ImageCycle";
import { careStillLife } from "@/lib/images";
import { clinicContact } from "@/lib/contact";

export function ServiceAboutSection() {
  return (
    <div className="w-full bg-[#2a1f1d]">
    <section data-reveal className="px-6 py-12 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="bg-[#2a1f1d] py-6 text-[#f4eee7] sm:py-12">
          <div className="relative">


            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
              <div className="max-w-xl">
                <p className="font-body text-sm uppercase tracking-[0.28em] text-[#c8a882]">
                  Book Now
                </p>
                <h2 className="mt-4 max-w-xl font-display text-[#f7f0ea] type-h2">
                  Services
                </h2>
                <p className="mt-8 max-w-xl text-base font-light leading-8 text-[#f4eee7]/90 sm:text-lg">
                  Discover a full range of expert skin and beauty care services
                  with focused treatments, a calm experience, and results that
                  are polished without feeling overdone.
                </p>
                <p className="mt-4 max-w-xl text-base font-light leading-8 text-[#f4eee7]/90 sm:text-lg">
                  From facials and skin correction to advanced care plans, the
                  approach stays clean, precise, and client-first.
                </p>

                <Link
                  href={clinicContact.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-10 inline-flex items-center rounded-full bg-[#c8a882] px-7 py-4 text-sm font-medium tracking-[0.18em] text-[#fff8ef] transition-colors hover:bg-[#b79367]"
                >
                  Book Now
                </Link>
              </div>

              <div className="relative isolate mx-auto aspect-[530/507] w-full max-w-[530px]" data-service-artwork>
                <FloralAccent variant="service" />
                <ImageCycle intervalMs={9700} images={[{src: "/salon2.webp", alt: "Facial care in the original curved photo frame"}, careStillLife]} artwork={{aspectRatio: "442 / 663", photoWindow: {inset: 0}}} className="absolute! bottom-0 right-[16%] w-[55%]!" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
