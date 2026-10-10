"use client";

import { useEffect, useState } from "react";
import { MapPin, Phone } from "lucide-react";
import { clinicContact } from "@/lib/contact";

export function MobileQuickActions() {
  const [atFooter, setAtFooter] = useState(false);
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const observer = new IntersectionObserver(([entry]) => setAtFooter(entry.isIntersecting));
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);
  return (
    <nav aria-label="Quick clinic contact" className={`fixed bottom-[calc(max(12px,env(safe-area-inset-bottom))+2dvh)] left-1/2 z-40 flex -translate-x-1/2 items-center gap-1 rounded-full bg-[#2a1f1d] p-0.5 text-white shadow-lg sm:hidden ${atFooter ? "invisible pointer-events-none" : "visible"}`}>
      <a href={clinicContact.phoneHref} aria-label="Call Cosmocure" className="flex min-h-11 items-center justify-center gap-1.5 rounded-full px-2 py-1 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"><Phone size={16} aria-hidden="true" /><span className="text-[11px] leading-4">Call us</span></a>

      <a href={clinicContact.mapsHref} target="_blank" rel="noreferrer" aria-label="Directions to Cosmocure" className="flex min-h-11 items-center justify-center gap-1.5 rounded-full px-2 py-1 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"><MapPin size={16} aria-hidden="true" /><span className="whitespace-nowrap text-[11px] leading-4">Visit us</span></a>
    </nav>
  );
}
