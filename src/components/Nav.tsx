"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { navLinks, site, socials } from "@/lib/data";
import { setScrollLocked } from "./providers/SmoothScroll";
import { cn, EASE, EASE_IN_OUT } from "@/lib/utils";
import Magnetic from "./ui/Magnetic";

export default function Nav() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [up, setUp] = useState(true);
  const [open, setOpen] = useState(false);
  const [last, setLast] = useState(0);

  // The overlay covers the viewport — don't let the page scroll behind it.
  useEffect(() => {
    setScrollLocked(open);
    return () => setScrollLocked(false);
  }, [open]);

  useMotionValueEvent(scrollY, "change", (v) => {
    setSolid(v > 40);
    if (Math.abs(v - last) > 8) {
      setUp(v < last || v < 120);
      setLast(v);
    }
  });

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        animate={{ y: up || open ? 0 : "-110%" }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <div
          className={cn(
            "transition-colors duration-500",
            solid && !open
              ? "border-b border-line/70 bg-ink/70 backdrop-blur-xl"
              : "border-b border-transparent",
          )}
        >
          <nav className="container-x flex h-16 items-center justify-between md:h-20">
            {/* Wordmark */}
            <a
              href="#top"
              data-cursor="hover"
              className="group flex items-center gap-2.5"
              aria-label={site.name}
            >
              <span className="relative grid size-8 place-items-center overflow-hidden rounded-full border border-line">
                <span className="absolute inset-0 scale-0 rounded-full bg-acid transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-100" />
                <span className="relative font-mono text-[11px] font-bold tracking-tight text-bone transition-colors duration-300 group-hover:text-black">
                  {site.initials}
                </span>
              </span>
              <span className="hidden text-sm font-medium tracking-tight text-bone sm:block">
                {site.shortName}
              </span>
            </a>

            {/* Desktop links */}
            <ul className="hidden items-center gap-1 md:flex">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    data-cursor="hover"
                    className="group relative block px-3.5 py-2 text-sm text-mute transition-colors hover:text-bone"
                  >
                    <span className="relative block overflow-hidden">
                      <span className="block transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-y-full">
                        {l.label}
                      </span>
                      <span className="absolute left-0 top-0 block translate-y-full text-acid transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-y-0">
                        {l.label}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <Magnetic strength={0.2} className="hidden md:block">
                <a
                  href={site.resume}
                  download
                  data-cursor="hover"
                  className="group flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-bone transition-colors hover:border-acid hover:text-acid"
                >
                  Résumé
                  <FiArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Magnetic>

              <button
                onClick={() => setOpen((o) => !o)}
                data-cursor="hover"
                aria-label={open ? "Close menu" : "Open menu"}
                className="grid size-11 place-items-center rounded-full border border-line text-bone transition-colors hover:border-acid hover:text-acid md:hidden"
              >
                {open ? <FiX className="size-4" /> : <FiMenu className="size-4" />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-between gap-10 overflow-y-auto overscroll-contain bg-ink px-6 pt-24 pb-10 md:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.65, ease: EASE_IN_OUT }}
          >
            <ul className="shrink-0 space-y-1">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.18 + i * 0.06, duration: 0.6, ease: EASE }}
                  className="border-b border-line/60"
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="display flex items-baseline justify-between gap-4 py-3.5 text-3xl text-bone sm:py-4 sm:text-4xl"
                  >
                    {l.label}
                    <span className="mono-label">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="shrink-0 space-y-4"
            >
              <a
                href={site.resume}
                download
                className="flex items-center justify-center gap-2 rounded-full bg-acid py-3.5 text-sm font-semibold text-black"
              >
                Download résumé <FiArrowUpRight className="size-4" />
              </a>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mono-label hover:text-acid"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
