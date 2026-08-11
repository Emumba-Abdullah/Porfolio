"use client";

import { motion, useInView } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { recommendations } from "@/lib/data";
import { cn, EASE } from "@/lib/utils";
import SectionHeading from "../ui/SectionHeading";

/** ms each recommendation stays on screen before auto-advancing */
const DWELL = 7000;

function initialsOf(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export default function Recommendations() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const rec = recommendations[active];

  /* only run the carousel while the section is actually on screen */
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { margin: "-15% 0px -15% 0px" });
  const running = inView && !hovered;

  /* ---------------- auto-advance ---------------- */
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clear = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  useEffect(() => {
    if (!running) return;
    timer.current = setTimeout(
      () => setActive((i) => (i + 1) % recommendations.length),
      DWELL,
    );
    return clear;
  }, [active, running, clear]);

  /* keyboard nav on the list */
  function onKey(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (i + 1) % recommendations.length);
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (i - 1 + recommendations.length) % recommendations.length);
    }
  }

  return (
    <section ref={sectionRef} id="recommendations" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          index="06"
          label="Recommendations"
          title={"What colleagues\nhave said"}
          note={`${recommendations.length} recommendations from LinkedIn — the people who shipped alongside me.`}
        />

        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16"
        >
          {/* ---------------------------------------------------------- */}
          {/* Name index                                                  */}
          {/* ---------------------------------------------------------- */}
          <div
            role="tablist"
            aria-label="Recommendations"
            aria-orientation="vertical"
            tabIndex={0}
            onKeyDown={onKey}
            className="order-2 -mx-2 rounded-xl outline-none focus-visible:ring-1 focus-visible:ring-acid/40 lg:order-1"
          >
            {recommendations.map((r, i) => {
              const on = i === active;
              return (
                <button
                  key={r.name}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  data-cursor="hover"
                  className="group relative block w-full px-2 py-[7px] text-left"
                >
                  {/* left rail */}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute top-1/2 left-0 h-[calc(100%-10px)] w-px -translate-y-1/2 transition-colors duration-500",
                      on ? "bg-acid" : "bg-transparent group-hover:bg-line",
                    )}
                  />
                  <span
                    className={cn(
                      "flex items-baseline gap-3 pl-4 transition-transform duration-500 ease-[var(--ease-out-expo)]",
                      on ? "translate-x-1" : "group-hover:translate-x-1",
                    )}
                  >
                    <span
                      className={cn(
                        "font-mono text-[10px] transition-colors duration-400",
                        on ? "text-acid" : "text-mute-2 group-hover:text-mute",
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "display truncate text-[15px] tracking-tight transition-colors duration-400 md:text-base",
                        on ? "text-bone" : "text-mute-2 group-hover:text-mute",
                      )}
                    >
                      {r.name}
                    </span>
                  </span>

                  {/* dwell progress under the active name */}
                  {on && (
                    <motion.span
                      key={`bar-${active}-${running}`}
                      aria-hidden
                      className="absolute bottom-0 left-4 h-px origin-left bg-acid/45"
                      style={{ right: "0.5rem" }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: running ? 1 : 0 }}
                      transition={{ duration: running ? DWELL / 1000 : 0.3, ease: "linear" }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* ---------------------------------------------------------- */}
          {/* Spotlight panel                                             */}
          {/* ---------------------------------------------------------- */}
          <div className="relative order-1 min-h-[24rem] lg:order-2">
            {/* oversized ghost quote mark */}
            <span
              aria-hidden
              className="display pointer-events-none absolute -top-8 -left-2 -z-10 text-[11rem] leading-none text-bone/[0.035] select-none md:-top-12 md:text-[15rem]"
            >
              "
            </span>

            {/* keyed remount rather than <AnimatePresence mode="wait"> — an exit
                animation that never reports completion would otherwise deadlock
                the panel on a stale recommendation while the index kept advancing */}
            <motion.div
              key={rec.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="flex h-full flex-col"
            >
                {/* the quote — paragraphs stagger in */}
                <div className="flex-1 space-y-4">
                  {rec.body.split("\n\n").map((para, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.55, delay: 0.08 + i * 0.07, ease: EASE }}
                      className="text-[15px] leading-relaxed text-mute md:text-lg md:leading-[1.75]"
                    >
                      {para}
                    </motion.p>
                  ))}
                </div>

                {/* attribution */}
                <motion.a
                  href={rec.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25, ease: EASE }}
                  className="group mt-10 flex items-center gap-4 border-t border-line pt-6"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-acid/25 bg-acid/[0.08] font-mono text-xs font-bold text-acid transition-colors duration-500 group-hover:bg-acid group-hover:text-black">
                    {initialsOf(rec.name)}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="font-semibold tracking-tight text-bone transition-colors duration-300 group-hover:text-acid">
                        {rec.name}
                      </span>
                      <span className="rounded-full border border-line px-2 py-[2px] font-mono text-[9px] tracking-[0.13em] text-mute-2 uppercase">
                        {rec.relationship}
                      </span>
                      <span className="mono-label">{rec.date}</span>
                    </span>
                    <span className="mt-1 block truncate text-xs text-mute-2">{rec.title}</span>
                  </span>

                  <span className="flex shrink-0 items-center gap-1.5 font-mono text-[10px] tracking-[0.14em] text-mute uppercase transition-colors duration-300 group-hover:text-acid">
                    <span className="hidden sm:inline">Profile</span>
                    <FiArrowUpRight className="size-4 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
