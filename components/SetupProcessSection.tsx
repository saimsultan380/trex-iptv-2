"use client";

import {
  ClipboardList,
  KeyRound,
  MonitorCheck,
  ShoppingCart,
} from "lucide-react";
import { motion } from "framer-motion";

const homeSteps = [
  {
    id: "01",
    icon: <MonitorCheck className="h-5 w-5" />,
    title: "Confirm device support",
    description:
      "Confirm that your device supports an IPTV player.",
  },
  {
    id: "02",
    icon: <ShoppingCart className="h-5 w-5" />,
    title: "Choose your access period",
    description:
      "Choose your access period or request an eligible trial.",
  },
  {
    id: "03",
    icon: <KeyRound className="h-5 w-5" />,
    title: "Receive your account information",
    description: "Receive your account information.",
  },
  {
    id: "04",
    icon: <ClipboardList className="h-5 w-5" />,
    title: "Add the login to your player",
    description: "Add the login to your chosen player.",
  },
];

const subscriptionSteps = [
  {
    id: "01",
    icon: <ClipboardList className="h-5 w-5" />,
    title: "Pick Your Trex IPTV Plan",
    description:
      "Choose the subscription plan that best suits your requirements.",
  },
  {
    id: "02",
    icon: <ShoppingCart className="h-5 w-5" />,
    title: "Complete Your Payment",
    description:
      "Pay securely and receive your login details almost immediately.",
  },
  {
    id: "03",
    icon: <MonitorCheck className="h-5 w-5" />,
    title: "Install Your Preferred IPTV Player",
    description:
      "Download any compatible IPTV player app on your device.",
  },
  {
    id: "04",
    icon: <KeyRound className="h-5 w-5" />,
    title: "Enter Your Trex IPTV Login Credentials",
    description:
      "Add your username, password, and server URL into the app.",
  },
  {
    id: "05",
    icon: <ClipboardList className="h-5 w-5" />,
    title: "Start Streaming Right Away",
    description:
      "Browse all the channels and enjoy buffer free streaming instantly.",
  },
];

type SetupProcessSectionProps = {
  variant?: "home" | "subscription";
};

export default function SetupProcessSection({
  variant = "home",
}: SetupProcessSectionProps = {}) {
  const isSubscription = variant === "subscription";
  const steps = isSubscription ? subscriptionSteps : homeSteps;
  const gridCols = isSubscription
    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";

  return (
    <section className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-8 sm:mb-14 w-full"
      >
        <h2 className="text-[26px] sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-zinc-900 mb-4">
          How It <span className="text-[#ff3503]">Works</span>
        </h2>
        {!isSubscription && (
          <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
            Getting started takes four steps:
          </p>
        )}
      </motion.div>

      <div className="relative mb-8 sm:mb-10">
        <div
          className="hidden xl:block absolute top-[52px] left-[10%] right-[10%] h-px bg-[#ff3503]/30 z-0"
          aria-hidden
        />

        <div className={`grid ${gridCols} gap-2.5 sm:gap-4 relative z-10`}>
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className="relative flex flex-row sm:flex-col gap-3 sm:gap-0 p-3.5 sm:p-6 glass-card-hover"
            >
              {index < steps.length - 1 && (
                <div className="hidden xl:flex absolute -right-2 top-[44px] z-20 items-center justify-center w-4 h-4">
                  <div className="w-2.5 h-2.5 rounded-full border-2 border-[#ff3503]/50 bg-white" />
                </div>
              )}

              <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-orange-50 text-[#ff3503] border border-orange-100 sm:mb-4">
                {step.icon}
              </div>

              <div className="flex-1 min-w-0 sm:flex-none">
                <div className="flex items-baseline gap-2 mb-1 sm:mb-2">
                  <span className="text-lg sm:text-[26px] font-extrabold text-[#ff3503] leading-none">
                    {step.id}
                  </span>
                  <h3 className="text-[12px] sm:text-[14px] font-bold text-zinc-900 leading-snug sm:hidden">
                    {step.title}
                  </h3>
                </div>

                <h3 className="hidden sm:block text-[14px] font-bold text-zinc-900 mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-[11px] sm:text-[12px] text-zinc-500 leading-snug sm:leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {!isSubscription && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium"
        >
          The{" "}
          <a href="/installation-guide/" className="text-[#ff3503] font-bold hover:underline">
            Installation Guide
          </a>{" "}
          explains how to connect each supported device.
        </motion.p>
      )}
    </section>
  );
}
