"use client";

import {
  Wifi,
  Mail,
  MonitorSmartphone,
  AppWindow,
  HardDrive,
  KeyRound,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  installationLoginTypes,
  installationRequirements,
} from "@/lib/installationContent";

const requirementIcons = [Wifi, Mail, MonitorSmartphone, AppWindow, HardDrive];
const loginIcons = [KeyRound, KeyRound, KeyRound];

export default function InstallationBeforeYouBegin() {
  return (
    <section className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full mb-8 sm:mb-10"
      >
        <h2 className="text-[26px] sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.15] text-zinc-900 mb-4">
          Before You <span className="text-[#ff6b35]">Begin</span>
        </h2>
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-6">
          You need:
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10 w-full">
        {installationRequirements.map((item, index) => {
          const Icon = requirementIcons[index] ?? Wifi;
          return (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
              className="flex items-center gap-3 px-4 py-3 glass-card-hover"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-[#ff6b35]">
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-[13px] sm:text-[14px] font-bold text-zinc-900 leading-snug">
                {item}
              </span>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full"
      >
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-4">
          Your login may arrive as:
        </p>
        <div className="space-y-3 mb-6">
          {installationLoginTypes.map((item, index) => {
            const Icon = loginIcons[index] ?? KeyRound;
            return (
              <div key={item} className="flex items-center gap-3 px-4 py-3 glass-card-hover">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#ff6b35]">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-[13px] sm:text-[14px] font-medium text-zinc-700 leading-relaxed">
                  {item}
                </span>
              </div>
            );
          })}
        </div>
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
          Enter the details exactly as provided. Do not add spaces, change capital letters or publish the information.
        </p>
      </motion.div>
    </section>
  );
}
