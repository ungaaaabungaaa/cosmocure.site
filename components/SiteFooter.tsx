import Link from "next/link";
import { clinicContact } from "@/lib/contact";

const linkClass =
  "text-xs font-light text-[#f7eee6] transition-colors hover:text-gold";

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-[#2a1f1d] text-[#f7eee6]">
      <div className="mx-auto max-w-full px-8 py-14 sm:px-12 lg:px-16">
        <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <Link
              href="/"
              className="font-display text-5xl font-bold leading-none text-[#fff8ef] sm:text-6xl"
            >
              Cosmocure
            </Link>
            <p className="mt-5 max-w-44 text-sm font-light leading-6 text-[#f7eee6]">
              Aesthetic Clinic.
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-[#f7eee6]/75 pt-5">
          <p className="text-xs font-light text-[#f7eee6]">© 2026</p>
        </div>
      </div>
    </footer>
  );
}
