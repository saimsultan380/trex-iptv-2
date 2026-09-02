"use client";

import { motion } from "framer-motion";

export default function AboutUsCTA() {
  return (
    <section className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-20 lg:py-28 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative overflow-hidden rounded-2xl sm:rounded-3xl glass-card px-6 py-10 sm:px-14 sm:py-20 text-center w-full"
      >
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#ff3503]/8 blur-[100px]" />

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-[22px] sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-zinc-900 mb-4 sm:mb-5 max-w-3xl">
            Contact <span className="text-[#ff3503]">Trex IPTV</span>
          </h2>

          <p className="text-zinc-600 text-[13px] sm:text-[16px] leading-relaxed max-w-2xl mb-6 sm:mb-8">
            Use the Contact page for compatibility, activation, support, reseller or legal questions.
          </p>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="/free-trial-contact/"
            className="inline-flex h-12 items-center justify-center rounded-[4px] bg-[#ff3503] px-7 sm:px-9 text-[13px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#ff3503] transition-colors whitespace-nowrap"
          >
            Contact Trex IPTV
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
