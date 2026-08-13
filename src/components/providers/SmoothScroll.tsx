"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Live Lenis instance, so overlays can freeze the page behind them. */
let current: Lenis | null = null;

/**
 * Freeze/unfreeze page scrolling. Falls back to an overflow lock when Lenis
 * isn't running (reduced-motion users get no instance at all).
 */
export function setScrollLocked(locked: boolean) {
  if (current) {
    if (locked) current.stop();
    else current.start();
  }
  document.documentElement.style.overflow = locked ? "hidden" : "";
}

/**
 * Lenis smooth scroll, wired into GSAP's ticker so ScrollTrigger stays in sync.
 * Also intercepts in-page anchor clicks so nav links animate instead of jumping.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    gsap.registerPlugin(ScrollTrigger);

    if (reduce) {
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.6,
      wheelMultiplier: 1,
    });

    current = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Anchor links -> smooth scroll
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!el) return;
      const id = el.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -8, duration: 1.4 });
    };
    document.addEventListener("click", onClick);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    // Fonts can shift layout; refresh once they're ready
    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("resize", onResize);
      gsap.ticker.remove(raf);
      lenis.destroy();
      current = null;
    };
  }, []);

  return null;
}
