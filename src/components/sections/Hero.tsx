"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useSyncExternalStore } from "react";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { site, socials } from "@/lib/data";
import { EASE } from "@/lib/utils";
import Magnetic from "../ui/Magnetic";
import { SplitText } from "../ui/Reveal";

const ICONS = { github: SiGithub, linkedin: FaLinkedinIn, mail: MdMailOutline } as const;
const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const mounted = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const frontY = useTransform(scrollYProgress, [0, 1], ["0%", "-45%"]);
  const backY = useTransform(scrollYProgress, [0, 1], ["0%", "-95%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-20 pb-5 md:pt-24"
    >
      {/* backdrop: grid + glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 35%, #000 30%, transparent 75%)",
          }}
        />
        <motion.div
          className="absolute left-1/2 top-[38%] size-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(200,255,0,0.11), transparent 65%)" }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.75, 1, 0.75] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ---- top meta row ---- */}
      <motion.div className="container-x relative z-20" style={mounted ? { opacity: fade } : undefined}>
        <div className="flex items-start justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.8, ease: EASE }}
            className="max-w-[15rem] space-y-2"
          >
            <p className="mono-label text-acid">{site.role}</p>
            <p className="text-sm leading-relaxed text-mute">
              Enterprise React, TypeScript &amp; AI product surfaces — built end to end.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.8, ease: EASE }}
            className="hidden text-right sm:block"
          >
            <p className="mono-label">{site.location}</p>
            <p className="mono-label mt-1">{site.timezone}</p>
            {site.available && (
              <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-acid/30 bg-acid/5 px-3 py-1">
                <span className="size-1.5 animate-pulse-dot rounded-full bg-acid" />
                <span className="font-mono text-[10px] tracking-[0.14em] text-acid uppercase">
                  Available
                </span>
              </p>
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* ---- name + portrait stack ---- */}
      <div className="relative z-10 flex flex-1 items-end justify-center">
        {/* back line */}
        <motion.h1
          className="pointer-events-none absolute left-1/2 top-[6%] z-10 w-full -translate-x-1/2 px-4 text-center md:top-[2%]"
          style={mounted ? { y: backY } : undefined}
        >
          <SplitText
            text="MIRZA"
            by="char"
            stagger={0.055}
            delay={0.35}
            duration={1.15}
            className="display text-[19vw] leading-[0.8] text-bone md:text-[15vw]"
          />
        </motion.h1>

        {/* portrait */}
        <motion.div
          className="relative z-20 h-[48vh] w-full max-w-[24rem] shrink-0 md:h-[62vh] md:max-w-[32rem]"
          style={mounted ? { y: imgY, scale: imgScale } : undefined}
          initial={{ opacity: 0, y: 60, filter: "blur(14px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.55, duration: 1.4, ease: EASE }}
        >
          <div
            aria-hidden
            className="absolute bottom-0 left-1/2 h-[42%] w-[86%] -translate-x-1/2 rounded-[50%] bg-acid/10 blur-3xl"
          />
          <div
            className="absolute inset-0"
            style={{
              maskImage: "linear-gradient(to bottom, #000 78%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, #000 78%, transparent 100%)",
            }}
          >
            <Image
              src="/mirza-hero.png"
              alt={site.name}
              fill
              priority
              sizes="(max-width: 768px) 90vw, 512px"
              className="object-contain object-bottom drop-shadow-[0_24px_60px_rgba(0,0,0,0.75)]"
            />
          </div>
        </motion.div>

        {/* front line */}
        <motion.div
          className="pointer-events-none absolute bottom-[8%] left-1/2 z-30 w-full -translate-x-1/2 px-4 text-center"
          style={mounted ? { y: frontY } : undefined}
        >
          <SplitText
            text="ABDULLAH"
            by="char"
            stagger={0.045}
            delay={0.55}
            duration={1.15}
            className="display text-[13.5vw] leading-[0.8] text-bone md:text-[11vw]"
          />
        </motion.div>

        {/* side rails */}
        <motion.div
          className="absolute bottom-[14%] left-0 z-30 hidden lg:block"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3, duration: 0.9, ease: EASE }}
          style={mounted ? { opacity: fade } : undefined}
        >
          <div className="container-x">
            <div className="max-w-[16rem] space-y-3 border-l border-acid/40 pl-4">
              {site.headline.split("|").map((line) => (
                <p key={line} className="text-lg leading-snug font-medium tracking-tight text-bone">
                  {line}
                </p>
              ))}
              <p className="mono-label pt-1">{site.availabilityNote}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute right-0 bottom-[14%] z-30 hidden lg:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4, duration: 0.9, ease: EASE }}
          style={mounted ? { opacity: fade } : undefined}
        >
          <div className="container-x flex flex-col items-end gap-3">
            {socials.map((s) => {
              const Icon = ICONS[s.icon as keyof typeof ICONS];
              return (
                <Magnetic key={s.label} strength={0.25}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    data-cursor="hover"
                    className="group flex items-center gap-2.5 text-mute transition-colors hover:text-acid"
                  >
                    <span className="font-mono text-[11px] tracking-[0.14em] uppercase">
                      {s.label}
                    </span>
                    <span className="grid size-9 place-items-center rounded-full border border-line transition-colors group-hover:border-acid">
                      <Icon className="size-3.5" />
                    </span>
                  </a>
                </Magnetic>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* ---- bottom bar ---- */}
      <motion.div className="container-x relative z-30 mt-6" style={mounted ? { opacity: fade } : undefined}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.9, ease: EASE }}
          className="flex flex-col items-center gap-6 border-t border-line/70 pt-5 sm:flex-row sm:justify-between"
        >
          <div className="lg:hidden">
            <p className="max-w-md text-center text-[0.95rem] leading-relaxed text-mute sm:text-left">
              {site.headline.replace("|", " ")}
            </p>
          </div>

          <a
            href="#work"
            data-cursor="hover"
            className="group flex items-center gap-3 text-sm text-mute transition-colors hover:text-bone"
          >
            <span className="grid size-10 place-items-center rounded-full border border-line transition-colors group-hover:border-acid group-hover:text-acid">
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <FiArrowDown className="size-4" />
              </motion.span>
            </span>
            <span className="font-mono text-[11px] tracking-[0.14em] uppercase">Selected work</span>
          </a>

          <Magnetic strength={0.25}>
            <a
              href="#contact"
              data-cursor="hover"
              className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-bone px-6 py-3 text-sm font-semibold text-black"
            >
              <span className="absolute inset-0 translate-y-full bg-acid transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-y-0" />
              <span className="relative">Start a project</span>
              <FiArrowUpRight className="relative size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>
    </section>
  );
}
