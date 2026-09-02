import { Metadata } from "next";
import AboutUsClient from "./AboutUsClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import {
  DEFAULT_DESCRIPTION,
  SITE_EMAIL,
  SITE_NAME,
  SITE_URL,
  WHATSAPP_NUMBER,
} from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About Trex IPTV | Service Standards",
  description:
    "Learn about Trex IPTV, how the service works and our approach to compatibility, customer support and clear service information.",
  path: "/about-us/",
});

function aboutSchemaJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": `${SITE_URL}/about-us/#aboutpage`,
      name: "About Trex IPTV",
      description:
        "Learn about Trex IPTV, how the service works and our approach to compatibility, customer support and clear service information.",
      url: absoluteUrl("/about-us/"),
      inLanguage: "en-US",
      mainEntity: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      description: DEFAULT_DESCRIPTION,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: `+${WHATSAPP_NUMBER}`,
        email: SITE_EMAIL,
        contactType: "customer support",
        availableLanguage: "English",
        areaServed: "US",
      },
    },
  ];
}

export default function AboutUsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about-us/" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchemaJsonLd()),
        }}
      />
      <AboutUsClient />
    </>
  );
}
