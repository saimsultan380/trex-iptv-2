"use client";

import {
  LayoutDashboard,
  Zap,
  BadgeDollarSign,
  Headphones,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const points = [
  {
    icon: <LayoutDashboard className="h-5 w-5" />,
    title: "Reseller Account Management",
    text: "Manage customer accounts, subscriptions, and access through the reseller panel.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Account Activation",
    text: "Understand account setup requirements and activation procedures.",
  },
  {
    icon: <BadgeDollarSign className="h-5 w-5" />,
    title: "Wholesale Pricing",
    text: "Check reseller rates, minimum orders, payment terms, and expiration policies.",
  },
  {
    icon: <Headphones className="h-5 w-5" />,
    title: "Technical Assistance",
    text: "Confirm available support channels and troubleshooting options.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Customer and Legal Responsibilities",
    text: "Protect customer data and ensure content distribution is authorized.",
  },
];

export default function HomeResellerSection() {
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
          Become a <span className="text-[#ff3503]">Trex IPTV</span> Reseller
        </h2>

        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-3 max-w-3xl">
          Interested in offering IPTV-related services to customers? Explore the Trex IPTV reseller
          program to learn about available account-management tools, wholesale terms, and support
          options.
        </p>
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-6 max-w-3xl">
          Before joining, review the reseller agreement and confirm what services you are authorized
          to distribute.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
              className="flex items-start gap-3 px-4 py-4 glass-card-hover h-full"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-[#ff3503]">
                {point.icon}
              </div>
              <div>
                <h3 className="text-[13px] sm:text-[14px] font-bold text-zinc-900 mb-1">
                  {point.title}
                </h3>
                <p className="text-[12px] sm:text-[13px] text-zinc-600 leading-relaxed font-medium">
                  {point.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <a
          href="/reseller-panel/"
          className="inline-flex h-12 items-center justify-center rounded-[4px] bg-[#ff3503] px-8 text-[13px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#e62e03] transition-colors"
        >
          Explore the Reseller Program
        </a>
      </motion.div>
    </section>
  );
}
