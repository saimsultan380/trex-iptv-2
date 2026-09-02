import { Metadata } from "next";
import ReviewsClient from "./ReviewsClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { verifiedReviews } from "@/lib/reviewsContent";

export const metadata: Metadata = pageMetadata({
  title: "Trex IPTV Reviews from Verified Customers",
  description:
    "Read verified Trex IPTV customer feedback about installation, devices, streaming quality and customer support.",
  path: "/reviews/",
});

function reviewsSchemaJsonLd() {
  if (verifiedReviews.length === 0) {
    return [];
  }

  const ratings = verifiedReviews.map((review) => review.rating);
  const averageRating =
    ratings.reduce((sum, value) => sum + value, 0) / ratings.length;

  return [
    ...verifiedReviews.map((review) => ({
      "@context": "https://schema.org",
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.displayName,
      },
      datePublished: review.date,
      reviewBody: review.feedback,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
      itemReviewed: {
        "@type": "Service",
        name: "Trex IPTV",
        provider: {
          "@type": "Organization",
          name: SITE_NAME,
        },
      },
    })),
    {
      "@context": "https://schema.org",
      "@type": "AggregateRating",
      ratingValue: averageRating.toFixed(1),
      reviewCount: verifiedReviews.length,
      bestRating: 5,
      worstRating: 1,
      itemReviewed: {
        "@type": "Service",
        "@id": `${SITE_URL}/#service`,
        name: "Trex IPTV",
      },
    },
  ];
}

export default function ReviewsPage() {
  const schema = reviewsSchemaJsonLd();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews/" },
        ]}
      />
      {schema.length > 0 ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ) : null}
      <ReviewsClient />
    </>
  );
}
