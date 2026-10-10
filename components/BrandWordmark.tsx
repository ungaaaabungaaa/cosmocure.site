/** A small orbital sparkle around the initial keeps the brand readable. */
export function BrandWordmark() {
  return (
    <span className="relative inline-block">
      <svg aria-hidden="true" focusable="false" viewBox="0 0 30 22" fill="none" stroke="currentColor" strokeWidth="0.85" className="pointer-events-none absolute -left-[0.2em] -top-[0.22em] h-[0.55em] w-[0.75em] opacity-80">
        <path d="M3 20C0 12 7 3 17 3" strokeDasharray="1 3" strokeLinecap="round" />
        <path d="m21 1 1.6 5.4L28 8l-5.4 1.6L21 15l-1.6-5.4L14 8l5.4-1.6Z" />
      </svg>
      Cosmocure
    </span>
  );
}
