"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import {
  ArrowRight,
  Check,
  Code2,
  Smartphone,
  Sparkles,
  Database,
  Palette,
  Headset,
  Search,
  PenTool,
  Hammer,
  Rocket,
} from "lucide-react";

type Service = {
  icon: typeof Code2;
  title: string;
  description: string;
  features: string[];
  accent: "maroon" | "green" | "gold";
};

const services: Service[] = [
  {
    icon: Code2,
    title: "Web development",
    description:
      "Fast, scalable websites and web apps built with modern frameworks — from marketing sites to full platforms with custom dashboards.",
    features: [
      "Next.js and React applications",
      "Custom admin dashboards",
      "E-commerce and booking systems",
      "API development and integration",
    ],
    accent: "maroon",
  },
  {
    icon: Smartphone,
    title: "Mobile apps",
    description:
      "Native-feel iOS and Android apps built with Flutter, from first prototype through to app store launch.",
    features: [
      "Cross-platform Flutter apps",
      "Offline-first architecture",
      "Push notifications and real-time sync",
      "App Store and Play Store submission",
    ],
    accent: "green",
  },
  {
    icon: Sparkles,
    title: "AI integration",
    description:
      "Chat assistants, automation, and AI-powered features woven directly into your product, not bolted on as an afterthought.",
    features: [
      "Custom chat assistants",
      "Workflow automation",
      "LLM integration (OpenAI, Claude, etc.)",
      "AI-powered search and recommendations",
    ],
    accent: "gold",
  },
  {
    icon: Database,
    title: "Systems & databases",
    description:
      "Backend architecture, APIs, and database design built to handle real-world scale, not just a demo.",
    features: [
      "PostgreSQL and database design",
      "Authentication and access control",
      "Billing and payment systems",
      "Performance and scaling",
    ],
    accent: "maroon",
  },
  {
    icon: Palette,
    title: "UI/UX design",
    description:
      "Interfaces that are clean, modern, and built around how people actually use your product — not just how it looks in a mockup.",
    features: [
      "Product and web design",
      "Design systems and component libraries",
      "User flow and wireframing",
      "Brand identity",
    ],
    accent: "green",
  },
  {
    icon: Headset,
    title: "Ongoing support",
    description:
      "Maintenance, updates, and a team that's still reachable long after launch day.",
    features: [
      "Bug fixes and monitoring",
      "Feature updates",
      "Hosting and infrastructure management",
      "Priority support channel",
    ],
    accent: "gold",
  },
];

const process = [
  {
    icon: Search,
    title: "Discovery",
    description: "We learn your goals, users, and constraints.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Wireframes and visuals before a line of code.",
  },
  {
    icon: Hammer,
    title: "Build",
    description: "Development in regular, reviewable milestones.",
  },
  {
    icon: Rocket,
    title: "Launch & support",
    description: "We ship it, then stay reachable after.",
  },
];

const accentMap = {
  maroon: {
    bg: "bg-maroon/10",
    text: "text-maroon",
    border: "hover:border-maroon/30",
  },
  green: {
    bg: "bg-green/10",
    text: "text-green",
    border: "hover:border-green/30",
  },
  gold: {
    bg: "bg-gold/20",
    text: "text-gold",
    border: "hover:border-gold/40",
  },
};

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

export default function ServicesPage() {
  return (
    <main className="relative">
      {/* hero */}
      <section className="relative px-6 pb-16 pt-28 md:pt-36">
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
            What we do
          </motion.span>
          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-bold leading-tight text-ink md:text-5xl"
          >
            Everything you need to go from idea to shipped
          </motion.h1>
          <motion.p
            variants={item}
            className="mx-auto mt-5 text-ink/70 md:text-lg"
          >
            One team across design, engineering, and AI — so you&apos;re not
            juggling three vendors to get one product built.
          </motion.p>
        </motion.div>
      </section>

      {/* services */}
      <section className="px-6 py-10 md:py-16">
        <motion.div
          className="mx-auto flex max-w-5xl flex-col gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            const accent = accentMap[service.accent];
            return (
              <motion.div
                key={service.title}
                variants={item}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className={`group grid grid-cols-1 gap-6 rounded-3xl border border-ink/10 bg-cream p-7 transition-[border-color,box-shadow] hover:shadow-[0_24px_48px_-20px_rgba(42,36,32,0.2)] md:grid-cols-[auto_1fr_auto] md:items-center md:gap-10 md:p-9 ${accent.border}`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${accent.bg} ${accent.text}`}
                >
                  <Icon size={28} />
                </motion.div>

                <div>
                  <h2 className="font-display text-xl font-bold text-ink md:text-2xl">
                    {service.title}
                  </h2>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-ink/65 md:text-base">
                    {service.description}
                  </p>
                </div>

                <ul className="flex flex-col gap-2.5 md:w-64">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-ink/70"
                    >
                      <Check
                        size={15}
                        className={`mt-0.5 shrink-0 ${accent.text}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* process */}
      <section className="relative px-6 py-20 md:py-28">
        <div className="pointer-events-none absolute right-[5%] top-10 h-[280px] w-[280px] rounded-full bg-green/10 blur-[100px]" />

        <div className="relative mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-xl text-center"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-ink/5 px-3.5 py-1.5 text-xs font-medium text-ink/70">
              How we work
            </span>
            <h2 className="mt-5 font-display text-2xl font-bold text-ink md:text-3xl">
              A simple, transparent process
            </h2>
          </motion.div>

          <motion.div
            className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {process.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  variants={item}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-ink/10 bg-cream p-6 transition-shadow hover:shadow-[0_20px_40px_-16px_rgba(42,36,32,0.2)]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-maroon/10 text-maroon">
                        <Icon size={20} />
                      </div>
                      <span className="font-display text-2xl font-bold text-ink/15">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-base font-bold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65">
                      {step.description}
                    </p>
                  </motion.div>
                  {i < process.length - 1 && (
                    <div className="absolute -right-3 top-1/2 hidden h-px w-5 -translate-y-1/2 bg-ink/15 lg:block" />
                  )}
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
              Not sure which service fits?
            </h2>
            <p className="mt-3 text-cream/65">
              Tell us what you&apos;re building and we&apos;ll point you in the
              right direction.
            </p>
            <motion.div
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 inline-block"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-1.5 rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-cream"
              >
                Get in touch
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
