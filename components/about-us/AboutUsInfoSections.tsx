"use client";

import type { ReactNode } from "react";
import {
  Compass,
  Settings,
  RefreshCw,
  Shield,
  ClipboardCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  beforePurchaseChecks,
  ourApproachGoals,
  whatCanChange,
  whatWeControl,
  whatWeProvide,
} from "@/lib/aboutUsContent";

function SectionBlock({
  title,
  accent,
  children,
}: {
  title: string;
  accent: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl w-full px-6 sm:px-8 py-12 sm:py-16 lg:py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <h2 className="text-[26px] sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.15] text-zinc-900 mb-4 sm:mb-6">
          {title} <span className="text-[#ff6b35]">{accent}</span>
        </h2>
        {children}
      </motion.div>
    </section>
  );
}

function ItemList({ items, icon: Icon }: { items: string[]; icon: typeof Compass }) {
  return (
    <ul className="space-y-2 sm:space-y-3">
      {items.map((item, index) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: index * 0.04, ease: "easeOut" }}
          className="flex items-start gap-3 px-4 py-3 glass-card-hover"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-[#ff6b35]">
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

export function OurApproachSection() {
  return (
    <SectionBlock title="Our" accent="Approach">
      <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-3">
        IPTV can be confusing for first-time viewers.
      </p>
      <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-4">
        Different devices use different apps, internet performance varies and many technical terms are
        difficult to understand.
      </p>
      <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-4">
        We aim to make the process clearer through:
      </p>
      <ItemList items={ourApproachGoals} icon={Compass} />
      <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mt-4 glass-card px-4 py-3">
        Customers should understand what they are purchasing before making a payment.
      </p>
    </SectionBlock>
  );
}

export function WhatWeProvideSection() {
  return (
    <SectionBlock title="What We" accent="Provide">
      <div className="space-y-3">
        {whatWeProvide.map((paragraph, index) => (
          <p
            key={index}
            className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium glass-card px-4 py-4"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </SectionBlock>
  );
}

export function WhatWeControlSection() {
  return (
    <SectionBlock title="What We" accent="Control">
      <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-4">
        We focus on:
      </p>
      <ItemList items={whatWeControl} icon={Settings} />
      <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mt-4">
        When a confirmed service-side activation problem occurs, we work to correct it under the
        applicable support and refund rules.
      </p>
    </SectionBlock>
  );
}

export function WhatCanChangeSection() {
  return (
    <SectionBlock title="What Can" accent="Change">
      <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-4">
        Internet television depends on external systems. Because of this:
      </p>
      <ItemList items={whatCanChange} icon={RefreshCw} />
      <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mt-4 glass-card px-4 py-3 border-l-4 border-[#ff6b35]">
        We do not promise permanent availability of a particular channel, title or event.
      </p>
    </SectionBlock>
  );
}

export function ResponsibleUseSection() {
  return (
    <SectionBlock title="Responsible" accent="Use">
      <div className="space-y-3">
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium glass-card px-4 py-4 flex items-start gap-3">
          <Shield className="h-5 w-5 text-[#ff6b35] shrink-0 mt-0.5" />
          Customers must use the service in accordance with applicable laws and account rules.
        </p>
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium glass-card px-4 py-4">
          Credentials are intended for authorized personal use. Sharing, unauthorized reselling or
          attempts to bypass connection limits may lead to suspension.
        </p>
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium glass-card px-4 py-4">
          Approved resellers follow separate commercial terms.
        </p>
      </div>
    </SectionBlock>
  );
}

export function BeforePurchaseSection() {
  return (
    <SectionBlock title="Clear Information Before" accent="Purchase">
      <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-4">
        We encourage customers to:
      </p>
      <ItemList items={beforePurchaseChecks} icon={ClipboardCheck} />
      <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mt-4">
        A customer with the right setup is more likely to have a good experience.
      </p>
    </SectionBlock>
  );
}
