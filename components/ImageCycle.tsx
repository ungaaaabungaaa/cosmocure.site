"use client";

import Image from "next/image";
import { FloralAccent } from "@/components/FloralAccent";
import { useEffect, useRef, useState, type CSSProperties } from "react";

export type CycleImage = { src: string; alt: string };

/** Decorative campaign images; essential service information stays in the text. */
export function ImageCycle({ images, priority = false, className = "", sizes = "(min-width: 1024px) 40vw, 100vw", intervalMs = 7100, artwork }: {
  images: CycleImage[];
  priority?: boolean;
  intervalMs?: number;
  className?: string;
  sizes?: string;
  artwork?: { aspectRatio: string; photoWindow: CSSProperties; floralFrame?: "hero" | "gift"; clip?: string };
}) {
  const container = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const element = container.current;
    if (!element || images.length < 2) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    observer.observe(element);
    const timer = window.setInterval(() => {
      if (!visible || document.hidden || motion.matches || element.matches(":hover")) return;
      setActive((index) => (index + 1) % images.length);
    }, intervalMs);
    return () => { observer.disconnect(); window.clearInterval(timer); };
  }, [images.length, intervalMs]);

  return (
    <div ref={container} style={artwork ? { aspectRatio: artwork.aspectRatio } : undefined} className={`relative w-full ${artwork ? "" : "aspect-[4/5] overflow-hidden rounded-[2.25rem] bg-[#e8dacb]"} ${className}`} data-image-cycle data-cycle-ms={intervalMs} data-image-sources={images.map(image => image.src).join(",")} data-active-slide={active}>
      {artwork?.floralFrame && <FloralAccent variant={artwork.floralFrame} />}
      {artwork && (artwork.floralFrame ? <div className="absolute overflow-hidden" style={artwork.photoWindow}>
        <Image src={images[0].src} alt={images[0].alt} aria-hidden={active !== 0} fill sizes={sizes} preload={priority} className="object-contain" style={{
          maxWidth: "none",
          width: `${10000 / parseFloat(String(artwork.photoWindow.width))}%`,
          height: `${10000 / parseFloat(String(artwork.photoWindow.height))}%`,
          left: `${-100 * parseFloat(String(artwork.photoWindow.left)) / parseFloat(String(artwork.photoWindow.width))}%`,
          top: `${-100 * parseFloat(String(artwork.photoWindow.top)) / parseFloat(String(artwork.photoWindow.height))}%`,
        }} />
      </div> : <Image src={images[0].src} alt={images[0].alt} aria-hidden={active !== 0} fill sizes={sizes} preload={priority} className="object-contain" />)}
      {images.map((image, index) => {
        if (artwork && index === 0) return null;
        const photo = <Image src={image.src} alt={image.alt} fill sizes={sizes} preload={!artwork && priority && index === 0} className="object-cover" />;
        return (
          <div key={image.src} aria-hidden={index !== active} className={`absolute inset-0 transition-opacity duration-1000 motion-reduce:transition-none ${index === active ? "opacity-100" : "opacity-0"}`} style={artwork ? { maskImage: `url(${images[0].src})`, maskSize: "100% 100%", maskRepeat: "no-repeat" } : undefined}>
            {artwork ? <div className="absolute overflow-hidden" style={artwork.photoWindow}>{photo}</div> : photo}
          </div>
        );
      })}
    </div>
  );
}
