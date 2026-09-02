import { Metadata } from "next";
import SubscriptionPlansClient from "./SubscriptionPlansClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import {
  subscriptionFaqs,
  subscriptionPricingRows,
} from "@/lib/subscriptionContent";

export const metadata: Metadata = pageMetadata({
  title: "Trex IPTV Subscription – Pricing from $12.99",
  description:
    "Compare Trex IPTV subscription options for 1, 3, 6 or 12 months, with transparent pricing, features and connection limits.",
  path: "/subscription-plans/",
});

function subscriptionSchemaJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE_URL}/subscription-plans/#service`,
      name: "Trex IPTV Subscription",
      description:
        "Compare Trex IPTV subscription options for 1, 3, 6 or 12 months, with transparent pricing, features and connection limits.",
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      url: absoluteUrl("/subscription-plans/"),
    },
    ...subscriptionPricingRows.map((plan) => ({
      "@context": "https://schema.org",
      "@type": "Offer",
      name: `Trex IPTV ${plan.subscription} subscription`,
      description: plan.suitableFor,
      price: plan.totalPrice.replace("$", ""),
      priceCurrency: "USD",
      url: absoluteUrl("/subscription-plans/"),
      seller: {
        "@type": "Organization",
        name: SITE_NAME,
      },
      itemOffered: {
        "@id": `${SITE_URL}/subscription-plans/#service`,
      },
    })),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: subscriptionFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];
}

export default function SubscriptionPlans() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Subscription Plans", path: "/subscription-plans/" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(subscriptionSchemaJsonLd()),
        }}
      />
      <SubscriptionPlansClient />
    </>
  );
}
