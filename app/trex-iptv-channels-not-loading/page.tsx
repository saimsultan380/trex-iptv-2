import { Metadata } from "next";
import ChannelsNotLoadingClient from "./ChannelsNotLoadingClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { channelsNotLoadingMeta, faqs } from "@/lib/blog/channelsNotLoadingContent";

export const metadata: Metadata = pageMetadata({
  title: channelsNotLoadingMeta.title,
  description: channelsNotLoadingMeta.description,
  path: channelsNotLoadingMeta.path,
});

function articleSchemaJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${SITE_URL}${channelsNotLoadingMeta.path}#article`,
      headline: channelsNotLoadingMeta.headline,
      description: channelsNotLoadingMeta.description,
      datePublished: channelsNotLoadingMeta.datePublished,
      dateModified: channelsNotLoadingMeta.dateModified,
      author: {
        "@type": "Organization",
        name: SITE_NAME,
        url: `${SITE_URL}/`,
      },
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      mainEntityOfPage: absoluteUrl(channelsNotLoadingMeta.path),
      image: absoluteUrl(channelsNotLoadingMeta.image),
      inLanguage: "en-US",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${SITE_URL}${channelsNotLoadingMeta.path}#faq`,
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

export default function ChannelsNotLoadingPage() {
  const schema = articleSchemaJsonLd();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
          { name: "Channels Not Loading", path: channelsNotLoadingMeta.path },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ChannelsNotLoadingClient />
    </>
  );
}
