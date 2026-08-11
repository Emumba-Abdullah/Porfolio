"use client";

import { marqueeIcons, ticker } from "@/lib/data";
import Marquee from "../ui/Marquee";
import { TechIcon, techColor, techLabel } from "../ui/TechIcon";

/** Word ticker + a second, reversed belt of tech logos that colourise on hover. */
export default function Ticker() {
  return (
    <section className="relative z-10 border-y border-line/70 bg-ink-2/60 py-0" aria-label="Stack">
      {/* words */}
      <div className="border-b border-line/50 py-4">
        <Marquee speed={38}>
          {ticker.map((t, i) => (
            <span key={`${t}-${i}`} className="flex items-center">
              <span className="display px-6 text-2xl text-bone/90 md:text-4xl">{t}</span>
              <span className="size-1.5 rounded-full bg-acid" />
            </span>
          ))}
        </Marquee>
      </div>

      {/* logos */}
      <div className="py-6">
        <Marquee speed={52} reverse pauseOnHover>
          {marqueeIcons.map((k, i) => (
            <span
              key={`${k}-${i}`}
              className="group/logo flex shrink-0 items-center gap-3 px-7"
              title={techLabel(k)}
            >
              <TechIcon
                name={k}
                className="size-7 text-mute transition-all duration-500 group-hover/logo:scale-125 group-hover/logo:text-[color:var(--c)] md:size-8"
                style={{ ["--c" as string]: techColor(k) }}
              />
              <span className="font-mono text-[10px] tracking-[0.16em] whitespace-nowrap text-mute uppercase transition-colors duration-500 group-hover/logo:text-bone">
                {techLabel(k)}
              </span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
