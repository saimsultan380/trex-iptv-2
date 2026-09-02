"use client";

import {
  Tv,
  Film,
  MonitorPlay,
  CalendarDays,
  History,
  AppWindow,
  Headphones,
  Monitor,
} from "lucide-react";
import { motion } from "framer-motion";
import { subscriptionIncludes } from "@/lib/subscriptionContent";

const icons = [
  Tv,
  Film,
  MonitorPlay,
  CalendarDays,
  History,
  AppWindow,
  Headphones,
  Monitor,
];

export default function PlanIncludesSection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-6 sm:px-8 py-12 sm:py-16 lg:py-24 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <h2 className="text-[26px] sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.15] text-zinc-900 mb-4">
          What Every Subscription <span className="text-[#ff3503]">Includes</span>
        </h2>

        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-6">
          Your access may include:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
          {subscriptionIncludes.map((item, index) => {
            const Icon = icons[index] ?? Tv;
            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
                className="flex items-center gap-3 px-4 py-3 glass-card-hover"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-[#ff3503]">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-[13px] sm:text-[14px] font-bold text-zinc-900 leading-snug">
                  {item}
                </span>
              </motion.div>
            );
          })}
        </div>

        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
          The catalog can change because of source availability, programming changes and content rights.
        </p>
      </motion.div>
    </section>
  );
}
