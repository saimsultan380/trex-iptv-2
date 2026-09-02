import { Metadata } from "next";
import SupportedDevicesClient from "./SupportedDevicesClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { compatibilityRows, supportedDevicesFaqs } from "@/lib/supportedDevicesContent";

export const metadata: Metadata = pageMetadata({
  title: "Trex IPTV Supported Devices and Compatible Apps",
  description:
    "Check which Fire TV, Android, Smart TV, Apple, computer and set-top box devices work with Trex IPTV.",
  path: "/supported-devices/",
});

function itemListSchemaJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Trex IPTV Supported Devices",
    description:
      "Check which Fire TV, Android, Smart TV, Apple, computer and set-top box devices work with Trex IPTV.",
    url: absoluteUrl("/supported-devices/"),
    numberOfItems: compatibilityRows.length,
    itemListElement: compatibilityRows.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.device,
      description: `${item.compatibility}. Players: ${item.players}. Setup: ${item.setup}.`,
    })),
  };
}

function faqSchemaJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: supportedDevicesFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export default function SupportedDevicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Supported Devices", path: "/supported-devices/" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([itemListSchemaJsonLd(), faqSchemaJsonLd()]),
        }}
      />
      <SupportedDevicesClient />
    </>
  );
}
