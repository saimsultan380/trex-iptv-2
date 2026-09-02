"use client";

import { motion } from "framer-motion";

export default function SubscriptionCTASection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-20 lg:py-28 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative overflow-hidden rounded-2xl sm:rounded-3xl glass-card px-6 py-10 sm:px-14 sm:py-20 text-center"
      >
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#ff6b35]/8 blur-[100px]" />

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-[22px] sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-zinc-900 mb-4 sm:mb-5 max-w-3xl">
            Choose Your <span className="text-[#ff6b35]">Subscription</span>
          </h2>

          <p className="text-zinc-600 text-[13px] sm:text-[16px] leading-relaxed max-w-2xl mb-6 sm:mb-8">
            Select the period that fits your needs. New customers should begin with a trial or shorter option when unsure.
          </p>

          <div className="flex flex-row flex-wrap items-center justify-center gap-3">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#comparison"
              className="inline-flex h-12 items-center justify-center rounded-[4px] bg-[#ff6b35] px-7 sm:px-9 text-[13px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#ff5722] transition-colors whitespace-nowrap"
            >
              Choose Your Subscription
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/supported-devices/"
              className="inline-flex h-12 items-center justify-center rounded-[4px] border border-zinc-300 bg-white px-7 sm:px-9 text-[13px] sm:text-sm font-bold text-zinc-900 hover:bg-zinc-50 transition-colors whitespace-nowrap"
            >
              Check Supported Devices
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
