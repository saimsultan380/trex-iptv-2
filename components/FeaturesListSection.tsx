"use client";

import {
  Tv,
  Film,
  Newspaper,
  Baby,
  Leaf,
  Globe,
  Trophy,
  CalendarDays,
  History,
  MonitorPlay,
} from "lucide-react";
import { motion } from "framer-motion";

const contentItems = [
  { icon: <Tv className="h-5 w-5" />, title: "35,000+ live channels" },
  { icon: <Film className="h-5 w-5" />, title: "160,000+ movies and series" },
  { icon: <Newspaper className="h-5 w-5" />, title: "News and entertainment" },
  { icon: <Baby className="h-5 w-5" />, title: "Children's programming" },
  { icon: <Leaf className="h-5 w-5" />, title: "Lifestyle and documentary channels" },
  { icon: <Globe className="h-5 w-5" />, title: "International television" },
  { icon: <Trophy className="h-5 w-5" />, title: "Selected sports content" },
  { icon: <CalendarDays className="h-5 w-5" />, title: "EPG information on supported channels" },
  { icon: <History className="h-5 w-5" />, title: "Selected Catch-Up content" },
  { icon: <MonitorPlay className="h-5 w-5" />, title: "SD, HD, Full HD and selected 4K streams" },
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
          Live Channels, Movies and <span className="text-[#ff3503]">Series</span>
        </h2>

        <p className="text-zinc-500 text-[13px] sm:text-[15px] leading-relaxed mb-6 sm:mb-10">
          Your access may include:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {contentItems.map((item, i) => (
            <motion.div
              key={i}
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

        <p className="text-zinc-500 text-[13px] sm:text-[15px] leading-relaxed">
          Content availability can change. A particular channel, program, sporting event, movie or series is not permanently guaranteed.
        </p>
      </motion.div>
    </section>
  );
}
