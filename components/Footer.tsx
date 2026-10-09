"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons";

const currentYear = 2026;

const columns = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/team", label: "Team" },
      { href: "/work", label: "Work" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services", label: "Web development" },
      { href: "/services", label: "Mobile apps" },
      { href: "/services", label: "AI integration" },
      { href: "/services", label: "UI/UX design" },
    ],
  },
];

const socials = [
  { href: "https://linkedin.com", Icon: LinkedinIcon, label: "LinkedIn" },
  { href: "https://github.com", Icon: GithubIcon, label: "GitHub" },
  { href: "https://x.com", Icon: XIcon, label: "X" },
  { href: "mailto:hello@floran.com", Icon: Mail, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 px-6 pt-16 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl"
      >
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div className="max-w-xs">
            <Link
              href="/"
              className="font-display text-xl font-bold tracking-wide text-maroon"
            >
              FLORAN
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-ink/60">
              A software studio building web, mobile, and AI-powered products
              for clients worldwide.
            </p>
            <div className="mt-5 flex items-center gap-2">
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

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-medium uppercase tracking-wide text-ink/45">
                  {col.title}
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-ink/65 transition-colors hover:text-maroon"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ink/10 pt-6 sm:flex-row">
          <p className="text-xs text-ink/50">
            © {currentYear} Floran. All rights reserved.
          </p>
          <p className="font-display text-xs text-ink/40">Ideas grow here.</p>
        </div>
      </motion.div>
    </footer>
  );
}
