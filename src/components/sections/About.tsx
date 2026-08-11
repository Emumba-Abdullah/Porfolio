"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { interests, site, stats } from "@/lib/data";
import { Counter, FadeIn, LineGrow } from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import Magnetic from "../ui/Magnetic";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-3, 3]);

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          index="02"
          label="About"
          title={"Full-stack, in the\nliteral sense"}
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* portrait */}
          <div ref={ref} className="lg:col-span-5">
            <motion.div
              style={{ y, rotate }}
              className="relative mx-auto aspect-[4/5] w-full max-w-sm lg:max-w-none"
            >
              <div className="absolute inset-0 overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-ink-3 to-ink">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                    backgroundSize: "36px 36px",
                  }}
                />
                <div
                  aria-hidden
                  className="absolute -bottom-10 left-1/2 size-72 -translate-x-1/2 rounded-full bg-acid/15 blur-3xl"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    maskImage: "linear-gradient(to bottom, #000 82%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, #000 82%, transparent 100%)",
                  }}
                >
                  <Image
                    src="/mirza-about.png"
                    alt={site.name}
                    fill
                    sizes="(max-width: 1024px) 90vw, 420px"
                    className="object-contain object-bottom"
                  />
                </div>
              </div>

              {/* floating badge */}
              <motion.div
                className="absolute -right-3 top-6 rounded-xl border border-line bg-ink/85 px-3.5 py-2.5 backdrop-blur-md md:-right-6"
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="mono-label">Based in</p>
                <p className="mt-0.5 text-sm font-medium text-bone">Islamabad, PK</p>
              </motion.div>

              <motion.div
                className="absolute -left-3 bottom-10 rounded-xl border border-acid/30 bg-ink/85 px-3.5 py-2.5 backdrop-blur-md md:-left-6"
                animate={{ y: [0, 9, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              >
                <p className="mono-label text-acid/80">Currently</p>
                <p className="mt-0.5 text-sm font-medium text-bone">SE II @ Emumba</p>
              </motion.div>
            </motion.div>
          </div>

          {/* copy */}
          <div className="lg:col-span-7">
            <FadeIn>
              {(() => {
                const [hook, qualifier] = site.intro.split("|");
                return (
                  <div className="max-w-[36rem]">
                    <p className="text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-bone">
                      {hook}
                    </p>
                    {qualifier && (
                      <p className="mt-3 flex gap-3.5 text-base leading-snug tracking-tight text-mute md:text-lg">
                        <span aria-hidden className="mt-[0.55em] h-px w-7 shrink-0 bg-acid" />
                        <span>{qualifier}</span>
                      </p>
                    )}
                  </div>
                );
              })()}
            </FadeIn>

            <div className="mt-9 space-y-5">
              {site.about.map((para, i) => (
                <FadeIn key={i} delay={0.06 * i}>
                  <p className="leading-relaxed text-mute">{para}</p>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.15}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Magnetic strength={0.22}>
                  <a
                    href={site.resume}
                    download
                    data-cursor="hover"
                    className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-acid px-5 py-2.5 text-sm font-semibold text-acid"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-acid transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-0" />
                    <span className="relative transition-colors group-hover:text-black">
                      Download résumé
                    </span>
                    <FiArrowUpRight className="relative size-4 transition-colors group-hover:text-black" />
                  </a>
                </Magnetic>
                <span className="mono-label">PDF · 1 page</span>
              </div>
            </FadeIn>

            <LineGrow className="mt-10" />

            <FadeIn delay={0.1}>
              <div className="mt-7">
                <p className="mono-label">Off the clock</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {interests.map((it) => (
                    <span
                      key={it}
                      className="rounded-full border border-line px-3 py-1.5 text-xs text-mute transition-colors hover:border-acid/50 hover:text-bone"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* stats */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="group relative bg-ink-2 p-6 transition-colors duration-500 hover:bg-ink-3 md:p-8"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-px scale-x-0 bg-acid transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-x-100"
              />
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="display text-5xl text-bone md:text-6xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-xs leading-relaxed whitespace-pre-line text-mute">
                  {s.label}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
