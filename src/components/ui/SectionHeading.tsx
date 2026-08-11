"use client";

import { cn } from "@/lib/utils";
import { FadeIn, LineGrow, SplitText } from "./Reveal";

/**
 * Shared section header: index chip, mono label, big split-reveal title,
 * hairline that draws itself in.
 * Use "\n" in `title` to force a line break.
 */
export default function SectionHeading({
  index,
  label,
  title,
  note,
  align = "left",
  className,
}: {
  index: string;
  label: string;
  title: string;
  note?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const lines = title.split("\n");

  return (
    <div className={cn("relative", align === "center" && "text-center", className)}>
      <FadeIn y={16}>
        <div
          className={cn(
            "flex items-center gap-3",
            align === "center" && "justify-center",
          )}
        >
          <span className="grid size-7 place-items-center rounded-full border border-acid/40 font-mono text-[10px] text-acid">
            {index}
          </span>
          <span className="mono-label">{label}</span>
        </div>
      </FadeIn>

      <h2 className="mt-5">
        {lines.map((line, i) => (
          <span key={line} className="block">
            <SplitText
              text={line}
              delay={i * 0.08}
              className={cn(
                "display text-[clamp(2.2rem,6.5vw,5.5rem)] text-bone",
                i > 0 && "text-mute-2",
              )}
            />
          </span>
        ))}
      </h2>

      {note && (
        <FadeIn delay={0.25} y={14}>
          <p className={cn("mt-5 max-w-xl text-sm text-mute", align === "center" && "mx-auto")}>
            {note}
          </p>
        </FadeIn>
      )}

      <LineGrow className="mt-8" delay={0.15} />
    </div>
  );
}
