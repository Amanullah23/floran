"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, MessageCircle } from "lucide-react";
import Image from "next/image";
import GlowCTAButton from "@/components/GlowCTAButton";

const links = [
  //{ href: "/", label: "Home" },
  { href: "/about", label: "Why Floran" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/team", label: "Team" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6"
    >
      <header
        className={`pointer-events-auto relative w-full max-w-5xl overflow-hidden rounded-full border transition-all duration-300 ${
          scrolled
            ? "border-ink/10 bg-cream/90 shadow-[0_8px_30px_-8px_rgba(42,36,32,0.25)] backdrop-blur-xl"
            : "border-ink/5 bg-cream/60 shadow-none backdrop-blur-md"
        }`}
      >
        <span
          className={`pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-maroon via-gold to-green transition-opacity duration-500 ${
            scrolled ? "opacity-60" : "opacity-0"
          }`}
        />

        <nav
          className={`flex items-center justify-between gap-4 px-4 transition-all duration-300 md:px-5 ${
            scrolled ? "py-2" : "py-3"
          }`}
        >
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <Image
              src="/floran-logo.png"
              alt="Floran"
              width={1666}
              height={904}
              priority
              className="h-12 w-auto md:h-10"
            />
            <span className="relative hidden h-2 w-2 md:inline-flex">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
            </span>
          </Link>

          <ul className="hidden items-center gap-0.5 rounded-full bg-ink/5 p-1 md:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative z-10 block rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-300 ${
                      active ? "text-cream" : "text-ink/65 hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                      className="absolute inset-0 rounded-full bg-maroon shadow-[0_2px_8px_-2px_rgba(107,18,38,0.6)]"
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="hidden md:block"
          >
            <GlowCTAButton />
          </motion.div>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-full p-2 text-ink transition-colors hover:bg-ink/5 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-auto absolute inset-x-4 top-[calc(100%+8px)] rounded-3xl border border-ink/10 bg-cream/95 p-2 shadow-[0_8px_30px_-8px_rgba(42,36,32,0.25)] backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-0.5">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`block rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                        active
                          ? "bg-maroon text-cream"
                          : "text-ink/75 hover:bg-ink/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-1">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-1.5 rounded-2xl bg-ink px-4 py-3 text-sm font-medium text-cream"
                >
                  Let&apos;s talk
                  <MessageCircle size={15} />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
