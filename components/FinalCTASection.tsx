"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const checks = [
  "Compare plans and prices in USD.",
  "Check supported devices and IPTV players.",
  "Review available channels and streaming quality.",
  "Confirm stream limits and refund terms.",
];

export default function FinalCTASection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-20 lg:py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative overflow-hidden rounded-2xl sm:rounded-3xl glass-card px-6 py-10 sm:px-14 sm:py-20 text-center"
      >
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#ff3503]/8 blur-[100px]" />

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-[22px] sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-zinc-900 mb-4 sm:mb-5 max-w-3xl">
            Make the Switch to <span className="text-[#ff3503]">Trex IPTV USA</span>
          </h2>

          <p className="text-zinc-600 text-[13px] sm:text-[16px] leading-relaxed max-w-xl mb-6 sm:mb-8">
            Explore subscription options, check device compatibility, and review available content
            before choosing your plan.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 max-w-xl w-full mb-6 sm:mb-8 text-left">
            {checks.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#ff3503] shrink-0 mt-0.5" />
                <span className="text-[12px] sm:text-[13px] font-medium text-zinc-700">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-row flex-wrap items-center justify-center gap-3">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/subscription-plans/"
              className="inline-flex h-12 items-center justify-center rounded-[4px] bg-[#ff3503] px-7 sm:px-9 text-[13px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#e62e03] transition-colors whitespace-nowrap"
            >
              View Plans
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/free-trial-contact/"
              className="inline-flex h-12 items-center justify-center rounded-[4px] border border-zinc-300 bg-white px-7 sm:px-9 text-[13px] sm:text-sm font-bold text-zinc-900 hover:bg-zinc-50 transition-colors whitespace-nowrap"
            >
              Free Setup Assistance
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/free-trial-contact/"
              className="inline-flex h-12 items-center justify-center rounded-[4px] border border-zinc-300 bg-white px-7 sm:px-9 text-[13px] sm:text-sm font-bold text-zinc-900 hover:bg-zinc-50 transition-colors whitespace-nowrap"
            >
              Start Free Trial
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
