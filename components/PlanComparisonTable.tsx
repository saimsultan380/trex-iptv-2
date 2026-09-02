"use client";

import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { subscriptionPricingRows } from "@/lib/subscriptionContent";

export default function PlanComparisonTable() {
  return (
    <section
      id="comparison"
      className="mx-auto max-w-7xl w-full px-6 sm:px-8 py-12 sm:py-16 lg:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full mb-8 sm:mb-10"
      >
        <h2 className="text-[26px] sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.15] text-zinc-900 mb-4">
          Compare Subscription <span className="text-[#ff6b35]">Prices</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="w-full"
      >
        <div className="flex flex-col gap-4 lg:hidden">
          {subscriptionPricingRows.map((item, index) => (
            <motion.div
              key={item.subscription}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="glass-card-hover p-5"
            >
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-zinc-100">
                <Calendar className="h-4 w-4 text-[#ff6b35] shrink-0" />
                <span className="text-[15px] font-bold text-zinc-900 capitalize">
                  {item.subscription}
                </span>
              </div>
              <dl className="grid grid-cols-1 gap-3">
                <div>
                  <dt className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-0.5">
                    Total price
                  </dt>
                  <dd className="text-[14px] font-bold text-[#ff6b35]">{item.totalPrice}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-0.5">
                    Average monthly cost
                  </dt>
                  <dd className="text-[13px] font-medium text-zinc-600">{item.monthlyCost}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-0.5">
                    Suitable for
                  </dt>
                  <dd className="text-[13px] font-medium text-zinc-600">{item.suitableFor}</dd>
                </div>
              </dl>
            </motion.div>
          ))}
        </div>

        <div className="hidden lg:block w-full glass-card overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-100 bg-white/40">
                {["Subscription", "Total price", "Average monthly cost", "Suitable for"].map(
                  (header) => (
                    <th
                      key={header}
                      className="px-5 py-4 text-[11px] font-bold text-zinc-500 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {subscriptionPricingRows.map((item, index) => (
                <motion.tr
                  key={item.subscription}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="hover:bg-white/50 transition-colors"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-[#ff6b35] shrink-0" />
                      <span className="text-[14px] font-bold text-zinc-900 capitalize">
                        {item.subscription}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-[14px] font-bold text-[#ff6b35]">
                    {item.totalPrice}
                  </td>
                  <td className="px-5 py-4 text-[13px] font-medium text-zinc-600">
                    {item.monthlyCost}
                  </td>
                  <td className="px-5 py-4 text-[13px] font-medium text-zinc-600">
                    {item.suitableFor}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-6 sm:mt-8 text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium w-full"
      >
        Prices are shown in U.S. dollars. Any required taxes or payment-processing charges should appear before payment.
      </motion.p>
    </section>
  );
}
