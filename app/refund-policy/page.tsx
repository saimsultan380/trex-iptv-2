import { Metadata } from "next";
import LegalDocumentClient from "@/components/legal/LegalDocumentClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { refundContent } from "@/lib/legal/refundContent";

export const metadata: Metadata = pageMetadata({
  title: "Trex IPTV Refund Policy",
  description:
    "Read the Trex IPTV refund rules for activation failures, duplicate charges, cancellations, device problems and digital access.",
  path: "/refund-policy/",
});

function webPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/refund-policy/#webpage`,
    name: "Trex IPTV Refund Policy",
    description:
      "Read the Trex IPTV refund rules for activation failures, duplicate charges, cancellations, device problems and digital access.",
    url: absoluteUrl("/refund-policy/"),
    inLanguage: "en-US",
  };
}

export default function RefundPolicyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Refund Policy", path: "/refund-policy/" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema()) }}
      />
      <LegalDocumentClient
        title="Trex IPTV Refund"
        accent="Policy"
        content={refundContent}
      />
    </>
  );
}
