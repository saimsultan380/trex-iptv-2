import { Metadata } from "next";
import AndroidTvSetupClient from "./AndroidTvSetupClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { androidTvSetupMeta, faqs } from "@/lib/blog/androidTvSetupContent";

export const metadata: Metadata = pageMetadata({
  title: androidTvSetupMeta.title,
  description: androidTvSetupMeta.description,
  path: androidTvSetupMeta.path,
});

function articleSchemaJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${SITE_URL}${androidTvSetupMeta.path}#article`,
      headline: androidTvSetupMeta.headline,
      description: androidTvSetupMeta.description,
      datePublished: androidTvSetupMeta.datePublished,
      dateModified: androidTvSetupMeta.dateModified,
      author: {
        "@type": "Organization",
        name: SITE_NAME,
        url: `${SITE_URL}/`,
      },
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      mainEntityOfPage: absoluteUrl(androidTvSetupMeta.path),
      image: absoluteUrl(androidTvSetupMeta.image),
      inLanguage: "en-US",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${SITE_URL}${androidTvSetupMeta.path}#faq`,
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

export default function AndroidTvSetupPage() {
  const schema = articleSchemaJsonLd();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
          { name: "Android TV & Google TV Setup", path: androidTvSetupMeta.path },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AndroidTvSetupClient />
    </>
  );
}
