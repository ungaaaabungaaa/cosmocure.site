import Link from "next/link";

const linkClass =
  "text-xs font-light text-[#f7eee6] transition-colors hover:text-gold";

export function SiteFooter() {
  return (
    <footer className="mt-16 rounded-t-[22px] bg-[#2a1f1d] text-[#f7eee6]">
      <div className="mx-auto max-w-7xl px-8 py-14 sm:px-12 lg:px-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_0.7fr_0.8fr_0.9fr] md:items-start">
          <div>
            <Link
              href="/"
              className="font-display text-5xl font-bold leading-none text-[#fff8ef] sm:text-6xl"
            >
              Cosmocure
            </Link>
            <p className="mt-5 max-w-44 text-sm font-light leading-6 text-[#f7eee6]">
              Cosmetic care.
              <br />
              Exceptional results.
            </p>
          </div>

          <nav aria-label="Main footer links">
            <h2 className="mb-4 text-[10px] font-semibold uppercase text-[#fff8ef]">
              Main
            </h2>
            <ul className="space-y-4">
              <li>
                <Link href="/" className={linkClass}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className={linkClass}>
                  Services
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Footer pages">
            <h2 className="mb-4 text-[10px] font-semibold uppercase text-[#fff8ef]">
              Pages
            </h2>
            <ul className="space-y-4">
              <li>
                <Link href="/contact" className={linkClass}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className={linkClass}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Social Media">
            <h2 className="mb-4 text-[10px] font-semibold uppercase text-[#fff8ef]">
              Social Media
            </h2>
            <ul>
              <li>
                <Link href="https://www.instagram.com/" className={linkClass}>
                  Instagram
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 border-t border-[#f7eee6]/75 pt-5">
          <p className="text-xs font-light text-[#f7eee6]">© 2026</p>
        </div>
      </div>
    </footer>
  );
}
