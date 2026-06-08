"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type NumberTickerProps = {
  className?: string;
  decimalPlaces?: number;
  delay?: number;
  direction?: "up" | "down";
  startValue?: number;
  value: number;
};

function formatValue(value: number, decimalPlaces: number) {
  return new Intl.NumberFormat("en", {
    maximumFractionDigits: decimalPlaces,
    minimumFractionDigits: decimalPlaces,
  }).format(value);
}

export function NumberTicker({
  className,
  decimalPlaces = 0,
  delay = 0,
  direction = "up",
  startValue = 0,
  value,
}: NumberTickerProps) {
  const [displayValue, setDisplayValue] = useState(startValue);

  useEffect(() => {
    let animationFrame = 0;
    const start = performance.now();
    const initialValue = direction === "down" ? value : startValue;
    const destinationValue = direction === "down" ? startValue : value;
    const totalDelta = destinationValue - initialValue;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / 1200, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(initialValue + totalDelta * eased);

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(tick);
      }
    };

    const timeoutId = window.setTimeout(() => {
      setDisplayValue(initialValue);
      animationFrame = window.requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [delay, direction, startValue, value]);

  return (
    <span
      className={cn(className)}
      aria-label={formatValue(value, decimalPlaces)}
    >
      {formatValue(displayValue, decimalPlaces)}
    </span>
  );
}
