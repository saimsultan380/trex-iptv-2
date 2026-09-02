"use client";

import { useState } from "react";
import { Star, Send } from "lucide-react";
import { motion } from "framer-motion";
import { WHATSAPP_NUMBER } from "@/lib/site";

export default function ReviewSubmitForm() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [displayPermission, setDisplayPermission] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const orderEmail = String(data.get("orderEmail") || "").trim();
    const displayName = String(data.get("displayName") || "").trim();
    const device = String(data.get("device") || "").trim();
    const player = String(data.get("player") || "").trim();
    const experienceDate = String(data.get("experienceDate") || "").trim();
    const feedback = String(data.get("feedback") || "").trim();

    if (!orderEmail || !rating || !device || !player || !experienceDate || !feedback) {
      return;
    }

    if (!displayPermission) {
      return;
    }

    const message = [
      "Hi, I would like to submit a verified Trex IPTV review.",
      "",
      `Order email (for verification only): ${orderEmail}`,
      `Rating: ${rating}/5`,
      `Device: ${device}`,
      `Player: ${player}`,
      `Date of experience: ${experienceDate}`,
      displayName ? `Display name/initials: ${displayName}` : "Display name/initials: (not provided)",
      "",
      "Feedback:",
      feedback,
    ].join("\n");

    const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="submit-review"
      className="mx-auto max-w-7xl w-full px-6 sm:px-8 py-12 sm:py-16 lg:py-20 bg-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <h2 className="text-[26px] sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.15] text-zinc-900 mb-4 sm:mb-6">
          Submit Your <span className="text-[#ff6b35]">Review</span>
        </h2>

        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-6 sm:mb-8">
          The order email is used for verification and must not be displayed publicly.
        </p>

        <form onSubmit={handleSubmit} className="glass-card p-5 sm:p-8 space-y-5 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div className="sm:col-span-2">
              <label
                htmlFor="orderEmail"
                className="block text-[12px] sm:text-[13px] font-bold text-zinc-800 mb-1.5"
              >
                Order email <span className="text-zinc-400 font-medium">(not shown publicly)</span>
              </label>
              <input
                id="orderEmail"
                name="orderEmail"
                type="email"
                required
                autoComplete="email"
                placeholder="email@example.com"
                className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-[13px] sm:text-[14px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#ff6b35]/30 focus:border-[#ff6b35] transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="displayName"
                className="block text-[12px] sm:text-[13px] font-bold text-zinc-800 mb-1.5"
              >
                First name or initials
              </label>
              <input
                id="displayName"
                name="displayName"
                type="text"
                placeholder="e.g. J. or James"
                className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-[13px] sm:text-[14px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#ff6b35]/30 focus:border-[#ff6b35] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[12px] sm:text-[13px] font-bold text-zinc-800 mb-1.5">
                Rating
              </label>
              <div className="flex items-center gap-1 h-[46px]">
                {Array.from({ length: 5 }, (_, index) => {
                  const value = index + 1;
                  const active = value <= (hoverRating || rating);
                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setRating(value)}
                      onMouseEnter={() => setHoverRating(value)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 transition-transform hover:scale-110 focus:outline-none"
                      aria-label={`Rate ${value} out of 5`}
                    >
                      <Star
                        className={`h-7 w-7 sm:h-8 sm:w-8 ${
                          active ? "fill-[#ff6b35] text-[#ff6b35]" : "text-zinc-300"
                        }`}
                      />
                    </button>
                  );
                })}
                <span className="ml-2 text-[13px] font-medium text-zinc-500">
                  {rating > 0 ? `${rating}/5` : "Select rating"}
                </span>
              </div>
            </div>

            <div>
              <label
                htmlFor="device"
                className="block text-[12px] sm:text-[13px] font-bold text-zinc-800 mb-1.5"
              >
                Device used
              </label>
              <input
                id="device"
                name="device"
                type="text"
                required
                placeholder="e.g. Fire TV Stick 4K"
                className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-[13px] sm:text-[14px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#ff6b35]/30 focus:border-[#ff6b35] transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="player"
                className="block text-[12px] sm:text-[13px] font-bold text-zinc-800 mb-1.5"
              >
                Player used
              </label>
              <input
                id="player"
                name="player"
                type="text"
                required
                placeholder="e.g. TiviMate or IPTV Smarters"
                className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-[13px] sm:text-[14px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#ff6b35]/30 focus:border-[#ff6b35] transition-colors"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="experienceDate"
                className="block text-[12px] sm:text-[13px] font-bold text-zinc-800 mb-1.5"
              >
                Date of experience
              </label>
              <input
                id="experienceDate"
                name="experienceDate"
                type="date"
                required
                className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-[13px] sm:text-[14px] text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#ff6b35]/30 focus:border-[#ff6b35] transition-colors"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="feedback"
                className="block text-[12px] sm:text-[13px] font-bold text-zinc-800 mb-1.5"
              >
                Honest feedback
              </label>
              <textarea
                id="feedback"
                name="feedback"
                required
                rows={5}
                placeholder="Describe your setup, streaming quality, support experience and overall impression..."
                className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-[13px] sm:text-[14px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#ff6b35]/30 focus:border-[#ff6b35] transition-colors resize-y min-h-[120px]"
              />
            </div>
          </div>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={displayPermission}
              onChange={(event) => setDisplayPermission(event.target.checked)}
              required
              className="mt-1 h-4 w-4 rounded border-zinc-300 text-[#ff6b35] focus:ring-[#ff6b35]"
            />
            <span className="text-[12px] sm:text-[13px] text-zinc-600 leading-relaxed font-medium">
              I give permission to display my first name or initials if this review is verified and
              published.
            </span>
          </label>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={rating === 0}
            className="inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-[4px] bg-[#ff6b35] px-6 text-[11px] sm:text-sm font-bold text-white shadow-sm hover:bg-[#ff5722] transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="h-4 w-4" />
            Submit a Verified Review
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
