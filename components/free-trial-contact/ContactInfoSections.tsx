"use client";

import type { ReactNode } from "react";
import {
  Clock,
  Headphones,
  ClipboardList,
  ListChecks,
  ShieldCheck,
  ShieldX,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  preContactChecks,
  supportCanInvestigate,
  supportCannotGuarantee,
  supportTopics,
  technicalInfoFields,
  trialChecklist,
  trialEligibilityLimits,
} from "@/lib/freeTrialContactContent";

function SectionBlock({
  id,
  title,
  accent,
  children,
}: {
  id?: string;
  title: string;
  accent: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="mx-auto max-w-7xl w-full px-6 sm:px-8 py-12 sm:py-16 lg:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <h2 className="text-[26px] sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.15] text-zinc-900 mb-4 sm:mb-6">
          {title} <span className="text-[#ff3503]">{accent}</span>
        </h2>
        {children}
      </motion.div>
    </section>
  );
}

function ItemList({ items, icon: Icon }: { items: string[]; icon: typeof Clock }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 list-none p-0 m-0">
      {items.map((item, index) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: index * 0.04, ease: "easeOut" }}
          className="flex items-start gap-3 px-4 py-3 glass-card-hover h-full"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-[#ff3503]">
            <Icon className="h-5 w-5" />
          </div>
          <span className="text-[13px] sm:text-[14px] font-medium text-zinc-700 leading-relaxed pt-1.5">
            {item}
          </span>
        </motion.li>
      ))}
    </ul>
  );
}

export function TrialIntroSection() {
  return (
    <SectionBlock id="free-trial" title="Request a 24-Hour" accent="Free Trial">
      <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-3">
        An eligible trial lets you test Trex IPTV on your own device and internet connection.
      </p>
      <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-4">
        Use it to check:
      </p>
      <ItemList items={trialChecklist} icon={Clock} />
      <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mt-4 glass-card px-4 py-3">
        No payment card is required. The trial ends automatically and does not become a paid
        subscription unless you place a separate order.
      </p>
    </SectionBlock>
  );
}

export function TrialEligibilitySection() {
  return (
    <SectionBlock title="Trial" accent="Eligibility">
      <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-4">
        A trial may be limited to one per:
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-4">
        {trialEligibilityLimits.map((item) => (
          <div
            key={item}
            className="glass-card px-3 py-2.5 text-[12px] sm:text-[13px] font-medium text-zinc-700 text-center"
          >
            {item}
          </div>
        ))}
      </div>
      <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-2">
        Incomplete, repeated or suspicious requests may be declined.
      </p>
      <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
        Trials are for compatibility testing. They are not intended for repeated access to a
        particular event or channel.
      </p>
    </SectionBlock>
  );
}

export function SupportIntroSection() {
  return (
    <SectionBlock title="Contact Customer" accent="Support">
      <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-4">
        Support can assist with:
      </p>
      <ItemList items={supportTopics} icon={Headphones} />
      <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mt-4">
        Send one complete request rather than several messages about the same problem.
      </p>
    </SectionBlock>
  );
}

export function TechnicalInfoSection() {
  return (
    <SectionBlock title="Information to" accent="Include">
      <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-4">
        For technical assistance, provide:
      </p>
      <ItemList items={technicalInfoFields} icon={ClipboardList} />
      <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mt-4 glass-card px-4 py-3 border-l-4 border-[#ff3503]">
        Never send a complete card number or security code.
      </p>
    </SectionBlock>
  );
}

export function PreContactChecksSection() {
  return (
    <SectionBlock title="Complete These Checks" accent="First">
      <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-4">
        Before contacting support:
      </p>
      <ItemList items={preContactChecks} icon={ListChecks} />
      <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mt-4">
        These steps solve many common problems.
      </p>
    </SectionBlock>
  );
}

export function SupportLimitsSection() {
  return (
    <SectionBlock title="What Support Can" accent="Control">
      <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-4">
        Support can investigate activation, account details and basic setup.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mb-6">
        {supportCanInvestigate.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 glass-card px-3 py-2.5 text-[12px] sm:text-[13px] font-medium text-zinc-700"
          >
            <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
            {item}
          </div>
        ))}
      </div>
      <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-4">
        Support cannot guarantee:
      </p>
      <ItemList items={supportCannotGuarantee} icon={ShieldX} />
    </SectionBlock>
  );
}

export function InstallationHelpSection() {
  return (
    <SectionBlock title="Installation" accent="Help">
      <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-6">
        Use the Installation Guide for device-specific instructions. If you have not purchased
        access, check the Supported Devices page first.
      </p>
      <div className="flex flex-row flex-wrap items-center gap-3">
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="/installation-guide/"
          className="inline-flex h-11 sm:h-12 items-center justify-center rounded-full bg-[#ff3503] btn-brand-animated px-6 text-[11px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#e62e03] transition-colors whitespace-nowrap"
        >
          Open Installation Guide
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="/supported-devices/"
          className="inline-flex h-11 sm:h-12 items-center justify-center rounded-[4px] border border-zinc-300 bg-white px-6 text-[11px] sm:text-sm font-bold text-zinc-950 hover:bg-zinc-50 transition-colors whitespace-nowrap"
        >
          Check Supported Devices
        </motion.a>
      </div>
    </SectionBlock>
  );
}
