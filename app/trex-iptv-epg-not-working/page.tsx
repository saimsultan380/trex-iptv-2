import { Metadata } from "next";
import EpgNotWorkingClient from "./EpgNotWorkingClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { epgFaqs, epgMeta } from "@/lib/blog/epgNotWorkingContent";

export const metadata: Metadata = pageMetadata({
  title: epgMeta.title,
  description: epgMeta.description,
  path: epgMeta.path,
});

function articleSchemaJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${SITE_URL}${epgMeta.path}#article`,
      headline: epgMeta.title,
      description: epgMeta.description,
      datePublished: epgMeta.datePublished,
      dateModified: epgMeta.dateModified,
      author: {
        "@type": "Organization",
        name: SITE_NAME,
        url: `${SITE_URL}/`,
      },
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      mainEntityOfPage: absoluteUrl(epgMeta.path),
      image: absoluteUrl(epgMeta.image),
      inLanguage: "en-US",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${SITE_URL}${epgMeta.path}#faq`,
      mainEntity: epgFaqs.map((faq) => ({
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

export default function EpgNotWorkingPage() {
  const schema = articleSchemaJsonLd();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
          { name: "EPG Not Working", path: epgMeta.path },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <EpgNotWorkingClient />
    </>
  );
}
