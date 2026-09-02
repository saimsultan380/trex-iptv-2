"use client";

import { motion } from "framer-motion";

const options = [
  {
    title: "1-month subscription",
    description:
      "The 1-month subscription is suitable for customers who want the shortest commitment.",
  },
  {
    title: "3-month subscription",
    description:
      "The 3-month subscription offers a lower average monthly price without requiring a long access period.",
  },
  {
    title: "6-month subscription",
    description:
      "The 6-month subscription is better for viewers who have already confirmed their device, player and internet connection.",
  },
  {
    title: "12-month subscription",
    description:
      "The 12-month subscription provides the lowest average monthly cost. New customers should test compatibility before selecting the longest option.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-6 sm:px-8 py-12 sm:py-16 lg:py-24 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <h2 className="text-[26px] sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.15] text-zinc-900 mb-6 sm:mb-8">
          Which Option Should You <span className="text-[#ff6b35]">Choose?</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
          {options.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
              className="glass-card-hover p-5 sm:p-6"
            >
              <h3 className="text-[14px] sm:text-[15px] font-bold text-zinc-900 mb-2 capitalize">
                {option.title}
              </h3>
              <p className="text-zinc-600 text-[13px] sm:text-[14px] leading-relaxed font-medium">
                {option.description}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
          If you are unsure, request an eligible trial or start with one month.
        </p>
      </motion.div>
    </section>
  );
}
