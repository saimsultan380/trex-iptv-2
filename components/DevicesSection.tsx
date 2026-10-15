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
} from "lucide-react";
import { motion } from "framer-motion";

const devices = [
  {
    icon: <Flame className="h-4 w-4" />,
    name: "Amazon Fire TV and Firestick",
    desc: "Connect a compatible IPTV player to your Fire TV device and enter your account details. App availability depends on the device model and current Amazon app-store policies.",
  },
  {
    icon: <Box className="h-4 w-4" />,
    name: "Android Phones, Tablets, and TV Boxes",
    desc: "Compatible Android devices may support IPTV players that accept your supplied login or playlist format. Check the app requirements for your specific device.",
  },
  {
    icon: <Tv className="h-4 w-4" />,
    name: "Smart TVs",
    desc: "Samsung and LG Smart TVs may support compatible IPTV player applications, depending on the model and operating system. Check the supported-device list before purchasing.",
  },
  {
    icon: <Apple className="h-4 w-4" />,
    name: "iPhone and iPad",
    desc: "Use a compatible iOS player if it is available for your device and supports your account's connection method.",
  },
  {
    icon: <Monitor className="h-4 w-4" />,
    name: "Windows and Mac Computers",
    desc: "Compatible desktop players can provide another way to access supported IPTV streams on a computer.",
  },
  {
    icon: <HardDrive className="h-4 w-4" />,
    name: "MAG and Other Set-Top Boxes",
    desc: "Portal-based setup may be available on supported set-top boxes. Confirm the exact device model and connection requirements first.",
  },
  {
    icon: <Radio className="h-4 w-4" />,
    name: "Roku Devices",
    desc: "Roku compatibility depends on available supported applications and setup methods. Do not assume that every IPTV player or direct login method is available on Roku.",
  },
  {
    icon: <Smartphone className="h-4 w-4" />,
    name: "Do You Need a Separate IPTV Player?",
    desc: "Yes, in many setups. The IPTV service provides the account access, while the player app displays the streams. Some third-party player applications charge an additional fee, which is separate from your Trex IPTV subscription.",
  },
];

export default function DevicesSection() {
  return (
    <section id="devices" className="mx-auto max-w-7xl w-full px-6 py-12 sm:px-8 sm:py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <h2 className="text-[26px] sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight text-zinc-900 mb-3 sm:mb-4">
          Trex IPTV Compatible Devices and{" "}
          <span className="text-[#ff3503]">Apps</span>
        </h2>

        <p className="text-zinc-500 text-[12px] sm:text-[14px] leading-relaxed mb-5 sm:mb-8">
          You can use Trex IPTV on supported devices that run a compatible IPTV player. Before
          ordering, confirm that your specific model, operating system, and app-store region support
          the player you intend to use.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {devices.map((device, i) => (
            <motion.div
              key={device.name}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04, ease: "easeOut" }}
              className="flex items-start gap-3 px-4 py-3 glass-card-hover h-full"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-50 border border-orange-100 text-[#ff3503] mt-0.5">
                {device.icon}
              </div>
              <div>
                <h4 className="text-[12px] sm:text-[14px] font-bold text-zinc-900 leading-tight mb-1">
                  {device.name}
                </h4>
                <p className="text-[11px] sm:text-[12px] text-zinc-600 leading-relaxed font-medium">
                  {device.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-row flex-wrap items-center gap-2 sm:gap-3">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="/supported-devices/"
            className="inline-flex min-h-11 sm:min-h-12 h-auto items-center justify-center rounded-[4px] border border-zinc-300 bg-white px-4 py-2.5 sm:px-8 sm:py-0 text-[12px] sm:text-sm font-bold text-zinc-950 hover:bg-zinc-50 transition-colors text-center"
          >
            Check Supported Devices
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="/installation-guide/"
            className="inline-flex min-h-11 sm:min-h-12 h-auto items-center justify-center rounded-[4px] bg-[#ff3503] px-4 py-2.5 sm:px-8 sm:py-0 text-[12px] sm:text-sm font-bold text-white hover:bg-[#e62e03] transition-colors text-center"
          >
            Read the Installation Guide
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
