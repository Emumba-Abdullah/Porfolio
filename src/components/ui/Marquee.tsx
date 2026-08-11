"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * Pure-CSS infinite marquee. Children are duplicated once; the track
 * translates -50% so the loop is seamless.
 */
export default function Marquee({
  children,
  speed = 40,
  reverse = false,
  className,
  fade = true,
  pauseOnHover = false,
}: {
  children: ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
  fade?: boolean;
  pauseOnHover?: boolean;
}) {
  return (
    <div
      className={cn("group relative w-full overflow-hidden", fade && "marquee-mask", className)}
      aria-hidden
    >
      <div
        className={cn(
          "flex w-max",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
        style={{ ["--marquee-duration" as string]: `${speed}s` }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center">{children}</div>
      </div>
    </div>
  );
}
