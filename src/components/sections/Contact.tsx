"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiCheck, FiCopy } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { navLinks, site, socials } from "@/lib/data";
import Magnetic from "../ui/Magnetic";
import Marquee from "../ui/Marquee";
import { FadeIn, SplitText } from "../ui/Reveal";

const ICONS = { github: SiGithub, linkedin: FaLinkedinIn, mail: MdMailOutline } as const;

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const glow = useTransform(scrollYProgress, [0, 1], [0.15, 0.6]);
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Karachi",
        }).format(new Date()),
      );
    tick();
    const id = setInterval(tick, 20_000);
    return () => clearInterval(id);
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable — the mailto link still works */
    }
  };

  return (
    <footer ref={ref} id="contact" className="relative overflow-hidden pt-24 md:pt-32">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full blur-[130px]"
        style={{
          opacity: glow,
          background: "radial-gradient(circle, rgba(200,255,0,0.28), transparent 65%)",
        }}
      />

      <div className="container-x relative">
        <FadeIn y={16}>
          <div className="flex items-center gap-3">
            <span className="size-1.5 animate-pulse-dot rounded-full bg-acid" />
            <span className="mono-label text-acid">{site.availabilityNote}</span>
          </div>
        </FadeIn>

        <h2 className="mt-8">
          <span className="block">
            <SplitText
              text="LET'S BUILD"
              by="char"
              stagger={0.035}
              className="display text-[clamp(2.5rem,12vw,11rem)] text-bone"
            />
          </span>
          <span className="block">
            <SplitText
              text="SOMETHING"
              by="char"
              stagger={0.035}
              delay={0.1}
              className="display text-[clamp(2.5rem,12vw,11rem)] text-mute-2"
            />
          </span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 border-t border-line pt-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <FadeIn>
              <p className="max-w-md leading-relaxed text-mute">
                Hiring, contracting, or just want a second pair of eyes on a gnarly frontend
                problem? I read everything and reply fast.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Magnetic strength={0.22}>
                  <a
                    href={`mailto:${site.email}`}
                    data-cursor="view"
                    data-cursor-label="Email"
                    className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-acid px-6 py-3.5 text-sm font-bold text-black"
                  >
                    <span className="absolute inset-0 translate-y-full bg-bone transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-y-0" />
                    <span className="relative">Send me an email</span>
                    <FiArrowUpRight className="relative size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Magnetic>

                <button
                  onClick={copy}
                  data-cursor="hover"
                  className="flex items-center gap-2 rounded-full border border-line px-4 py-3 font-mono text-xs text-mute transition-colors hover:border-acid hover:text-acid"
                >
                  {copied ? <FiCheck className="size-3.5" /> : <FiCopy className="size-3.5" />}
                  {copied ? "Copied" : "Copy address"}
                </button>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-4 lg:col-start-7">
            <FadeIn delay={0.05}>
              <p className="mono-label">Direct</p>
              <div className="mt-4 space-y-3">
                <a
                  href={`mailto:${site.email}`}
                  data-cursor="hover"
                  className="group block break-all text-base tracking-tight text-bone transition-colors hover:text-acid sm:text-lg"
                >
                  {site.email}
                </a>
                <a
                  href={`tel:${site.phoneHref}`}
                  data-cursor="hover"
                  className="group block text-base tracking-tight text-bone transition-colors hover:text-acid sm:text-lg"
                >
                  {site.phone}
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {socials.map((s) => {
                  const Icon = ICONS[s.icon as keyof typeof ICONS];
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      data-cursor="hover"
                      className="group flex items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm text-mute transition-all duration-300 hover:border-acid hover:text-acid"
                    >
                      <Icon className="size-4" />
                      {s.label}
                      <FiArrowUpRight className="size-3 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                    </a>
                  );
                })}
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-2 lg:col-start-11 lg:text-right">
            <FadeIn delay={0.1}>
              <p className="mono-label">Local time</p>
              <p className="mt-3 font-mono text-2xl text-bone tabular-nums">{time || "--:--"}</p>
              <p className="mono-label mt-1">{site.location}</p>
              <div className="mt-6 flex flex-col gap-1.5 lg:items-end">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    data-cursor="hover"
                    className="text-sm text-mute transition-colors hover:text-acid"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* giant outlined wordmark */}
      <div className="relative mt-16 select-none">
        <Marquee speed={44} fade={false}>
          <span className="display px-8 text-[16vw] leading-none text-transparent [-webkit-text-stroke:1px_var(--color-line)]">
            {site.shortName} — Available for work —
          </span>
        </Marquee>
      </div>

      <div className="container-x relative border-t border-line/70 py-6">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="font-mono text-[11px] tracking-wide text-mute-2">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="font-mono text-[11px] tracking-wide text-mute-2">
              Built with Next.js, Tailwind, Framer Motion &amp; GSAP
            </p>
            <a
              href="#top"
              data-cursor="hover"
              className="grid size-8 place-items-center rounded-full border border-line text-mute transition-colors hover:border-acid hover:text-acid"
              aria-label="Back to top"
            >
              <FiArrowUpRight className="size-3.5 -rotate-45" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
