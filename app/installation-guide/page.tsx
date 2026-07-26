import { Metadata } from "next";
import InstallationGuideClient from "./InstallationGuideClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "How to Install & Set Up Trex IPTV on Compatible Devices?",
  description:
    "Get a step-by-step guide to install or set up Trex IPTV on Android TV & Phones, Firestick, Smart TV, iPhone or iOS, Windows PC, Mac & Roku in under 5 minutes.",
  path: "/installation-guide/",
});

export default function InstallationGuide() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Installation Guide", path: "/installation-guide/" },
        ]}
      />
      <InstallationGuideClient />
    </>
  );
}
