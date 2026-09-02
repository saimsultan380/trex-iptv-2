import { Metadata } from "next";
import FreeTrialContactClient from "./FreeTrialContactClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { SITE_EMAIL, SITE_URL, WHATSAPP_NUMBER } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Trex IPTV Free Trial and Customer Support",
  description:
    "Request an eligible 24-hour Trex IPTV free trial or contact support for activation, installation, billing and account help.",
  path: "/free-trial-contact/",
});

function contactSchemaJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${SITE_URL}/free-trial-contact/#service`,
      name: "Trex IPTV Free Trial",
      description:
        "Request an eligible 24-hour Trex IPTV free trial to test compatibility on your own device and internet connection.",
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      url: absoluteUrl("/free-trial-contact/"),
    },
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "@id": `${SITE_URL}/free-trial-contact/#contact`,
      name: "Trex IPTV Free Trial and Customer Support",
      description:
        "Request an eligible 24-hour Trex IPTV free trial or contact support for activation, installation, billing and account help.",
      url: absoluteUrl("/free-trial-contact/"),
      mainEntity: {
        "@id": `${SITE_URL}/free-trial-contact/#service`,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: SITE_EMAIL,
          telephone: `+${WHATSAPP_NUMBER}`,
          areaServed: "US",
          availableLanguage: "English",
        },
        {
          "@type": "ContactPoint",
          contactType: "free trial requests",
          email: SITE_EMAIL,
          areaServed: "US",
          availableLanguage: "English",
        },
      ],
    },
  ];
}

export default function FreeTrialContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Free Trial & Support", path: "/free-trial-contact/" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchemaJsonLd()),
        }}
      />
      <FreeTrialContactClient />
    </>
  );
}
