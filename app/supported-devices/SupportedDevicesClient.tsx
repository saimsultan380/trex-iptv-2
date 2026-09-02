"use client";

import HeroCinemaVisual from "@/components/HeroCinemaVisual";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CompatibilityOverviewSection from "@/components/supported-devices/CompatibilityOverviewSection";
import SupportedDevicesInfoSections from "@/components/supported-devices/SupportedDevicesInfoSections";
import SupportedDevicesFAQ from "@/components/supported-devices/SupportedDevicesFAQ";
import SupportedDevicesCTA from "@/components/supported-devices/SupportedDevicesCTA";

export default function SupportedDevicesClient() {
  return (
    <div className="min-h-screen site-page-bg text-zinc-950 font-sans antialiased flex flex-col">
      <Header />

      <main className="pt-28 pb-10 sm:pt-40 sm:pb-12 lg:pt-48 lg:pb-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col text-left order-1">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-[26px] sm:text-5xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-zinc-950 mb-4 sm:mb-6"
              >
                <span className="text-[#ff3503]">Trex IPTV</span> Supported Devices
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
                className="text-zinc-600 text-[12px] sm:text-[15px] leading-relaxed mb-3 font-medium"
              >
                Trex IPTV works with many popular televisions, streaming devices, phones and computers.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="text-zinc-600 text-[12px] sm:text-[15px] leading-relaxed mb-6 sm:mb-8 font-medium"
              >
                Use this page to check compatibility before ordering. For setup instructions, visit the{" "}
                <a href="/installation-guide/" className="text-[#ff3503] font-bold hover:underline">
                  Installation Guide
                </a>
                .
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
                className="flex flex-row flex-wrap items-center gap-2 sm:gap-3"
              >
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#compatibility"
                  className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-full bg-[#ff3503] btn-brand-animated px-4 sm:px-6 text-[11px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#e62e03] transition-colors whitespace-nowrap"
                >
                  View Compatibility Overview
                  <ChevronRight className="h-4 w-4" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/installation-guide/"
                  className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-[4px] border border-zinc-300 bg-white px-4 sm:px-6 text-[11px] sm:text-sm font-bold text-zinc-950 hover:bg-zinc-50 transition-colors whitespace-nowrap"
                >
                  Read Installation Guide
                </motion.a>
              </motion.div>
            </div>

            <HeroCinemaVisual className="lg:col-span-6 relative flex justify-center lg:justify-end order-2 mt-6 lg:mt-0 w-full min-w-0" />
          </div>
        </div>
      </main>

      <ScrollReveal>
        <CompatibilityOverviewSection />
      </ScrollReveal>
      <ScrollReveal>
        <SupportedDevicesInfoSections />
      </ScrollReveal>
      <ScrollReveal>
        <SupportedDevicesFAQ />
      </ScrollReveal>
      <ScrollReveal>
        <SupportedDevicesCTA />
      </ScrollReveal>

      <Footer />
    </div>
  );
}
