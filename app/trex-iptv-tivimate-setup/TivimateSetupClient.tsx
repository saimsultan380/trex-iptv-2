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
  beforeSetupClosing,
  beforeSetupItems,
  beforeSetupNote,
  blankEpgChecks,
  blankEpgClosing,
  blankEpgNote,
  bufferingChecks,
  bufferingNote,
  channelsNotPlay,
  epgSetup,
  finalThoughts,
  freezeClosing,
  freezeIntro,
  freezeSteps,
  noEpgClosing,
  noEpgOrder,
  organizeTips,
  playbackSection,
  problemsTable,
  setupOverviewSteps,
  setupSteps,
  testSetupClosing,
  testSetupSteps,
  tivimateFaqs,
  tivimateIntro,
  tivimateMeta,
  wrongEpgTimesChecks,
  wrongEpgTimesNote,
} from "@/lib/blog/tivimateSetupContent";

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

function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="space-y-3">
      {items.map((paragraph) => (
        <p
          key={paragraph}
          className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export default function TivimateSetupClient() {
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
                {tivimateMeta.category}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 leading-[1.15] mb-5">
                {tivimateMeta.title}
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-zinc-500 mb-8">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {tivimateMeta.dateDisplay}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {tivimateMeta.readTime}
                </span>
                <span>•</span>
                <span>By Trex IPTV Team</span>
              </div>

              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200/80 bg-zinc-100 mb-8 sm:mb-10">
                <Image
                  src={tivimateMeta.image}
                  alt={tivimateMeta.title}
                  fill
                  priority
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-cover object-center"
                />
              </div>

              <div className="space-y-4">
                {tivimateIntro.map((paragraph) => (
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
              title="What You Need Before Setting Up Trex IPTV on"
              accent="TiviMate"
            />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-4">
              Before opening TiviMate, have these items ready:
            </p>
            <BulletList items={beforeSetupItems} />
            <div className="space-y-3 mt-5">
              <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium glass-card px-4 py-3">
                {beforeSetupNote}
              </p>
              <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium">
                {beforeSetupClosing}
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="How to Set Up Trex IPTV on" accent="TiviMate" />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-4">
              The basic process is straightforward:
            </p>
            <ol className="space-y-2.5 list-decimal list-inside mb-8">
              {setupOverviewSteps.map((step) => (
                <li
                  key={step}
                  className="text-[13px] sm:text-[14px] font-medium text-zinc-700 leading-relaxed glass-card px-4 py-3"
                >
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {setupSteps.map((step) => (
          <section key={step.title} className="py-8 sm:py-10">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-[22px] sm:text-2xl lg:text-[30px] font-bold tracking-tight leading-[1.2] text-zinc-900 mb-4">
                {step.title}
              </h2>
              <Paragraphs items={step.paragraphs} />
              {step.bullets ? (
                <div className="mt-4">
                  <BulletList items={step.bullets} />
                </div>
              ) : null}
              {step.closing ? (
                <div className="mt-4">
                  <Paragraphs items={step.closing} />
                </div>
              ) : null}
            </div>
          </section>
        ))}

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="How to Set Up EPG for Trex IPTV in"
              accent="TiviMate"
            />
            <Paragraphs
              items={[epgSetup.intro, epgSetup.withoutEpg, epgSetup.withSetup]}
            />
            <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mt-6 mb-3">
              Refresh the EPG
            </h3>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-4">
              After adding your Trex IPTV playlist:
            </p>
            <BulletList items={epgSetup.refreshSteps} />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mt-5">
              {epgSetup.refreshNote}
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="What If the EPG" accent="Is Blank?" />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-4">
              If the TV Guide shows No Information, check these items first:
            </p>
            <BulletList items={blankEpgChecks} />
            <div className="space-y-3 mt-5">
              <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium">
                {blankEpgNote}
              </p>
              <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium">
                {blankEpgClosing}
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="How to Fix Wrong EPG Times in" accent="TiviMate" />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-4">
              If the guide works but program times are incorrect, start with your device settings.
              Check that:
            </p>
            <BulletList items={wrongEpgTimesChecks} />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mt-5">
              {wrongEpgTimesNote}
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="How to Organize Trex IPTV Channels in"
              accent="TiviMate"
            />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-4">
              A large IPTV playlist can contain far more channels than you regularly watch. TiviMate
              makes it easier to organize the list for everyday viewing.
            </p>
            <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-3">
              Create a Favorites List
            </h3>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-4">
              {organizeTips.favoritesIntro}
            </p>
            <BulletList items={organizeTips.favorites} />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mt-5 mb-6">
              {organizeTips.favoritesClosing}
            </p>
            <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-3">
              Hide Unused Groups
            </h3>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-6">
              {organizeTips.hideGroups}
            </p>
            <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-3">
              Keep the EPG Updated
            </h3>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium">
              {organizeTips.keepEpgUpdated}
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Trex IPTV Playback Settings in"
              accent="TiviMate"
            />
            <Paragraphs items={playbackSection.paragraphs} />
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="How to Fix Trex IPTV Buffering in"
              accent="TiviMate"
            />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-4">
              Buffering can come from several places, including your internet connection, Wi-Fi
              conditions, device performance, or the individual stream. Start with the simple checks:
            </p>
            <BulletList items={bufferingChecks} />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mt-5">
              {bufferingNote}
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="What If a Trex IPTV Channel Freezes in"
              accent="TiviMate?"
            />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-4">
              {freezeIntro}
            </p>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-4">
              If this happens:
            </p>
            <BulletList items={freezeSteps} />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mt-5">
              {freezeClosing}
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Trex IPTV Works but TiviMate Shows"
              accent="No EPG"
            />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-4">
              This is one of the most confusing situations because the live TV stream can work while
              the guide does not. Try this order:
            </p>
            <ol className="space-y-2.5 list-decimal list-inside mb-5">
              {noEpgOrder.map((step) => (
                <li
                  key={step}
                  className="text-[13px] sm:text-[14px] font-medium text-zinc-700 leading-relaxed glass-card px-4 py-3"
                >
                  {step}
                </li>
              ))}
            </ol>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium">
              {noEpgClosing}
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Trex IPTV Login Works but Channels"
              accent="Do Not Play"
            />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-4">
              If your playlist loads but individual channels fail to play, test multiple channels.
            </p>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-3">
              If only one or two channels fail:
            </p>
            <BulletList items={channelsNotPlay.fewChannels} />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mt-6 mb-3">
              If most channels fail:
            </p>
            <BulletList items={channelsNotPlay.mostChannels} />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mt-5">
              {channelsNotPlay.note}
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Best Way to Test Your Trex IPTV" accent="Setup" />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-4">
              After completing the setup, test the system in this order:
            </p>
            <div className="space-y-3">
              {testSetupSteps.map((step) => (
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
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mt-5">
              {testSetupClosing}
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Common Trex IPTV and TiviMate"
              accent="Problems"
            />
            <div className="overflow-x-auto rounded-2xl border border-zinc-200/80 bg-white/80">
              <table className="w-full min-w-[520px] text-left text-sm">
                <thead>
                  <tr className="border-b border-zinc-200 bg-zinc-50/80">
                    <th className="px-4 py-3 font-bold text-zinc-900">Problem</th>
                    <th className="px-4 py-3 font-bold text-zinc-900">What to Check</th>
                  </tr>
                </thead>
                <tbody>
                  {problemsTable.map((row) => (
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
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Final" accent="Thoughts" />
            <Paragraphs items={finalThoughts} />
            <div className="mt-6 flex flex-wrap gap-3">
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
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14 pb-16 sm:pb-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Frequently Asked" accent="Questions" />
            <div className="space-y-3">
              {tivimateFaqs.map((faq) => (
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
