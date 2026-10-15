"use client";

import { motion } from "framer-motion";
import HeroCinemaVisual from "@/components/HeroCinemaVisual";

const trustPoints = [
  "Live TV, Movies & Series",
  "HD / Full HD / Selected 4K",
  "24-Hour Trial",
  "24/7 Support",
];

export default function Hero() {
  return (
    <section id="hero" className="hero-warm-bg w-full overflow-hidden">
      <div className="mx-auto max-w-7xl w-full px-6 pt-28 pb-6 sm:px-8 sm:pt-40 sm:pb-12 lg:pt-48 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-8 lg:gap-6 items-center">
          <div className="lg:col-span-6 flex flex-col text-left">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[26px] sm:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.12] text-zinc-950"
            >
              <span className="text-[#ff3503]">Trex IPTV</span> USA | Get Trex IPTV
              Subscription &amp; Reseller Panel
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="mt-2 sm:mt-5 text-zinc-600 text-[13px] sm:text-[15px] leading-snug sm:leading-relaxed font-medium max-w-xl"
            >
              Enjoy a simpler way to watch television with Trex IPTV in the USA. Explore live TV,
              movies, series, news, entertainment, and selected sports content through a compatible
              device and an internet connection.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="mt-2 sm:mt-3 text-zinc-600 text-[13px] sm:text-[15px] leading-snug sm:leading-relaxed font-medium max-w-xl"
            >
              Whether you watch on a Smart TV, Amazon Fire TV Stick, Android device, iPhone, or
              computer, Trex IPTV makes it easy to connect your account to a supported IPTV player
              and start exploring available content anywhere in the USA.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              className="mt-2 sm:mt-3 text-zinc-600 text-[13px] sm:text-[15px] leading-snug sm:leading-relaxed font-medium max-w-xl"
            >
              Choose an IPTV Trex subscription period according to your needs, check device
              compatibility, and get the Trex IPTV installation guide anytime &amp; customer support
              24/7.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="flex flex-row flex-wrap items-center gap-2 sm:gap-3 mt-4 sm:mt-8"
            >
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="/subscription-plans/"
                className="btn-brand btn-brand-animated h-11 sm:h-12 px-5 sm:px-7 text-[12px] sm:text-sm whitespace-nowrap"
              >
                Get Trex IPTV
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="/subscription-plans/"
                className="btn-outline h-11 sm:h-12 px-5 sm:px-7 text-[12px] sm:text-sm whitespace-nowrap"
              >
                View Trex IPTV Subscription Plans
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="/supported-devices/"
                className="btn-outline h-11 sm:h-12 px-5 sm:px-7 text-[12px] sm:text-sm whitespace-nowrap"
              >
                Check Supported Devices
              </motion.a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
              className="mt-3 sm:mt-8 text-[11px] sm:text-[13px] font-semibold text-zinc-500"
            >
              {trustPoints.join(" • ")}
            </motion.p>
          </div>

          <HeroCinemaVisual delay={0.2} />
        </div>
      </div>
    </section>
  );
}
