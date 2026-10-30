import { Metadata } from "next";
import OfficialFeaturesClient from "./OfficialFeaturesClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { faqs, officialFeaturesMeta } from "@/lib/blog/officialFeaturesContent";

export const metadata: Metadata = pageMetadata({
  title: officialFeaturesMeta.title,
  description: officialFeaturesMeta.description,
  path: officialFeaturesMeta.path,
});

function articleSchemaJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${SITE_URL}${officialFeaturesMeta.path}#article`,
      headline: officialFeaturesMeta.headline,
      description: officialFeaturesMeta.description,
      datePublished: officialFeaturesMeta.datePublished,
      dateModified: officialFeaturesMeta.dateModified,
      author: {
        "@type": "Organization",
        name: SITE_NAME,
        url: `${SITE_URL}/`,
      },
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      mainEntityOfPage: absoluteUrl(officialFeaturesMeta.path),
      image: absoluteUrl(officialFeaturesMeta.image),
      inLanguage: "en-US",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${SITE_URL}${officialFeaturesMeta.path}#faq`,
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

export default function OfficialFeaturesPage() {
  const schema = articleSchemaJsonLd();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
          {
            name: "Features, Subscription & Setup",
            path: officialFeaturesMeta.path,
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <OfficialFeaturesClient />
    </>
  );
}
