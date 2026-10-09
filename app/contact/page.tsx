"use client";

import { motion, type Variants } from "motion/react";
import { Mail, MapPin, Clock } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons";
import ContactForm from "@/components/ContactForm";

const info = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@floran.com",
    href: "mailto:hello@floran.com",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "Kabul, Afghanistan — working globally",
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 24 hours",
  },
];

const socials = [
  { href: "https://linkedin.com", Icon: LinkedinIcon, label: "LinkedIn" },
  { href: "https://github.com", Icon: GithubIcon, label: "GitHub" },
  { href: "https://x.com", Icon: XIcon, label: "X" },
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

export default function ContactPage() {
  return (
    <main className="relative px-6 pb-24 pt-28 md:pt-36">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(42,36,32,0.14) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 60% 45% at 50% 15%, black 30%, transparent 100%)",
        }}
      />
      <motion.div
        className="pointer-events-none absolute -top-16 left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-maroon/10 blur-[110px]"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-2xl text-center"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-cream/80 px-3.5 py-1.5 text-xs font-medium text-ink/70 backdrop-blur"
        >
          Get in touch
        </motion.span>
        <motion.h1
          variants={item}
          className="mt-6 font-display text-4xl font-bold leading-tight text-ink md:text-5xl"
        >
          Let&apos;s grow your idea into something real
        </motion.h1>
        <motion.p
          variants={item}
          className="mx-auto mt-5 text-ink/70 md:text-lg"
        >
          Tell us about your project and we&apos;ll get back to you within 24
          hours — no sales pitch, just a real conversation.
        </motion.p>
      </motion.div>

      <div className="relative mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-[1fr_1.3fr]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col gap-4"
        >
          <div className="rounded-3xl border border-ink/10 bg-cream/80 p-6 backdrop-blur">
            <h2 className="font-display text-lg font-bold text-ink">
              Contact details
            </h2>
            <div className="mt-5 flex flex-col gap-5">
              {info.map((entry) => {
                const Icon = entry.icon;
                const content = (
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-maroon/10 text-maroon">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-ink/45">
                        {entry.label}
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-ink">
                        {entry.value}
                      </p>
                    </div>
                  </div>
                );
                return entry.href ? (
                  <a
                    key={entry.label}
                    href={entry.href}
                    className="transition-opacity hover:opacity-70"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={entry.label}>{content}</div>
                );
              })}
            </div>

            <div className="mt-6 flex items-center gap-2 border-t border-ink/10 pt-5">
              {socials.map((social) => {
                const Icon = social.Icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-ink/60 transition-colors hover:border-maroon/30 hover:text-maroon"
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-ink/10 bg-ink p-6">
            <h2 className="font-display text-lg font-bold text-cream">
              What happens next
            </h2>
            <ol className="mt-4 flex flex-col gap-4">
              {[
                "We read your message and reply within 24 hours.",
                "A short call to understand scope, timeline, and budget.",
                "You get a proposal — no pressure, no obligation.",
              ].map((step, i) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20 font-display text-xs font-bold text-gold">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-cream/70">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </main>
  );
}
