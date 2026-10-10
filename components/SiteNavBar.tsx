"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MapPin, Menu, Phone, X } from "lucide-react";
import { clinicContact, clinicHours } from "@/lib/contact";
import { CelestialAccent } from "@/components/CelestialAccent";

const navigation = [
  ["Home", "/"], ["Treatments", "/services"], ["Gift Cards", "/#gift-cards"],
  ["FAQs", "/#faq"], ["Contact & Hours", "/contact"], ["Privacy Policy", "/privacy-policy"],
];

export function SiteNavBar() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => { dialog.current?.close(); setIsOpen(false); };
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 640px)");
    const onResize = () => { if (desktop.matches) { dialog.current?.close(); setIsOpen(false); } };
    desktop.addEventListener("change", onResize);
    return () => { document.documentElement.style.overflow = previous; desktop.removeEventListener("change", onResize); };
  }, [isOpen]);

  return (
    <section className="top-0 z-50 px-1 pb-2 pt-3 sm:pb-10 sm:pt-0">
      <div className="flex items-center justify-between gap-4 px-6 py-4 sm:gap-6 sm:px-10 sm:py-6">
        <Link href="/" className="min-w-0 font-display text-[1.9rem] leading-none text-caramel sm:text-[2.6rem]">Cosmocure</Link>
        <div className="hidden items-center gap-4 sm:flex">
          <a href={clinicContact.phoneHref} className="inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm text-espresso"><Phone size={18} aria-hidden="true" />{clinicContact.phone}</a>
          <a href={clinicContact.whatsappHref} target="_blank" rel="noreferrer" className="rounded-full bg-[#2a1f1d] px-7 py-4 text-sm tracking-[0.16em] text-[#fff8ef]">Book Consultation</a>
        </div>
        <button type="button" className="flex h-11 w-11 items-center justify-center text-espresso sm:hidden" aria-label="Open menu" aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => { dialog.current?.showModal(); setIsOpen(true); }}><Menu size={25} aria-hidden="true" /></button>
      </div>
      <dialog ref={dialog} id="mobile-navigation" aria-labelledby="menu-title" className="mobile-drawer" onClose={() => setIsOpen(false)} onClick={event => { if (event.target === dialog.current) { const bounds = dialog.current.getBoundingClientRect(); if (event.clientX < bounds.left) closeMenu(); } }}>
        <div className="relative flex min-h-full flex-col p-6">
          <div className="flex items-center justify-between gap-4">
            <h2 id="menu-title" className="font-display text-2xl text-caramel">Cosmocure</h2>
            <button type="button" onClick={closeMenu} aria-label="Close menu" className="flex h-11 w-11 items-center justify-center rounded-full border border-caramel/25 text-espresso"><X size={22} aria-hidden="true" /></button>
          </div>
          <p className="mt-2 text-xs tracking-[0.12em] text-muted">Heal Within, Glow Beyond</p>
          <nav aria-label="Main navigation" className="mt-8 flex flex-col">
            {navigation.map(([label, href]) => <Link key={href} href={href} onClick={closeMenu} className="border-b border-caramel/20 py-3.5 text-base text-espresso hover:text-caramel">{label}</Link>)}
          </nav>
          <div className="relative mt-auto pt-8">
            <CelestialAccent className="right-0 top-3 h-8! w-8!" />
            <p className="text-xs leading-6 text-muted">{clinicHours.weekdays}<br />{clinicHours.sunday}</p>
            <a href={clinicContact.whatsappHref} target="_blank" rel="noreferrer" onClick={closeMenu} className="mt-5 block rounded-full bg-[#2a1f1d] px-5 py-3 text-center text-sm text-[#fff8ef]">Book Consultation</a>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <a href={clinicContact.phoneHref} onClick={closeMenu} className="flex min-h-11 items-center justify-center gap-2 rounded-full border border-caramel/30 text-sm"><Phone size={16} aria-hidden="true" />Call</a>
              <a href={clinicContact.mapsHref} target="_blank" rel="noreferrer" onClick={closeMenu} className="flex min-h-11 items-center justify-center gap-2 rounded-full border border-caramel/30 text-sm"><MapPin size={16} aria-hidden="true" />Directions</a>
            </div>
          </div>
        </div>
      </dialog>
    </section>
  );
}
