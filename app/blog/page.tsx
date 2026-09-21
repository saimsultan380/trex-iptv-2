import { Metadata } from "next";
import BlogClient from "./BlogClient";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Trex IPTV Blog: Guides, Setup Tutorials & Streaming Tips",
  description:
    "Explore Trex IPTV guides, device installation tutorials, troubleshooting tips, and streaming insights for Firestick, Android, Smart TV & more.",
  path: "/blog/",
});

export default function BlogPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
        ]}
      />
      <BlogClient />
    </>
  );
}
