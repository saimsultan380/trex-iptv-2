"use client";

import {
  BadgeDollarSign,
  MonitorSmartphone,
  Tv,
  Clock,
  Wrench,
  Eye,
} from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: <BadgeDollarSign className="h-5 w-5" />,
    title: "Clear Subscription Options",
    text: "Compare one-month, three-month, six-month, and twelve-month plans before purchasing. Each option has a published total price, making it easier to understand your initial cost.",
  },
  {
    icon: <MonitorSmartphone className="h-5 w-5" />,
    title: "Compatible-Device Guidance",
    text: "Check whether your television, streaming device, or computer supports a compatible IPTV player before placing your order. This helps reduce installation problems later.",
  },
  {
    icon: <Tv className="h-5 w-5" />,
    title: "Flexible Viewing Devices",
    text: "Use supported devices around your home, subject to the service's connection rules. Standard subscriptions currently include one active stream, so simultaneous viewing requires confirmation of additional connection options.",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Trial Before a Longer Commitment",
    text: "Eligible new customers can request a 24-hour trial to check installation, login access, picture quality, and general catalog availability before purchasing a subscription.",
  },
  {
    icon: <Wrench className="h-5 w-5" />,
    title: "Practical Installation Support",
    text: "If you experience an activation or playback problem, provide the device model, player name, and error details to help identify the cause.",
  },
  {
    icon: <Eye className="h-5 w-5" />,
    title: "Transparent Service Expectations",
    text: "Internet speed, network congestion, device performance, and content-source availability can all affect playback. Reviewing these factors before subscribing helps you make a more informed choice.",
  },
];

export default function BeforeOrderingSection() {
  return (
    <section className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <h2 className="text-[26px] sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight text-zinc-900 mb-4 sm:mb-6">
          Why Choose <span className="text-[#ff3503]">Trex IPTV USA?</span>
        </h2>

        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-6">
          Choosing an IPTV service involves more than comparing the number of channels. Device
          compatibility, clear pricing, account access, support, and a reliable setup process all
          matter when deciding which subscription suits your household.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
              className="flex items-start gap-3 px-4 py-4 glass-card-hover h-full"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#ff3503]">
                {item.icon}
              </div>
              <div>
                <h3 className="text-[13px] sm:text-[14px] font-bold text-zinc-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-[12px] sm:text-[13px] text-zinc-600 leading-relaxed font-medium">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="/supported-devices/"
          className="inline-flex h-12 items-center justify-center rounded-[4px] border border-zinc-300 bg-white px-6 sm:px-8 text-[12px] sm:text-sm font-bold text-zinc-900 hover:bg-zinc-50 transition-colors"
        >
          Check Compatibility and Plans
        </motion.a>
      </motion.div>
    </section>
  );
}
