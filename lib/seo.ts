import type { Metadata } from "next";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_NAME,
  SITE_OG_IMAGE_HEIGHT,
  SITE_OG_IMAGE_PATH,
  SITE_OG_IMAGE_WIDTH,
  SITE_URL,
} from "@/lib/site";

export type BreadcrumbItem = {
  name: string;
  /** Site path, e.g. `/` or `/contact/` */
  path: string;
};

const ogImage = {
  url: `${SITE_URL}${SITE_OG_IMAGE_PATH}`,
  width: SITE_OG_IMAGE_WIDTH,
  height: SITE_OG_IMAGE_HEIGHT,
  alt: `${SITE_NAME} Logo`,
  type: "image/png" as const,
};

/** Normalize a path to the site's trailing-slash canonical form. */
export function canonicalPath(path: string): string {
  if (!path || path === "/") return "/";
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  return withSlash.endsWith("/") ? withSlash : `${withSlash}/`;
}

export function absoluteUrl(path: string): string {
  const normalized = canonicalPath(path);
  return normalized === "/" ? `${SITE_URL}/` : `${SITE_URL}${normalized}`;
}

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export const homeMetadata: Metadata = pageMetadata({
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  path: "/",
});

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
