"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BLOG_POSTS } from "@/lib/blogData";

export default function BlogClient() {
  return (
    <div className="min-h-screen site-page-bg text-zinc-950 font-sans antialiased flex flex-col overflow-x-hidden">
      <Header />

      <section className="pt-28 pb-10 sm:pt-40 sm:pb-16 lg:pt-48 lg:pb-20 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.15] mb-4 sm:mb-6"
          >
            Trex IPTV <span className="text-[#ff3503]">Blog</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-zinc-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-medium"
          >
            Tutorials, device setup guides, streaming tips, and expert recommendations to help you
            enjoy flawless HD and 4K entertainment on all your screens.
          </motion.p>
        </div>
      </section>

      <main className="flex-grow pb-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {BLOG_POSTS.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.08,
                }}
                className="group flex flex-col rounded-2xl border border-zinc-200/90 bg-white overflow-hidden shadow-sm hover:shadow-lg hover:border-[#ff3503]/40 transition-all duration-300 w-full h-full"
              >
                <Link
                  href={post.href}
                  className="relative w-full aspect-[16/10] bg-zinc-100 overflow-hidden block"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 3}
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>

                <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                  <div>
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

                    <h2 className="text-base sm:text-lg font-bold text-zinc-950 leading-snug mb-2.5 group-hover:text-[#ff3503] transition-colors">
                      <Link href={post.href}>{post.title}</Link>
                    </h2>

                    <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                      {post.description}
                    </p>
                  </div>

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
        </div>
      </main>

      <Footer />
    </div>
  );
}
