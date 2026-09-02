"use client";

import {
  MonitorCheck,
  AppWindow,
  Wifi,
  HardDrive,
  Info,
} from "lucide-react";
import { motion } from "framer-motion";

const checklist = [
  { icon: <MonitorCheck className="h-5 w-5" />, text: "A compatible device" },
  { icon: <AppWindow className="h-5 w-5" />, text: "A suitable IPTV player" },
  { icon: <Wifi className="h-5 w-5" />, text: "A stable internet connection" },
  { icon: <HardDrive className="h-5 w-5" />, text: "Enough device storage" },
  { icon: <Info className="h-5 w-5" />, text: "A clear understanding of the one-stream limit" },
];

export default function BeforeOrderingSection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-24 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <h2 className="text-[26px] sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight text-zinc-900 mb-4 sm:mb-6">
          Check These Points Before <span className="text-[#ff6b35]">Ordering</span>
        </h2>

        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-6">
          Make sure you have:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {checklist.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
              className="flex items-center gap-3 px-4 py-3 glass-card-hover"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#ff6b35]">
                {item.icon}
              </div>
              <span className="text-[13px] sm:text-[14px] font-bold text-zinc-900">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
          Some player apps require a separate payment. Channel availability can change, and customers are responsible for using the service in accordance with applicable laws.
        </p>
      </motion.div>
    </section>
  );
}
