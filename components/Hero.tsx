"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import {
  ArrowRight,
  Lightbulb,
  Palette,
  Database,
  Users,
  Globe,
  Smartphone,
  Sparkles,
  BarChart3,
} from "lucide-react";

const bringItems = [
  { icon: Lightbulb, label: "Idea & requirements" },
  { icon: Palette, label: "Design direction" },
  { icon: Database, label: "Existing systems & data" },
  { icon: Users, label: "Your team's input" },
];

const getItems = [
  { icon: Globe, label: "Web platform" },
  { icon: Smartphone, label: "Mobile app" },
  { icon: Sparkles, label: "AI integration" },
  { icon: BarChart3, label: "Dashboard & insights" },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

// Connector paths live in a 0–100 percentage coordinate space
// (preserveAspectRatio="none" stretches the SVG to exactly fill its box),
// so these values are percentages, not px.
const rowY = [10, 37, 64, 91];
const leftPaths = rowY.map((y) => `M30,${y} C42,${y} 42,50 50,50`);
const rightPaths = rowY.map((y) => `M70,${y} C58,${y} 58,50 50,50`);

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
            "radial-gradient(ellipse 70% 60% at 30% 20%, black 30%, transparent 100%)",
        }}
      />
      <motion.div
        className="pointer-events-none absolute -top-24 left-[5%] h-[380px] w-[380px] rounded-full bg-maroon/10 blur-[110px]"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-10">
        {/* LEFT — copy */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center lg:text-left"
        >
          <motion.p
            variants={item}
            className="text-xs font-medium uppercase tracking-[0.15em] text-ink/50"
          >
            Software development · AI integration
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-4 font-display text-4xl font-bold leading-[1.08] text-ink md:text-6xl"
          >
            Ideas grow
            <br />
            <span className="text-maroon">here.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-md text-base text-ink/70 md:text-lg lg:mx-0"
          >
            We build web platforms, mobile apps, and AI-powered features for
            clients around the world — from first idea to shipped product, with
            a senior engineer on it the whole way.
          </motion.p>

          <motion.div variants={item} className="mt-8">
            <motion.div
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-medium text-cream shadow-[0_8px_24px_-6px_rgba(107,18,38,0.5)] transition-colors hover:bg-ink"
              >
                Start a project
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex items-center justify-center gap-3 lg:justify-start"
          >
            <div className="flex -space-x-2">
              <span className="h-7 w-7 rounded-full border-2 border-cream bg-maroon" />
              <span className="h-7 w-7 rounded-full border-2 border-cream bg-green" />
              <span className="h-7 w-7 rounded-full border-2 border-cream bg-gold" />
            </div>
            <p className="text-sm text-ink/60">
              Every build reviewed by a senior engineer before it ships.
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT — build pipeline diagram */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="relative hidden overflow-hidden rounded-[28px] border border-[#D4A373]/30 p-4 lg:block md:p-5"
          style={{
            background:
              "linear-gradient(145deg, rgba(212,163,115,0.28) 0%, rgba(251,248,243,0.9) 55%, rgba(212,163,115,0.16) 100%)",
          }}
        >
          <div className="pointer-events-none absolute -top-16 right-[-10%] h-56 w-56 rounded-full bg-maroon/10 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-16 left-[-10%] h-56 w-56 rounded-full bg-green/10 blur-[90px]" />

          <div className="relative flex items-center justify-between rounded-2xl border border-ink/10 bg-cream/80 px-4 py-2.5 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-maroon/10 text-maroon">
                <Sparkles size={13} />
              </span>
              <span className="text-xs font-medium text-ink/70">
                Build pipeline
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-green/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-green">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green/70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green" />
              </span>
              Live
            </span>
          </div>

          <div className="relative mt-4 flex items-center justify-between px-1">
            <span className="text-[10px] font-medium uppercase tracking-wide text-ink/40">
              What you bring
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wide text-ink/40">
              What you get
            </span>
          </div>

          <div className="relative mt-2.5 h-[280px]">
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {/* static faint lines */}
              {[...leftPaths, ...rightPaths].map((d) => (
                <path
                  key={d}
                  d={d}
                  fill="none"
                  stroke="rgba(42,36,32,0.14)"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                />
              ))}

              {/* flowing dots: left items -> center */}
              {leftPaths.map((d, i) => (
                <motion.circle
                  key={`l-${d}`}
                  r="1.1"
                  fill="#6B1226"
                  style={{ offsetPath: `path('${d}')` }}
                  animate={{
                    offsetDistance: ["0%", "100%"],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.45,
                  }}
                />
              ))}

              {/* flowing dots: center -> right items */}
              {rightPaths.map((d, i) => (
                <motion.circle
                  key={`r-${d}`}
                  r="1.1"
                  fill="#D4A373"
                  style={{ offsetPath: `path('${d}')` }}
                  animate={{
                    offsetDistance: ["100%", "0%"],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.45 + 0.3,
                  }}
                />
              ))}
            </svg>

            <div className="absolute inset-y-0 left-0 flex w-[34%] flex-col justify-between py-1">
              {bringItems.map((it) => {
                const Icon = it.icon;
                return (
                  <div
                    key={it.label}
                    className="flex items-center gap-2 rounded-xl border border-ink/10 bg-cream/90 px-2.5 py-2 shadow-sm"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-maroon/10 text-maroon">
                      <Icon size={13} />
                    </span>
                    <span className="text-[11px] font-medium leading-tight text-ink/80">
                      {it.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="absolute inset-y-0 right-0 flex w-[34%] flex-col justify-between py-1">
              {getItems.map((it) => {
                const Icon = it.icon;
                return (
                  <div
                    key={it.label}
                    className="flex items-center gap-2 rounded-xl border border-green/20 bg-green/10 px-2.5 py-2 shadow-sm"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-green/15 text-green">
                      <Icon size={13} />
                    </span>
                    <span className="text-[11px] font-medium leading-tight text-ink/80">
                      {it.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                className="absolute inset-0 -m-4 rounded-full border border-maroon/25"
                animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.2, 0.6] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute inset-0 -m-8 rounded-full border border-ink/10"
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.1, 0.4] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-cream shadow-[0_0_30px_-4px_rgba(107,18,38,0.35)]">
                <Image
                  src="/floran-icon.png"
                  alt="Floran"
                  width={705}
                  height={746}
                  className="h-8 w-auto"
                />
              </div>
            </div>

            <div className="absolute left-1/2 top-[calc(50%+46px)] flex -translate-x-1/2 items-center gap-2 text-[10px] font-medium uppercase tracking-wide">
              <span className="text-ink/40">Tested</span>
              <span className="h-1 w-1 rounded-full bg-ink/20" />
              <span className="text-maroon">Shipped</span>
            </div>
          </div>

          <div className="relative mt-4 flex items-center justify-between border-t border-ink/10 pt-3">
            <p className="text-xs text-ink/60">
              Full-stack engineering, not just code.
            </p>
            <p className="text-xs text-ink/40">Reviewed · tested · deployed</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
