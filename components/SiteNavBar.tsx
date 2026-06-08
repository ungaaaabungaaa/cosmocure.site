import Link from "next/link";
import { clinicContact } from "@/lib/contact";

export function SiteNavBar() {
  return (
    <section className="px-6 pb-6 pt-0 sm:pb-10">
      <div className="mx-auto max-w-full">
        <div className="flex flex-col items-start justify-between gap-6 px-6 py-5 sm:flex-row sm:items-center sm:px-10 sm:py-6">
          <Link
            href="/"
            className="font-display text-3xl leading-none text-caramel sm:text-[2.6rem]"
          >
            Cosmocure
          </Link>

          <Link
            href={clinicContact.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-[#2a1f1d] px-7 py-4 text-sm font-medium tracking-[0.16em] text-[#fff8ef] transition-colors hover:bg-[#3a2a27]"
          >
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}
