"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/lib/data";
import { useReducedMotion } from "@/lib/useMediaQuery";
import { EASE_IN_OUT } from "@/lib/utils";

const WORDS = ["React", "TypeScript", "FastAPI", "AWS", site.shortName];

/**
 * Intro curtain: counts to 100 while cycling stack words, then splits
 * open in two panels to reveal the hero.
 */
export default function Preloader() {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(false);
  const [pct, setPct] = useState(0);
  const [word, setWord] = useState(0);

  useEffect(() => {
    if (reduce) return;

    let n = 0;
    const tick = setInterval(() => {
      n = Math.min(100, n + Math.ceil(Math.random() * 7) + 2);
      setPct(n);
      if (n >= 100) clearInterval(tick);
    }, 55);

    const cycle = setInterval(() => setWord((w) => (w + 1) % WORDS.length), 240);
    const end = setTimeout(() => setDone(true), 1750);

    return () => {
      clearInterval(tick);
      clearInterval(cycle);
      clearTimeout(end);
    };
  }, [reduce]);

  return (
    <AnimatePresence>
      {!done && !reduce && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col"
          exit={{ pointerEvents: "none" }}
          transition={{ duration: 0 }}
        >
          <motion.div
            className="flex-1 bg-ink"
            exit={{ y: "-101%" }}
            transition={{ duration: 0.9, ease: EASE_IN_OUT }}
          />
          <motion.div
            className="flex-1 bg-ink"
            exit={{ y: "101%" }}
            transition={{ duration: 0.9, ease: EASE_IN_OUT }}
          />

          <motion.div
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="flex flex-col items-center gap-6">
              <div className="relative h-8 overflow-hidden">
                <AnimatePresence mode="popLayout">
                  <motion.p
                    key={word}
                    className="font-mono text-sm tracking-[0.2em] text-mute uppercase"
                    initial={{ y: 28, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -28, opacity: 0 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                  >
                    {WORDS[word]}
                  </motion.p>
                </AnimatePresence>
              </div>

              <div className="h-px w-40 overflow-hidden bg-line md:w-64">
                <motion.div
                  className="h-full origin-left bg-acid"
                  animate={{ scaleX: pct / 100 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  style={{ transformOrigin: "left" }}
                />
              </div>

              <p className="display text-6xl text-bone md:text-8xl">
                {String(pct).padStart(3, "0")}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
