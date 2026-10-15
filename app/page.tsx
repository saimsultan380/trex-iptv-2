import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import FeaturesListSection from "@/components/FeaturesListSection";
import PricingSection from "@/components/PricingSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import PlanComparisonTable from "@/components/PlanComparisonTable";
import InfoSection from "@/components/InfoSection";
import SetupProcessSection from "@/components/SetupProcessSection";
import BeforeOrderingSection from "@/components/BeforeOrderingSection";
import DevicesSection from "@/components/DevicesSection";
import ComparisonSection from "@/components/ComparisonSection";
import HomeResellerSection from "@/components/HomeResellerSection";
import InternetSpeedSection from "@/components/InternetSpeedSection";
import OneStreamSection from "@/components/OneStreamSection";
import TrialSection from "@/components/TrialSection";
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
    <div className="min-h-screen overflow-x-hidden site-page-bg text-zinc-950 font-sans antialiased flex flex-col">
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />
      <Header />
      <Hero />
      <ScrollReveal>
        <FeaturesListSection />
      </ScrollReveal>
      <ScrollReveal>
        <PricingSection />
      </ScrollReveal>
      <ScrollReveal>
        <WhyChooseSection />
      </ScrollReveal>
      <ScrollReveal>
        <PlanComparisonTable />
      </ScrollReveal>
      <ScrollReveal>
        <InfoSection />
      </ScrollReveal>
      <ScrollReveal>
        <SetupProcessSection />
      </ScrollReveal>
      <ScrollReveal>
        <BeforeOrderingSection />
      </ScrollReveal>
      <ScrollReveal>
        <DevicesSection />
      </ScrollReveal>
      <ScrollReveal>
        <ComparisonSection />
      </ScrollReveal>
      <ScrollReveal>
        <HomeResellerSection />
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
