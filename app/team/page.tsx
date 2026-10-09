"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

type Member = {
  name: string;
  role: string;
  initials: string;
  accent: "maroon" | "green" | "gold";
  bio: string;
};

const team: Member[] = [
  {
    name: "Team member",
    role: "Founder & Full-Stack Developer",
    initials: "FM",
    accent: "maroon",
    bio: "Leads architecture and client delivery across web and mobile projects.",
  },
  {
    name: "Team member",
    role: "UI/UX Designer",
    initials: "TM",
    accent: "green",
    bio: "Designs interfaces that are clean, modern, and built around real usage.",
  },
  {
    name: "Team member",
    role: "Mobile Developer",
    initials: "TM",
    accent: "gold",
    bio: "Builds native-feel iOS and Android apps with Flutter.",
  },
  {
    name: "Team member",
    role: "AI Engineer",
    initials: "TM",
    accent: "maroon",
    bio: "Integrates AI features and automation directly into client products.",
  },
];

const panelMap = {
  maroon: "from-maroon/90 via-maroon/50",
  green: "from-green/90 via-green/50",
  gold: "from-gold/95 via-gold/60",
};

const glowMap = {
  maroon: "bg-maroon/15 text-maroon",
  green: "bg-green/15 text-green",
  gold: "bg-gold/25 text-gold",
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
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export default function TeamPage() {
  return (
    <main className="px-6 pb-20 pt-28 md:pt-36">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-ink/5 px-3.5 py-1.5 text-xs font-medium text-ink/70">
          Our team
        </span>
        <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-ink md:text-5xl">
          The people behind the work
        </h1>
        <p className="mx-auto mt-5 text-ink/70 md:text-lg">
          A small, hands-on team of engineers and designers — not a revolving
          door of contractors. You&apos;ll work directly with the people
          building your product.
        </p>
      </motion.div>

      <motion.div
        className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-5 lg:grid-cols-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {team.map((member, i) => (
          <motion.div
            key={`${member.name}-${i}`}
            variants={item}
            className="group"
          >
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={`relative aspect-[3/4] overflow-hidden rounded-3xl border border-ink/10 ${
                glowMap[member.accent]
              }`}
            >
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="absolute inset-0 flex items-center justify-center font-display text-7xl font-bold opacity-25"
              >
                {member.initials}
              </motion.span>

              <div
                className={`absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 ${
                  panelMap[member.accent]
                }`}
              >
                <p className="mb-4 text-center text-xs leading-relaxed text-cream/90">
                  {member.bio}
                </p>
                <div className="flex items-center gap-2">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-cream/15 text-cream transition-colors hover:bg-cream hover:text-ink"
                  >
                    <LinkedinIcon size={14} />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on GitHub`}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-cream/15 text-cream transition-colors hover:bg-cream hover:text-ink"
                  >
                    <GithubIcon size={14} />
                  </a>
                </div>
              </div>

              <span className="absolute left-4 top-4 font-display text-xs font-bold text-ink/25">
                {String(i + 1).padStart(2, "0")}
              </span>
            </motion.div>

            <h3 className="mt-4 font-display text-base font-bold text-ink">
              {member.name}
            </h3>
            <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-ink/45">
              {member.role}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mx-auto mt-20 max-w-2xl rounded-3xl border border-ink/10 bg-ink px-8 py-12 text-center md:px-12"
      >
        <h2 className="font-display text-2xl font-bold text-cream md:text-3xl">
          Want to work with us?
        </h2>
        <p className="mt-3 text-cream/65">
          Whether it&apos;s a project or joining the team, we&apos;d like to
          hear from you.
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
      </motion.div>
    </main>
  );
}
