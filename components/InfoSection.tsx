"use client";

import { KeyRound, Link2, Monitor, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const loginTypes = [
  {
    icon: <KeyRound className="h-5 w-5" />,
    title: "Xtream Codes login",
  },
  {
    icon: <Link2 className="h-5 w-5" />,
    title: "M3U playlists",
  },
  {
    icon: <Monitor className="h-5 w-5" />,
    title: "Portal-based connections",
  },
];

const howItWorks = [
  "Choose an available subscription or request an eligible trial.",
  "Receive the account information required for access.",
  "Install or open a compatible IPTV player.",
  "Enter the supplied login details or playlist information.",
  "Browse the available catalog and select content to watch.",
];

export default function InfoSection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-24">
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
            Trex IPTV is an internet-based television service that provides account access to
            available live television and on-demand content through a compatible IPTV player.
          </p>
          <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
            Unlike a traditional cable connection, IPTV uses an internet connection to deliver
            streams to supported devices. You can use a compatible Smart TV, streaming device, phone,
            tablet, or computer, depending on the player and service requirements.
          </p>
        </div>

        <h3 className="text-[20px] sm:text-2xl lg:text-3xl font-bold tracking-tight text-zinc-900 mb-3 sm:mb-4">
          How Does IPTV Trex <span className="text-[#ff3503]">Work?</span>
        </h3>
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-4">
          The process is straightforward:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {howItWorks.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
              className="flex items-start gap-3 px-4 py-3 glass-card-hover"
            >
              <CheckCircle2 className="h-5 w-5 text-[#ff3503] shrink-0 mt-0.5" />
              <span className="text-[13px] sm:text-[14px] font-bold text-zinc-900 leading-snug">
                {item}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-4">
          Some IPTV players support Xtream Codes login, M3U playlists, or portal-based connections.
          The appropriate method depends on your account details and device.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {loginTypes.map((item, i) => (
            <motion.div
              key={item.title}
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

        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="/subscription-plans/"
          className="inline-flex h-12 items-center justify-center rounded-[4px] bg-[#ff3503] px-8 text-[13px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#e62e03] transition-colors"
        >
          Explore Trex IPTV Subscription Options
        </motion.a>
      </motion.div>
    </section>
  );
}
