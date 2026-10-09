"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const stats = [
  { value: "20+", label: "Projects shipped" },
  { value: "6", label: "Countries served" },
  { value: "<24h", label: "Avg. response time" },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-28 md:pt-36">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(42,36,32,0.14) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 30%, black 40%, transparent 100%)",
        }}
      />

      <motion.div
        className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-[60%] rounded-full bg-maroon/15 blur-[100px]"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -top-10 right-[10%] h-[280px] w-[280px] rounded-full bg-green/15 blur-[90px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="pointer-events-none absolute top-40 left-[12%] h-[180px] w-[180px] rounded-full bg-gold/25 blur-[80px]"
        animate={{ scale: [1, 1.12, 1] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      <motion.div
        className="relative mx-auto max-w-4xl text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-cream/80 px-3.5 py-1.5 text-xs font-medium text-ink/70 backdrop-blur"
        >
          <span className="relative h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green/60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green" />
          </span>
          Software studio · Global clients
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-7 font-display text-4xl font-bold leading-[1.08] text-ink md:text-7xl"
        >
          Ideas grow
          <br />
          <span className="relative inline-block text-maroon">
            here.
            <svg
              className="absolute -bottom-2 left-0 w-full md:-bottom-3"
              viewBox="0 0 160 12"
              fill="none"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M2 9C40 2 120 2 158 9"
                stroke="#D4A373"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
              />
            </svg>
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl text-base text-ink/70 md:text-lg"
        >
          Floran designs and builds web, mobile, and AI-powered products for
          clients around the world — from first idea to shipped product.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="group inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-medium text-cream shadow-[0_8px_24px_-6px_rgba(107,18,38,0.5)] transition-colors hover:bg-ink sm:w-auto"
            >
              Start a project
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/work"
              className="group inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-ink/15 bg-cream/60 px-6 py-3 text-sm font-medium text-ink backdrop-blur transition-colors hover:border-ink/30 hover:bg-ink/5 sm:w-auto"
            >
              View our work
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={item}
          className="mx-auto mt-16 grid max-w-md grid-cols-3 gap-4 border-t border-ink/10 pt-8"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-xl font-bold text-ink md:text-2xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-ink/55 md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
