import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function ContactRedirectPage() {
  redirect("/free-trial-contact/");
}
