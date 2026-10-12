"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate, type Variants } from "motion/react";

function Counter({
  from,
  to,
  suffix = "",
  duration = 1.8,
}: {
  from: number;
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(from, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

const focusAreas = [
  "Web Platforms",
  "Mobile Apps",
  "AI Integration",
  "Cloud & DevOps",
  "E-Commerce",
];

const stats = [
  {
    label: "Projects delivered",
    sub: "Shipped across web, mobile & AI",
    from: 12,
    to: 20,
    suffix: "+",
  },
  {
    label: "Lines of code",
    sub: "Across production codebases",
    from: 350,
    to: 500,
    suffix: "K+",
  },
  {
    label: "Clients served",
    sub: "Businesses worldwide",
    from: 8,
    to: 15,
    suffix: "+",
  },
  {
    label: "Countries reached",
    sub: "Clients across the globe",
    from: 2,
    to: 6,
    suffix: "",
  },
  {
    label: "Uptime average",
    sub: "Across deployed platforms",
    from: 92,
    to: 99,
    suffix: "%",
  },
  {
    label: "Years experience",
    sub: "Combined engineering background",
    from: 2,
    to: 5,
    suffix: "+",
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export default function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-cream px-6 py-24">
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
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-gold/15 blur-[130px]" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-2xl text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-maroon/15 bg-maroon/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-maroon">
          <span className="h-1.5 w-1.5 rounded-full bg-maroon" />
          Engineering for growing businesses
        </span>

        <h2 className="mt-5 font-display text-2xl font-bold text-ink md:text-3xl">
          Numbers that back the work
        </h2>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
          {focusAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-ink/10 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-ink/70 shadow-sm backdrop-blur-sm"
            >
              {area}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="relative mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={cardItem}
            whileHover={{ y: -4 }}
            className="group rounded-2xl border border-ink/8 bg-white/70 p-5 text-center shadow-[0_1px_3px_rgba(42,36,32,0.04)] backdrop-blur-sm transition-shadow hover:shadow-[0_12px_30px_-10px_rgba(107,18,38,0.15)]"
          >
            <p className="bg-gradient-to-br from-maroon to-gold bg-clip-text font-display text-3xl font-bold text-transparent md:text-4xl">
              <Counter from={stat.from} to={stat.to} suffix={stat.suffix} />
            </p>
            <p className="mt-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink/70">
              {stat.label}
            </p>
            <p className="mt-1 text-xs text-ink/45">{stat.sub}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
