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
  checklistClosing,
  checklistIntro,
  checklistRows,
  closing,
  deviceRows,
  devicesClosing,
  devicesIntro,
  faqs,
  features,
  featuresIntro,
  getStartedIntro,
  internetClosing,
  internetIntro,
  internetNote,
  internetTips,
  internetTipsIntro,
  intro,
  loginMethods,
  loginMethodsNote,
  officialFeaturesMeta,
  problemRows,
  problemsClosing,
  problemsIntro,
  setupSteps,
  speedRows,
  streamLimit,
  subscriptionIntro,
  subscriptionNote,
  subscriptionRows,
  whatIsParagraphs,
  whichPlanClosing,
  whichPlanIntro,
  whichPlanOptions,
} from "@/lib/blog/officialFeaturesContent";

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

export default function OfficialFeaturesClient() {
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
                {officialFeaturesMeta.category}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 leading-[1.15] mb-5">
                {officialFeaturesMeta.headline}
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-zinc-500 mb-8">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {officialFeaturesMeta.dateDisplay}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {officialFeaturesMeta.readTime}
                </span>
                <span>•</span>
                <span>By Trex IPTV Team</span>
              </div>

              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200/80 bg-zinc-100 mb-8 sm:mb-10">
                <Image
                  src={officialFeaturesMeta.image}
                  alt={officialFeaturesMeta.headline}
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
            <SectionHeading title="What Is" accent="Trex IPTV?" />
            <div className="space-y-4 mb-5">
              {whatIsParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <BulletList items={loginMethods} />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mt-5">
              {loginMethodsNote}
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Key Features of" accent="Trex IPTV" />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-8">
              {featuresIntro}
            </p>
          </div>
        </section>

        {features.map((feature) => (
          <section key={feature.title} className="py-8 sm:py-10">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-[22px] sm:text-2xl lg:text-[30px] font-bold tracking-tight leading-[1.2] text-zinc-900 mb-4">
                {feature.title}
              </h2>
              <div className="space-y-3">
                {feature.paragraphs.map((paragraph) => (
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
        ))}

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Trex IPTV" accent="Subscription Options" />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-5">
              {subscriptionIntro}
            </p>
            <div className="overflow-x-auto rounded-2xl border border-zinc-200/80 bg-white/80 mb-5">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-zinc-200 bg-zinc-50/80">
                    <th className="px-4 py-3 font-bold text-zinc-900">
                      Subscription period
                    </th>
                    <th className="px-4 py-3 font-bold text-zinc-900">
                      Listed total price
                    </th>
                    <th className="px-4 py-3 font-bold text-zinc-900">
                      Approximate monthly cost
                    </th>
                    <th className="px-4 py-3 font-bold text-zinc-900">
                      Best suited for
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {subscriptionRows.map((row) => (
                    <tr
                      key={row.period}
                      className="border-b border-zinc-100 last:border-0"
                    >
                      <td className="px-4 py-3 text-zinc-700 font-medium">
                        {row.period}
                      </td>
                      <td className="px-4 py-3 text-zinc-600">{row.total}</td>
                      <td className="px-4 py-3 text-zinc-600">{row.monthly}</td>
                      <td className="px-4 py-3 text-zinc-600">{row.suited}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium">
              {subscriptionNote}
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Which Subscription Should" accent="You Choose?" />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-5">
              {whichPlanIntro}
            </p>
            <div className="space-y-4 mb-5">
              {whichPlanOptions.map((option) => (
                <p
                  key={option.title}
                  className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium"
                >
                  <span className="font-bold text-zinc-900">{option.title}: </span>
                  {option.text}
                </p>
              ))}
            </div>
            <div className="space-y-3">
              {whichPlanClosing.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-5">
              <Link
                href="/#pricing"
                className="inline-flex items-center justify-center rounded-xl bg-[#ff3503] hover:bg-[#e62e03] text-white text-sm font-bold px-5 py-3 transition-colors"
              >
                View Subscription Plans
              </Link>
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Which Devices Can You Use With"
              accent="Trex IPTV?"
            />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-5">
              {devicesIntro}
            </p>
            <div className="overflow-x-auto rounded-2xl border border-zinc-200/80 bg-white/80 mb-5">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-zinc-200 bg-zinc-50/80">
                    <th className="px-4 py-3 font-bold text-zinc-900">
                      Device category
                    </th>
                    <th className="px-4 py-3 font-bold text-zinc-900">
                      Common connection approach
                    </th>
                    <th className="px-4 py-3 font-bold text-zinc-900">
                      What to check
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {deviceRows.map((row) => (
                    <tr
                      key={row.category}
                      className="border-b border-zinc-100 last:border-0"
                    >
                      <td className="px-4 py-3 text-zinc-700 font-medium">
                        {row.category}
                      </td>
                      <td className="px-4 py-3 text-zinc-600">{row.approach}</td>
                      <td className="px-4 py-3 text-zinc-600">{row.check}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="space-y-3 mb-5">
              {devicesClosing.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <Link
              href="/supported-devices/"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white hover:border-[#ff3503]/40 text-zinc-900 text-sm font-bold px-5 py-3 transition-colors"
            >
              Supported Devices
            </Link>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="How to Get Started With" accent="Trex IPTV" />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-8">
              {getStartedIntro}
            </p>
          </div>
        </section>

        {setupSteps.map((step) => (
          <section key={step.title} className="py-8 sm:py-10">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-[22px] sm:text-2xl lg:text-[30px] font-bold tracking-tight leading-[1.2] text-zinc-900 mb-4">
                {step.title}
              </h2>
              <div className="space-y-3">
                {step.paragraphs.map((paragraph) => (
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
        ))}

        <section className="py-6 sm:py-8">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/installation-guide/"
              className="inline-flex items-center justify-center rounded-xl bg-[#ff3503] hover:bg-[#e62e03] text-white text-sm font-bold px-5 py-3 transition-colors"
            >
              Installation Guide
            </Link>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Internet Requirements for"
              accent="Smooth Streaming"
            />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-5">
              {internetIntro}
            </p>
            <div className="overflow-x-auto rounded-2xl border border-zinc-200/80 bg-white/80 mb-5">
              <table className="w-full min-w-[420px] text-left text-sm">
                <thead>
                  <tr className="border-b border-zinc-200 bg-zinc-50/80">
                    <th className="px-4 py-3 font-bold text-zinc-900">
                      Streaming quality
                    </th>
                    <th className="px-4 py-3 font-bold text-zinc-900">
                      Approximate recommended speed
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {speedRows.map((row) => (
                    <tr
                      key={row.quality}
                      className="border-b border-zinc-100 last:border-0"
                    >
                      <td className="px-4 py-3 text-zinc-700 font-medium">
                        {row.quality}
                      </td>
                      <td className="px-4 py-3 text-zinc-600">{row.speed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-4">
              {internetNote}
            </p>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-4">
              {internetTipsIntro}
            </p>
            <BulletList items={internetTips} />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mt-5">
              {internetClosing}
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Understand the" accent="Active-Stream Limit" />
            <div className="space-y-3">
              {streamLimit.map((paragraph) => (
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
              title="Trex IPTV Setup and"
              accent="Subscription Checklist"
            />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-5">
              {checklistIntro}
            </p>
            <div className="overflow-x-auto rounded-2xl border border-zinc-200/80 bg-white/80 mb-5">
              <table className="w-full min-w-[520px] text-left text-sm">
                <thead>
                  <tr className="border-b border-zinc-200 bg-zinc-50/80">
                    <th className="px-4 py-3 font-bold text-zinc-900">
                      Checkpoint
                    </th>
                    <th className="px-4 py-3 font-bold text-zinc-900">
                      What to confirm
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {checklistRows.map((row) => (
                    <tr
                      key={row.checkpoint}
                      className="border-b border-zinc-100 last:border-0"
                    >
                      <td className="px-4 py-3 text-zinc-700 font-medium">
                        {row.checkpoint}
                      </td>
                      <td className="px-4 py-3 text-zinc-600">{row.confirm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium">
              {checklistClosing}
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Common Problems and"
              accent="What to Check"
            />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-5">
              {problemsIntro}
            </p>
            <div className="overflow-x-auto rounded-2xl border border-zinc-200/80 bg-white/80 mb-5">
              <table className="w-full min-w-[520px] text-left text-sm">
                <thead>
                  <tr className="border-b border-zinc-200 bg-zinc-50/80">
                    <th className="px-4 py-3 font-bold text-zinc-900">Problem</th>
                    <th className="px-4 py-3 font-bold text-zinc-900">
                      First thing to check
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {problemRows.map((row) => (
                    <tr
                      key={row.problem}
                      className="border-b border-zinc-100 last:border-0"
                    >
                      <td className="px-4 py-3 text-zinc-700 font-medium">
                        {row.problem}
                      </td>
                      <td className="px-4 py-3 text-zinc-600">{row.check}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium">
              {problemsClosing}
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14">
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

        <section className="py-10 sm:py-14 pb-16 sm:pb-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Choose Your Trex IPTV Setup"
              accent="With Confidence"
            />
            <div className="space-y-3 mb-6">
              {closing.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/#pricing"
                className="inline-flex items-center justify-center rounded-xl bg-[#ff3503] hover:bg-[#e62e03] text-white text-sm font-bold px-5 py-3 transition-colors"
              >
                Subscription Options
              </Link>
              <Link
                href="/supported-devices/"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white hover:border-[#ff3503]/40 text-zinc-900 text-sm font-bold px-5 py-3 transition-colors"
              >
                Supported Devices
              </Link>
              <Link
                href="/installation-guide/"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white hover:border-[#ff3503]/40 text-zinc-900 text-sm font-bold px-5 py-3 transition-colors"
              >
                Installation Guide
              </Link>
              <Link
                href="/free-trial-contact/"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white hover:border-[#ff3503]/40 text-zinc-900 text-sm font-bold px-5 py-3 transition-colors"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
