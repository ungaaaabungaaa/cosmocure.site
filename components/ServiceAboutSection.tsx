import Link from "next/link";
import { NumberTicker } from "@/components/ui/number-ticker";
import { clinicContact } from "@/lib/contact";

type Stat = {
  label: string;
  displayValue: number;
  decimalPlaces?: number;
  displaySuffix?: string;
};

const stats: Stat[] = [
  {
    label: "Customers",
    displayValue: 5,
    displaySuffix: "K",
  },
  {
    label: "Repeat",
    displayValue: 4.5,
    decimalPlaces: 1,
    displaySuffix: "K",
  },
  {
    label: "Satisfaction",
    displayValue: 99,
    displaySuffix: "%",
  },
];

export function ServiceAboutSection() {
  return (
    <div className="w-full bg-[#2a1f1d]">
    <section className="px-6 py-12 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden bg-[#2a1f1d] px-6 py-16 text-[#f4eee7] sm:px-10 sm:py-20 lg:px-14 lg:py-24">
          <div className="relative">
            {/* <div className="grid grid-cols-3 gap-2 text-center sm:gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-2 sm:space-y-3">
                  <p className="text-2xl leading-none text-[#f7f0ea] sm:text-4xl lg:text-6xl">
                    <NumberTicker
                      className="font-display text-2xl leading-none text-[#f7f0ea] sm:text-4xl lg:text-6xl"
                      decimalPlaces={stat.decimalPlaces}
                      startValue={0}
                      value={stat.displayValue}
                    />
                    {stat.displaySuffix}
                  </p>
                  <p className="text-[0.6rem] uppercase tracking-[0.24em] text-[#c8a882] sm:text-sm sm:tracking-[0.28em]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div> */}

            <div className="mt-16 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
              <div className="max-w-xl lg:pl-8">
                <p className="font-body text-sm uppercase tracking-[0.28em] text-[#c8a882]">
                  Book Now
                </p>
                <h2 className="mt-4 max-w-xl font-display text-5xl font-bold leading-none text-[#f7f0ea] sm:text-6xl lg:text-[4.75rem]">
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

              <div className="flex justify-center lg:justify-end">
                <div className="overflow-hidden">
                  <img
                    src="/salon.png"
                    alt="Service About"
                    className="w-full max-w-[420px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
