"use client";

import { motion } from "framer-motion";

const options = [
  {
    title: "1-month plan",
    description:
      "The one-month plan is a practical starting point if you want to evaluate compatibility before committing to a longer subscription.",
  },
  {
    title: "3-month and 6-month plans",
    description:
      "The three-month and six-month options provide a middle ground between short-term access and lower average monthly cost.",
  },
  {
    title: "12-month plan",
    description:
      "The twelve-month plan offers the lowest average monthly cost among these four options.",
  },
  {
    title: "Before you order",
    description:
      "Review the current checkout details for payment terms, expiration, renewal conditions, and any applicable refund policy before ordering.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-6 sm:px-8 py-12 sm:py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <h2 className="text-[26px] sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.15] text-zinc-900 mb-4 sm:mb-6">
          Which IPTV Trex Plan Offers the Best Value for{" "}
          <span className="text-[#ff3503]">USA Users?</span>
        </h2>

        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-6">
          The one-month plan is a practical starting point if you want to evaluate compatibility
          before committing to a longer subscription. The three-month and six-month options provide
          a middle ground, while the twelve-month plan offers the lowest average monthly cost among
          these four options.
        </p>

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

        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-6">
          Review the current checkout details for payment terms, expiration, renewal conditions, and
          any applicable refund policy before ordering.
        </p>

        <a
          href="/subscription-plans/"
          className="inline-flex h-12 items-center justify-center rounded-[4px] bg-[#ff3503] px-8 text-[13px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#e62e03] transition-colors"
        >
          Compare All Subscription Plans
        </a>
      </motion.div>
    </section>
  );
}
