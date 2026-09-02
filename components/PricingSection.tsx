"use client";

import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  { period: "1 month", months: 1, price: "$12.99", perMonth: "$12.99/mo" },
  { period: "3 months", months: 3, price: "$24.99", perMonth: "$8.33/mo" },
  { period: "6 months", months: 6, price: "$35.99", perMonth: "$6.00/mo" },
  { period: "12 months", months: 12, price: "$59.99", perMonth: "$5.00/mo", popular: true },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl w-full px-6 sm:px-8 py-12 sm:py-16 lg:py-28 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-8 sm:mb-14"
      >
        <h2 className="text-[26px] sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 mb-3 sm:mb-4">
          Trex IPTV <span className="text-[#ff3503]">Pricing</span>
        </h2>
        <p className="text-zinc-500 text-[12px] sm:text-[15px] font-medium max-w-xl">
          Choose the access period that suits you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8 sm:mb-10 items-stretch">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.period}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className={`relative flex flex-col rounded-2xl border p-5 sm:p-6 transition-all duration-300 ${
              plan.popular
                ? "border-[#ff3503] bg-gradient-to-b from-orange-50/60 to-white/80 shadow-[0_20px_50px_rgba(255,107,53,0.12)]"
                : "glass-card-hover"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ff3503] text-white text-[10px] sm:text-[11px] font-extrabold px-3 py-1 rounded-full shadow-sm whitespace-nowrap">
                Best Value
              </div>
            )}

            <div className="flex items-center justify-center gap-2 mb-4 mt-1">
              <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${
                plan.popular
                  ? "bg-orange-100 border-orange-200 text-[#ff3503]"
                  : "bg-orange-50 border-orange-100 text-[#ff3503]"
              }`}>
                <Calendar className="h-4 w-4" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
                Access period
              </span>
            </div>

            <h3 className="text-[16px] sm:text-[18px] font-bold text-zinc-900 text-center mb-4">
              {plan.period}
            </h3>

            <div className="w-full h-px bg-zinc-200/80 mb-4" />

            <div className="flex flex-col items-center justify-center flex-grow mb-4">
              <p className={`text-[34px] sm:text-[40px] font-extrabold leading-none ${
                plan.popular ? "text-[#ff3503]" : "text-zinc-900"
              }`}>
                {plan.price}
              </p>
              <p className="text-[11px] sm:text-[12px] font-semibold text-zinc-500 mt-2">
                {plan.perMonth}
              </p>
            </div>

            <div className="mt-auto pt-3 border-t border-zinc-100 text-center">
              <p className="text-[10px] sm:text-[11px] font-medium text-zinc-500">
                1 active stream included
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-3">
          Each standard option includes one active stream at a time. Charges for third-party player apps are separate.
        </p>
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-8">
          Visit the Subscription page to compare features, connection limits, delivery and renewal information.
        </p>
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="/subscription-plans/"
          className="inline-flex h-12 items-center justify-center rounded-[4px] bg-[#ff3503] px-8 text-[13px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#ff3503] transition-colors"
        >
          View Subscription Options
        </motion.a>
      </motion.div>
    </section>
  );
}
