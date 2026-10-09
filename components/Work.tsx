"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "@/lib/projects";

const accentMap = {
  maroon: { text: "text-maroon", border: "group-hover:border-maroon/30" },
  green: { text: "text-green", border: "group-hover:border-green/30" },
  gold: { text: "text-gold", border: "group-hover:border-gold/40" },
};

export default function Work() {
  const preview = projects.slice(0, 3);

  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-ink/5 px-3.5 py-1.5 text-xs font-medium text-ink/70">
              Selected work
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold text-ink md:text-4xl">
              Recent projects
            </h2>
            <p className="mt-3 max-w-md text-ink/70">
              A handful of things we&apos;ve shipped for clients across web,
              mobile, and AI.
            </p>
          </div>

          <Link
            href="/work"
            className="group inline-flex shrink-0 items-center gap-1.5 rounded-full border border-ink/15 px-5 py-2.5 text-sm font-medium text-ink transition-all hover:border-ink/30 hover:bg-ink/5"
          >
            See all work
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>

        <div className="mt-16 flex flex-col gap-20 md:gap-28">
          {preview.map((project, i) => {
            const accent = accentMap[project.accent];
            const reversed = i % 2 === 1;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: reversed ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <Link
                  href="/work"
                  className="group grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14"
                >
                  <div
                    className={`relative order-1 h-64 overflow-hidden rounded-3xl border border-ink/10 bg-gradient-to-br transition-colors duration-300 md:h-80 ${
                      project.gradient
                    } ${accent.border} ${reversed ? "md:order-2" : "md:order-1"}`}
                  >
                    <div className="flex h-full items-center justify-center transition-transform duration-500 group-hover:scale-[1.05]">
                      <span className="font-display text-sm font-bold text-ink/30">
                        Preview image
                      </span>
                    </div>
                  </div>

                  <div
                    className={`relative order-2 ${
                      reversed ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <span
                      className={`font-display text-5xl font-bold ${accent.text} opacity-20`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <p className="mt-3 text-xs font-medium uppercase tracking-wide text-ink/45">
                      {project.category}
                    </p>
                    <h3 className="mt-2 flex items-center gap-2 font-display text-2xl font-bold text-ink md:text-3xl">
                      {project.title}
                      <ArrowUpRight
                        size={20}
                        className="text-ink/0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
                      />
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/65">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-ink/5 px-2.5 py-1 text-xs text-ink/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
