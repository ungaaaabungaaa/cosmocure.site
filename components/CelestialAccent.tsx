type CelestialAccentProps = {
  variant?: "moon" | "orbit" | "stars";
  className?: string;
};

/** Quiet decorative marks; never part of the reading or keyboard order. */
export function CelestialAccent({ variant = "stars", className = "" }: CelestialAccentProps) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" className={`pointer-events-none absolute h-10 w-10 text-caramel/60 sm:h-16 sm:w-16 ${className}`}>
      {variant === "moon" ? <>
        <path d="M57 17a30 30 0 1 0 22 46A29 29 0 0 1 57 17Z" />
        <path d="m72 19 2.5 8.5L83 30l-8.5 2.5L72 41l-2.5-8.5L61 30l8.5-2.5Z" />
        <circle cx="84" cy="51" r="1" />
      </> : variant === "orbit" ? <>
        <circle cx="48" cy="48" r="23" />
        <ellipse cx="48" cy="48" rx="42" ry="12" transform="rotate(-32 48 48)" />
        <circle cx="79" cy="22" r="3" />
        <path d="M21 12v8m-4-4h8" />
      </> : <>
        <path d="m48 18 6 24 24 6-24 6-6 24-6-24-24-6 24-6Z" />
        <path d="m77 10 2.5 9.5L89 22l-9.5 2.5L77 34l-2.5-9.5L65 22l9.5-2.5ZM17 65l2.5 9.5L29 77l-9.5 2.5L17 89l-2.5-9.5L5 77l9.5-2.5Z" />
      </>}
    </svg>
  );
}
