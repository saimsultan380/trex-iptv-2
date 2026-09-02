import type { LegalPageContent } from "./types";
import { LEGAL_LAST_UPDATED } from "./types";

export const termsContent: LegalPageContent = {
  lastUpdated: LEGAL_LAST_UPDATED,
  intro: [
    "These Terms govern access to the Trex IPTV website, customer accounts and related services.",
    "By placing an order, activating an account or using the service, you agree to these Terms. Do not purchase or use the service if you disagree.",
  ],
  sections: [
    {
      id: "eligibility",
      title: "Eligibility",
      paragraphs: [
        "You must be at least 18 years old and legally able to enter a contract.",
        "You agree to provide accurate contact and payment information. You are responsible for keeping your email address current.",
      ],
    },
    {
      id: "accounts",
      title: "Accounts and Credentials",
      paragraphs: [
        "You are responsible for protecting your username, password, playlist link and portal information.",
        "You are also responsible for activity performed through your account.",
        "Do not publish, transfer or share credentials with unauthorized people.",
      ],
    },
    {
      id: "nature-of-service",
      title: "Nature of the Service",
      paragraphs: [
        "Trex IPTV supplies access information for use with compatible devices and IPTV players.",
        "Available content may include live television, movies, series, EPG information and selected Catch-Up content.",
        "Catalog size, channels, schedules, languages and resolutions can change. Permanent access to a specific channel, title or event is not guaranteed.",
      ],
    },
    {
      id: "devices",
      title: "Devices and Player Apps",
      paragraphs: [
        "You need a compatible device, internet connection and IPTV player.",
        "Third-party apps and devices are controlled by their developers and manufacturers. Their prices, updates, availability and performance remain outside our direct control.",
        "Player-app charges are separate unless an order clearly states otherwise.",
      ],
    },
    {
      id: "activation",
      title: "Activation and Access Period",
      paragraphs: [
        "The selected access period is displayed during purchase.",
        "Access normally starts when the account is activated. Delaying installation does not automatically extend the expiration date.",
        "Test the account promptly after receiving it.",
      ],
    },
    {
      id: "payments",
      title: "Payments and Renewal",
      paragraphs: [
        "Prices are displayed in U.S. dollars unless stated otherwise.",
        "Standard subscriptions use fixed-term, manual renewal. Access expires unless another period is purchased.",
        "If optional recurring billing is offered, the amount and frequency must be displayed during checkout.",
        "Canceling future billing does not normally provide a refund for an active access period.",
      ],
    },
    {
      id: "connection-limit",
      title: "Connection Limit",
      paragraphs: [
        "Standard access includes one active stream unless the completed order states otherwise.",
        "Installing the login on multiple devices does not provide multiple simultaneous streams.",
        "Additional connections require separate authorization.",
      ],
    },
    {
      id: "acceptable-use",
      title: "Acceptable Use",
      paragraphs: ["You must not:"],
      items: [
        "Share or publish credentials",
        "Resell without approval",
        "Bypass connection limits",
        "Copy or redistribute content unlawfully",
        "Attack systems or security measures",
        "Extract account data using automated tools",
        "Use false payment information",
        "Commit fraud",
        "Impersonate Trex IPTV",
        "Use the service for unlawful activity",
        "Abuse support staff",
        "Interfere with other customers",
      ],
    },
    {
      paragraphs: ["Suspected misuse may be investigated."],
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property and Lawful Use",
      paragraphs: [
        "Website branding, graphics and original written material belong to their respective rights holders.",
        "Customers are responsible for following laws that apply in their location. Trex IPTV does not authorize copyright infringement or unlawful redistribution.",
        "Copyright complaints may be submitted under the DMCA Policy.",
      ],
    },
    {
      id: "service-performance",
      title: "Service Performance",
      paragraphs: ["The service operates through the internet.", "Performance may be affected by:"],
      items: [
        "Internet-provider routing",
        "Wi-Fi conditions",
        "Network traffic",
        "Device performance",
        "Player-app problems",
        "Maintenance",
        "Source interruptions",
        "Regional restrictions",
      ],
    },
    {
      paragraphs: [
        "The service is not guaranteed to be uninterrupted, error-free or free from buffering.",
      ],
    },
    {
      id: "customer-support",
      title: "Customer Support",
      paragraphs: [
        "Support is available for activation and reasonable installation assistance.",
        "Customers must provide enough information to investigate a reported problem.",
        "Support is not responsible for repairing unsupported devices, home networks or third-party applications.",
      ],
    },
    {
      id: "suspension",
      title: "Suspension and Termination",
      paragraphs: ["An account may be restricted or terminated because of:"],
      items: [
        "Credential sharing",
        "Excessive simultaneous connections",
        "Unauthorized reselling",
        "Fraud",
        "Payment reversal",
        "Security attacks",
        "Illegal redistribution",
        "Serious or repeated policy violations",
      ],
    },
    {
      paragraphs: [
        "Immediate action may be taken when required to protect systems, users or legal rights.",
      ],
    },
    {
      id: "refunds",
      title: "Refunds",
      paragraphs: [
        "Refund eligibility is governed by the Refund Policy.",
        "Digital access is generally non-refundable after working credentials are delivered, except for eligible activation failures, duplicate charges or rights required by law.",
      ],
    },
    {
      id: "disclaimer",
      title: "Disclaimer",
      paragraphs: [
        "The service is provided on an “as available” basis to the extent permitted by law.",
        "Trex IPTV does not provide warranties that are not expressly stated. Nothing in these Terms removes consumer rights that cannot legally be waived.",
      ],
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      paragraphs: [
        "To the maximum extent allowed by law, Trex IPTV is not liable for indirect, special or consequential losses caused by use or inability to use the service.",
        "Direct liability will not exceed the amount paid for the affected access period unless applicable law requires otherwise.",
      ],
    },
    {
      id: "changes",
      title: "Changes to These Terms",
      paragraphs: [
        "These Terms may be updated when the service, laws or business practices change.",
        "The latest revision date will appear at the top. Continued use after an update means acceptance where legally permitted.",
      ],
    },
  ],
  contactNote:
    "Questions about these Terms may be submitted through the Contact page.",
  cta: {
    label: "Contact Trex IPTV",
    href: "/free-trial-contact/",
  },
};
