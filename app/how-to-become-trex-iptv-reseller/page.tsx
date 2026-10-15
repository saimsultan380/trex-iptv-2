import { Metadata } from "next";
import BecomeResellerClient from "./BecomeResellerClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { becomeResellerMeta, faqs } from "@/lib/blog/becomeResellerContent";

export const metadata: Metadata = pageMetadata({
  title: becomeResellerMeta.title,
  description: becomeResellerMeta.description,
  path: becomeResellerMeta.path,
});

function articleSchemaJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${SITE_URL}${becomeResellerMeta.path}#article`,
      headline: becomeResellerMeta.headline,
      description: becomeResellerMeta.description,
      datePublished: becomeResellerMeta.datePublished,
      dateModified: becomeResellerMeta.dateModified,
      author: {
        "@type": "Organization",
        name: SITE_NAME,
        url: `${SITE_URL}/`,
      },
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      mainEntityOfPage: absoluteUrl(becomeResellerMeta.path),
      image: absoluteUrl(becomeResellerMeta.image),
      inLanguage: "en-US",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${SITE_URL}${becomeResellerMeta.path}#faq`,
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

export default function BecomeResellerPage() {
  const schema = articleSchemaJsonLd();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
          { name: "Become a Reseller", path: becomeResellerMeta.path },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BecomeResellerClient />
    </>
  );
}
