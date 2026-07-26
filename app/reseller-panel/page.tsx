import { Metadata } from "next";
import ResellerPanelClient from "./ResellerPanelClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Trex IPTV Reseller Panel & Plans | Become Trex IPTV Reseller",
  description:
    "Become a Trex IPTV Reseller & start your own IPTV business. Get Trex IPTV Reseller Panel to create accounts, manage subscriptions & keep 100% of your profits",
  path: "/reseller-panel/",
});

export default function ResellerPanel() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Reseller Panel", path: "/reseller-panel/" },
        ]}
      />
      <ResellerPanelClient />
    </>
  );
}
