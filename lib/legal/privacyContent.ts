import type { LegalPageContent } from "./types";
import { LEGAL_LAST_UPDATED } from "./types";

export const privacyContent: LegalPageContent = {
  lastUpdated: LEGAL_LAST_UPDATED,
  intro: [
    "This Privacy Policy explains how Trex IPTV collects, uses, shares and protects personal information.",
    "It applies when you visit the website, request a trial, place an order, submit a review or contact support.",
  ],
  sections: [
    {
      id: "information-collected",
      title: "Information We Collect",
      paragraphs: ["We may collect:"],
      items: [
        "Name",
        "Email address",
        "Country or general location",
        "Billing and transaction details",
        "Device and player information",
        "IP address",
        "Browser and operating system",
        "Order and account history",
        "Support messages",
        "Trial requests",
        "Reseller application information",
        "Review submissions",
        "Website usage information",
      ],
    },
    {
      paragraphs: ["Do not send complete payment-card details through support forms."],
    },
    {
      id: "how-collected",
      title: "How We Collect Information",
      paragraphs: ["Information may be collected:"],
      items: [
        "Through website forms",
        "During checkout",
        "During account activation",
        "When you contact support",
        "When you submit a review",
        "Through normal server logs",
        "Through cookies",
        "From payment processors confirming a transaction",
      ],
    },
    {
      paragraphs: [
        "Payment providers process financial information under their own privacy policies.",
      ],
    },
    {
      id: "how-used",
      title: "How We Use Information",
      paragraphs: ["Information may be used to:"],
      items: [
        "Process orders",
        "Deliver account details",
        "Review trial requests",
        "Provide customer support",
        "Investigate login problems",
        "Prevent fraud",
        "Manage expiration and renewal",
        "Moderate verified reviews",
        "Review reseller applications",
        "Improve website usability",
        "Respond to legal requests",
        "Maintain security records",
        "Meet legal obligations",
      ],
    },
    {
      paragraphs: [
        "Information is not used for unrelated purposes without proper notice or a legal basis.",
      ],
    },
    {
      id: "cookies",
      title: "Cookies",
      paragraphs: ["Cookies may support:"],
      items: [
        "Essential website functions",
        "Security",
        "Visitor preferences",
        "Analytics",
        "Marketing, when used with proper consent",
      ],
    },
    {
      paragraphs: [
        "Where required, non-essential cookies should not be placed before the visitor provides consent.",
        "You can restrict cookies through your browser, but some website features may stop working.",
      ],
    },
    {
      id: "sharing",
      title: "Sharing Information",
      paragraphs: ["Information may be shared with providers that support:"],
      items: [
        "Website hosting",
        "Payment processing",
        "Email delivery",
        "Customer support",
        "Fraud prevention",
        "Analytics",
        "Legal services",
      ],
    },
    {
      paragraphs: [
        "These providers should receive only the information necessary to perform their role.",
        "Information may also be disclosed to comply with law, investigate fraud or protect customers and systems.",
        "Trex IPTV does not sell personal information for money.",
      ],
    },
    {
      id: "retention",
      title: "Data Retention",
      paragraphs: [
        "Information is retained only for as long as reasonably required.",
        "The retention period may depend on:",
      ],
      items: [
        "Active account status",
        "Payment records",
        "Tax obligations",
        "Fraud-prevention needs",
        "Support history",
        "Legal disputes",
        "Privacy requests",
      ],
    },
    {
      paragraphs: [
        "Information that is no longer needed should be deleted, anonymized or securely restricted.",
      ],
    },
    {
      id: "security",
      title: "Data Security",
      paragraphs: [
        "Reasonable security measures are used to protect personal information.",
        "These may include:",
      ],
      items: [
        "Restricted system access",
        "Strong passwords",
        "Secure website connections",
        "Account monitoring",
        "Limited staff access",
        "Secure payment providers",
      ],
    },
    {
      paragraphs: [
        "No internet-based system is completely secure. Customers should protect their email and service credentials.",
      ],
    },
    {
      id: "privacy-rights",
      title: "Your Privacy Rights",
      paragraphs: ["Depending on your location, you may have the right to:"],
      items: [
        "Access your information",
        "Correct inaccurate information",
        "Request deletion",
        "Receive a portable copy",
        "Object to certain uses",
        "Restrict processing",
        "Withdraw consent",
        "Appeal a decision",
        "Opt out of qualifying data sharing",
      ],
    },
    {
      paragraphs: [
        "Some records may be retained for payment, legal, security or fraud-prevention reasons.",
      ],
    },
    {
      id: "us-state-rights",
      title: "U.S. State Privacy Rights",
      paragraphs: [
        "Residents of certain U.S. states may have additional privacy rights.",
        "Identity verification may be required before completing a request. Authorized agents may need to provide proof of authority.",
        "Customers will not be unlawfully discriminated against for exercising a privacy right.",
      ],
    },
    {
      id: "children",
      title: "Children’s Privacy",
      paragraphs: [
        "Trex IPTV is not directed to children under 13.",
        "If you believe a child has supplied personal information, contact us so the matter can be investigated.",
      ],
    },
    {
      id: "third-party",
      title: "Third-Party Services",
      paragraphs: [
        "The website may refer visitors to external player apps, payment providers and other websites.",
        "Those services have their own privacy policies. Trex IPTV is not responsible for systems it does not control.",
      ],
    },
    {
      id: "changes",
      title: "Changes to This Policy",
      paragraphs: [
        "This policy may be updated when laws, technology or business practices change.",
        "The most recent revision date will appear at the top.",
      ],
    },
    {
      id: "privacy-request",
      title: "Submit a Privacy Request",
      paragraphs: [
        "Use the Contact page and select Privacy Request.",
        "Include:",
      ],
      items: [
        "Your name",
        "Account email",
        "State or country",
        "Type of request",
        "Information needed to locate your records",
      ],
    },
    {
      paragraphs: [
        "Do not send identity documents until a secure verification method is provided.",
      ],
    },
  ],
  cta: {
    label: "Submit a Privacy Request",
    href: "/free-trial-contact/#support-form",
  },
};
