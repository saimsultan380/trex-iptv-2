"use client";

import { Monitor } from "lucide-react";
import { motion } from "framer-motion";
import { compatibilityRows } from "@/lib/supportedDevicesContent";

function compatibilityBadge(value: string) {
  if (value === "Recommended") {
    return "text-[#ff6b35] font-bold";
  }
  if (value === "Limited") {
    return "text-amber-600 font-bold";
  }
  return "text-zinc-700 font-semibold";
}

export default function CompatibilityOverviewSection() {
  return (
    <section
      id="compatibility"
      className="mx-auto max-w-7xl w-full px-6 sm:px-8 py-12 sm:py-16 lg:py-24 bg-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full mb-8 sm:mb-10"
      >
        <h2 className="text-[26px] sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.15] text-zinc-900 mb-4">
          Compatibility <span className="text-[#ff6b35]">Overview</span>
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
          {compatibilityRows.map((item, index) => (
            <motion.div
              key={item.device}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="glass-card-hover p-5"
            >
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-zinc-100">
                <Monitor className="h-4 w-4 text-[#ff6b35] shrink-0" />
                <span className="text-[15px] font-bold text-zinc-900">{item.device}</span>
              </div>
              <dl className="grid grid-cols-1 gap-3">
                <div>
                  <dt className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-0.5">
                    Compatibility
                  </dt>
                  <dd className={`text-[13px] ${compatibilityBadge(item.compatibility)}`}>
                    {item.compatibility}
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-0.5">
                    Common player options
                  </dt>
                  <dd className="text-[13px] font-medium text-zinc-600">{item.players}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-0.5">
                    Setup level
                  </dt>
                  <dd className="text-[13px] font-medium text-zinc-600">{item.setup}</dd>
                </div>
              </dl>
            </motion.div>
          ))}
        </div>

        <div className="hidden lg:block w-full glass-card overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-100 bg-white/40">
                {["Device", "Compatibility", "Common player options", "Setup level"].map(
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
              {compatibilityRows.map((item, index) => (
                <motion.tr
                  key={item.device}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.03 }}
                  className="hover:bg-white/50 transition-colors"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <Monitor className="h-4 w-4 text-[#ff6b35] shrink-0" />
                      <span className="text-[14px] font-bold text-zinc-900">{item.device}</span>
                    </div>
                  </td>
                  <td className={`px-5 py-4 text-[13px] ${compatibilityBadge(item.compatibility)}`}>
                    {item.compatibility}
                  </td>
                  <td className="px-5 py-4 text-[13px] font-medium text-zinc-600">
                    {item.players}
                  </td>
                  <td className="px-5 py-4 text-[13px] font-medium text-zinc-600">
                    {item.setup}
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
        Application availability depends on the model, operating system and app-store region.
      </motion.p>
    </section>
  );
}
