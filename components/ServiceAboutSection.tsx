import Link from "next/link";
import { clinicContact } from "@/lib/contact";
import { MovingNumber } from "@/components/MovingNumber";

type Stat = {
  label: string;
  suffix?: string;
  useCompactFormat?: boolean;
  value: number;
};

const stats: Stat[] = [
  {
    label: "Customers",
    value: 5000,
    useCompactFormat: true,
  },
  {
    label: "Repeat",
    value: 4500,
    useCompactFormat: true,
  },
  {
    label: "Satisfaction",
    suffix: "%",
    value: 99,
  },
];

export function ServiceAboutSection() {
  return (
    <div className="w-full bg-[#2a1f1d] max-w-[100%]">
    <section className="px-6 py-24 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden bg-[#2a1f1d] px-6 py-16 text-[#f4eee7] sm:px-10 sm:py-20 lg:px-14 lg:py-24">
          <div className="relative">
            <div className="grid gap-4 text-center sm:grid-cols-3 sm:gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-3">
                  <p className="text-4xl lg:text-6xl leading-none text-[#f7f0ea]">
                    <MovingNumber
                      duration={1500}
                      suffix={stat.suffix}
                      useCompactFormat={stat.useCompactFormat}
                      value={stat.value}
                    />
                  </p>
                  <p className="text-sm uppercase tracking-[0.28em] text-[#c8a882] sm:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

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
                    src="/salon.avif"
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
