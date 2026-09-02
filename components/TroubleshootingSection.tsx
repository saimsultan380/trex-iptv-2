"use client";

import { useState } from "react";
import { ChevronDown, Headphones } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { installationSupportDetails, installationTroubleshooting } from "@/lib/installationContent";

export default function TroubleshootingSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-24 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full mb-8 sm:mb-10"
      >
        <h2 className="text-[26px] sm:text-4xl lg:text-[42px] font-bold tracking-tight text-zinc-900 leading-[1.15]">
          Fix Common <span className="text-[#ff6b35]">Problems</span>
        </h2>
      </motion.div>

      <div className="w-full space-y-2 sm:space-y-3">
        {installationTroubleshooting.map((item, index) => (
          <motion.div
            key={item.question}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.04, ease: "easeOut" }}
            className={`rounded-xl border transition-all duration-200 overflow-hidden glass-card ${
              openIndex === index
                ? "border-[#ff6b35] shadow-[0_4px_20px_rgba(255,107,53,0.08)]"
                : "hover:border-zinc-300"
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-5 text-left focus:outline-none gap-3 sm:gap-4"
            >
              <span
                className={`text-[13px] sm:text-[15px] font-bold leading-snug transition-colors ${
                  openIndex === index ? "text-[#ff6b35]" : "text-zinc-900"
                }`}
              >
                {item.question}:
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="shrink-0"
              >
                <ChevronDown
                  className={`h-5 w-5 ${openIndex === index ? "text-[#ff6b35]" : "text-zinc-400"}`}
                />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-zinc-100">
                    <p className="text-zinc-500 text-[12px] sm:text-[14px] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function InstallationSupportSection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <h2 className="text-[26px] sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.15] text-zinc-900 mb-4">
          Contact Installation <span className="text-[#ff6b35]">Support</span>
        </h2>
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-6">
          Provide:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
          {installationSupportDetails.map((item) => (
            <div key={item} className="flex items-center gap-3 px-4 py-3 glass-card-hover">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#ff6b35]">
                <Headphones className="h-4 w-4" />
              </div>
              <span className="text-[13px] sm:text-[14px] font-bold text-zinc-900 leading-snug">
                {item}
              </span>
            </div>
          ))}
        </div>
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="/free-trial-contact/"
          className="inline-flex h-12 items-center justify-center rounded-[4px] bg-[#ff6b35] px-8 text-[13px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#ff5722] transition-colors"
        >
          Contact Setup Support
        </motion.a>
      </motion.div>
    </section>
  );
}
