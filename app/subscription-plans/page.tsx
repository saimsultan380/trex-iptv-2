import { Metadata } from "next";
import SubscriptionPlansClient from "./SubscriptionPlansClient";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trex IPTV Subscription Plans: Trex IPTV Subscription Provider",
  description:
    "Get Trex IPTV subscription plans at 40% off. Try a Trex IPTV 24h free trial with a free setup guide. Buy 1, 3, 6, and 12-month Trex IPTV Subscription Plans",
  alternates: {
    canonical: `${SITE_URL}/subscription-plans/`,
  },
};

export default function SubscriptionPlans() {
  return <SubscriptionPlansClient />;
}
