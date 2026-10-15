"use client";

import { Monitor, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function OneStreamSection() {
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
          One Active <span className="text-[#ff3503]">Stream</span>
        </h2>

        <div className="glass-card p-6 sm:p-8 space-y-4">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#ff3503]">
              <Monitor className="h-5 w-5" />
            </div>
            <div className="space-y-3">
              <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
                Standard subscriptions currently include one active stream at a time. You can use
                supported devices around your home, subject to the service&apos;s connection rules.
              </p>
              <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
                You may be able to save your login on multiple personal devices, but that does not
                mean you can watch simultaneously on all of them.
              </p>
              <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-[#ff3503] shrink-0 mt-0.5" />
                Simultaneous viewing requires confirmation of additional connection options. Contact
                support if you need more than one active stream.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
