import { Metadata } from "next";
import ResellerPanelClient from "./ResellerPanelClient";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trex IPTV Reseller Panel & Plans | Become Trex IPTV Reseller",
  description:
    "Become a Trex IPTV Reseller & start your own IPTV business. Get Trex IPTV Reseller Panel to create accounts, manage subscriptions & keep 100% of your profits",
  alternates: {
    canonical: `${SITE_URL}/reseller-panel/`,
  },
};

export default function ResellerPanel() {
  return <ResellerPanelClient />;
}
