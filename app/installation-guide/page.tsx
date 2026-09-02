import { Metadata } from "next";
import InstallationGuideClient from "./InstallationGuideClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { deviceGuides } from "@/components/installationGuideData";
import { installationRequirements } from "@/lib/installationContent";

export const metadata: Metadata = pageMetadata({
  title: "Trex IPTV Installation Guide for Every Device",
  description:
    "Follow simple Trex IPTV installation steps for Firestick, Smart TV, Android, iPhone, Windows, Mac, MAG, Enigma2 and Roku.",
  path: "/installation-guide/",
});

function howToSchemaJsonLd() {
  const fireTvGuide = deviceGuides.find((g) => g.id === "fire-tv");

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Trex IPTV Installation Guide",
    description:
      "Follow simple Trex IPTV installation steps for Firestick, Smart TV, Android, iPhone, Windows, Mac, MAG, Enigma2 and Roku.",
    url: absoluteUrl("/installation-guide/"),
    inLanguage: "en-US",
    step: [
      ...installationRequirements.map((text, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: text,
        text,
      })),
      ...(fireTvGuide?.steps?.map((step, index) => ({
        "@type": "HowToStep",
        position: installationRequirements.length + index + 1,
        name: step.title,
        text: step.description ? `${step.title} ${step.description}` : step.title,
      })) ?? []),
    ],
    tool: {
      "@type": "HowToTool",
      name: "Supported IPTV player app",
    },
    supply: {
      "@type": "HowToSupply",
      name: "Trex IPTV login details",
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export default function InstallationGuide() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Installation Guide", path: "/installation-guide/" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchemaJsonLd()),
        }}
      />
      <InstallationGuideClient />
    </>
  );
}
