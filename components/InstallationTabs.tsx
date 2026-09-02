"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { deviceGuides, type DeviceGuide } from "./installationGuideData";

function StepList({ steps }: { steps: { title: string; description: string }[] }) {
  return (
    <ol className="space-y-3">
      {steps.map((step, index) => (
        <li key={index} className="flex gap-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ff6b35] text-white text-[11px] font-bold">
            {index + 1}
          </span>
          <div className="pt-0.5">
            <p className="text-[13px] sm:text-[14px] font-medium text-zinc-700 leading-relaxed">
              {step.title}
            </p>
            {step.description && (
              <p className="text-[12px] sm:text-[13px] text-zinc-500 leading-relaxed mt-1">
                {step.description}
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

function GuideContent({ guide }: { guide: DeviceGuide }) {
  return (
    <div className="flex flex-col">
      <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4 leading-tight">
        {guide.title}
      </h3>

      {guide.recommendedPlayers && (
        <p className="text-[13px] sm:text-[15px] text-zinc-600 leading-relaxed font-medium mb-6">
          {guide.recommendedPlayers}
        </p>
      )}

      {guide.bulletLists?.map((list, idx) => (
        <div key={idx} className="mb-6 glass-card p-5">
          {list.title && (
            <p className="text-[13px] sm:text-[14px] font-bold text-zinc-900 mb-3">
              {list.title}
            </p>
          )}
          <ul className="space-y-2">
            {list.items.map((item) => (
              <li key={item} className="flex gap-2 text-[13px] text-zinc-600 leading-relaxed">
                <span className="text-[#ff6b35] font-bold shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {guide.steps && guide.steps.length > 0 && (
        <div className="mb-6">
          <StepList steps={guide.steps} />
        </div>
      )}

      {guide.methods?.map((method, idx) => (
        <div key={idx} className={idx > 0 ? "mt-8 pt-8 border-t border-zinc-100" : "mb-6"}>
          <h4 className="text-[15px] sm:text-base font-bold text-zinc-900 mb-4">
            {method.title}
          </h4>
          <StepList steps={method.steps} />
        </div>
      ))}

      {guide.subSections?.map((section, idx) => (
        <div key={idx} className={idx > 0 ? "mt-8 pt-8 border-t border-zinc-100" : "mb-6"}>
          <h4 className="text-[15px] sm:text-base font-bold text-zinc-900 mb-4">
            {section.title}
          </h4>
          <StepList steps={section.steps} />
          {section.note && (
            <p className="text-[12px] sm:text-[13px] text-zinc-500 leading-relaxed mt-4 font-medium">
              {section.note}
            </p>
          )}
        </div>
      ))}

      {guide.notes && guide.notes.length > 0 && (
        <div className="space-y-3 mt-6">
          {guide.notes.map((note) => (
            <div key={note} className="glass-card p-4 sm:p-5">
              <p className="text-[12px] sm:text-[13px] text-zinc-600 leading-relaxed font-medium">
                {note}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function InstallationTabs() {
  const [activeTab, setActiveTab] = useState(deviceGuides[0].id);
  const contentRef = React.useRef<HTMLDivElement>(null);

  const activeGuide = deviceGuides.find((d) => d.id === activeTab) || deviceGuides[0];

  const handleTabClick = (deviceId: string) => {
    setActiveTab(deviceId);
    if (contentRef.current && window.innerWidth < 1024) {
      setTimeout(() => {
        contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  return (
    <section className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-24 bg-zinc-50/50">
      <div className="lg:hidden mb-4">
        <h2 className="text-lg font-bold text-zinc-900 mb-3 leading-tight">
          Device Setup <span className="text-[#ff6b35]">Guides</span>
        </h2>
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
          {deviceGuides.map((device) => {
            const isActive = activeTab === device.id;
            const Icon = device.icon;
            return (
              <button
                key={device.id}
                onClick={() => handleTabClick(device.id)}
                className={`flex shrink-0 items-center gap-2 px-3 py-2 rounded-lg text-left transition-all ${
                  isActive
                    ? "bg-[#ff6b35] text-white shadow-sm"
                    : "bg-white border border-zinc-200 text-zinc-700"
                }`}
              >
                <Icon className="h-3.5 w-3.5 shrink-0" />
                <span className="text-[11px] font-bold whitespace-nowrap">{device.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
        <div className="hidden lg:block lg:w-[300px] shrink-0 glass-card p-6 sm:p-8 h-fit">
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 mb-2 leading-tight">
            Device Setup <span className="text-[#ff6b35]">Guides</span>
          </h2>
          <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
            Pick your device and follow the steps.
          </p>
          <div className="space-y-1.5">
            {deviceGuides.map((device) => {
              const isActive = activeTab === device.id;
              const Icon = device.icon;
              return (
                <button
                  key={device.id}
                  onClick={() => handleTabClick(device.id)}
                  className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-200 group text-left ${
                    isActive
                      ? "bg-orange-50/70 border border-orange-200 text-[#ff6b35] shadow-sm"
                      : "bg-white/60 border border-transparent text-zinc-700 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`p-2 rounded-lg transition-colors shrink-0 ${
                        isActive
                          ? "bg-white text-[#ff6b35]"
                          : "bg-zinc-50 text-zinc-400 group-hover:text-zinc-600"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-[12px] font-bold leading-snug">{device.name}</span>
                  </div>
                  <ChevronRight
                    className={`h-4 w-4 shrink-0 transition-all ${
                      isActive ? "translate-x-0.5 text-[#ff6b35]" : "opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div
          ref={contentRef}
          className="flex-1 glass-card p-5 sm:p-10 lg:p-12 min-h-0 lg:min-h-[500px] scroll-mt-24"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.25 }}
            >
              <GuideContent guide={activeGuide} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
