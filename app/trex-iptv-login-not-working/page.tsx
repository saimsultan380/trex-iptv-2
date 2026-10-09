import { Metadata } from "next";
import LoginNotWorkingClient from "./LoginNotWorkingClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { loginNotWorkingMeta } from "@/lib/blog/loginNotWorkingContent";

export const metadata: Metadata = pageMetadata({
  title: loginNotWorkingMeta.title,
  description: loginNotWorkingMeta.description,
  path: loginNotWorkingMeta.path,
});

function articleSchemaJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE_URL}${loginNotWorkingMeta.path}#article`,
    headline: loginNotWorkingMeta.headline,
    description: loginNotWorkingMeta.description,
    datePublished: loginNotWorkingMeta.datePublished,
    dateModified: loginNotWorkingMeta.dateModified,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: `${SITE_URL}/`,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    mainEntityOfPage: absoluteUrl(loginNotWorkingMeta.path),
    image: absoluteUrl(loginNotWorkingMeta.image),
    inLanguage: "en-US",
  };
}

export default function LoginNotWorkingPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
          { name: "Login Not Working", path: loginNotWorkingMeta.path },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchemaJsonLd()),
        }}
      />
      <LoginNotWorkingClient />
    </>
  );
}
