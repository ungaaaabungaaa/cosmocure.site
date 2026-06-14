"use client";

import { useState } from "react";
import Link from "next/link";
import { clinicContact } from "@/lib/contact";

export function SiteNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="top-0 z-50 px-1 pb-2 pt-3 sm:pb-10 sm:pt-0">
      <div className="mx-auto max-w-full">
        <div className="flex items-center justify-between gap-4 px-6 py-4 sm:gap-6 sm:px-10 sm:py-6">
          <Link
            href="/"
            className="min-w-0 font-display text-[1.9rem] leading-none text-caramel sm:text-[2.6rem]"
            onClick={() => setIsOpen(false)}
          >
            Cosmocure
          </Link>

          <div className="hidden items-center gap-4 sm:flex">
            <Link
              href={clinicContact.phoneHref}
              className="inline-flex items-center gap-2 rounded-full  px-3 py-2 text-[#2a1f1d] sm:gap-3 sm:px-5 sm:py-3"
              aria-label={`Call ${clinicContact.phone}`}
            >
              <span aria-hidden="true" className="flex h-5 w-5 items-center justify-center sm:h-6 sm:w-6">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 5.5c0 8.28 5.72 14 14 14l1.5-1.5a1.5 1.5 0 0 0-.15-2.28l-3.07-2.36a1.5 1.5 0 0 0-1.86.04l-1.16.93a11.1 11.1 0 0 1-5.7-5.7l.93-1.16a1.5 1.5 0 0 0 .04-1.86L7.83 4.15a1.5 1.5 0 0 0-2.28-.15L4.5 5.5Z" />
                </svg>
              </span>
              <span className="hidden text-sm font-medium tracking-wide sm:inline">{clinicContact.phone}</span>
              <span className="text-xs font-medium tracking-wide sm:hidden">Call</span>
            </Link>

            <Link
              href={clinicContact.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 whitespace-nowrap rounded-full bg-[#2a1f1d] px-4 py-2.5 text-[0.68rem] font-medium tracking-[0.12em] text-[#fff8ef] transition-colors hover:bg-[#3a2a27] sm:px-7 sm:py-4 sm:text-sm sm:tracking-[0.16em]"
            >
              Book Consultation
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-none border-0 bg-transparent p-0 text-[#2a1f1d] shadow-none transition-none hover:bg-transparent sm:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
            <span className="flex flex-col gap-1.5" aria-hidden="true">
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${
                  isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        <div
          className={`sm:hidden overflow-hidden px-6 transition-all duration-200 ${
            isOpen ? "max-h-40 pb-4 pt-3 opacity-100" : "max-h-0 pb-0 pt-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-3">
            <Link
              href={clinicContact.phoneHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#d9c6a9] bg-[#fff8ef] px-4 py-3 text-[#2a1f1d]"
              aria-label={`Call ${clinicContact.phone}`}
              onClick={() => setIsOpen(false)}
            >
              <span aria-hidden="true" className="flex h-5 w-5 items-center justify-center">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 5.5c0 8.28 5.72 14 14 14l1.5-1.5a1.5 1.5 0 0 0-.15-2.28l-3.07-2.36a1.5 1.5 0 0 0-1.86.04l-1.16.93a11.1 11.1 0 0 1-5.7-5.7l.93-1.16a1.5 1.5 0 0 0 .04-1.86L7.83 4.15a1.5 1.5 0 0 0-2.28-.15L4.5 5.5Z" />
                </svg>
              </span>
              <span className="text-sm font-medium tracking-wide">{clinicContact.phone}</span>
            </Link>

            <Link
              href={clinicContact.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#2a1f1d] px-4 py-3 text-sm font-medium tracking-[0.14em] text-[#fff8ef] transition-colors hover:bg-[#3a2a27]"
              onClick={() => setIsOpen(false)}
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
