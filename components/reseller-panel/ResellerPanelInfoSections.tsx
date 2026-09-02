"use client";

import type { ReactNode } from "react";
import {
  LayoutDashboard,
  Users,
  DollarSign,
  ShieldCheck,
  Headphones,
  Lock,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";
import { WHATSAPP_NUMBER } from "@/lib/site";
import {
  applicationFields,
  customerSupportTasks,
  panelProvides,
  pricingFactors,
  programSteps,
  resellerResponsibilities,
  whoCanApply,
} from "@/lib/resellerPanelContent";

const pricingHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi, I would like to request Trex IPTV reseller pricing for my business.",
)}`;

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
      className="mx-auto max-w-7xl w-full px-6 sm:px-8 py-12 sm:py-16 lg:py-20 bg-white"
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

function BulletList({ items, icon: Icon }: { items: string[]; icon: typeof Users }) {
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

function NumberedSteps({ steps }: { steps: string[] }) {
  return (
    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 list-none p-0 m-0">
      {steps.map((step, index) => (
        <motion.li
          key={step}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: index * 0.04, ease: "easeOut" }}
          className="flex items-start gap-3 px-4 py-3 glass-card-hover h-full"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ff3503] btn-brand-animated text-white text-sm font-bold">
            {index + 1}
          </span>
          <span className="text-[13px] sm:text-[14px] font-medium text-zinc-700 leading-relaxed pt-1.5">
            {step}
          </span>
        </motion.li>
      ))}
    </ol>
  );
}

export default function ResellerPanelInfoSections() {
  return (
    <>
      <SectionBlock title="What the Reseller Panel" accent="Provides">
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-4">
          Approved resellers may be able to:
        </p>
        <BulletList items={panelProvides} icon={LayoutDashboard} />
        <p className="text-zinc-500 text-[12px] sm:text-[14px] leading-relaxed font-medium mt-4">
          Available tools can change as the panel is updated.
        </p>
      </SectionBlock>

      <SectionBlock title="Who Can" accent="Apply?">
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-4">
          The program may suit:
        </p>
        <BulletList items={whoCanApply} icon={Users} />
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mt-4">
          This is not a guaranteed-income program. Resellers are responsible for attracting
          customers and providing first-line help.
        </p>
      </SectionBlock>

      <SectionBlock title="How the Program" accent="Works">
        <NumberedSteps steps={programSteps} />
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mt-4 glass-card px-4 py-3 border-l-4 border-[#ff3503]">
          Do not sell Trex IPTV access before your reseller account is approved.
        </p>
      </SectionBlock>

      <SectionBlock id="pricing" title="Reseller" accent="Pricing">
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-3">
          Pricing is provided by quote.
        </p>
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-4">
          The available rate may depend on:
        </p>
        <BulletList items={pricingFactors} icon={DollarSign} />
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mt-4 mb-2">
          The quote should explain costs, minimum purchases, panel limits and replacement
          conditions.
        </p>
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-6">
          Trex IPTV does not guarantee sales, margins, revenue or profit.
        </p>
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={pricingHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 sm:h-12 items-center justify-center rounded-full bg-[#ff3503] btn-brand-animated px-6 text-[11px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#e62e03] transition-colors whitespace-nowrap"
        >
          Request Reseller Pricing
        </motion.a>
      </SectionBlock>

      <SectionBlock title="Reseller" accent="Responsibilities">
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-4">
          Approved partners must:
        </p>
        <BulletList items={resellerResponsibilities} icon={ShieldCheck} />
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mt-4 glass-card px-4 py-3">
          A reseller must not claim to own or officially operate Trex IPTV without written
          authorization.
        </p>
      </SectionBlock>

      <SectionBlock title="Supporting Your" accent="Customers">
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-4">
          Resellers normally handle:
        </p>
        <BulletList items={customerSupportTasks} icon={Headphones} />
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mt-4">
          Confirmed service-side problems can be escalated through the reseller support route.
        </p>
      </SectionBlock>

      <SectionBlock title="Protecting Accounts and Customer" accent="Data">
        <div className="space-y-3">
          <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium glass-card px-4 py-4">
            Use a strong panel password and restrict access to authorized people.
          </p>
          <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium glass-card px-4 py-4">
            Never publish customer credentials. Do not store complete payment-card information
            unless using a compliant payment provider.
          </p>
          <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium glass-card px-4 py-4 flex items-start gap-3">
            <Lock className="h-5 w-5 text-[#ff3503] shrink-0 mt-0.5" />
            Fraud, credential sharing or panel misuse may result in suspension.
          </p>
        </div>
      </SectionBlock>

      <SectionBlock id="application" title="Reseller" accent="Application">
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-4">
          Request:
        </p>
        <BulletList items={applicationFields} icon={FileText} />
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mt-4">
          Submitting an application does not guarantee approval.
        </p>
      </SectionBlock>
    </>
  );
}
