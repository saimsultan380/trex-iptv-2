"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { WHATSAPP_NUMBER } from "@/lib/site";
import { contactCategories } from "@/lib/freeTrialContactContent";

export default function SupportContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const category = String(data.get("category") || "").trim();
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!category || !name || !email || !message) {
      return;
    }

    const body = [
      "Hi, I need Trex IPTV support.",
      "",
      `Category: ${category}`,
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`;
    window.open(href, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    form.reset();
  }

  return (
    <section
      id="support-form"
      className="mx-auto max-w-7xl w-full px-6 sm:px-8 py-12 sm:py-16 lg:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <h2 className="text-[26px] sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.15] text-zinc-900 mb-4 sm:mb-6">
          Contact Form <span className="text-[#ff3503]">Categories</span>
        </h2>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-6 sm:p-8 flex items-start gap-4 border-l-4 border-emerald-500 mb-6"
          >
            <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5" />
            <p className="text-[13px] sm:text-[15px] leading-relaxed font-medium text-zinc-700">
              Thank you. Your support request has been prepared. Send the message in WhatsApp to
              complete your request.
            </p>
          </motion.div>
        ) : null}

        <form onSubmit={handleSubmit} className="glass-card p-5 sm:p-8 space-y-5 sm:space-y-6">
          <div>
            <label htmlFor="category" className="block text-[12px] sm:text-[13px] font-bold text-zinc-800 mb-1.5">
              Contact reason
            </label>
            <select
              id="category"
              name="category"
              required
              defaultValue=""
              className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-[13px] sm:text-[14px] text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#ff3503]/30 focus:border-[#ff3503] transition-colors"
            >
              <option value="" disabled>
                Select a category
              </option>
              {contactCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label htmlFor="supportName" className="block text-[12px] sm:text-[13px] font-bold text-zinc-800 mb-1.5">
                Name
              </label>
              <input
                id="supportName"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-[13px] sm:text-[14px] text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#ff3503]/30 focus:border-[#ff3503] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="supportEmail" className="block text-[12px] sm:text-[13px] font-bold text-zinc-800 mb-1.5">
                Email address
              </label>
              <input
                id="supportEmail"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-[13px] sm:text-[14px] text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#ff3503]/30 focus:border-[#ff3503] transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="supportMessage" className="block text-[12px] sm:text-[13px] font-bold text-zinc-800 mb-1.5">
              Your request
            </label>
            <textarea
              id="supportMessage"
              name="message"
              required
              rows={6}
              placeholder="Include order email, device, player, error details and troubleshooting already completed..."
              className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-[13px] sm:text-[14px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#ff3503]/30 focus:border-[#ff3503] transition-colors resize-y min-h-[140px]"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-[4px] bg-[#ff3503] px-6 text-[11px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#ff3503] transition-colors whitespace-nowrap"
          >
            <Send className="h-4 w-4" />
            Send Support Request
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
