"use client";

import {
  Tv,
  MonitorPlay,
  LifeBuoy,
  Clock,
  BadgeDollarSign,
} from "lucide-react";
import { motion } from "framer-motion";

const contentItems = [
  {
    icon: <Tv className="h-5 w-5" />,
    title: "Live television and on-demand entertainment",
  },
  {
    icon: <MonitorPlay className="h-5 w-5" />,
    title: "HD, Full HD, and selected 4K streams on IPTV Trex",
  },
  {
    icon: <LifeBuoy className="h-5 w-5" />,
    title: "Free of Cost compatible-device guidance",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "A 24-hour trial for eligible new customers",
  },
  {
    icon: <BadgeDollarSign className="h-5 w-5" />,
    title: "Simple subscription options with US-dollar pricing",
  },
];

export default function FeaturesListSection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="w-full"
      >
        <h2 className="text-[26px] sm:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.08] text-zinc-900 mb-3 sm:mb-6">
          Trex IPTV for Live TV, Movies and Series in{" "}
          <span className="text-[#ff3503]">HD &amp; 4K</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {contentItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: "easeOut" }}
              className="flex items-center gap-3 px-4 py-3 glass-card-hover"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-[#ff3503]">
                {item.icon}
              </div>
              <span className="text-[12px] sm:text-[14px] font-bold text-zinc-900 leading-snug">
                {item.title}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-row flex-wrap items-center gap-2 sm:gap-3">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="/subscription-plans/"
            className="inline-flex h-11 sm:h-12 items-center justify-center rounded-[4px] bg-[#ff3503] px-6 sm:px-8 text-[12px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#e62e03] transition-colors"
          >
            Buy Trex IPTV
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="/free-trial-contact/"
            className="inline-flex h-11 sm:h-12 items-center justify-center rounded-[4px] border border-zinc-300 bg-white px-6 sm:px-8 text-[12px] sm:text-sm font-bold text-zinc-900 hover:bg-zinc-50 transition-colors"
          >
            Get 24/7 Support
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
