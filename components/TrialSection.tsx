"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const trialChecks = [
  "Installation",
  "Login access",
  "Picture quality",
  "General catalog availability",
  "Device compatibility",
];

export default function TrialSection() {
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
          Trial Before a Longer <span className="text-[#ff3503]">Commitment</span>
        </h2>

        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-3">
          Eligible new customers can request a 24-hour trial to check installation, login access,
          picture quality, and general catalog availability before purchasing a subscription.
        </p>
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-6">
          Use the trial to check:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {trialChecks.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
              className="flex items-center gap-3 px-4 py-3 glass-card-hover"
            >
              <CheckCircle2 className="h-5 w-5 text-[#ff3503] shrink-0" />
              <span className="text-[13px] sm:text-[14px] font-bold text-zinc-900">
                {item}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="space-y-3 mb-8">
          <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
            Confirm the current eligibility rules and trial conditions with support before
            requesting access.
          </p>
        </div>

        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="/free-trial-contact/"
          className="inline-flex h-12 items-center justify-center rounded-[4px] bg-[#ff3503] px-8 text-[13px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#e62e03] transition-colors"
        >
          Start Free Trial
        </motion.a>
      </motion.div>
    </section>
  );
}
