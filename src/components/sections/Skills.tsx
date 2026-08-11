"use client";

import { motion } from "framer-motion";
import { marqueeIcons, skillGroups } from "@/lib/data";
import { EASE } from "@/lib/utils";
import SectionHeading from "../ui/SectionHeading";
import { FadeIn } from "../ui/Reveal";
import { TechIcon, techColor, techLabel } from "../ui/TechIcon";

export default function Skills() {
  return (
    <section id="stack" className="relative overflow-clip py-24 md:py-32">
      {/* orbiting logo ring behind the heading */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 hidden justify-center md:flex"
      >
        <div className="relative size-[34rem] opacity-[0.5] md:size-[46rem]">
          <div className="absolute inset-0 animate-spin-slow">
            {marqueeIcons.slice(0, 14).map((k, i) => {
              const angle = (i / 14) * Math.PI * 2;
              return (
                <span
                  key={k}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `translate(-50%,-50%) translate(${Math.cos(angle) * 46}%, ${
                      Math.sin(angle) * 46
                    }%)`,
                  }}
                >
                  <TechIcon name={k} className="size-6 text-line md:size-8" />
                </span>
              );
            })}
          </div>
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(circle at 50% 40%, #08090a 35%, transparent 72%)",
            }}
          />
        </div>
      </div>

      <div className="container-x relative">
        <SectionHeading
          index="04"
          label="Stack"
          title={"The tools, and how\ndeep I go with them"}
          note="Grouped by what I actually use day to day — not everything I've ever touched."
        />

        <div className="mt-14 space-y-px overflow-hidden rounded-2xl border border-line bg-line">
          {skillGroups.map((group, gi) => (
            <div key={group.title} className="grid gap-6 bg-ink-2 p-6 md:grid-cols-12 md:gap-8 md:p-8">
              <FadeIn y={20} delay={gi * 0.05} className="md:col-span-3">
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[10px] text-acid/70">
                      {String(gi + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg font-semibold tracking-tight text-bone">
                      {group.title}
                    </h3>
                  </div>
                  <p className="mt-1.5 pl-7 text-xs text-mute-2">{group.caption}</p>
                </div>
              </FadeIn>

              <div className="flex flex-wrap gap-2.5 md:col-span-9">
                  {group.items.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 14, scale: 0.94 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, margin: "-8%" }}
                      transition={{ duration: 0.55, delay: i * 0.035, ease: EASE }}
                      whileHover={{ y: -4 }}
                      data-cursor="hover"
                      className="group relative flex items-center gap-2.5 rounded-xl border border-line bg-ink-3 px-3.5 py-2.5 transition-colors duration-300 hover:border-[color:var(--c)]/50"
                      style={{ ["--c" as string]: techColor(item.icon) }}
                    >
                      <span
                        aria-hidden
                        className="absolute inset-0 rounded-xl opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-25"
                        style={{ background: "var(--c)" }}
                      />
                      <TechIcon
                        name={item.icon}
                        className="relative size-[18px] text-mute transition-colors duration-300 group-hover:text-[color:var(--c)]"
                      />
                      <span className="relative text-[13px] font-medium text-mute transition-colors duration-300 group-hover:text-bone">
                        {item.name}
                      </span>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
