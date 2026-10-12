"use client";

import { motion, type Variants } from "motion/react";
import {
  Globe,
  Users,
  Rocket,
  Sparkles,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import { jobs } from "@/lib/jobs";
import CTA from "@/components/CTA";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

const values = [
  {
    icon: Globe,
    title: "Remote-first",
    desc: "Work from anywhere — we're built around async collaboration.",
  },
  {
    icon: Users,
    title: "Senior mentorship",
    desc: "Every engineer ships alongside people who review, not just approve.",
  },
  {
    icon: Rocket,
    title: "Real ownership",
    desc: "You'll own features end-to-end, not just tickets off a backlog.",
  },
  {
    icon: Sparkles,
    title: "Global clients",
    desc: "Work on products shipping to users across multiple continents.",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-20 pt-28 md:pt-36">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(42,36,32,0.12) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 60% 50% at 50% 0%, black 20%, transparent 100%)",
          }}
        />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[560px] -translate-x-1/2 rounded-full bg-green/10 blur-[130px]" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-green/20 bg-green/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-green">
            <span className="h-1.5 w-1.5 rounded-full bg-green" />
            Join the team
          </span>
          <h1 className="mt-5 font-display text-3xl font-bold text-ink md:text-5xl">
            Help us build what&apos;s next.
          </h1>
          <p className="mx-auto mt-4 max-w-md text-ink/60">
            We're a small, senior-heavy team shipping real products for clients
            worldwide. If you care about doing the work properly, we'd like to
            meet you.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                variants={item}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-ink/8 bg-white/70 p-5 shadow-sm backdrop-blur-sm"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-maroon/10 text-maroon">
                  <Icon size={18} />
                </span>
                <h3 className="mt-3 font-display text-base font-bold text-ink">
                  {v.title}
                </h3>
                <p className="mt-1.5 text-sm text-ink/60">{v.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <section className="px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
            Open positions
          </h2>

          <div className="mt-6 divide-y divide-ink/8 overflow-hidden rounded-2xl border border-ink/8 bg-white/70 shadow-sm backdrop-blur-sm">
            {jobs.map((job) => (
              <motion.div
                key={job.id}
                whileHover={{ x: 4 }}
                className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-display text-base font-bold text-ink">
                    {job.title}
                  </p>
                  <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink/50">
                    <span>{job.department}</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {job.type}
                    </span>
                  </div>
                </div>
                <a
                  href={`mailto:careers@floran.com?subject=Application: ${encodeURIComponent(
                    job.title,
                  )}`}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-maroon px-4 py-2 text-sm font-medium text-cream transition-colors hover:bg-ink"
                >
                  <Mail size={14} />
                  Apply
                </a>
              </motion.div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-ink/50">
            Don&apos;t see a fit?{" "}
            <a
              href="mailto:careers@floran.com"
              className="font-medium text-maroon hover:underline"
            >
              Email us anyway
            </a>{" "}
            — we're always open to meeting good people.
          </p>
        </motion.div>
      </section>

      <CTA />
    </>
  );
}
