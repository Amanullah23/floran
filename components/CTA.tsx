"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="px-6 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] bg-ink px-8 py-16 text-center md:px-16 md:py-20"
      >
        <motion.div
          className="pointer-events-none absolute -top-20 left-[10%] h-64 w-64 rounded-full bg-maroon/30 blur-[100px]"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute -bottom-20 right-[10%] h-64 w-64 rounded-full bg-green/20 blur-[100px]"
          animate={{ scale: [1, 1.12, 1] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #FBF8F3 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-cream/15 bg-cream/5 px-3.5 py-1.5 text-xs font-medium text-cream/70">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Let&apos;s build something
          </span>

          <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-bold leading-tight text-cream md:text-5xl">
            Got an idea? Let&apos;s grow it into something real.
          </h2>

          <p className="mx-auto mt-5 max-w-md text-cream/65">
            Tell us about your project and we&apos;ll get back to you within 24
            hours — no sales pitch, just a real conversation.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-cream sm:w-auto"
              >
                Start a project
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
              <a
                href="mailto:hello@floran.com"
                className="inline-flex w-full items-center justify-center rounded-full border border-cream/20 px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:border-cream/40 hover:bg-cream/5 sm:w-auto"
              >
                hello@floran.com
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
