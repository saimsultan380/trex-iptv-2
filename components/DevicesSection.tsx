"use client";

import {
  Flame,
  Smartphone,
  Box,
  Tv,
  Radio,
  Apple,
  Monitor,
  HardDrive,
  Settings2,
} from "lucide-react";
import { motion } from "framer-motion";

const devices = [
  { icon: <Flame className="h-4 w-4" />, name: "Amazon Fire TV Stick and Fire TV" },
  { icon: <Tv className="h-4 w-4" />, name: "Android TV and Google TV" },
  { icon: <Box className="h-4 w-4" />, name: "Android streaming boxes" },
  { icon: <Tv className="h-4 w-4" />, name: "Samsung and LG Smart TVs" },
  { icon: <Smartphone className="h-4 w-4" />, name: "Android phones and tablets" },
  { icon: <Apple className="h-4 w-4" />, name: "iPhone and iPad" },
  { icon: <Monitor className="h-4 w-4" />, name: "Windows and Mac computers" },
  { icon: <HardDrive className="h-4 w-4" />, name: "MAG and supported set-top boxes" },
  { icon: <Settings2 className="h-4 w-4" />, name: "Enigma2 and Dreambox receivers" },
  { icon: <Radio className="h-4 w-4" />, name: "Roku through available compatible methods" },
];

export default function DevicesSection() {
  return (
    <section id="devices" className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-24 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <h2 className="text-[26px] sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight text-zinc-900 mb-3 sm:mb-4">
          Watch on Your Preferred <span className="text-[#ff6b35]">Device</span>
        </h2>

        <p className="text-zinc-500 text-[12px] sm:text-[14px] leading-relaxed mb-5 sm:mb-8">
          Compatible options may include:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {devices.map((device, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04, ease: "easeOut" }}
              className="flex items-center gap-3 px-4 py-3 glass-card-hover"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-50 border border-orange-100 text-[#ff6b35]">
                {device.icon}
              </div>
              <h4 className="text-[12px] sm:text-[14px] font-bold text-zinc-900 leading-tight">
                {device.name}
              </h4>
            </motion.div>
          ))}
        </div>

        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-8">
          Player availability depends on the device model, operating system and app-store region.
        </p>

        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="/supported-devices/"
          className="inline-flex h-11 sm:h-12 items-center justify-center rounded-[4px] border border-zinc-300 bg-white px-6 sm:px-8 text-[13px] sm:text-sm font-bold text-zinc-950 hover:bg-zinc-50 transition-colors whitespace-nowrap"
        >
          Check the Supported Devices page before purchasing.
        </motion.a>
      </motion.div>
    </section>
  );
}
