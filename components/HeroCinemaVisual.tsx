"use client";

import { motion } from "framer-motion";
import HeroScreenCinema from "@/components/HeroScreenCinema";
import "@/components/hero-screen-cinema.css";

type HeroCinemaVisualProps = {
  className?: string;
  delay?: number;
};

export default function HeroCinemaVisual({
  className = "lg:col-span-6 relative flex justify-center lg:justify-end mt-3 sm:mt-6 lg:mt-0 w-full min-w-0",
  delay = 0.15,
}: HeroCinemaVisualProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className={className}
    >
      <div className="relative w-full max-w-[min(100%,24rem)] sm:max-w-[min(100%,28rem)] lg:max-w-[min(100%,32rem)]">
        <HeroScreenCinema />
      </div>
    </motion.div>
  );
}
