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
    <nav aria-label="Quick clinic contact" className={`fixed bottom-[calc(max(12px,env(safe-area-inset-bottom))+2dvh)] left-1/2 z-40 flex -translate-x-1/2 items-center rounded-full bg-[#2a1f1d] p-1 text-white shadow-lg sm:hidden ${atFooter ? "invisible pointer-events-none" : "visible"}`}>
      <a href={clinicContact.phoneHref} aria-label="Call Cosmocure" title="Call us" className="flex h-11 items-center justify-center gap-2 rounded-full px-4 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"><Phone size={18} aria-hidden="true" className="call-attention" /><span>Call</span></a>
      <span aria-hidden="true" className="h-6 w-px bg-white/25" />
      <a href={clinicContact.mapsHref} target="_blank" rel="noreferrer" aria-label="Directions to Cosmocure" title="Visit us" className="flex h-11 w-11 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"><MapPin size={20} aria-hidden="true" /></a>
    </nav>
  );
}
