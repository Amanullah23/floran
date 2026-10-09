"use client";

import {
  Code2,
  Smartphone,
  Sparkles,
  Database,
  Palette,
  Headset,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Code2,
    title: "Web development",
    description:
      "Fast, scalable websites and web apps built with modern frameworks — from marketing sites to full platforms.",
    span: "lg:col-span-2 lg:row-span-2",
    featured: true,
  },
  {
    icon: Smartphone,
    title: "Mobile apps",
    description:
      "Native-feel iOS and Android apps, from prototype to app store launch.",
    span: "lg:col-span-2",
  },
  {
    icon: Sparkles,
    title: "AI integration",
    description: "Chat assistants and automation woven into your product.",
    span: "",
  },
  {
    icon: Database,
    title: "Systems & databases",
    description: "Backend architecture built to handle real-world scale.",
    span: "",
  },
  {
    icon: Palette,
    title: "UI/UX design",
    description:
      "Interfaces built around how people actually use your product.",
    span: "lg:col-span-2",
  },
  {
    icon: Headset,
    title: "Ongoing support",
    description: "Maintenance and a team still reachable after launch.",
    span: "lg:col-span-2",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function Services() {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:py-28">
      <div className="pointer-events-none absolute right-[5%] top-10 h-[300px] w-[300px] rounded-full bg-green/10 blur-[100px]" />
      <div className="pointer-events-none absolute left-[5%] bottom-0 h-[260px] w-[260px] rounded-full bg-maroon/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-xl text-center"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-cream/80 px-3.5 py-1.5 text-xs font-medium text-ink/70 backdrop-blur">
            What we do
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold text-ink md:text-4xl">
            Everything you need to go from idea to shipped
          </h2>
          <p className="mt-4 text-ink/70">
            One team across design, engineering, and AI — so you&apos;re not
            juggling three vendors to get one product built.
          </p>
        </motion.div>

        <motion.div
          className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-4 lg:grid-rows-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={item}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`group relative overflow-hidden rounded-3xl border border-ink/10 bg-cream p-7 transition-colors hover:border-maroon/30 hover:shadow-[0_24px_48px_-20px_rgba(42,36,32,0.25)] ${service.span}`}
              >
                <span className="font-display text-xs font-bold text-ink/20">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mt-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-maroon/10 text-maroon ring-1 ring-maroon/10 transition-colors group-hover:bg-maroon group-hover:text-cream"
                >
                  <Icon size={22} />
                </motion.div>

                <h3
                  className={`mt-6 font-display font-bold text-ink ${
                    service.featured ? "text-2xl" : "text-lg"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed text-ink/65 ${
                    service.featured ? "max-w-xs" : ""
                  }`}
                >
                  {service.description}
                </p>

                <ArrowUpRight
                  size={18}
                  className="absolute right-6 top-7 text-ink/0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-maroon"
                />

                {service.featured && (
                  <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-maroon/5" />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
