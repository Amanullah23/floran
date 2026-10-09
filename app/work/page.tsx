"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";

const accentMap = {
  maroon: "hover:border-maroon/30",
  green: "hover:border-green/30",
  gold: "hover:border-gold/40",
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export default function WorkPage() {
  return (
    <main className="px-6 pb-20 pt-28 md:pt-36">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-xl text-center"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-ink/5 px-3.5 py-1.5 text-xs font-medium text-ink/70">
            Our work
          </span>
          <h1 className="mt-5 font-display text-3xl font-bold text-ink md:text-4xl">
            Projects we&apos;ve shipped
          </h1>
          <p className="mt-4 text-ink/70">
            A look at the web platforms, mobile apps, and AI products we&apos;ve
            built for clients across industries and countries.
          </p>
        </motion.div>

        <motion.div
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <Link
                href="/work"
                className={`group relative block overflow-hidden rounded-3xl border border-ink/10 bg-cream transition-shadow hover:shadow-[0_24px_48px_-20px_rgba(42,36,32,0.25)] ${
                  accentMap[project.accent]
                }`}
              >
                <div
                  className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${project.gradient}`}
                >
                  <span className="font-display text-sm font-bold text-ink/30">
                    Preview image
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="absolute right-4 top-4 text-ink/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs font-medium uppercase tracking-wide text-ink/45">
                    {project.category}
                  </p>
                  <h2 className="mt-1.5 font-display text-lg font-bold text-ink">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
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
          ))}
        </motion.div>
      </div>
    </main>
  );
}
