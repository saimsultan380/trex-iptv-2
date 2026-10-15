"use client";

import { Calendar, Check } from "lucide-react";
import { motion } from "framer-motion";

const sharedFeatures = [
  "One active stream",
  "Access to the available subscription catalog",
  "Compatible player setup guidance",
  "Support for account and installation questions",
];

const plans = [
  {
    period: "1-Month Trex IPTV Plan",
    shortPeriod: "1 month",
    price: "$12.99",
    perMonth: "$12.99/mo",
    duration: "One-month subscription period",
    cta: "Choose 1-Month Plan",
  },
  {
    period: "3-Month Trex IPTV Plan",
    shortPeriod: "3 months",
    price: "$24.99",
    perMonth: "$8.33/mo",
    duration: "Three-month subscription period",
    cta: "Choose 3-Month Plan",
  },
  {
    period: "6-Month Trex IPTV Plan",
    shortPeriod: "6 months",
    price: "$35.99",
    perMonth: "$6.00/mo",
    duration: "Six-month subscription period",
    cta: "Choose 6-Month Plan",
  },
  {
    period: "12-Month Trex IPTV Plan",
    shortPeriod: "12 months",
    price: "$59.99",
    perMonth: "$5.00/mo",
    duration: "12-Month Plan",
    cta: "Choose 12-Month Plan",
    popular: true,
  },
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
          Choose the Best Trex IPTV{" "}
          <span className="text-[#ff3503]">Subscription Plan</span>
        </h2>
        <p className="text-zinc-500 text-[12px] sm:text-[15px] font-medium max-w-2xl">
          Choose a Trex IPTV subscription according to how long you want access. All standard
          options include one active stream at a time. Compare the total price, subscription
          duration, and your device requirements before placing an order.
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
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${
                  plan.popular
                    ? "bg-orange-100 border-orange-200 text-[#ff3503]"
                    : "bg-orange-50 border-orange-100 text-[#ff3503]"
                }`}
              >
                <Calendar className="h-4 w-4" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
                Subscription period
              </span>
            </div>

            <h3 className="text-[15px] sm:text-[16px] font-bold text-zinc-900 text-center mb-1 leading-snug">
              {plan.period}
            </h3>
            <p className="text-[11px] text-zinc-500 text-center mb-4 font-medium">
              {plan.duration}
            </p>

            <div className="w-full h-px bg-zinc-200/80 mb-4" />

            <div className="flex flex-col items-center justify-center mb-4">
              <p
                className={`text-[34px] sm:text-[40px] font-extrabold leading-none ${
                  plan.popular ? "text-[#ff3503]" : "text-zinc-900"
                }`}
              >
                {plan.price}
              </p>
              <p className="text-[11px] sm:text-[12px] font-semibold text-zinc-500 mt-2">
                {plan.perMonth} average
              </p>
            </div>

            <ul className="space-y-2 mb-5 flex-grow">
              {sharedFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-[11px] sm:text-[12px] font-medium text-zinc-600"
                >
                  <Check className="h-3.5 w-3.5 text-[#ff3503] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="/subscription-plans/"
              className={`mt-auto inline-flex h-10 sm:h-11 items-center justify-center rounded-[4px] px-4 text-[12px] sm:text-[13px] font-bold transition-colors text-center ${
                plan.popular
                  ? "bg-[#ff3503] text-white hover:bg-[#e62e03]"
                  : "border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50"
              }`}
            >
              {plan.cta}
            </a>
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
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="/subscription-plans/"
          className="inline-flex h-12 items-center justify-center rounded-[4px] bg-[#ff3503] px-8 text-[13px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#e62e03] transition-colors"
        >
          Compare All Subscription Plans
        </motion.a>
      </motion.div>
    </section>
  );
}
