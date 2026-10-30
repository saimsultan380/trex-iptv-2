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
  faqs,
  firestickSetupMeta,
  installSteps,
  intro,
  m3uNote,
  startSetup,
  tips,
  troubleshooting,
  whatYouNeed,
  whatYouNeedNote,
  xtreamFields,
  xtreamNote,
} from "@/lib/blog/firestickSetupContent";

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

export default function FirestickSetupClient() {
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
                {firestickSetupMeta.category}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 leading-[1.15] mb-5">
                {firestickSetupMeta.headline}
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-zinc-500 mb-8">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {firestickSetupMeta.dateDisplay}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {firestickSetupMeta.readTime}
                </span>
                <span>•</span>
                <span>By Trex IPTV Team</span>
              </div>

              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200/80 bg-zinc-100 mb-8 sm:mb-10">
                <Image
                  src={firestickSetupMeta.image}
                  alt={firestickSetupMeta.headline}
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
              title="What Do You Need to Install Trex IPTV on"
              accent="Firestick?"
            />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-4">
              Prepare these items before starting the installation:
            </p>
            <BulletList items={whatYouNeed} />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mt-5 glass-card px-4 py-3">
              {whatYouNeedNote}
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="How to Install Trex IPTV on" accent="Firestick" />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-8">
              Trex IPTV is a streaming service, while an IPTV player is the application used to load
              a compatible playlist or account. The installation process depends on which player
              your provider recommends.
            </p>
          </div>
        </section>

        {installSteps.map((step) => (
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

              {step.title === "Step 5: Enter Your Trex IPTV Login Details" ? (
                <div className="mt-5 space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-3">
                      Option A: Xtream Codes API
                    </h3>
                    <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-3">
                      If your provider supplies Xtream Codes details, you will generally need:
                    </p>
                    <BulletList items={xtreamFields} />
                    <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mt-4">
                      {xtreamNote}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-3">
                      Option B: M3U Playlist URL
                    </h3>
                    <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium">
                      {m3uNote}
                    </p>
                  </div>
                </div>
              ) : null}

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
              {step.tip ? (
                <p className="text-zinc-700 text-[14px] sm:text-[15px] leading-relaxed font-semibold glass-card px-4 py-3 border-l-4 border-[#ff3503] flex items-start gap-3 mt-4">
                  <ShieldAlert className="h-5 w-5 shrink-0 text-[#ff3503] mt-0.5" />
                  <span>
                    <span className="text-[#ff3503]">Important: </span>
                    {step.tip}
                  </span>
                </p>
              ) : null}
            </div>
          </section>
        ))}

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Trex IPTV Not Working on Firestick? Try These"
              accent="Checks"
            />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-6">
              Installation does not always go smoothly. These checks can help you identify the cause
              of common problems.
            </p>
            {troubleshooting.map((item) => (
              <div key={item.title} className="mb-8 last:mb-0">
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-3">
                  {item.title}
                </h3>
                <div className="space-y-3">
                  {item.paragraphs.map((paragraph) => (
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
              title="Tips for a Better Trex IPTV Experience on"
              accent="Firestick"
            />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-4">
              A few simple habits can make setup and account management easier:
            </p>
            <BulletList items={tips} />
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
            <SectionHeading title="Start Your Trex IPTV" accent="Setup" />
            <div className="space-y-3 mb-6">
              {startSetup.map((paragraph) => (
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
                href="/installation-guide/"
                className="inline-flex items-center justify-center rounded-xl bg-[#ff3503] hover:bg-[#e62e03] text-white text-sm font-bold px-5 py-3 transition-colors"
              >
                Installation Guide
              </Link>
              <Link
                href="/free-trial-contact/"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white hover:border-[#ff3503]/40 text-zinc-900 text-sm font-bold px-5 py-3 transition-colors"
              >
                Contact Support
              </Link>
              <Link
                href="/supported-devices/"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white hover:border-[#ff3503]/40 text-zinc-900 text-sm font-bold px-5 py-3 transition-colors"
              >
                Supported Devices
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
