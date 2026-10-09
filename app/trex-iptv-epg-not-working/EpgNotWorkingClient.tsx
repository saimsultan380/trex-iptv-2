"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Clock,
  ShieldAlert,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  epgFaqs,
  epgIntro,
  epgMeta,
  fixSteps,
  preventionClosing,
  preventionTips,
  stillNotWorking,
  symptomTable,
  whatIsEpg,
  whyEpgNotWorking,
} from "@/lib/blog/epgNotWorkingContent";

function SectionHeading({
  title,
  accent,
}: {
  title: string;
  accent?: string;
}) {
  return (
    <h2 className="text-[26px] sm:text-3xl lg:text-[36px] font-bold tracking-tight leading-[1.15] text-zinc-900 mb-4 sm:mb-6">
      {title}
      {accent ? (
        <>
          {" "}
          <span className="text-[#ff3503]">{accent}</span>
        </>
      ) : null}
    </h2>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none p-0 m-0">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 px-4 py-3 glass-card-hover"
        >
          <CheckCircle2 className="h-4 w-4 shrink-0 text-[#ff3503] mt-0.5" />
          <span className="text-[13px] sm:text-[14px] font-medium text-zinc-700 leading-relaxed">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-zinc-200/80 overflow-hidden glass-card">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="w-full flex items-center justify-between gap-4 px-4 sm:px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-sm sm:text-base font-semibold text-zinc-900">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[#ff3503] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="px-4 sm:px-5 pb-4 text-[13px] sm:text-[14px] text-zinc-600 leading-relaxed font-medium border-t border-zinc-100 pt-3">
              {answer}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default function EpgNotWorkingClient() {
  return (
    <div className="min-h-screen site-page-bg text-zinc-950 font-sans antialiased flex flex-col overflow-x-hidden">
      <Header />

      <main className="flex-grow">
        <section className="pt-28 sm:pt-36 lg:pt-44 pb-8 sm:pb-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff3503] hover:text-[#e62e03] mb-6 sm:mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex px-2.5 py-1 rounded-md bg-[#ff3503] text-white text-[11px] font-bold mb-4">
                Troubleshooting
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 leading-[1.15] mb-5">
                {epgMeta.title}
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-zinc-500 mb-8">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  October 9, 2026
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  12 min read
                </span>
                <span>•</span>
                <span>By Trex IPTV Team</span>
              </div>

              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200/80 bg-zinc-100 mb-8 sm:mb-10">
                <Image
                  src={epgMeta.image}
                  alt={epgMeta.title}
                  fill
                  priority
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-cover object-center"
                />
              </div>

              <div className="space-y-4">
                {epgIntro.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-zinc-600 text-[14px] sm:text-[16px] leading-relaxed font-medium"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="What Is an EPG on" accent="Trex IPTV?" />
            <div className="space-y-4 mb-5">
              <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium">
                {whatIsEpg.definition}
              </p>
              <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium">
                {whatIsEpg.availability}
              </p>
              <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium">
                Your setup may use:
              </p>
            </div>
            <BulletList items={whatIsEpg.setupMayUse} />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mt-5 glass-card px-4 py-3">
              {whatIsEpg.note}
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Why Is My Trex IPTV EPG" accent="Not Working?" />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-4">
              The problem usually falls into one of several categories:
            </p>
            <BulletList items={whyEpgNotWorking} />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mt-5 mb-4">
              A useful first step is to identify the exact symptom.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-zinc-200/80 bg-white/80">
              <table className="w-full min-w-[520px] text-left text-sm">
                <thead>
                  <tr className="border-b border-zinc-200 bg-zinc-50/80">
                    <th className="px-4 py-3 font-bold text-zinc-900">
                      EPG problem
                    </th>
                    <th className="px-4 py-3 font-bold text-zinc-900">
                      Possible cause
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {symptomTable.map((row) => (
                    <tr
                      key={row.problem}
                      className="border-b border-zinc-100 last:border-0"
                    >
                      <td className="px-4 py-3 text-zinc-700 font-medium">
                        {row.problem}
                      </td>
                      <td className="px-4 py-3 text-zinc-600">{row.cause}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {fixSteps.map((step) => (
          <section key={step.title} className="py-8 sm:py-12">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-[22px] sm:text-2xl lg:text-[30px] font-bold tracking-tight leading-[1.2] text-zinc-900 mb-4">
                {step.title}
              </h2>
              <div className="space-y-3 mb-4">
                {step.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              {step.bullets ? <BulletList items={step.bullets} /> : null}
              {step.closing ? (
                <div className="space-y-3 mt-4">
                  {step.closing.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : null}
            </div>
          </section>
        ))}

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="What Should You Do If Trex IPTV EPG"
              accent="Still Does Not Work?"
            />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-4">
              {stillNotWorking.intro}
            </p>
            <ol className="space-y-2.5 list-decimal list-inside mb-5">
              {stillNotWorking.steps.map((step) => (
                <li
                  key={step}
                  className="text-[13px] sm:text-[14px] font-medium text-zinc-700 leading-relaxed glass-card px-4 py-3"
                >
                  {step}
                </li>
              ))}
            </ol>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-3">
              {stillNotWorking.supportNote}
            </p>
            <p className="text-zinc-700 text-[14px] sm:text-[15px] leading-relaxed font-semibold glass-card px-4 py-3 border-l-4 border-[#ff3503] flex items-start gap-3">
              <ShieldAlert className="h-5 w-5 shrink-0 text-[#ff3503] mt-0.5" />
              <span>{stillNotWorking.privacyNote}</span>
            </p>
            <div className="mt-6">
              <Link
                href="/free-trial-contact/"
                className="inline-flex items-center justify-center rounded-xl bg-[#ff3503] hover:bg-[#e62e03] text-white text-sm font-bold px-5 py-3 transition-colors"
              >
                Contact Trex IPTV Support
              </Link>
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="How to Prevent Future" accent="EPG Problems" />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-4">
              A few simple habits can make troubleshooting easier:
            </p>
            <BulletList items={preventionTips} />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mt-5 glass-card px-4 py-3">
              {preventionClosing}
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14 pb-16 sm:pb-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Frequently Asked" accent="Questions" />
            <div className="space-y-3">
              {epgFaqs.map((faq) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
