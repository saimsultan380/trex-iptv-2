import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import InfoSection from "@/components/InfoSection";
import PricingSection from "@/components/PricingSection";
import SetupProcessSection from "@/components/SetupProcessSection";
import FeaturesListSection from "@/components/FeaturesListSection";
import DevicesSection from "@/components/DevicesSection";
import InternetSpeedSection from "@/components/InternetSpeedSection";
import OneStreamSection from "@/components/OneStreamSection";
import TrialSection from "@/components/TrialSection";
import BeforeOrderingSection from "@/components/BeforeOrderingSection";
import SupportSection from "@/components/SupportSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { homeMetadata } from "@/lib/seo";
import { homeFaqs } from "@/lib/homeFaqs";

export const metadata: Metadata = homeMetadata;

function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#ffffff] text-zinc-950 font-sans antialiased flex flex-col">
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />
      <Header />
      <Hero />
      <ScrollReveal>
        <InfoSection />
      </ScrollReveal>
      <ScrollReveal>
        <PricingSection />
      </ScrollReveal>
      <ScrollReveal>
        <FeaturesListSection />
      </ScrollReveal>
      <ScrollReveal>
        <SetupProcessSection />
      </ScrollReveal>
      <ScrollReveal>
        <DevicesSection />
      </ScrollReveal>
      <ScrollReveal>
        <InternetSpeedSection />
      </ScrollReveal>
      <ScrollReveal>
        <OneStreamSection />
      </ScrollReveal>
      <ScrollReveal>
        <TrialSection />
      </ScrollReveal>
      <ScrollReveal>
        <BeforeOrderingSection />
      </ScrollReveal>
      <ScrollReveal>
        <SupportSection />
      </ScrollReveal>
      <ScrollReveal>
        <FAQSection />
      </ScrollReveal>
      <ScrollReveal>
        <FinalCTASection />
      </ScrollReveal>
      <Footer />
    </div>
  );
}
