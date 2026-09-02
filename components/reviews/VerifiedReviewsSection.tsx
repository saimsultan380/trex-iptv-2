"use client";

import { Star, ShieldCheck, MessageSquareOff } from "lucide-react";
import { motion } from "framer-motion";
import { reviewDisplayFields, verifiedReviews } from "@/lib/reviewsContent";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${
            index < rating ? "fill-[#ff6b35] text-[#ff6b35]" : "text-zinc-300"
          }`}
        />
      ))}
    </div>
  );
}

function ReviewCard({
  review,
  index,
}: {
  review: (typeof verifiedReviews)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
      className="glass-card p-5 sm:p-6"
    >
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="text-[15px] sm:text-[16px] font-bold text-zinc-900">
              {review.displayName}
            </h3>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wide text-emerald-700 border border-emerald-200">
              <ShieldCheck className="h-3 w-3" />
              Verified Customer
            </span>
          </div>
          {review.location ? (
            <p className="text-[12px] text-zinc-500 font-medium">{review.location}</p>
          ) : null}
        </div>
        <StarRating rating={review.rating} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
        <div className="rounded-lg bg-zinc-50 px-3 py-2">
          <p className="text-[10px] uppercase tracking-wide font-bold text-zinc-400 mb-0.5">
            Device
          </p>
          <p className="text-[12px] sm:text-[13px] font-medium text-zinc-700">{review.device}</p>
        </div>
        <div className="rounded-lg bg-zinc-50 px-3 py-2">
          <p className="text-[10px] uppercase tracking-wide font-bold text-zinc-400 mb-0.5">
            Player
          </p>
          <p className="text-[12px] sm:text-[13px] font-medium text-zinc-700">{review.player}</p>
        </div>
        <div className="rounded-lg bg-zinc-50 px-3 py-2">
          <p className="text-[10px] uppercase tracking-wide font-bold text-zinc-400 mb-0.5">
            Date
          </p>
          <p className="text-[12px] sm:text-[13px] font-medium text-zinc-700">{review.date}</p>
        </div>
      </div>

      <p className="text-[13px] sm:text-[14px] leading-relaxed text-zinc-600">{review.feedback}</p>
    </motion.article>
  );
}

function EmptyReviewsState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="glass-card border-dashed border-2 border-zinc-200 p-6 sm:p-10"
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-400">
          <MessageSquareOff className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-[16px] sm:text-[18px] font-bold text-zinc-900 mb-2">
            No verified reviews published yet
          </h3>
          <p className="text-zinc-600 text-[13px] sm:text-[14px] leading-relaxed font-medium">
            Display genuine reviews in this section after verification. We do not publish invented
            reviews or ratings.
          </p>
        </div>
      </div>

      <p className="text-zinc-600 text-[13px] sm:text-[14px] leading-relaxed font-medium mb-4">
        Each published review will show:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
        {reviewDisplayFields.map((field, index) => (
          <div
            key={field}
            className="flex items-center gap-2.5 rounded-lg bg-white/60 px-3 py-2.5 border border-zinc-100"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-orange-50 text-[11px] font-bold text-[#ff6b35]">
              {index + 1}
            </span>
            <span className="text-[12px] sm:text-[13px] font-medium text-zinc-700">{field}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function VerifiedReviewsSection() {
  return (
    <section
      id="verified-reviews"
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
          Verified Customer <span className="text-[#ff6b35]">Reviews</span>
        </h2>

        <p className="text-zinc-600 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-6 sm:mb-8">
          Display genuine reviews in this section after verification.
        </p>

        {verifiedReviews.length > 0 ? (
          <div className="space-y-4 sm:space-y-5">
            {verifiedReviews.map((review, index) => (
              <ReviewCard key={review.id} review={review} index={index} />
            ))}
          </div>
        ) : (
          <EmptyReviewsState />
        )}
      </motion.div>
    </section>
  );
}
