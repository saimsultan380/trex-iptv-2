"use client";

import { Settings } from "lucide-react";
import { motion } from "framer-motion";
import { recommendedPlayerSettings } from "@/lib/installationContent";

export default function InstallationPlayerSettings() {
  return (
    <section className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <h2 className="text-[26px] sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.15] text-zinc-900 mb-4">
          Recommended Player <span className="text-[#ff3503]">Settings</span>
        </h2>
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-6">
          Try these settings:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {recommendedPlayerSettings.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
              className="flex items-center gap-3 px-4 py-3 glass-card-hover"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-[#ff3503]">
                <Settings className="h-5 w-5" />
              </div>
              <span className="text-[13px] sm:text-[14px] font-medium text-zinc-700 leading-relaxed">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
