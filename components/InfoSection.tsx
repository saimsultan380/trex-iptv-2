"use client";

import { KeyRound, Link2, Monitor } from "lucide-react";
import { motion } from "framer-motion";

const loginTypes = [
  {
    icon: <KeyRound className="h-5 w-5" />,
    title: "Xtream Codes",
  },
  {
    icon: <Link2 className="h-5 w-5" />,
    title: "An M3U playlist",
  },
  {
    icon: <Monitor className="h-5 w-5" />,
    title: "A portal URL connected to a MAC address",
  },
];

export default function InfoSection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-24 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="w-full"
      >
        <h2 className="text-[26px] sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-tight text-zinc-900 mb-4 sm:mb-6">
          What Is{" "}
          <span className="text-[#ff3503]">Trex</span> IPTV?
        </h2>

        <div className="space-y-3 mb-6 sm:mb-8">
          <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
            Trex IPTV is an internet-based television service.
          </p>
          <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
            Instead of connecting a cable box or satellite dish, you watch through an IPTV player on an internet-connected device.
          </p>
          <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
            Your login may be supplied as:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {loginTypes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="flex items-center gap-3 px-4 py-3 glass-card-hover"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#ff3503]">
                {item.icon}
              </div>
              <span className="text-[13px] sm:text-[14px] font-bold text-zinc-900">
                {item.title}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
          Trex IPTV provides the service login. The IPTV player is the app used to display the live channels, movies and series on your screen.
        </p>
      </motion.div>
    </section>
  );
}
