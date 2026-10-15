"use client";

import {
  BadgeDollarSign,
  MonitorSmartphone,
  Clapperboard,
  Gauge,
  Headphones,
  FileText,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const rows = [
  {
    icon: <BadgeDollarSign className="h-4 w-4" />,
    factor: "Subscription Cost",
    check: "Plan price, duration, stream limits, and extra app fees.",
  },
  {
    icon: <MonitorSmartphone className="h-4 w-4" />,
    factor: "Device Compatibility",
    check: "Support for your TV, Firestick, or other streaming device.",
  },
  {
    icon: <Clapperboard className="h-4 w-4" />,
    factor: "Content Selection",
    check: "Available channels, movies, series, and EPG listings.",
  },
  {
    icon: <Gauge className="h-4 w-4" />,
    factor: "Streaming Quality",
    check: "Supported resolution, buffering, and playback consistency.",
  },
  {
    icon: <Headphones className="h-4 w-4" />,
    factor: "Customer Support",
    check: "Installation help, troubleshooting, and account assistance.",
  },
  {
    icon: <FileText className="h-4 w-4" />,
    factor: "Subscription Terms",
    check: "Trial eligibility, renewals, expiration, refunds, and privacy.",
  },
  {
    icon: <ShieldCheck className="h-4 w-4" />,
    factor: "Content Authorization",
    check: "Whether the provider has the necessary rights to distribute its content.",
  },
];

export default function ComparisonSection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full mb-6 sm:mb-10"
      >
        <h2 className="text-[26px] sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight text-zinc-900 mb-3 sm:mb-4">
          Trex IPTV vs. Other{" "}
          <span className="text-[#ff3503]">Streaming Options</span>
        </h2>
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium max-w-2xl">
          Use these comparison factors when evaluating Trex IPTV against other streaming choices for
          your household.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="w-full"
      >
        <div className="flex flex-col gap-3 lg:hidden mb-6">
          {rows.map((row, index) => (
            <motion.div
              key={row.factor}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="glass-card-hover p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-[#ff3503]">
                  {row.icon}
                </div>
                <h3 className="text-[14px] font-bold text-zinc-900">{row.factor}</h3>
              </div>
              <p className="text-[12px] sm:text-[13px] text-zinc-600 font-medium leading-relaxed">
                {row.check}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="hidden lg:block w-full glass-card overflow-hidden mb-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-100 bg-white/40">
                <th className="px-5 py-4 text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
                  Comparison Factor
                </th>
                <th className="px-5 py-4 text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
                  What to Check
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.factor} className="border-b border-zinc-100 last:border-0">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[#ff3503]">{row.icon}</span>
                      <span className="text-[14px] font-bold text-zinc-900">{row.factor}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-[14px] font-medium text-zinc-600">
                    {row.check}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <a
          href="/subscription-plans/"
          className="inline-flex h-12 items-center justify-center rounded-[4px] bg-[#ff3503] px-8 text-[13px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#e62e03] transition-colors"
        >
          Review Trex IPTV Plans and Terms
        </a>
      </motion.div>
    </section>
  );
}
