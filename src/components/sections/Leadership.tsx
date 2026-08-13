"use client";

import { motion } from "framer-motion";
import { leadership } from "@/lib/data";
import { EASE } from "@/lib/utils";
import SectionHeading from "../ui/SectionHeading";

export default function Leadership() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          index="05"
          label="Beyond the editor"
          title={"Leadership, stages\nand volunteer work"}
          note="Most of my best engineering work came from being willing to run the room, not just the build."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {leadership.map((item, i) => (
            <article
              key={item.title}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-ink-2 p-6 transition-colors duration-500 hover:border-acid/30 hover:bg-ink-3 md:p-7"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-acid transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-x-100"
              />
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: EASE }}
              >
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={
                      item.tag === "Leadership"
                        ? "rounded-full border border-acid/30 bg-acid/[0.07] px-2.5 py-1 font-mono text-[9px] tracking-[0.14em] text-acid uppercase"
                        : "rounded-full border border-line px-2.5 py-1 font-mono text-[9px] tracking-[0.14em] text-mute uppercase"
                    }
                  >
                    {item.tag}
                  </span>
                  {item.period && <span className="mono-label">{item.period}</span>}
                </div>

                <h3 className="mt-5 text-lg leading-snug font-semibold tracking-tight text-bone">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{item.body}</p>
              </motion.div>

              <span
                aria-hidden
                className="display mt-8 text-5xl text-bone/[0.04] transition-colors duration-700 group-hover:text-acid/10"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
