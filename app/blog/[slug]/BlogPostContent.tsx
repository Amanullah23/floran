"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { ArrowLeft } from "lucide-react";
import type { Post } from "@/lib/posts";
import CTA from "@/components/CTA";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

const accentText: Record<string, string> = {
  maroon: "text-maroon",
  green: "text-green",
  gold: "text-gold",
};

export default function BlogPostContent({
  post,
  related,
}: {
  post: Post;
  related: Post[];
}) {
  return (
    <>
      <article className="relative overflow-hidden px-6 pb-16 pt-28 md:pt-36">
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

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative mx-auto max-w-3xl"
        >
          <motion.div variants={item}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/60 transition-colors hover:text-maroon"
            >
              <ArrowLeft size={15} />
              Back to blog
            </Link>
          </motion.div>

          <motion.span
            variants={item}
            className={`mt-6 block text-[11px] font-semibold uppercase tracking-[0.1em] ${accentText[post.accent]}`}
          >
            {post.category}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-3 font-display text-3xl font-bold leading-tight text-ink md:text-5xl"
          >
            {post.title}
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-4 flex items-center gap-2 text-sm text-ink/45"
          >
            <span>{post.author}</span>
            <span className="h-1 w-1 rounded-full bg-ink/20" />
            <span>{post.date}</span>
            <span className="h-1 w-1 rounded-full bg-ink/20" />
            <span>{post.readTime}</span>
          </motion.div>

          <motion.div
            variants={item}
            className={`mt-8 h-56 rounded-2xl bg-gradient-to-br md:h-72 ${post.gradient}`}
          />

          <motion.div variants={item} className="mt-10 space-y-5">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-ink/70">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </motion.div>
      </article>

      {related.length > 0 && (
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-3xl border-t border-ink/8 pt-10">
            <h2 className="font-display text-lg font-bold text-ink">
              More from the blog
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/blog/${p.slug}`}
                  className="group rounded-xl border border-ink/8 bg-white/70 p-4 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md"
                >
                  <span
                    className={`text-[11px] font-semibold uppercase tracking-wide ${accentText[p.accent]}`}
                  >
                    {p.category}
                  </span>
                  <p className="mt-1.5 font-display text-sm font-bold text-ink transition-colors group-hover:text-maroon">
                    {p.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}
