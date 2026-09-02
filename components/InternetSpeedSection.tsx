"use client";

import { Gauge, Wifi, Cable } from "lucide-react";
import { motion } from "framer-motion";

const speedTiers = [
  { speed: "15 Mbps", label: "for HD" },
  { speed: "25 Mbps", label: "for Full HD" },
  { speed: "50 Mbps", label: "for selected 4K" },
];

export default function InternetSpeedSection() {
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
          Internet Speed <span className="text-[#ff6b35]">Requirements</span>
        </h2>

        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-3">
          Your streaming quality depends on the internet speed that reaches your viewing device.
        </p>
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-6 sm:mb-8">
          Recommended speeds are approximately:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {speedTiers.map((tier, i) => (
            <motion.div
              key={tier.speed}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
              className="glass-card-hover flex flex-col items-center text-center p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-[#ff6b35] mb-3">
                <Gauge className="h-5 w-5" />
              </div>
              <p className="text-[24px] sm:text-[28px] font-extrabold text-zinc-900 leading-none mb-1">
                {tier.speed}
              </p>
              <p className="text-[12px] sm:text-[14px] font-semibold text-zinc-500">
                {tier.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="space-y-3">
          <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium flex items-start gap-2">
            <Cable className="h-5 w-5 text-[#ff6b35] shrink-0 mt-0.5" />
            Ethernet is often more stable than Wi-Fi. When using Wi-Fi, keep your device near the router and avoid large downloads while watching.
          </p>
          <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium flex items-start gap-2">
            <Wifi className="h-5 w-5 text-[#ff6b35] shrink-0 mt-0.5" />
            Internet-provider routing, network traffic, device performance and player settings can affect playback. No provider can honestly guarantee that buffering will never happen.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
