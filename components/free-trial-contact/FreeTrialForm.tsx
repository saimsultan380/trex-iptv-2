"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { WHATSAPP_NUMBER } from "@/lib/site";
import { trialConfirmationMessage } from "@/lib/freeTrialContactContent";

export default function FreeTrialForm() {
  const [submitted, setSubmitted] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [newCustomer, setNewCustomer] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const firstName = String(data.get("firstName") || "").trim();
    const email = String(data.get("email") || "").trim();
    const country = String(data.get("country") || "").trim();
    const deviceType = String(data.get("deviceType") || "").trim();
    const player = String(data.get("player") || "").trim();
    const loginMethod = String(data.get("loginMethod") || "").trim();

    if (!firstName || !email || !country || !deviceType || !player || !newCustomer || !termsAccepted) {
      return;
    }

    const message = [
      "Hi, I would like to request a 24-hour Trex IPTV free trial.",
      "",
      `First name: ${firstName}`,
      `Email: ${email}`,
      `Country: ${country}`,
      `Device type: ${deviceType}`,
      `IPTV player: ${player}`,
      loginMethod ? `Preferred login method: ${loginMethod}` : "Preferred login method: Not specified",
      "New customer: Yes",
    ].join("\n");

    const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(href, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    form.reset();
    setTermsAccepted(false);
    setNewCustomer(false);
  }

  return (
    <section
      id="free-trial-form"
      className="mx-auto max-w-7xl w-full px-6 sm:px-8 py-12 sm:py-16 lg:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <h2 className="text-[26px] sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.15] text-zinc-900 mb-4 sm:mb-6">
          Free Trial <span className="text-[#ff3503]">Form</span>
        </h2>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-6 sm:p-8 flex items-start gap-4 border-l-4 border-emerald-500"
          >
            <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5" />
            <p className="text-[13px] sm:text-[15px] leading-relaxed font-medium text-zinc-700">
              {trialConfirmationMessage}
            </p>
          </motion.div>
        ) : null}

        <form
          onSubmit={handleSubmit}
          className={`glass-card p-5 sm:p-8 space-y-5 sm:space-y-6 ${submitted ? "mt-6" : ""}`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label htmlFor="firstName" className="block text-[12px] sm:text-[13px] font-bold text-zinc-800 mb-1.5">
                First name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-[13px] sm:text-[14px] text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#ff3503]/30 focus:border-[#ff3503] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[12px] sm:text-[13px] font-bold text-zinc-800 mb-1.5">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-[13px] sm:text-[14px] text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#ff3503]/30 focus:border-[#ff3503] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="country" className="block text-[12px] sm:text-[13px] font-bold text-zinc-800 mb-1.5">
                Country
              </label>
              <input
                id="country"
                name="country"
                type="text"
                required
                placeholder="e.g. United States"
                className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-[13px] sm:text-[14px] text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#ff3503]/30 focus:border-[#ff3503] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="deviceType" className="block text-[12px] sm:text-[13px] font-bold text-zinc-800 mb-1.5">
                Device type
              </label>
              <input
                id="deviceType"
                name="deviceType"
                type="text"
                required
                placeholder="e.g. Fire TV Stick"
                className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-[13px] sm:text-[14px] text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#ff3503]/30 focus:border-[#ff3503] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="player" className="block text-[12px] sm:text-[13px] font-bold text-zinc-800 mb-1.5">
                IPTV player
              </label>
              <input
                id="player"
                name="player"
                type="text"
                required
                placeholder="e.g. TiviMate"
                className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-[13px] sm:text-[14px] text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#ff3503]/30 focus:border-[#ff3503] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="loginMethod" className="block text-[12px] sm:text-[13px] font-bold text-zinc-800 mb-1.5">
                Preferred login method <span className="text-zinc-400 font-medium">(if known)</span>
              </label>
              <input
                id="loginMethod"
                name="loginMethod"
                type="text"
                placeholder="e.g. Xtream Codes or M3U"
                className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-[13px] sm:text-[14px] text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#ff3503]/30 focus:border-[#ff3503] transition-colors"
              />
            </div>
          </div>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={newCustomer}
              onChange={(event) => setNewCustomer(event.target.checked)}
              required
              className="mt-1 h-4 w-4 rounded border-zinc-300 text-[#ff3503] focus:ring-[#ff3503]"
            />
            <span className="text-[12px] sm:text-[13px] text-zinc-600 leading-relaxed font-medium">
              I confirm that I am a new customer requesting an eligible trial.
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(event) => setTermsAccepted(event.target.checked)}
              required
              className="mt-1 h-4 w-4 rounded border-zinc-300 text-[#ff3503] focus:ring-[#ff3503]"
            />
            <span className="text-[12px] sm:text-[13px] text-zinc-600 leading-relaxed font-medium">
              I agree to the Terms and Privacy Policy.
            </span>
          </label>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-[4px] bg-[#ff3503] px-6 text-[11px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#ff3503] transition-colors whitespace-nowrap"
          >
            <Send className="h-4 w-4" />
            Request My Free Trial
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
