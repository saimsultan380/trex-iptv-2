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
  applyCta,
  beforeBuyingChecks,
  becomeResellerMeta,
  becomeSteps,
  costSection,
  creditSystem,
  faqs,
  intro,
  makeMoney,
  manageCustomers,
  whatIsPanel,
} from "@/lib/blog/becomeResellerContent";

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

export default function BecomeResellerClient() {
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
                {becomeResellerMeta.category}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 leading-[1.15] mb-5">
                {becomeResellerMeta.headline}
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-zinc-500 mb-8">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {becomeResellerMeta.dateDisplay}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {becomeResellerMeta.readTime}
                </span>
                <span>•</span>
                <span>By Trex IPTV Team</span>
              </div>

              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200/80 bg-zinc-100 mb-8 sm:mb-10">
                <Image
                  src={becomeResellerMeta.image}
                  alt={becomeResellerMeta.headline}
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
            <SectionHeading title="What Is a Trex IPTV" accent="Reseller Panel?" />
            <div className="space-y-3 mb-4">
              <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium">
                {whatIsPanel.intro}
              </p>
              <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium">
                {whatIsPanel.instead}
              </p>
              <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium">
                {whatIsPanel.depending}
              </p>
            </div>
            <BulletList items={whatIsPanel.features} />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mt-5 mb-4">
              {whatIsPanel.closing}
            </p>
            <p className="text-zinc-700 text-[14px] sm:text-[15px] leading-relaxed font-semibold glass-card px-4 py-3 border-l-4 border-[#ff3503] flex items-start gap-3">
              <ShieldAlert className="h-5 w-5 shrink-0 text-[#ff3503] mt-0.5" />
              <span>
                <span className="text-[#ff3503]">Important: </span>
                {whatIsPanel.important}
              </span>
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="How to Become a Trex IPTV" accent="Reseller" />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-8">
              If you want to become a Trex IPTV reseller, the first step is to apply through the
              official reseller page on your website. Applications are reviewed, and approval is not
              automatic. Follow these steps to understand the process.
            </p>
          </div>
        </section>

        {becomeSteps.map((step) => (
          <section key={step.title} className="py-8 sm:py-10">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-[22px] sm:text-2xl lg:text-[30px] font-bold tracking-tight leading-[1.2] text-zinc-900 mb-4">
                {step.title}
              </h2>
              <div className="space-y-3">
                {step.paragraphs.map((paragraph) =>
                  paragraph.startsWith("http") ? (
                    <p key={paragraph}>
                      <Link
                        href="/reseller-panel/"
                        className="text-[#ff3503] font-semibold underline underline-offset-2 hover:text-[#e62e03]"
                      >
                        {paragraph}
                      </Link>
                    </p>
                  ) : (
                    <p
                      key={paragraph}
                      className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium"
                    >
                      {paragraph}
                    </p>
                  )
                )}
              </div>
              {step.bullets ? (
                <div className="mt-4">
                  <BulletList items={step.bullets} />
                </div>
              ) : null}
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
              title="How Does the Trex IPTV Reseller Credit System"
              accent="Work?"
            />
            <div className="space-y-3 mb-4">
              {creditSystem.intro.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <BulletList items={creditSystem.questions} />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mt-5">
              {creditSystem.closing}
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="How Much Does a Trex IPTV Reseller Panel"
              accent="Cost?"
            />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-3">
              {costSection.intro}
            </p>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-4">
              {costSection.calculate}
            </p>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-3">
              Your total costs may include:
            </p>
            <BulletList items={costSection.costsMayInclude} />
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Can You Make Money as a Trex IPTV"
              accent="Reseller?"
            />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-4">
              {makeMoney.intro}
            </p>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-3">
              {makeMoney.calculationIntro}
            </p>
            <p className="font-mono text-sm glass-card px-4 py-3 text-zinc-800 mb-4">
              {makeMoney.formula}
            </p>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-3">
              {makeMoney.example}
            </p>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium glass-card px-4 py-3 mb-4">
              {makeMoney.disclaimer}
            </p>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium">
              {makeMoney.closing}
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="What Should You Check Before Buying a"
              accent="Reseller Panel?"
            />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-6">
              Choosing a reseller arrangement requires more than comparing the advertised price. You
              need to understand who controls the panel, how your accounts are managed, and what
              happens if the provider stops offering the service.
            </p>
            {beforeBuyingChecks.map((check) => (
              <div key={check.title} className="mb-8 last:mb-0">
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-3">
                  {check.title}
                </h3>
                <div className="space-y-3">
                  {check.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="How to Manage Customers After Getting Your"
              accent="Reseller Panel"
            />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-4">
              {manageCustomers.intro}
            </p>
            <div className="space-y-3">
              {manageCustomers.sections.map((section) => (
                <div key={section.title} className="glass-card px-4 py-4">
                  <h3 className="text-sm sm:text-base font-bold text-zinc-900 mb-1">
                    {section.title}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-zinc-600 leading-relaxed font-medium">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>
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
            <SectionHeading title="Apply for Trex IPTV" accent="Reseller Access" />
            <div className="space-y-3 mb-6">
              {applyCta.paragraphs.map((paragraph) => (
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
                href="/reseller-panel/"
                className="inline-flex items-center justify-center rounded-xl bg-[#ff3503] hover:bg-[#e62e03] text-white text-sm font-bold px-5 py-3 transition-colors"
              >
                Apply for Reseller Panel
              </Link>
              <Link
                href="/free-trial-contact/"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white hover:border-[#ff3503]/40 text-zinc-900 text-sm font-bold px-5 py-3 transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
