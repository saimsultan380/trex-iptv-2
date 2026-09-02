import { Metadata } from "next";
import LegalDocumentClient from "@/components/legal/LegalDocumentClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { dmcaContent } from "@/lib/legal/dmcaContent";

export const metadata: Metadata = pageMetadata({
  title: "Trex IPTV DMCA Policy and Copyright Notices",
  description:
    "Learn how copyright owners can submit a DMCA notice and how an affected party can provide a valid counter-notification.",
  path: "/dmca-policy/",
});

function webPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/dmca-policy/#webpage`,
    name: "Trex IPTV DMCA Policy and Copyright Notices",
    description:
      "Learn how copyright owners can submit a DMCA notice and how an affected party can provide a valid counter-notification.",
    url: absoluteUrl("/dmca-policy/"),
    inLanguage: "en-US",
  };
}

export default function DmcaPolicyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "DMCA Policy", path: "/dmca-policy/" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema()) }}
      />
      <LegalDocumentClient
        title="Trex IPTV DMCA"
        accent="Policy"
        content={dmcaContent}
      />
    </>
  );
}
