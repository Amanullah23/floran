"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Sprout,
  Target,
  Rocket,
  Users,
} from "lucide-react";

const values = [
  {
    icon: Sprout,
    title: "Every idea can grow",
    description:
      "We treat every project like a seed with real potential — small ideas deserve the same care as big ones. It's where the name comes from.",
    span: "lg:col-span-2 lg:row-span-2",
    featured: true,
  },
  {
    icon: Target,
    title: "Built to last",
    description: "Code and systems meant to scale, not just demo well.",
    span: "lg:col-span-2",
  },
  {
    icon: Rocket,
    title: "Shipped, not scoped",
    description: "Success is what goes live, not how good the proposal read.",
    span: "",
  },
  {
    icon: Users,
    title: "You work with us",
    description: "Direct access to the people building your product.",
    span: "",
  },
];

const stats = [
  { value: "20+", label: "Projects shipped" },
  { value: "6", label: "Countries served" },
  { value: "2019", label: "Building since" },
  { value: "<24h", label: "Avg. response time" },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      {/* intro */}
      <section className="relative px-6 pb-20 pt-28 md:pt-36">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(42,36,32,0.14) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse 60% 50% at 50% 20%, black 30%, transparent 100%)",
          }}
        />
        <motion.div
          className="pointer-events-none absolute -top-16 left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-maroon/10 blur-[110px]"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative mx-auto max-w-4xl text-center"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-cream/80 px-3.5 py-1.5 text-xs font-medium text-ink/70 backdrop-blur"
          >
            About Floran
          </motion.span>
          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-bold leading-[1.1] text-ink md:text-6xl"
          >
            A small studio with a simple belief:{" "}
            <span className="text-maroon">ideas grow here.</span>
          </motion.h1>
          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-2xl text-ink/70 md:text-lg"
          >
            Floran is a software development company building web, mobile, and
            AI-powered products for clients around the world — a team of
            engineers and designers who care about getting the details right.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-ink/10 bg-cream/70 p-5 text-center backdrop-blur"
            >
              <p className="font-display text-2xl font-bold text-ink">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-ink/55">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* story */}
      <section className="px-6 py-10 md:py-16">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative h-72 overflow-hidden rounded-3xl border border-ink/10 bg-gradient-to-br from-maroon/15 via-gold/10 to-green/10 md:h-96"
          >
            <motion.div
              whileHover={{ y: -4 }}
              className="absolute left-6 top-6 w-[75%] rounded-2xl border border-ink/10 bg-cream/90 p-4 shadow-[0_16px_32px_-12px_rgba(42,36,32,0.2)] backdrop-blur"
            >
              <p className="font-display text-sm font-bold text-ink">
                Pomegranate
              </p>
              <p className="mt-1 text-xs text-ink/55">
                Abundance, growth, potential
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -4 }}
              className="absolute bottom-6 right-6 w-[70%] rounded-2xl border border-ink/10 bg-cream/90 p-4 shadow-[0_16px_32px_-12px_rgba(42,36,32,0.2)] backdrop-blur"
            >
              <p className="font-display text-sm font-bold text-ink">Flora</p>
              <p className="mt-1 text-xs text-ink/55">
                Nature, blooming, fresh starts
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <span className="text-xs font-medium uppercase tracking-wide text-ink/45">
              Where the name comes from
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold text-ink md:text-3xl">
              Floran = Flora + Pomegranate
            </h2>
            <p className="mt-4 text-ink/70">
              Two ideas fused into one word: the growth and freshness of flora,
              and the abundance and potential of the pomegranate. That&apos;s
              the lens we bring to every project — every idea is a seed with the
              capacity to grow into something real.
            </p>
            <p className="mt-4 text-ink/70">
              We&apos;re not a large agency, and we don&apos;t want to be.
              We&apos;re a focused team that takes on projects we can give real
              attention to, from first sketch through to production and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* values */}
      <section className="relative px-6 py-20 md:py-28">
        <div className="pointer-events-none absolute right-[5%] top-20 h-[280px] w-[280px] rounded-full bg-green/10 blur-[100px]" />

        <div className="relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-xl text-center"
          >
            <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">
              What we believe in
            </h2>
          </motion.div>

          <motion.div
            className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-4 lg:grid-rows-2"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={item}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className={`group relative overflow-hidden rounded-3xl border border-ink/10 bg-cream p-7 transition-[border-color,box-shadow] hover:border-maroon/30 hover:shadow-[0_24px_48px_-20px_rgba(42,36,32,0.25)] ${value.span}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-maroon/10 text-maroon ring-1 ring-maroon/10 transition-colors group-hover:bg-maroon group-hover:text-cream"
                  >
                    <Icon size={22} />
                  </motion.div>
                  <h3
                    className={`mt-6 font-display font-bold text-ink ${
                      value.featured ? "text-2xl" : "text-lg"
                    }`}
                  >
                    {value.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed text-ink/65 ${
                      value.featured ? "max-w-xs" : ""
                    }`}
                  >
                    {value.description}
                  </p>
                  <ArrowUpRight
                    size={18}
                    className="absolute right-6 top-7 text-ink/0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-maroon"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* cta */}
      <section className="px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-3xl overflow-hidden rounded-[32px] bg-ink px-8 py-14 text-center md:px-12"
        >
          <div className="pointer-events-none absolute -top-16 left-[10%] h-56 w-56 rounded-full bg-maroon/30 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-16 right-[10%] h-56 w-56 rounded-full bg-green/20 blur-[90px]" />

          <div className="relative">
            <h2 className="font-display text-2xl font-bold text-cream md:text-3xl">
              Want to meet the people behind the work?
            </h2>
            <p className="mt-3 text-cream/65">
              See who you&apos;d actually be working with.
            </p>
            <motion.div
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 inline-block"
            >
              <Link
                href="/team"
                className="group inline-flex items-center gap-1.5 rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-cream"
              >
                Meet the team
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
