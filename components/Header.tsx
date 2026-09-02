"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/installation-guide/", label: "Installation Guide" },
  { href: "/subscription-plans/", label: "Subscription Plans" },
  { href: "/reseller-panel/", label: "Reseller Panel" },
  { href: "/free-trial-contact/", label: "Contact Us" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 sm:pt-6 px-4 sm:px-8">
      <header className="glass-nav w-full max-w-7xl rounded-2xl sm:rounded-3xl overflow-hidden transition-colors duration-300">
        <div className="mx-auto flex h-16 sm:h-[84px] items-center justify-between px-5 sm:px-10">
          <div className="flex items-center">
            <a href="/" className="relative block h-16 w-56 sm:h-20 sm:w-72 transition-transform hover:scale-[1.02]">
              <Image
                src="/logo.PNG"
                alt="Trex IPTV Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-0 text-[15px] font-semibold text-zinc-700">
            {navLinks.map((link, index) => (
              <React.Fragment key={link.href}>
                <a
                  href={link.href}
                  className="px-4 py-2 rounded-full hover:text-[#ff3503] hover:bg-[#ff3503]/5 transition-colors"
                >
                  {link.label}
                </a>
                {index < navLinks.length - 1 ? <span className="glass-nav-menu-line" aria-hidden="true" /> : null}
              </React.Fragment>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="/subscription-plans/"
              className="btn-brand btn-brand-animated h-11 px-7 text-sm"
            >
              Get Started
            </motion.a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-700 hover:text-zinc-950 focus:outline-none transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-zinc-200/60 bg-white/75 backdrop-blur-xl px-6 py-6"
            >
              <nav className="flex flex-col text-base font-semibold text-zinc-700">
                {navLinks.map((link, index) => (
                  <React.Fragment key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-3 hover:text-[#ff3503] transition-colors"
                    >
                      {link.label}
                    </a>
                    {index < navLinks.length - 1 ? (
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
                    ) : null}
                  </React.Fragment>
                ))}
              </nav>
              <div className="pt-6 mt-4 border-t border-zinc-200/60">
                <a
                  href="/subscription-plans/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-brand btn-brand-animated flex h-12 w-full text-base"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
