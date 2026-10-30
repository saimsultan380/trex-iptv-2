import { Metadata } from "next";
import FirestickSetupClient from "./FirestickSetupClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { faqs, firestickSetupMeta } from "@/lib/blog/firestickSetupContent";

export const metadata: Metadata = pageMetadata({
  title: firestickSetupMeta.title,
  description: firestickSetupMeta.description,
  path: firestickSetupMeta.path,
});

function articleSchemaJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${SITE_URL}${firestickSetupMeta.path}#article`,
      headline: firestickSetupMeta.headline,
      description: firestickSetupMeta.description,
      datePublished: firestickSetupMeta.datePublished,
      dateModified: firestickSetupMeta.dateModified,
      author: {
        "@type": "Organization",
        name: SITE_NAME,
        url: `${SITE_URL}/`,
      },
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      mainEntityOfPage: absoluteUrl(firestickSetupMeta.path),
      image: absoluteUrl(firestickSetupMeta.image),
      inLanguage: "en-US",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${SITE_URL}${firestickSetupMeta.path}#faq`,
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

export default function FirestickSetupPage() {
  const schema = articleSchemaJsonLd();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
          { name: "Firestick Setup", path: firestickSetupMeta.path },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <FirestickSetupClient />
    </>
  );
}
