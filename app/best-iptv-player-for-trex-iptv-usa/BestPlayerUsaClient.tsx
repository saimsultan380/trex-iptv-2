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
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  bestPlayerMeta,
  bestPlayerSummary,
  bufferingClosing,
  bufferingTips,
  chooseFactors,
  faqs,
  firestickSection,
  intro,
  playerSections,
  playersTable,
  setupLegalNote,
  setupSteps,
  tableClosing,
  tivimateVsSmarters,
} from "@/lib/blog/bestPlayerUsaContent";

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

export default function BestPlayerUsaClient() {
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
                {bestPlayerMeta.category}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 leading-[1.15] mb-5">
                {bestPlayerMeta.headline}
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-zinc-500 mb-8">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {bestPlayerMeta.dateDisplay}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {bestPlayerMeta.readTime}
                </span>
                <span>•</span>
                <span>By Trex IPTV Team</span>
              </div>

              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200/80 bg-zinc-100 mb-8 sm:mb-10">
                <Image
                  src={bestPlayerMeta.image}
                  alt={bestPlayerMeta.headline}
                  fill
                  priority
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-cover object-center"
                />
              </div>

              <div className="space-y-4">
                {intro.map((paragraph) => (
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
            <SectionHeading
              title="What Is the Best Player for Trex IPTV in the"
              accent="USA?"
            />
            <div className="space-y-3">
              <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium">
                {bestPlayerSummary.firestickAndroid}
              </p>
              <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium">
                {bestPlayerSummary.serviceVsPlayer}
              </p>
              <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium">
                {bestPlayerSummary.comparisons}
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Best IPTV Players for" accent="Trex IPTV" />
            <div className="overflow-x-auto rounded-2xl border border-zinc-200/80 bg-white/80 mb-5">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-zinc-200 bg-zinc-50/80">
                    <th className="px-4 py-3 font-bold text-zinc-900">Player</th>
                    <th className="px-4 py-3 font-bold text-zinc-900">Best For</th>
                    <th className="px-4 py-3 font-bold text-zinc-900">
                      Main Strength
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {playersTable.map((row) => (
                    <tr
                      key={row.player}
                      className="border-b border-zinc-100 last:border-0"
                    >
                      <td className="px-4 py-3 text-zinc-700 font-medium">
                        {row.player}
                      </td>
                      <td className="px-4 py-3 text-zinc-600">{row.bestFor}</td>
                      <td className="px-4 py-3 text-zinc-600">{row.strength}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium">
              {tableClosing}
            </p>
          </div>
        </section>

        {playerSections.map((section) => (
          <section key={section.title} className="py-8 sm:py-10">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-[22px] sm:text-2xl lg:text-[30px] font-bold tracking-tight leading-[1.2] text-zinc-900 mb-4">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.bullets ? (
                <div className="mt-4">
                  <BulletList items={section.bullets} />
                </div>
              ) : null}
              {section.closing ? (
                <div className="space-y-3 mt-4">
                  {section.closing.map((paragraph) => (
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
            <SectionHeading title="Which Player Is Best for" accent="Firestick?" />
            <div className="space-y-3">
              {firestickSection.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="How to Choose the Right" accent="IPTV Player" />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-6">
              Before installing an IPTV player for Trex IPTV, check these five things.
            </p>
            {chooseFactors.map((factor) => (
              <div key={factor.title} className="mb-8 last:mb-0">
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-3">
                  {factor.title}
                </h3>
                {factor.intro ? (
                  <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-3">
                    {factor.intro}
                  </p>
                ) : null}
                <BulletList items={factor.bullets} />
                {factor.closing ? (
                  <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mt-4">
                    {factor.closing}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="How to Set Up Trex IPTV in an" accent="IPTV Player" />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-4">
              The exact menus vary between apps, but the general process is straightforward.
            </p>
            <div className="space-y-3 mb-5">
              {setupSteps.map((step) => (
                <div key={step.title} className="glass-card px-4 py-4">
                  <h3 className="text-sm sm:text-base font-bold text-zinc-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-zinc-600 leading-relaxed font-medium">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium glass-card px-4 py-3 border-l-4 border-[#ff3503]">
              {setupLegalNote}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/installation-guide/"
                className="inline-flex items-center justify-center rounded-xl bg-[#ff3503] hover:bg-[#e62e03] text-white text-sm font-bold px-5 py-3 transition-colors"
              >
                Installation Guide
              </Link>
              <Link
                href="/trex-iptv-tivimate-setup/"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white hover:border-[#ff3503]/40 text-zinc-900 text-sm font-bold px-5 py-3 transition-colors"
              >
                TiviMate Setup Guide
              </Link>
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="What If Trex IPTV Buffers or" accent="Freezes?" />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-4">
              Changing players can sometimes help, but start with the basics.
            </p>
            <BulletList items={bufferingTips} />
            <div className="space-y-3 mt-5">
              {bufferingClosing.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="TiviMate vs IPTV Smarters: Which Should You"
              accent="Pick?"
            />
            <div className="space-y-3 mb-4">
              {tivimateVsSmarters.intro.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <BulletList items={tivimateVsSmarters.picks} />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mt-5">
              {tivimateVsSmarters.closing}
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14 pb-16 sm:pb-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Frequently Asked" accent="Questions" />
            <div className="space-y-3">
              {faqs.map((faq) => (
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
