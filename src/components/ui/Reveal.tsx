"use client";

import { animate, motion, useInView, type Variants } from "framer-motion";
import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn, EASE } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* FadeIn — the workhorse. Slides + fades once, when scrolled into view */
/* ------------------------------------------------------------------ */

export function FadeIn({
  children,
  className,
  delay = 0,
  y = 28,
  x = 0,
  duration = 0.9,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  duration?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: "-8% 0px -8% 0px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* SplitText — masked, per-word (or per-char) stagger reveal           */
/* ------------------------------------------------------------------ */

const hidden: Variants["hidden"] = { y: "112%", rotate: 3 };

export function SplitText({
  text,
  className,
  as: Tag = "span",
  by = "word",
  delay = 0,
  once = true,
  stagger = 0.05,
  duration = 0.95,
}: {
  text: string;
  className?: string;
  as?: ElementType;
  by?: "word" | "char";
  delay?: number;
  once?: boolean;
  stagger?: number;
  duration?: number;
}) {
  const tokens = by === "word" ? text.split(" ") : Array.from(text);

  return (
    <Tag className={cn("inline-block", className)}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden
        className="inline-block"
        initial="hidden"
        whileInView="show"
        viewport={{ once, margin: "-10% 0px -10% 0px" }}
      >
        {tokens.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="inline-block overflow-hidden align-bottom"
            style={{ paddingBottom: "0.09em", marginBottom: "-0.09em" }}
          >
            <motion.span
              className="inline-block whitespace-pre"
              variants={{
                hidden,
                show: {
                  y: "0%",
                  rotate: 0,
                  transition: { duration, delay: delay + i * stagger, ease: EASE },
                },
              }}
            >
              {by === "word" ? (i < tokens.length - 1 ? `${t} ` : t) : t === " " ? " " : t}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/* Counter — animates 0 -> value when scrolled into view               */
/* ------------------------------------------------------------------ */

export function Counter({
  value,
  suffix = "",
  duration = 1.8,
  className,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {n}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* LineGrow — a hairline that draws itself in                          */
/* ------------------------------------------------------------------ */

export function LineGrow({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      className={cn("h-px w-full origin-left bg-line", className)}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, delay, ease: EASE }}
    />
  );
}
