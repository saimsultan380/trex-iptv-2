import { Metadata } from "next";
import TivimateSetupClient from "./TivimateSetupClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { tivimateFaqs, tivimateMeta } from "@/lib/blog/tivimateSetupContent";

export const metadata: Metadata = pageMetadata({
  title: tivimateMeta.title,
  description: tivimateMeta.description,
  path: tivimateMeta.path,
});

function articleSchemaJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${SITE_URL}${tivimateMeta.path}#article`,
      headline: tivimateMeta.title,
      description: tivimateMeta.description,
      datePublished: tivimateMeta.datePublished,
      dateModified: tivimateMeta.dateModified,
      author: {
        "@type": "Organization",
        name: SITE_NAME,
        url: `${SITE_URL}/`,
      },
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      mainEntityOfPage: absoluteUrl(tivimateMeta.path),
      image: absoluteUrl(tivimateMeta.image),
      inLanguage: "en-US",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${SITE_URL}${tivimateMeta.path}#faq`,
      mainEntity: tivimateFaqs.map((faq) => ({
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

export default function TivimateSetupPage() {
  const schema = articleSchemaJsonLd();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
          { name: "TiviMate Setup", path: tivimateMeta.path },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <TivimateSetupClient />
    </>
  );
}
