"use client";

import { BrandWordmark } from "@/components/BrandWordmark";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

export function SiteMotion() {
  const pathname = usePathname();
  const splashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const splash = splashRef.current;
    const site = document.getElementById("site-content");
    if (!splash || !site) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) return;

    let seen = false;
    try { seen = sessionStorage.getItem("cosmocure-intro") === "seen"; } catch { /* Storage may be disabled. */ }
    let finished = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let observer: IntersectionObserver | undefined;
    let intro: gsap.core.Timeline | undefined;
    const animations: gsap.core.Tween[] = [];
    const previousFocus = document.activeElement as HTMLElement | null;
    const skip = splash.querySelector<HTMLButtonElement>("button");

    const animatePage = () => {
      if (motion.matches) return;
      const hero = site.querySelector("#hero");
      if (hero) animations.push(gsap.fromTo(hero, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75, clearProps: "transform,opacity", ease: "power2.out" }));
      observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer?.unobserve(entry.target);
          animations.push(gsap.fromTo(entry.target, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, clearProps: "transform,opacity", ease: "power2.out" }));
        }
      }, { threshold: 0.12 });
      site.querySelectorAll("[data-reveal]").forEach(element => observer?.observe(element));
    };

    const finish = () => {
      if (finished) return;
      finished = true;
      clearTimeout(timer);
      intro?.kill();
      splash.style.display = "none";
      site.inert = false;
      document.documentElement.style.overflow = "";
      if (document.activeElement === skip) {
        if (previousFocus && previousFocus !== document.body) previousFocus.focus({ preventScroll: true });
        else site.querySelector<HTMLElement>("a")?.focus({ preventScroll: true });
      }
      animatePage();
    };
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") finish(); };
    const onMotionChange = () => {
      if (!motion.matches) return;
      finish();
      observer?.disconnect();
      animations.forEach(animation => animation.progress(1).kill());
    };

    if (seen) {
      finished = true;
      animatePage();
    } else {
      try { sessionStorage.setItem("cosmocure-intro", "seen"); } catch { /* The intro still works without storage. */ }
      splash.style.display = "grid";
      site.inert = true;
      document.documentElement.style.overflow = "hidden";
      skip?.focus({ preventScroll: true });
      skip?.addEventListener("click", finish);
      document.addEventListener("keydown", onKey);
      // Never leave the website blocked if an animation is interrupted.
      timer = setTimeout(finish, 3500);
      intro = gsap.timeline({ onComplete: finish });
      intro.fromTo(splash.querySelector(".splash-brand"), { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75, ease: "power3.out" }, 0)
        .fromTo(splash.querySelectorAll(".splash-detail"), { y: 8, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, stagger: 0.1 }, 0.2)
        .fromTo(splash.querySelectorAll(".splash-flower"), { opacity: 0, scale: 0.97 }, { opacity: 0.25, scale: 1, duration: 1.2, ease: "power2.out" }, 0)
        .fromTo(splash.querySelector(".splash-rule span"), { scaleX: 0 }, { scaleX: 1, duration: 1.45, ease: "power1.inOut" }, 0.2)
        .to(splash, { clipPath: "inset(0% 0% 100% 0%)", duration: 0.65, ease: "power3.inOut" }, 1.8);
    }
    motion.addEventListener("change", onMotionChange);
    return () => {
      clearTimeout(timer);
      intro?.kill();
      observer?.disconnect();
      animations.forEach(animation => { animation.progress(1); animation.kill(); });
      skip?.removeEventListener("click", finish);
      document.removeEventListener("keydown", onKey);
      motion.removeEventListener("change", onMotionChange);
      site.inert = false;
      document.documentElement.style.overflow = "";
      splash.style.display = "none";
    };
  }, [pathname]);

  return (
    <div ref={splashRef} className="site-splash" role="dialog" aria-modal="true" aria-label="Welcome to Cosmocure" style={{ display: "none" }}>
      <Image className="splash-flower splash-flower-left" src="/images/gold-cosmos.webp" width={400} height={600} alt="" />
      <Image className="splash-flower splash-flower-right" src="/images/gold-cosmos.webp" width={400} height={600} alt="" />
      <div className="splash-content">
        <p className="splash-detail splash-eyebrow">A moment for yourself</p>
        <p className="splash-brand font-display"><BrandWordmark /></p>
        <p className="splash-detail splash-tagline">Heal Within, Glow Beyond</p>
        <div className="splash-rule" aria-hidden="true"><span /></div>
      </div>
      <p className="splash-detail splash-location">Aalo · Arunachal Pradesh</p>
      <button className="splash-skip" type="button">Skip intro</button>
    </div>
  );
}
