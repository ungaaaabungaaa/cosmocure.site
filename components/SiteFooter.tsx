import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-[#2a1f1d] text-[#f7eee6]">
      <div className="mx-auto max-w-full px-8 py-14 sm:px-12 lg:px-16">
        <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <Link
              href="/"
              className="font-display text-2xl font-bold leading-none text-[#fff8ef] sm:text-6xl"
            >
              Cosmocure
            </Link>
            <p className="mt-4 max-w-xl text-md font-light leading-6 text-[#f7eee6]">
              A sanctuary where evidence-based aesthetic medicine meets the
              timeless wisdom of homoeopathy — guided by Dr. Higam Ete, BHMS,
              FMC.
            </p>
          </div>
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
