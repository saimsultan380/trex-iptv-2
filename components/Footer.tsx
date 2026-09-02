"use client";

import React from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { SITE_EMAIL } from "@/lib/site";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Subscription Plans", href: "/subscription-plans/" },
  { label: "Supported Devices", href: "/supported-devices/" },
  { label: "Installation Guide", href: "/installation-guide/" },
  { label: "Reviews", href: "/reviews/" },
  { label: "Free Trial & Support", href: "/free-trial-contact/" },
  { label: "Reseller Panel", href: "/reseller-panel/" },
];

const legalLinks = [
  { label: "Terms and Conditions", href: "/terms-and-conditions/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Refund Policy", href: "/refund-policy/" },
  { label: "DMCA Policy", href: "/dmca-policy/" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-zinc-100">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div>
            <a href="/" className="relative block h-16 w-56 sm:h-20 sm:w-72 mb-6">
              <Image
                src="/logo.PNG"
                alt="Trex IPTV Logo"
                fill
                className="object-contain object-left"
              />
            </a>
            <p className="text-zinc-500 text-[14px] leading-relaxed font-medium max-w-xs">
              Premium IPTV streaming service with instant activation, buffer-free HD/4K quality, and
              24/7 support on every device.
            </p>
          </div>

          <div>
            <h4 className="text-[16px] font-bold text-zinc-900 mb-6 uppercase tracking-wider">
              Pages
            </h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-zinc-500 hover:text-[#ff3503] text-[14px] font-semibold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[16px] font-bold text-zinc-900 mb-6 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-zinc-500 hover:text-[#ff3503] text-[14px] font-semibold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[16px] font-bold text-zinc-900 mb-6 uppercase tracking-wider">
              Contact Us
            </h4>
            <div className="flex flex-col gap-6">
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="inline-flex items-center gap-2 text-zinc-900 hover:text-[#ff3503] text-[14px] font-bold transition-colors"
              >
                <Mail className="h-4 w-4" />
                {SITE_EMAIL}
              </a>

              <a
                href="/free-trial-contact/"
                className="inline-flex h-11 items-center justify-center rounded-full bg-[#ff3503] btn-brand-animated px-6 text-sm font-bold text-white shadow-sm hover:bg-[#e62e03] transition-colors w-fit"
              >
                Free Trial &amp; Support
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-zinc-400 text-[13px] font-medium text-center sm:text-left">
            © {currentYear} Trex IPTV. All rights reserved.
          </p>
          <p className="text-zinc-400 text-[13px] font-medium">Built with Trex IPTV Passion</p>
        </div>
      </div>
    </footer>
  );
}
