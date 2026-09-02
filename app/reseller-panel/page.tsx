import { Metadata } from "next";
import ResellerPanelClient from "./ResellerPanelClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { SITE_EMAIL, SITE_URL } from "@/lib/site";
import { resellerFaqs } from "@/lib/resellerPanelContent";

export const metadata: Metadata = pageMetadata({
  title: "Trex IPTV Reseller Panel for U.S. Partners",
  description:
    "Learn how the Trex IPTV reseller panel works, who can apply and how to request reseller pricing for customers in the United States.",
  path: "/reseller-panel/",
});

function resellerSchemaJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE_URL}/reseller-panel/#service`,
      name: "Trex IPTV Reseller Program",
      description:
        "Learn how the Trex IPTV reseller panel works, who can apply and how to request reseller pricing for customers in the United States.",
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      url: absoluteUrl("/reseller-panel/"),
    },
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "@id": `${SITE_URL}/reseller-panel/#contact`,
      name: "Apply for Trex IPTV Reseller Access",
      description:
        "Request reseller pricing or apply for the Trex IPTV reseller program for customers in the United States.",
      url: absoluteUrl("/reseller-panel/"),
      mainEntity: {
        "@id": `${SITE_URL}/reseller-panel/#service`,
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "reseller applications",
        email: SITE_EMAIL,
        areaServed: "US",
        availableLanguage: "English",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: resellerFaqs.map((faq) => ({
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

export default function ResellerPanel() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Reseller Panel", path: "/reseller-panel/" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(resellerSchemaJsonLd()),
        }}
      />
      <ResellerPanelClient />
    </>
  );
}
