"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { supportedDevicesFaqs } from "@/lib/supportedDevicesContent";

export default function SupportedDevicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-24 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-8 sm:mb-14"
      >
        <h2 className="text-[26px] sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900">
          Frequently Asked <span className="text-[#ff6b35]">Questions</span>
        </h2>
      </motion.div>

      <div className="space-y-2 sm:space-y-3">
        {supportedDevicesFaqs.map((faq, index) => (
          <motion.div
            key={index}
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
                {faq.question}
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
                      {faq.answer}
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
