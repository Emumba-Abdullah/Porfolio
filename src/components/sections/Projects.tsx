"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiCornerDownRight } from "react-icons/fi";
import { projects, type Project } from "@/lib/data";
import { useMediaQuery, useReducedMotion } from "@/lib/useMediaQuery";
import { cn } from "@/lib/utils";
import SectionHeading from "../ui/SectionHeading";
import { TechIcon } from "../ui/TechIcon";

/**
 * Horizontal scroll gallery: the section is pinned for its own height and the
 * track slides sideways as you scroll. Falls back to a vertical stack on
 * small screens and for reduced-motion users.
 */
export default function Projects() {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [shift, setShift] = useState(0);

  // The pinned track lives inside a 100svh box with `overflow-hidden`, so it
  // only works when the viewport is tall enough to hold a full card plus the
  // progress rail. On short laptop screens we fall back to the vertical stack
  // instead of cropping the cards.
  const wide = useMediaQuery("(min-width: 1024px) and (min-height: 720px)");
  const reduce = useReducedMotion();
  const horizontal = wide && !reduce;

  // Measure AFTER `horizontal` has settled, so we read the horizontal track
  // (not the stacked fallback) and the pin distance matches the real overflow.
  useLayoutEffect(() => {
    const measure = () => {
      if (horizontal && track.current) {
        setShift(Math.max(0, track.current.scrollWidth - window.innerWidth + 64));
      } else {
        setShift(0);
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (track.current) ro.observe(track.current);
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [horizontal]);

  // `wrap` is rendered in both branches so this target is always hydrated —
  // motion throws "Target ref is defined but not hydrated" otherwise, since the
  // first client render is always the non-horizontal fallback.
  const { scrollYProgress } = useScroll({
    target: wrap,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -shift]);
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="work" className="relative">
      <div className="container-x pt-24 md:pt-32">
        <SectionHeading
          index="01"
          label="Selected work"
          title={"Things I built that\nshipped to real users"}
          note={`${projects.length} projects · Microsoft, Fortune 500 & enterprise clients`}
        />
      </div>

      <div
        ref={wrap}
        className="relative"
        style={horizontal ? { height: `calc(100svh + ${shift}px)` } : undefined}
      >
        {horizontal ? (
          <div className="sticky top-0 flex h-[100svh] flex-col justify-center gap-10 overflow-hidden py-8">
            <motion.div
              ref={track}
              style={{ x }}
              className="flex min-h-0 shrink gap-6 pl-8 pr-16 xl:pl-16"
            >
              {projects.map((p) => (
                <Card key={p.index} p={p} />
              ))}
              <EndCard />
            </motion.div>

            {/* progress rail */}
            <div className="container-x shrink-0">
              <div className="flex items-center gap-4">
                <span className="mono-label shrink-0">Drag / scroll</span>
                <div className="relative h-px flex-1 bg-line">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-acid"
                    style={{ width: progress }}
                  />
                </div>
                <span className="mono-label shrink-0">{projects.length} / Work</span>
              </div>
            </div>
          </div>
        ) : (
          <div ref={track} className="container-x mt-12 flex flex-col gap-6">
            {projects.map((p) => (
              <Card key={p.index} p={p} stacked />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Card({ p, stacked = false }: { p: Project; stacked?: boolean }) {
  const Tag = p.href ? "a" : "div";

  return (
    <motion.div
      initial={stacked ? { opacity: 0, y: 40 } : false}
      whileInView={stacked ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn("shrink-0", stacked ? "w-full" : "w-[clamp(22rem,34vw,32rem)]")}
    >
      <Tag
        {...(p.href ? { href: p.href, target: "_blank", rel: "noreferrer" } : {})}
        data-cursor={p.href ? "view" : "hover"}
        data-cursor-label={p.href ? "Visit" : undefined}
        className={cn(
          "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-line bg-ink-2 p-6 transition-colors duration-500 hover:border-acid/40 md:p-8",
          // Never taller than the pinned viewport box, or the card gets cropped
          // top and bottom by the `overflow-hidden` on short screens.
          !stacked && "min-h-[min(30rem,calc(100svh-9rem))]",
        )}
      >
        {/* hover wash */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(120% 80% at 50% 0%, rgba(200,255,0,0.10), transparent 60%)",
          }}
        />
        {/* corner index, huge & ghosted */}
        <span
          aria-hidden
          className="display pointer-events-none absolute -right-2 -bottom-6 text-[9rem] leading-none text-bone/[0.035] transition-all duration-700 group-hover:text-acid/10"
        >
          {p.index}
        </span>

        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="mono-label">
                {p.index} — {p.subtitle}
              </span>
              <h3 className="display mt-3 text-3xl text-bone md:text-4xl">{p.title}</h3>
            </div>
            {p.href && (
              <span className="mt-1 grid size-10 shrink-0 place-items-center rounded-full border border-line text-mute transition-all duration-500 group-hover:border-acid group-hover:bg-acid group-hover:text-black">
                <FiArrowUpRight className="size-4" />
              </span>
            )}
          </div>

          {p.accentText && (
            <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-acid/30 bg-acid/[0.07] px-2.5 py-1 font-mono text-[10px] tracking-[0.12em] text-acid uppercase">
              ★ {p.accentText}
            </span>
          )}

          <p className="mt-4 text-sm leading-relaxed text-mute">{p.description}</p>

          <ul className="mt-5 space-y-2">
            {p.highlights.slice(0, stacked ? 4 : 3).map((h) => (
              <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-mute/90">
                <FiCornerDownRight className="mt-1 size-3.5 shrink-0 text-acid/70" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mt-7 border-t border-line/70 pt-5">
          <div className="mb-3 flex items-center justify-between">
            <span className="mono-label">{p.role}</span>
            <span className="mono-label">{p.year}</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <span
                key={s}
                className="rounded-md border border-line/80 bg-ink-3 px-2 py-1 font-mono text-[10px] tracking-wide text-mute"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </Tag>
    </motion.div>
  );
}

function EndCard() {
  return (
    <div className="flex w-[clamp(18rem,24vw,24rem)] shrink-0 flex-col justify-end rounded-2xl border border-dashed border-line p-8">
      <TechIcon name="react" className="size-10 animate-spin-slow text-acid/60" />
      <p className="display mt-6 text-3xl text-bone">
        More
        <br />
        on request
      </p>
      <p className="mt-3 text-sm leading-relaxed text-mute">
        Several projects live behind NDAs. Happy to walk through architecture and decisions on a
        call.
      </p>
      <a
        href="#contact"
        data-cursor="hover"
        className="mt-6 inline-flex items-center gap-2 text-sm text-acid"
      >
        Get in touch <FiArrowUpRight className="size-4" />
      </a>
    </div>
  );
}
