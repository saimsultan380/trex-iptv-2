"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const CARD_SELECTOR = ".glass-card, .glass-card-hover";

function getStaggerIndex(element: Element) {
  const parent = element.parentElement;
  if (!parent) return 0;

  const siblings = Array.from(parent.querySelectorAll(CARD_SELECTOR));
  const index = siblings.indexOf(element);
  return index >= 0 ? index : 0;
}

function initGlassScrollAnimations() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const elements = Array.from(document.querySelectorAll<HTMLElement>(CARD_SELECTOR));

  if (elements.length === 0) return () => {};

  if (reducedMotion) {
    elements.forEach((element) => element.classList.add("glass-scroll-visible"));
    return () => {};
  }

  elements.forEach((element) => {
    element.classList.remove("glass-scroll-visible", "glass-scroll-entrance");
    element.classList.add("glass-scroll-item");

    const staggerIndex = getStaggerIndex(element);
    element.style.setProperty("--glass-delay", `${Math.min(staggerIndex * 0.07, 0.35)}s`);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("glass-scroll-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -6% 0px",
    },
  );

  elements.forEach((element) => observer.observe(element));

  return () => observer.disconnect();
}

export default function GlassScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    let cleanup = () => {};

    const timeoutId = window.setTimeout(() => {
      cleanup = initGlassScrollAnimations();
    }, 50);

    return () => {
      window.clearTimeout(timeoutId);
      cleanup();
    };
  }, [pathname]);

  return null;
}
