"use client";

import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  projectType: "Web development",
  budget: "",
  message: "",
};

const projectTypes = [
  "Web development",
  "Mobile app",
  "AI integration",
  "UI/UX design",
  "Something else",
];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Enter your name";
    if (!form.email.trim()) {
      next.email = "Enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email";
    }
    if (!form.message.trim()) next.message = "Tell us a bit about the project";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      // TODO: wire this up to an API route (e.g. /api/contact) that sends
      // the email — this just simulates a network call for now.
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("sent");
      setForm(initialState);
    } catch {
      setStatus("idle");
    }
  }

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex h-full flex-col items-center justify-center rounded-3xl border border-ink/10 bg-cream p-10 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
            delay: 0.1,
          }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-green/15 text-green"
        >
          <Check size={24} />
        </motion.div>
        <h3 className="mt-5 font-display text-xl font-bold text-ink">
          Message sent
        </h3>
        <p className="mt-2 max-w-xs text-sm text-ink/65">
          Thanks for reaching out — we&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-maroon hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-ink/10 bg-cream p-6 md:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-xs font-medium text-ink/60">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your name"
            className={`mt-1.5 w-full rounded-xl border bg-cream px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-maroon/50 ${
              errors.name ? "border-red-400" : "border-ink/15"
            }`}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="text-xs font-medium text-ink/60">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@company.com"
            className={`mt-1.5 w-full rounded-xl border bg-cream px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-maroon/50 ${
              errors.email ? "border-red-400" : "border-ink/15"
            }`}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label className="text-xs font-medium text-ink/60">Project type</label>
        <div className="mt-2 flex flex-wrap gap-2">
          {projectTypes.map((type) => (
            <motion.button
              key={type}
              type="button"
              onClick={() => update("projectType", type)}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                form.projectType === type
                  ? "border-maroon bg-maroon text-cream"
                  : "border-ink/15 text-ink/65 hover:border-ink/30"
              }`}
            >
              {type}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="budget" className="text-xs font-medium text-ink/60">
          Budget range{" "}
          <span className="font-normal text-ink/40">(optional)</span>
        </label>
        <input
          id="budget"
          type="text"
          value={form.budget}
          onChange={(e) => update("budget", e.target.value)}
          placeholder="e.g. $5,000 – $10,000"
          className="mt-1.5 w-full rounded-xl border border-ink/15 bg-cream px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-maroon/50"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-xs font-medium text-ink/60">
          Project details
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us about what you're building..."
          className={`mt-1.5 w-full resize-none rounded-xl border bg-cream px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-maroon/50 ${
            errors.message ? "border-red-400" : "border-ink/15"
          }`}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
        )}
      </div>

      <motion.button
        type="submit"
        disabled={status === "submitting"}
        whileHover={{ y: status === "submitting" ? 0 : -2 }}
        whileTap={{ scale: status === "submitting" ? 1 : 0.97 }}
        className="group mt-6 flex w-full items-center justify-center gap-1.5 rounded-full bg-maroon px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-ink disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send message
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </>
        )}
      </motion.button>
    </form>
  );
}
