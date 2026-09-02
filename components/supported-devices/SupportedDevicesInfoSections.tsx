"use client";

import type { ReactNode } from "react";
import {
  Tv,
  Smartphone,
  Monitor,
  HardDrive,
  Radio,
  Wifi,
  Gauge,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  bestDeviceBenefits,
  beforeOrderingChecks,
  networkSpeeds,
  networkTips,
  rokuOptions,
  smartTvChecks,
} from "@/lib/supportedDevicesContent";

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
    <section className="mx-auto max-w-7xl w-full px-6 sm:px-8 py-12 sm:py-16 lg:py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <h2 className="text-[26px] sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.15] text-zinc-900 mb-4 sm:mb-6">
          {title} <span className="text-[#ff6b35]">{accent}</span>
        </h2>
        {children}
      </motion.div>
    </section>
  );
}

function CardList({ items, icon: Icon }: { items: string[]; icon: typeof Tv }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
      {items.map((item, index) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
          className="flex items-center gap-3 px-4 py-3 glass-card-hover"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-[#ff6b35]">
            <Icon className="h-5 w-5" />
          </div>
          <span className="text-[13px] sm:text-[14px] font-medium text-zinc-700 leading-relaxed">
            {item}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

export default function SupportedDevicesInfoSections() {
  return (
    <>
      <SectionBlock title="Best Devices for Most" accent="Viewers">
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-3">
          A recent Fire TV Stick, Android TV or Google TV device is usually the easiest choice.
        </p>
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-6">
          These devices generally provide:
        </p>
        <CardList items={bestDeviceBenefits} icon={Tv} />
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mt-6">
          Very old devices or models with limited memory may become slow when loading large playlists.
        </p>
      </SectionBlock>

      <SectionBlock title="Smart TV" accent="Compatibility">
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-6">
          Many Samsung and LG Smart TVs support IPTV players, but compatibility depends on the model and region.
        </p>
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-4">
          Before purchasing:
        </p>
        <CardList items={smartTvChecks} icon={CheckCircle2} />
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mt-6">
          If your television has limited player options, connect a Fire TV or Android streaming device.
        </p>
      </SectionBlock>

      <SectionBlock title="Phones, Tablets and" accent="Computers">
        <div className="space-y-3">
          <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
            Android devices support several IPTV players.
          </p>
          <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
            iPhone and iPad users can select a compatible player from the Apple App Store.
          </p>
          <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
            Windows and Mac users can watch through a dedicated IPTV app, VLC or Kodi.
          </p>
          <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
            These devices are also useful for testing account information before setting up a television.
          </p>
        </div>
      </SectionBlock>

      <SectionBlock title="Set-Top Boxes and" accent="Receivers">
        <div className="glass-card p-6 sm:p-8 space-y-3">
          <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium flex items-start gap-2">
            <HardDrive className="h-5 w-5 text-[#ff6b35] shrink-0 mt-0.5" />
            MAG and supported STB devices generally connect through a portal URL and MAC address.
          </p>
          <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
            Enigma2 and Dreambox receivers may require device-specific setup. These options are better for experienced users.
          </p>
          <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium">
            Contact support with the exact model before ordering.
          </p>
        </div>
      </SectionBlock>

      <SectionBlock title="Roku" accent="Compatibility">
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-4">
          Roku has fewer direct IPTV choices.
        </p>
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-6">
          Depending on your model and region, you may be able to use:
        </p>
        <CardList items={rokuOptions} icon={Radio} />
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mt-6">
          If IPTV is your main reason for purchasing a device, Fire TV or Android TV is normally more flexible.
        </p>
      </SectionBlock>

      <SectionBlock title="Internet and Network" accent="Requirements">
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-6">
          Recommended speeds at the viewing device are:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
          {networkSpeeds.map((tier, i) => (
            <div key={tier.speed} className="glass-card-hover flex flex-col items-center text-center p-6">
              <Gauge className="h-5 w-5 text-[#ff6b35] mb-3" />
              <p className="text-[24px] font-extrabold text-zinc-900 leading-none mb-1">{tier.speed}</p>
              <p className="text-[12px] font-semibold text-zinc-500">{tier.label}</p>
            </div>
          ))}
        </div>
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-4">
          Speed is not the only factor. Wi-Fi strength, router performance, local congestion and available device memory also affect playback.
        </p>
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-4">
          For better results:
        </p>
        <CardList items={networkTips} icon={Wifi} />
      </SectionBlock>

      <SectionBlock title="Check Your Device Before" accent="Ordering">
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-6">
          Confirm:
        </p>
        <CardList items={beforeOrderingChecks} icon={Monitor} />
        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mt-6">
          Request a trial if compatibility remains uncertain.
        </p>
      </SectionBlock>
    </>
  );
}
