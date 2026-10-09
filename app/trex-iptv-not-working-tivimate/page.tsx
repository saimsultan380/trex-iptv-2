import { Metadata } from "next";
import TrexNotWorkingTivimateClient from "./TrexNotWorkingTivimateClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import {
  faqs,
  notWorkingTivimateMeta,
} from "@/lib/blog/trexNotWorkingTivimateContent";

export const metadata: Metadata = pageMetadata({
  title: notWorkingTivimateMeta.title,
  description: notWorkingTivimateMeta.description,
  path: notWorkingTivimateMeta.path,
});

function articleSchemaJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${SITE_URL}${notWorkingTivimateMeta.path}#article`,
      headline: notWorkingTivimateMeta.headline,
      description: notWorkingTivimateMeta.description,
      datePublished: notWorkingTivimateMeta.datePublished,
      dateModified: notWorkingTivimateMeta.dateModified,
      author: {
        "@type": "Organization",
        name: SITE_NAME,
        url: `${SITE_URL}/`,
      },
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      mainEntityOfPage: absoluteUrl(notWorkingTivimateMeta.path),
      image: absoluteUrl(notWorkingTivimateMeta.image),
      inLanguage: "en-US",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${SITE_URL}${notWorkingTivimateMeta.path}#faq`,
      mainEntity: faqs.map((faq) => ({
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

export default function TrexNotWorkingTivimatePage() {
  const schema = articleSchemaJsonLd();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
          { name: "Not Working on TiviMate", path: notWorkingTivimateMeta.path },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <TrexNotWorkingTivimateClient />
    </>
  );
}
