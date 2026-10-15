"use client";

import { Headphones, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

const supportDetails = [
  "Device model",
  "Player name",
  "Exact error message",
  "Whether one channel or every section is affected",
  "Troubleshooting already completed",
];

export default function SupportSection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <h2 className="text-[26px] sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight text-zinc-900 mb-4 sm:mb-6">
          Practical Installation <span className="text-[#ff3503]">Support</span>
        </h2>

        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-6">
          If you experience an activation or playback problem, provide the device model, player
          name, and error details to help identify the cause.
        </p>
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-4">
          For faster help, include:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {supportDetails.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
              className="flex items-center gap-3 px-4 py-3 glass-card-hover"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#ff3503]">
                <Headphones className="h-4 w-4" />
              </div>
              <span className="text-[13px] sm:text-[14px] font-bold text-zinc-900">
                {item}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="glass-card flex items-start gap-3 p-5 sm:p-6 mb-6">
          <ShieldAlert className="h-5 w-5 text-[#ff3503] shrink-0 mt-0.5" />
          <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
            Never publish your username, password or playlist link.
          </p>
        </div>

        <a
          href="/free-trial-contact/"
          className="inline-flex h-12 items-center justify-center rounded-[4px] bg-[#ff3503] px-8 text-[13px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#e62e03] transition-colors"
        >
          Free Setup Assistance
        </a>
      </motion.div>
    </section>
  );
}
