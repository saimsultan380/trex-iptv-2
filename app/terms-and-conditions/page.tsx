import { Metadata } from "next";
import LegalDocumentClient from "@/components/legal/LegalDocumentClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { termsContent } from "@/lib/legal/termsContent";

export const metadata: Metadata = pageMetadata({
  title: "Trex IPTV Terms and Conditions",
  description:
    "Read the Trex IPTV terms covering eligibility, accounts, payments, acceptable use, content availability and service limitations.",
  path: "/terms-and-conditions/",
});

function webPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/terms-and-conditions/#webpage`,
    name: "Trex IPTV Terms and Conditions",
    description:
      "Read the Trex IPTV terms covering eligibility, accounts, payments, acceptable use, content availability and service limitations.",
    url: absoluteUrl("/terms-and-conditions/"),
    inLanguage: "en-US",
  };
}

export default function TermsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Terms and Conditions", path: "/terms-and-conditions/" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema()) }}
      />
      <LegalDocumentClient
        title="Trex IPTV Terms and"
        accent="Conditions"
        content={termsContent}
      />
    </>
  );
}
