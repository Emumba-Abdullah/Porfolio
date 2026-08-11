"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { certifications, education, experience } from "@/lib/data";
import { cn, EASE } from "@/lib/utils";
import { FadeIn } from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function Experience() {
  const rail = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: rail,
    offset: ["start 65%", "end 60%"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          index="03"
          label="Experience"
          title={"Two years, one company,\na very steep curve"}
          note="Emumba, Islamabad — from intern to Software Engineer II, mostly by taking the work nobody had claimed yet."
        />

        {/* timeline */}
        <div ref={rail} className="relative mt-16 pl-8 md:pl-14">
          {/* rail */}
          <div className="absolute top-2 bottom-2 left-[3px] w-px bg-line md:left-[7px]">
            <motion.div className="w-full origin-top bg-acid" style={{ height }} />
          </div>

          <div className="space-y-4">
            {experience.map((job, i) => {
              const isOpen = open === i;
              return (
                <div key={`${job.role}-${job.period}`} className="relative">
                  {/* node */}
                  <span
                    className={cn(
                      "absolute top-7 -left-8 grid size-[9px] place-items-center rounded-full ring-4 ring-ink transition-colors duration-500 md:-left-14 md:size-[15px]",
                      job.current ? "bg-acid" : isOpen ? "bg-bone" : "bg-line",
                    )}
                  >
                    {job.current && (
                      <span className="absolute inset-0 animate-ping rounded-full bg-acid/60" />
                    )}
                  </span>

                  <FadeIn y={24} delay={i * 0.05}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      data-cursor="hover"
                      aria-expanded={isOpen}
                      className={cn(
                        "group w-full rounded-2xl border p-5 text-left transition-all duration-500 md:p-7",
                        isOpen
                          ? "border-acid/35 bg-ink-2"
                          : "border-line bg-ink-2/40 hover:border-line hover:bg-ink-2",
                      )}
                    >
                      <div className="flex items-start justify-between gap-5">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                            <h3 className="text-xl font-semibold tracking-tight text-bone md:text-2xl">
                              {job.role}
                            </h3>
                            {job.current && (
                              <span className="rounded-full bg-acid px-2 py-0.5 font-mono text-[9px] font-bold tracking-[0.12em] text-black uppercase">
                                Now
                              </span>
                            )}
                          </div>
                          <p className="mt-1.5 text-sm text-mute">
                            <span className="text-acid/90">{job.company}</span>
                            <span className="mx-2 text-mute-2">/</span>
                            {job.location}
                            <span className="mx-2 text-mute-2">/</span>
                            {job.period}
                          </p>
                          <p className="mt-3 text-sm leading-relaxed text-mute/90">{job.summary}</p>
                        </div>

                        <span
                          className={cn(
                            "mt-1 grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-500",
                            isOpen
                              ? "rotate-45 border-acid bg-acid text-black"
                              : "border-line text-mute group-hover:border-acid group-hover:text-acid",
                          )}
                        >
                          <FiPlus className="size-4" />
                        </span>
                      </div>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0,
                        }}
                        transition={{ duration: 0.6, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-6 space-y-3 border-t border-line/70 pt-6">
                          {job.points.map((p, k) => (
                            <motion.li
                              key={p}
                              initial={false}
                              animate={{
                                opacity: isOpen ? 1 : 0,
                                x: isOpen ? 0 : -8,
                              }}
                              transition={{ duration: 0.45, delay: isOpen ? 0.1 + k * 0.05 : 0 }}
                              className="flex gap-3 text-sm leading-relaxed text-mute"
                            >
                              <span className="mt-[7px] size-1 shrink-0 rounded-full bg-acid" />
                              <span>{p}</span>
                            </motion.li>
                          ))}
                        </ul>

                        <div className="mt-6 flex flex-wrap gap-1.5">
                          {job.stack.map((s) => (
                            <span
                              key={s}
                              className="rounded-md border border-line bg-ink-3 px-2 py-1 font-mono text-[10px] text-mute"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </button>
                  </FadeIn>
                </div>
              );
            })}
          </div>
        </div>

        {/* education + certs */}
        <div className="mt-20 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <FadeIn>
              <p className="mono-label">Education</p>
            </FadeIn>
            <div className="mt-5 divide-y divide-line/70">
              {education.map((e, i) => (
                <FadeIn key={e.school} delay={i * 0.06}>
                  <div className="group flex items-baseline justify-between gap-6 py-4">
                    <div>
                      <p className="font-medium text-bone transition-colors group-hover:text-acid">
                        {e.degree}
                      </p>
                      <p className="mt-1 text-sm text-mute">{e.school}</p>
                      <p className="mt-0.5 text-xs text-mute-2">{e.detail}</p>
                    </div>
                    <span className="mono-label shrink-0">{e.period}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <div>
            <FadeIn>
              <p className="mono-label">Certifications</p>
            </FadeIn>
            <div className="mt-5 divide-y divide-line/70">
              {certifications.map((c, i) => (
                <FadeIn key={c.name} delay={i * 0.05}>
                  <div className="group flex items-center justify-between gap-6 py-4">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-[10px] text-acid/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="font-medium text-bone transition-colors group-hover:text-acid">
                          {c.name}
                        </p>
                        <p className="mt-0.5 text-xs text-mute-2">{c.issuer}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
