"use client";

import type { ReactNode } from "react";
import {
  MessageSquare,
  ShieldCheck,
  ThumbsUp,
  ThumbsDown,
  Wifi,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  criticalFeedbackExamples,
  helpfulReviewTopics,
  performanceVariables,
  rejectedReviewReasons,
  verificationCriteria,
} from "@/lib/reviewsContent";

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
    <section className="mx-auto max-w-7xl w-full px-6 sm:px-8 py-12 sm:py-16 lg:py-20">
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

function ItemList({
  items,
  icon: Icon,
  variant = "default",
}: {
  items: string[];
  icon: typeof MessageSquare;
  variant?: "default" | "positive" | "negative";
}) {
  const iconBg =
    variant === "positive"
      ? "bg-emerald-50 text-emerald-600"
      : variant === "negative"
        ? "bg-red-50 text-red-500"
        : "bg-orange-50 text-[#ff3503]";

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
          <div
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${iconBg}`}
          >
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

export default function ReviewsInfoSections() {
  return (
    <>
      <SectionBlock title="What Makes a Helpful" accent="Review?">
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-4">
          A useful review may explain:
        </p>
        <ItemList items={helpfulReviewTopics} icon={MessageSquare} />
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mt-4 glass-card px-4 py-3">
          Reviews should describe the overall experience instead of promising permanent
          availability of a specific channel or event.
        </p>
      </SectionBlock>

      <SectionBlock title="How Reviews Are" accent="Verified">
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-4">
          A review may receive a verified label when:
        </p>
        <ItemList items={verificationCriteria} icon={ShieldCheck} />
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mt-4">
          Verification confirms a customer relationship. It does not mean Trex IPTV agrees with
          every opinion.
        </p>
      </SectionBlock>

      <SectionBlock title="Positive and Critical" accent="Feedback">
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-4">
          Both positive and critical reviews can be useful. A genuine review should not be removed
          simply because it reports:
        </p>
        <ItemList items={criticalFeedbackExamples} icon={ThumbsUp} variant="positive" />
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mt-6 mb-4">
          A review may be rejected when it contains:
        </p>
        <ItemList items={rejectedReviewReasons} icon={ThumbsDown} variant="negative" />
      </SectionBlock>

      <SectionBlock title="Why Results Can" accent="Differ">
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-4">
          Streaming performance varies between households because of:
        </p>
        <ItemList items={performanceVariables} icon={Wifi} />
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mt-4 glass-card px-4 py-3">
          One customer&apos;s experience does not guarantee the same result for everyone.
        </p>
      </SectionBlock>
    </>
  );
}
