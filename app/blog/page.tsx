"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { posts } from "@/lib/posts";

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

const accentText: Record<string, string> = {
  maroon: "text-maroon",
  green: "text-green",
  gold: "text-gold",
};

const MotionLink = motion(Link);

export default function BlogPage() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-28 md:pt-36">
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
      <div className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[560px] -translate-x-1/2 rounded-full bg-maroon/10 blur-[130px]" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-2xl text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-maroon/15 bg-maroon/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-maroon">
          <span className="h-1.5 w-1.5 rounded-full bg-maroon" />
          Insights & updates
        </span>
        <h1 className="mt-5 font-display text-3xl font-bold text-ink md:text-5xl">
          From the Floran blog
        </h1>
        <p className="mx-auto mt-4 max-w-md text-ink/60">
          Notes on engineering, design decisions, and what it actually takes to
          ship software for clients around the world.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {posts.map((post) => (
          <MotionLink
            key={post.id}
            href={`/blog/${post.slug}`}
            variants={item}
            whileHover={{ y: -6 }}
            className="group block overflow-hidden rounded-2xl border border-ink/8 bg-white/70 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-[0_16px_34px_-14px_rgba(42,36,32,0.18)]"
          >
            <div
              className={`h-36 bg-gradient-to-br ${post.gradient} transition-transform duration-500 group-hover:scale-105`}
            />
            <div className="p-5">
              <span
                className={`text-[11px] font-semibold uppercase tracking-[0.1em] ${accentText[post.accent]}`}
              >
                {post.category}
              </span>
              <h2 className="mt-2 font-display text-lg font-bold leading-snug text-ink">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-ink/40">
                <span>{post.date}</span>
                <span className="h-1 w-1 rounded-full bg-ink/20" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </MotionLink>
        ))}
      </motion.div>
    </section>
  );
}
