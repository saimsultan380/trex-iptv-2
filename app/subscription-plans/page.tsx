import { Metadata } from "next";
import SubscriptionPlansClient from "./SubscriptionPlansClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Trex IPTV Subscription Plans: Trex IPTV Subscription Provider",
  description:
    "Get Trex IPTV subscription plans at 40% off. Try a Trex IPTV 24h free trial with a free setup guide. Buy 1, 3, 6, and 12-month Trex IPTV Subscription Plans",
  path: "/subscription-plans/",
});

export default function SubscriptionPlans() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Subscription Plans", path: "/subscription-plans/" },
        ]}
      />
      <SubscriptionPlansClient />
    </>
  );
}
