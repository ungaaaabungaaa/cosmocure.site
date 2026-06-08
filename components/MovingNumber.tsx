"use client";

import { useEffect, useState } from "react";

function formatValue(value: number, useCompactFormat: boolean) {
  if (useCompactFormat) {
    return new Intl.NumberFormat("en", {
      maximumFractionDigits: 1,
      notation: "compact",
    }).format(value);
  }

  return new Intl.NumberFormat("en", {
    maximumFractionDigits: 0,
  }).format(value);
}

type MovingNumberProps = {
  duration?: number;
  suffix?: string;
  useCompactFormat?: boolean;
  value: number;
};

export function MovingNumber({
  duration = 1400,
  suffix = "",
  useCompactFormat = false,
  value,
}: MovingNumberProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let animationFrame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(value * eased);

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(tick);
      }
    };

    animationFrame = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [duration, value]);

  return (
    <span aria-label={`${formatValue(value, useCompactFormat)}${suffix}`}>
      {formatValue(displayValue, useCompactFormat)}
      {suffix}
    </span>
  );
}
