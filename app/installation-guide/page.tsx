import { Metadata } from "next";
import InstallationGuideClient from "./InstallationGuideClient";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "How to Install & Set Up Trex IPTV on Compatible Devices?",
  description:
    "Get a step-by-step guide to install or set up Trex IPTV on Android TV & Phones, Firestick, Smart TV, iPhone or iOS, Windows PC, Mac & Roku in under 5 minutes.",
  alternates: {
    canonical: `${SITE_URL}/installation-guide/`,
  },
};

export default function InstallationGuide() {
  return <InstallationGuideClient />;
}
