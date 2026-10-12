"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function GlowCTAButton() {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
      className="relative inline-flex rounded-full p-[1.5px]"
      style={{ overflow: "hidden" }}
    >
      {/* rotating highlight ring — sized/positioned with inline styles
          so it doesn't depend on Tailwind generating an arbitrary class */}
      <motion.span
        aria-hidden
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          width: "250%",
          height: "250%",
          marginTop: "-125%",
          marginLeft: "-125%",
          backgroundImage:
            "conic-gradient(from 0deg, transparent 0%, transparent 72%, rgba(255,255,255,0.95) 85%, transparent 98%)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
      />

      <Link
        href="/contact"
        className="relative z-10 inline-flex items-center gap-1.5 rounded-full bg-maroon px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-ink"
      >
        <MessageCircle size={15} />
        Let&apos;s talk
      </Link>
    </motion.div>
  );
}
