"use client";

import HeroCinemaVisual from "@/components/HeroCinemaVisual";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import {
  TrialIntroSection,
  TrialEligibilitySection,
  SupportIntroSection,
  TechnicalInfoSection,
  PreContactChecksSection,
  SupportLimitsSection,
  InstallationHelpSection,
} from "@/components/free-trial-contact/ContactInfoSections";
import FreeTrialForm from "@/components/free-trial-contact/FreeTrialForm";
import SupportContactForm from "@/components/free-trial-contact/SupportContactForm";

export default function FreeTrialContactClient() {
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
                Request a <span className="text-[#ff3503]">Trex IPTV</span> Free Trial or Contact
                Support
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
                className="text-zinc-600 text-[12px] sm:text-[15px] leading-relaxed mb-3 font-medium"
              >
                Use this page to request a trial, ask a question before ordering or get help with an
                existing account.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="text-zinc-600 text-[12px] sm:text-[15px] leading-relaxed mb-6 sm:mb-8 font-medium"
              >
                Choose the correct contact reason so your request reaches the right support area.
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
                  href="#free-trial-form"
                  className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-full bg-[#ff3503] btn-brand-animated px-4 sm:px-6 text-[11px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#e62e03] transition-colors whitespace-nowrap"
                >
                  Request My Free Trial
                  <ChevronRight className="h-4 w-4" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#support-form"
                  className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-[4px] border border-zinc-300 bg-white px-4 sm:px-6 text-[11px] sm:text-sm font-bold text-zinc-950 hover:bg-zinc-50 transition-colors whitespace-nowrap"
                >
                  Contact Customer Support
                </motion.a>
              </motion.div>
            </div>

            <HeroCinemaVisual className="lg:col-span-6 relative flex justify-center lg:justify-end order-2 mt-6 lg:mt-0 w-full min-w-0" />
          </div>
        </div>
      </main>

      <ScrollReveal>
        <TrialIntroSection />
      </ScrollReveal>
      <ScrollReveal>
        <FreeTrialForm />
      </ScrollReveal>
      <ScrollReveal>
        <TrialEligibilitySection />
      </ScrollReveal>
      <ScrollReveal>
        <SupportIntroSection />
      </ScrollReveal>
      <ScrollReveal>
        <TechnicalInfoSection />
      </ScrollReveal>
      <ScrollReveal>
        <SupportContactForm />
      </ScrollReveal>
      <ScrollReveal>
        <PreContactChecksSection />
      </ScrollReveal>
      <ScrollReveal>
        <SupportLimitsSection />
      </ScrollReveal>
      <ScrollReveal>
        <InstallationHelpSection />
      </ScrollReveal>

      <Footer />
    </div>
  );
}
