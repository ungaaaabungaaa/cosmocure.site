import Image from "next/image";
import { clinicContact } from "@/lib/contact";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="relative mt-16 bg-[#2a1f1d] text-[#f7eee6]">
      <Image src="/images/footer-stars.webp" alt="" width={110} height={74} className="pointer-events-none absolute right-6 bottom-1 w-20 opacity-70 sm:right-12 sm:w-24" />
      <div className="mx-auto max-w-full px-8 py-14 sm:px-12 lg:px-16">
        <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <Link
              href="/"
              className="font-display text-[1.9rem] font-bold leading-none text-[#fff8ef] sm:text-[2.6rem]"
            >
              Cosmocure
            </Link>
            <p className="mt-4 max-w-xl text-md font-light leading-6 text-[#f7eee6]">
              A sanctuary where evidence-based aesthetic medicine meets the
              timeless wisdom of homoeopathy — guided by Dr. Higam Ete, BHMS,
              FMC.
            </p>
            <address className="mt-5 max-w-xl not-italic text-sm leading-7">
              {clinicContact.addressLines.join(" ")}<br />
              <a href={clinicContact.phoneHref}>{clinicContact.phone}</a> · <a href={clinicContact.emailHref}>{clinicContact.email}</a>
            </address>
          </div>
          <nav aria-label="Footer navigation" className="flex flex-col gap-4 text-sm">
            <Link href="/">Home</Link>
            <Link href="/services">Treatments</Link>
            <Link href="/contact">Contact &amp; Opening Hours</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </nav>
        </div>

        <div className="mt-14 border-t border-[#f7eee6]/75 pt-5">
          <div className="flex flex-col gap-2 text-xs font-light text-[#f7eee6] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Cosmocure. All rights reserved.</p>
            <p>Crafted with care · Dr. Higam Ete, BHMS, FMC</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
