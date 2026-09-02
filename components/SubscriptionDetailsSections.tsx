"use client";

import type { ReactNode } from "react";
import {
  Monitor,
  Smartphone,
  Tv,
  AppWindow,
  MonitorCheck,
  Wifi,
  Info,
  FileText,
  Mail,
  RefreshCw,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

const connectionExamples = [
  { icon: Tv, text: "Watch on your television while your phone is not streaming: allowed" },
  { icon: Smartphone, text: "Stop the television and continue on your phone: allowed" },
  { icon: Monitor, text: "Watch on your television and phone together: requires two connections" },
];

const beforePayChecks = [
  { icon: MonitorCheck, text: "Confirm that your device supports a recommended player." },
  { icon: Wifi, text: "Test the internet speed on your viewing device." },
  { icon: Info, text: "Understand the active-stream limit." },
  { icon: FileText, text: "Read the Refund Policy." },
  { icon: CheckCircle2, text: "Request a trial if compatibility is uncertain." },
];

const trialChecks = [
  "Device compatibility",
  "Player setup",
  "Login loading",
  "General playback",
  "Internet performance",
];

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
          {title}{" "}
          <span className="text-[#ff6b35]">{accent}</span>
        </h2>
        {children}
      </motion.div>
    </section>
  );
}

export default function SubscriptionDetailsSections() {
  return (
    <>
      <SectionBlock title="One Connection" accent="Explained">
        <div className="space-y-3 mb-6">
          <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
            One connection means one active stream.
          </p>
          <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
            You may save your login on multiple personal devices, but they cannot normally play at the same time.
          </p>
          <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
            For example:
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 mb-6">
          {connectionExamples.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex items-start gap-3 px-4 py-3 glass-card-hover">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-[#ff6b35]">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-[13px] sm:text-[14px] font-medium text-zinc-700 leading-relaxed">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
          Contact support before ordering if your household needs simultaneous viewing.
        </p>
      </SectionBlock>

      <SectionBlock title="Player-App Charges Are" accent="Separate">
        <div className="glass-card p-6 sm:p-8 space-y-3">
          <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
            Trex IPTV supplies the service login. You may need to install a third-party IPTV player.
          </p>
          <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
            Some players are free. Other apps may charge a one-time activation fee or recurring subscription.
          </p>
          <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium flex items-start gap-2">
            <AppWindow className="h-5 w-5 text-[#ff6b35] shrink-0 mt-0.5" />
            That payment goes to the player developer and is not included in the Trex IPTV subscription price.
          </p>
          <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
            Check app availability and charges before purchasing.
          </p>
        </div>
      </SectionBlock>

      <SectionBlock title="Before You" accent="Pay">
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-6">
          Complete these checks:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {beforePayChecks.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex items-center gap-3 px-4 py-3 glass-card-hover">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#ff6b35]">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-[13px] sm:text-[14px] font-bold text-zinc-900 leading-snug">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
          Recommended speeds are approximately 15 Mbps for HD, 25 Mbps for Full HD and 50 Mbps for selected 4K.
        </p>
      </SectionBlock>

      <SectionBlock title="Activation and" accent="Delivery">
        <div className="glass-card p-6 sm:p-8 space-y-3">
          <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium flex items-start gap-2">
            <Mail className="h-5 w-5 text-[#ff6b35] shrink-0 mt-0.5" />
            After payment is confirmed, your account is prepared and sent using the contact information provided during checkout.
          </p>
          <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
            Some orders may require manual verification. Check your spam or junk folder if the activation message is not visible.
          </p>
          <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
            The access period normally starts when the account is activated. Install and test your login promptly.
          </p>
        </div>
      </SectionBlock>

      <SectionBlock title="Renewal and" accent="Expiration">
        <div className="glass-card p-6 sm:p-8 space-y-3">
          <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium flex items-start gap-2">
            <RefreshCw className="h-5 w-5 text-[#ff6b35] shrink-0 mt-0.5" />
            Standard subscriptions are fixed-term and use manual renewal unless recurring billing is clearly selected during checkout.
          </p>
          <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
            If you do not renew, access ends on the expiration date. A fixed-term subscription does not charge you simply because it expires.
          </p>
          <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
            Prices available at renewal may differ from your original purchase price.
          </p>
        </div>
      </SectionBlock>

      <SectionBlock title="Try Before Choosing Longer" accent="Access">
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-3">
          Eligible new customers may request a 24-hour trial.
        </p>
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-6">
          A trial helps you test:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {trialChecks.map((item) => (
            <div key={item} className="flex items-center gap-3 px-4 py-3 glass-card-hover">
              <CheckCircle2 className="h-5 w-5 text-[#ff6b35] shrink-0" />
              <span className="text-[13px] sm:text-[14px] font-bold text-zinc-900">{item}</span>
            </div>
          ))}
        </div>
        <div className="space-y-3 mb-8">
          <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
            No payment card is required. The trial ends automatically and does not convert into a paid subscription.
          </p>
        </div>
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="/free-trial-contact/"
          className="inline-flex h-12 items-center justify-center rounded-[4px] bg-[#ff6b35] px-8 text-[13px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#ff5722] transition-colors"
        >
          Request a 24-Hour Trial
        </motion.a>
      </SectionBlock>
    </>
  );
}
