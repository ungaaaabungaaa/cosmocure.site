import Link from "next/link";
import { clinicContact } from "@/lib/contact";

export function SiteNavBar() {
  return (
    <section className="sticky top-0 z-50 px-6 pb-6 pt-0 sm:pb-10">
      <div className="mx-auto max-w-full">
        <div className="flex items-center justify-between gap-4  px-6 py-5 sm:gap-6 sm:px-10 sm:py-6">
          <Link
            href="/"
            className="min-w-0 truncate font-display text-2xl leading-none text-caramel sm:text-[2.6rem]"
          >
            Cosmocure
          </Link>

          <Link
            href={clinicContact.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 whitespace-nowrap rounded-full bg-[#2a1f1d] px-5 py-3 text-xs font-medium tracking-[0.14em] text-[#fff8ef] transition-colors hover:bg-[#3a2a27] sm:px-7 sm:py-4 sm:text-sm sm:tracking-[0.16em]"
          >
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}
