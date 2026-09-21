"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Clock,
  ArrowRight,
  Calendar,
  BookOpen,
  Sparkles,
  Tv,
  HelpCircle,
  Headphones,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BLOG_POSTS } from "@/lib/blogData";

const upcomingTopics = [
  "Firestick & Fire TV 4K Setup",
  "Android & Google TV Configuration",
  "Smart TV Setup (Samsung Tizen / LG webOS)",
  "IPTV Smarters & TiviMate Best Settings",
  "Buffer-Free Streaming & Network Optimization",
  "Channel List & EPG Guide Troubleshooting",
];

export default function BlogClient() {
  const hasPosts = BLOG_POSTS.length > 0;

  return (
    <div className="min-h-screen site-page-bg text-zinc-950 font-sans antialiased flex flex-col overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-10 sm:pt-40 sm:pb-16 lg:pt-48 lg:pb-20 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff3503]/10 border border-[#ff3503]/20 text-[#ff3503] text-xs sm:text-sm font-semibold mb-5 sm:mb-6"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Trex IPTV Knowledge &amp; Insights</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.15] mb-4 sm:mb-6"
          >
            Trex IPTV <span className="text-[#ff3503]">Blog</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-zinc-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-medium"
          >
            Tutorials, device setup guides, streaming tips, and expert recommendations to help you
            enjoy flawless HD and 4K entertainment on all your screens.
          </motion.p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-grow pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {hasPosts ? (
            /* 3-Cards Per Row Grid When Posts Exist */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {BLOG_POSTS.map((post) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="group flex flex-col rounded-2xl border border-zinc-200/90 bg-white overflow-hidden shadow-sm hover:shadow-lg hover:border-[#ff3503]/40 transition-all duration-300 w-full"
                >
                  {/* Thumbnail Image */}
                  <Link
                    href={post.href}
                    className="relative w-full aspect-[16/10] bg-zinc-100 overflow-hidden block"
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-[#ff3503] text-white text-[11px] font-bold shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </Link>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                    <div>
                      {/* Meta info */}
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-zinc-400 mb-2.5">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-base sm:text-lg font-bold text-zinc-950 leading-snug mb-2.5 group-hover:text-[#ff3503] transition-colors">
                        <Link href={post.href}>{post.title}</Link>
                      </h2>

                      {/* Description */}
                      <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                        {post.description}
                      </p>
                    </div>

                    {/* Card Footer Link */}
                    <div className="pt-3.5 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-2 mt-auto">
                      <span className="text-xs text-zinc-500 font-medium truncate max-w-[150px]">
                        By {post.author}
                      </span>
                      <Link
                        href={post.href}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#ff3503] group-hover:text-[#e62e03] transition-colors shrink-0"
                      >
                        Read Guide{" "}
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            /* Coming Soon State When Blogs Are Added Later */
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl mx-auto"
            >
              {/* Coming Soon Notice Card */}
              <div className="rounded-3xl border border-zinc-200/80 bg-white/80 backdrop-blur-xl p-8 sm:p-12 shadow-sm text-center mb-10">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-[#ff3503]/10 text-[#ff3503] flex items-center justify-center mb-6">
                  <BookOpen className="h-8 w-8" />
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight mb-3">
                  Articles &amp; Tutorials Coming Soon
                </h2>

                <p className="text-zinc-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8">
                  Our team is preparing detailed, step-by-step installation walkthroughs, player
                  optimization guides, and streaming solutions for Trex IPTV users.
                </p>

                {/* Upcoming Topics Grid */}
                <div className="pt-6 border-t border-zinc-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4">
                    Upcoming Guides &amp; Topics
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                    {upcomingTopics.map((topic) => (
                      <span
                        key={topic}
                        className="px-3.5 py-1.5 rounded-full bg-zinc-100/90 text-zinc-700 text-xs sm:text-sm font-medium border border-zinc-200/60"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Helpful Resources */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <Link
                  href="/installation-guide/"
                  className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm hover:border-[#ff3503]/40 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#ff3503] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Tv className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-zinc-950 mb-1 group-hover:text-[#ff3503] transition-colors">
                    Installation Guide
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                    Step-by-step setup guides for Firestick, Android, Smart TVs, and PCs.
                  </p>
                </Link>

                <Link
                  href="/subscription-plans/"
                  className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm hover:border-[#ff3503]/40 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#ff3503] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <HelpCircle className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-zinc-950 mb-1 group-hover:text-[#ff3503] transition-colors">
                    Subscription Plans
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                    Compare plans with instant delivery, 16,000+ channels, and 4K streaming.
                  </p>
                </Link>

                <Link
                  href="/free-trial-contact/"
                  className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm hover:border-[#ff3503]/40 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#ff3503] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Headphones className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-zinc-950 mb-1 group-hover:text-[#ff3503] transition-colors">
                    24/7 Live Support
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                    Need instant setup assistance? Reach our team directly via WhatsApp or email.
                  </p>
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
