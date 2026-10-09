"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  ShieldAlert,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  checklist,
  checklistClosing,
  conclusion,
  connectionLimit,
  contactSupport,
  extraSpaces,
  firestickClosing,
  firestickSteps,
  intro,
  loginDetailsIntro,
  loginMethod,
  loginNotWorkingMeta,
  m3uNote,
  oneDeviceVsAnother,
  reinstallClosing,
  reinstallFirst,
  serverUrl,
  smartersChecks,
  smartersClosing,
  smartersIntro,
  subscriptionChecks,
  tivimateClosing,
  tivimateIntro,
  tivimateSteps,
  whyLoginFails,
  whyLoginFailsNote,
  xtreamFields,
} from "@/lib/blog/loginNotWorkingContent";

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

export default function LoginNotWorkingClient() {
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
                {loginNotWorkingMeta.category}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 leading-[1.15] mb-5">
                {loginNotWorkingMeta.headline}
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-zinc-500 mb-8">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {loginNotWorkingMeta.dateDisplay}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {loginNotWorkingMeta.readTime}
                </span>
                <span>•</span>
                <span>By Trex IPTV Team</span>
              </div>

              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200/80 bg-zinc-100 mb-8 sm:mb-10">
                <Image
                  src={loginNotWorkingMeta.image}
                  alt={loginNotWorkingMeta.headline}
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
            <SectionHeading title="Why Is Trex IPTV Login" accent="Not Working?" />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-4">
              The most common causes are:
            </p>
            <BulletList items={whyLoginFails} />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mt-5 glass-card px-4 py-3">
              {whyLoginFailsNote}
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="First, Check Your Trex IPTV" accent="Login Details" />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-4">
              {loginDetailsIntro}
            </p>
            <BulletList items={xtreamFields} />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mt-5 mb-8">
              {m3uNote}
            </p>

            <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-3">
              Check for Extra Spaces
            </h3>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-3">
              {extraSpaces.intro}
            </p>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-3">
              {extraSpaces.body}
            </p>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-2">
              {extraSpaces.exampleLabel}
            </p>
            <div className="flex flex-wrap items-center gap-2 mb-3 font-mono text-sm glass-card px-4 py-3">
              <span className="text-zinc-800">{extraSpaces.exampleA}</span>
              <span className="text-zinc-500">and</span>
              <span className="text-zinc-800">{extraSpaces.exampleB}</span>
            </div>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-8">
              {extraSpaces.closing}
            </p>

            <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-3">
              Check the Server URL Carefully
            </h3>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-3">
              {serverUrl.intro}
            </p>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-3">
              Check every part of it, including:
            </p>
            <BulletList items={serverUrl.checkItems} />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mt-5 mb-2">
              {serverUrl.exampleIntro}
            </p>
            <p className="font-mono text-sm glass-card px-4 py-3 text-zinc-800 mb-5">
              {serverUrl.example}
            </p>
            <div className="space-y-3 mb-8">
              {serverUrl.closing.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-3">
              Make Sure You Are Using the Correct Login Method
            </h3>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-3">
              {loginMethod.intro}
            </p>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-1">
              {loginMethod.xtreamGiven}
            </p>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-3">
              {loginMethod.xtreamOption}
            </p>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-3">
              {loginMethod.m3uGiven}
            </p>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium">
              {loginMethod.closing}
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Check Whether Your IPTV Subscription Is"
              accent="Active"
            />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-3">
              {subscriptionChecks.intro}
            </p>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-4">
              {subscriptionChecks.note}
            </p>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-3">
              Ask yourself:
            </p>
            <BulletList items={subscriptionChecks.questions} />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mt-5">
              {subscriptionChecks.closing}
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Check for Too Many Active" accent="Connections" />
            <div className="space-y-3">
              {connectionLimit.paragraphs.map((paragraph) => (
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
              title="Trex IPTV Login Not Working on"
              accent="Firestick"
            />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-4">
              If you are using a Firestick, start with the simplest checks before changing advanced
              settings.
            </p>
            <div className="space-y-3 mb-5">
              {firestickSteps.map((step) => (
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
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium">
              {firestickClosing}
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Trex IPTV Login Not Working on"
              accent="TiviMate"
            />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-4">
              {tivimateIntro}
            </p>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-3">
              If Trex IPTV is not loading in TiviMate:
            </p>
            <BulletList items={tivimateSteps} />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mt-5">
              {tivimateClosing}
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Trex IPTV Login Not Working on IPTV"
              accent="Smarters"
            />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-4">
              {smartersIntro}
            </p>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-3">
              Check:
            </p>
            <BulletList items={smartersChecks} />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mt-5">
              {smartersClosing}
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="What If Trex IPTV Works on One Device but Not"
              accent="Another?"
            />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-4">
              {oneDeviceVsAnother.intro}
            </p>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-3">
              If the same account works on your phone but does not work on your Firestick, the
              account itself may be fine. The problem could instead be related to:
            </p>
            <BulletList items={oneDeviceVsAnother.deviceIssue} />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mt-5 mb-3">
              {oneDeviceVsAnother.everywhereFails}
            </p>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium">
              {oneDeviceVsAnother.closing}
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Should You Reinstall Your" accent="IPTV Player?" />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-4">
              Reinstalling the app should not be your first step. Try these checks first:
            </p>
            <BulletList items={reinstallFirst} />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mt-5">
              {reinstallClosing}
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="When Should You Contact Trex IPTV"
              accent="Support?"
            />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-4">
              {contactSupport.intro}
            </p>
            <BulletList items={contactSupport.confirmed} />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mt-5 mb-3">
              {contactSupport.whenContacting}
            </p>
            <p className="text-zinc-700 text-[14px] sm:text-[15px] leading-relaxed font-semibold glass-card px-4 py-3 border-l-4 border-[#ff3503] flex items-start gap-3 mb-3">
              <ShieldAlert className="h-5 w-5 shrink-0 text-[#ff3503] mt-0.5" />
              <span>{contactSupport.privacy}</span>
            </p>
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-6">
              {contactSupport.providerSide}
            </p>
            <Link
              href="/free-trial-contact/"
              className="inline-flex items-center justify-center rounded-xl bg-[#ff3503] hover:bg-[#e62e03] text-white text-sm font-bold px-5 py-3 transition-colors"
            >
              Contact Trex IPTV Support
            </Link>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Quick Trex IPTV Login Troubleshooting"
              accent="Checklist"
            />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mb-4">
              Before contacting support, work through this checklist:
            </p>
            <BulletList items={checklist} />
            <p className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium mt-5">
              {checklistClosing}
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-14 pb-16 sm:pb-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionHeading title="Conclusion" />
            <div className="space-y-3">
              {conclusion.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-zinc-600 text-[14px] sm:text-[15px] leading-relaxed font-medium"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/installation-guide/"
                className="inline-flex items-center justify-center rounded-xl bg-[#ff3503] hover:bg-[#e62e03] text-white text-sm font-bold px-5 py-3 transition-colors"
              >
                Installation Guide
              </Link>
              <Link
                href="/trex-iptv-not-working-tivimate/"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white hover:border-[#ff3503]/40 text-zinc-900 text-sm font-bold px-5 py-3 transition-colors"
              >
                TiviMate Troubleshooting
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
