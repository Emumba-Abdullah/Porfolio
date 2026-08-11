"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useFinePointer, useReducedMotion } from "@/lib/useMediaQuery";

/**
 * Custom cursor: a small dot that tracks 1:1 and a ring that lags behind.
 * Elements with [data-cursor="..."] change its state:
 *   data-cursor="hover" -> ring expands
 *   data-cursor="view"  -> ring becomes a filled acid disc with a label
 */
export default function Cursor() {
  const fine = useFinePointer();
  const reduce = useReducedMotion();
  const enabled = fine && !reduce;

  const [variant, setVariant] = useState<"default" | "hover" | "view">("default");
  const [label, setLabel] = useState("");
  const [down, setDown] = useState(false);
  const [hidden, setHidden] = useState(true);
  const rafLabel = useRef("");

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ringX = useSpring(x, { stiffness: 380, damping: 32, mass: 0.45 });
  const ringY = useSpring(y, { stiffness: 380, damping: 32, mass: 0.45 });

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("has-cursor");

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);

      const el = (e.target as HTMLElement)?.closest?.("[data-cursor]") as HTMLElement | null;
      const next = (el?.dataset.cursor as typeof variant) || "default";
      const nextLabel = el?.dataset.cursorLabel || "";
      setVariant(next);
      if (nextLabel !== rafLabel.current) {
        rafLabel.current = nextLabel;
        setLabel(nextLabel);
      }
    };

    const leave = () => setHidden(true);
    const onDown = () => setDown(true);
    const onUp = () => setDown(false);

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);

    return () => {
      document.body.classList.remove("has-cursor");
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const ringSize = variant === "view" ? 96 : variant === "hover" ? 56 : 30;

  return (
    <div className="pointer-events-none fixed inset-0 z-[70] hidden md:block" aria-hidden>
      {/* trailing ring */}
      <motion.div
        className="absolute left-0 top-0 flex items-center justify-center rounded-full"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
          animate={{
            width: ringSize,
            height: ringSize,
            opacity: hidden ? 0 : 1,
            scale: down ? 0.82 : 1,
            backgroundColor: variant === "view" ? "#c8ff00" : "rgba(200,255,0,0.06)",
            borderColor: variant === "view" ? "#c8ff00" : "rgba(200,255,0,0.5)",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30, mass: 0.5 }}
          style={{
            borderWidth: 1,
            borderStyle: "solid",
            backdropFilter: variant === "default" ? "none" : "blur(2px)",
          }}
        >
          {variant === "view" && label ? (
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-black">
              {label}
            </span>
          ) : null}
        </motion.div>
      </motion.div>

      {/* precise dot */}
      <motion.div
        className="absolute left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-acid"
        style={{ x, y }}
        animate={{ opacity: hidden || variant === "view" ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
}
