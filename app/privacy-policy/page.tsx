import { Metadata } from "next";
import LegalDocumentClient from "@/components/legal/LegalDocumentClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { privacyContent } from "@/lib/legal/privacyContent";

export const metadata: Metadata = pageMetadata({
  title: "Trex IPTV Privacy Policy",
  description:
    "Learn what information Trex IPTV collects, why it is used, how it is protected and what privacy choices may be available.",
  path: "/privacy-policy/",
});

function webPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/privacy-policy/#webpage`,
    name: "Trex IPTV Privacy Policy",
    description:
      "Learn what information Trex IPTV collects, why it is used, how it is protected and what privacy choices may be available.",
    url: absoluteUrl("/privacy-policy/"),
    inLanguage: "en-US",
  };
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy/" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema()) }}
      />
      <LegalDocumentClient
        title="Trex IPTV Privacy"
        accent="Policy"
        content={privacyContent}
      />
    </>
  );
}
