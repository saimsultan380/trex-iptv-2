"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { LegalPageContent } from "@/lib/legal/types";

type LegalDocumentClientProps = {
  title: string;
  accent: string;
  content: LegalPageContent;
};

function LegalSectionBlock({
  section,
  index,
}: {
  section: LegalPageContent["sections"][number];
  index: number;
}) {
  return (
    <motion.div
      key={`${section.id ?? section.title ?? "section"}-${index}`}
      id={section.id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.02, ease: "easeOut" }}
      className="mb-8 sm:mb-10 last:mb-0"
    >
      {section.title ? (
        <h2 className="text-[20px] sm:text-2xl font-bold tracking-tight text-zinc-900 mb-3 sm:mb-4 text-left">
          {section.title}
        </h2>
      ) : null}

      {section.paragraphs?.map((paragraph) => (
        <p
          key={paragraph}
          className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-3 last:mb-0 text-left"
        >
          {paragraph}
        </p>
      ))}

      {section.items && section.items.length > 0 ? (
        <ul className="mt-3 space-y-2">
          {section.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 px-4 py-2.5 glass-card-hover text-[13px] sm:text-[14px] font-medium text-zinc-700 leading-relaxed"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff6b35]" />
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </motion.div>
  );
}

export default function LegalDocumentClient({
  title,
  accent,
  content,
}: LegalDocumentClientProps) {
  return (
    <div className="min-h-screen site-page-bg text-zinc-950 font-sans antialiased flex flex-col">
      <Header />

      <main className="pt-28 pb-10 sm:pt-40 sm:pb-12 lg:pt-48 lg:pb-16">
        <div className="mx-auto max-w-7xl w-full px-6 sm:px-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-[26px] sm:text-5xl lg:text-[48px] font-bold tracking-tight leading-[1.1] text-zinc-950 mb-4 sm:mb-6 text-left">
              {title} <span className="text-[#ff6b35]">{accent}</span>
            </h1>

            <p className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-[11px] sm:text-[12px] font-bold text-zinc-600 mb-4 sm:mb-6">
              Last updated: {content.lastUpdated}
            </p>

            <div className="space-y-3 mb-8 sm:mb-12">
              {content.intro.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-zinc-600 text-[12px] sm:text-[15px] leading-relaxed font-medium text-left"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          <div className="glass-card p-5 sm:p-8 lg:p-10 text-left">
            {content.sections.map((section, index) => (
              <LegalSectionBlock key={index} section={section} index={index} />
            ))}

            {content.contactNote ? (
              <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mt-6 pt-6 border-t border-zinc-100 text-left">
                {content.contactNote.includes("Contact page") ? (
                  <>
                    {content.contactNote.split("Contact page")[0]}
                    <a
                      href="/free-trial-contact/"
                      className="text-[#ff6b35] font-bold hover:underline"
                    >
                      Contact page
                    </a>
                    {content.contactNote.split("Contact page")[1]}
                  </>
                ) : (
                  content.contactNote
                )}
              </p>
            ) : null}
          </div>

          {content.cta ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-8 sm:mt-10 text-left"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={content.cta.href}
                className="inline-flex h-11 sm:h-12 items-center justify-center rounded-[4px] bg-[#ff6b35] px-6 sm:px-8 text-[11px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#ff5722] transition-colors whitespace-nowrap"
              >
                {content.cta.label}
              </motion.a>
            </motion.div>
          ) : null}
        </div>
      </main>

      <Footer />
    </div>
  );
}
