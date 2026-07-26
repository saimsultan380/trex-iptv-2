import { breadcrumbJsonLd, type BreadcrumbItem } from "@/lib/seo";

type BreadcrumbJsonLdProps = {
  items: BreadcrumbItem[];
};

/** Server-rendered BreadcrumbList JSON-LD for Google breadcrumb trails. */
export default function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbJsonLd(items)),
      }}
    />
  );
}
