import type { LegalPageContent } from "./types";
import { LEGAL_LAST_UPDATED } from "./types";

export const refundContent: LegalPageContent = {
  lastUpdated: LEGAL_LAST_UPDATED,
  intro: [
    "This policy explains when a purchase may qualify for a refund or account correction.",
    "Trex IPTV is a digital service. Customers should check their device, player, internet connection and stream requirements before purchasing.",
  ],
  sections: [
    {
      id: "activation-assurance",
      title: "Seven-Day Activation Assurance",
      paragraphs: ["Contact support within seven calendar days of activation when:"],
      items: [
        "Credentials were not delivered",
        "The supplied credentials are invalid",
        "A confirmed service-side problem prevents activation",
        "The same order was charged more than once",
      ],
    },
    {
      paragraphs: [
        "Support must receive a reasonable opportunity to investigate and correct the problem.",
        "The available solution may include:",
      ],
      items: [
        "Corrected credentials",
        "Replacement access",
        "An activation-date adjustment",
        "Reversal of a duplicate payment",
        "A refund when the problem cannot be corrected",
      ],
    },
    {
      paragraphs: ["The seven-day assurance is not a free-use period."],
    },
    {
      id: "approved-refunds",
      title: "When a Refund May Be Approved",
      paragraphs: ["A refund may be considered when:"],
      items: [
        "Payment was accepted but access was not delivered",
        "A service-side activation failure cannot be fixed",
        "A duplicate payment is confirmed",
        "Delivered access is materially different from the completed order",
        "Applicable consumer law requires a refund",
      ],
    },
    {
      paragraphs: [
        "Support may request screenshots, payment confirmation and device information.",
      ],
    },
    {
      id: "not-qualified",
      title: "Reasons That Normally Do Not Qualify",
      paragraphs: ["A refund is generally unavailable when:"],
      items: [
        "The customer changes their mind after receiving working access",
        "Device compatibility was not checked",
        "A player app is unavailable or charges a separate fee",
        "Local internet or Wi-Fi is unstable",
        "A VPN or ISP affects playback",
        "A channel, event or on-demand title changes",
        "The customer expected every stream in 4K",
        "Credentials were shared",
        "The stream limit was exceeded",
        "Installation was delayed",
        "The access period expired",
        "The account was suspended for misuse",
        "Access was purchased from an unauthorized reseller",
      ],
    },
    {
      paragraphs: [
        "A temporary service interruption does not automatically qualify for a refund.",
      ],
    },
    {
      id: "cancellation",
      title: "Cancellation and Renewal",
      paragraphs: [
        "Standard access uses fixed-term, manual renewal unless recurring billing was clearly selected.",
        "You may choose not to renew when the paid period ends. Cancellation does not normally provide a refund for an active period.",
        "If recurring billing was selected, cancel before the next billing date.",
      ],
    },
    {
      id: "device-internet",
      title: "Device and Internet Problems",
      paragraphs: ["Before reviewing a refund request, support may ask you to:"],
      items: [
        "Restart your router and device.",
        "Test the internet speed.",
        "Check the login information.",
        "Stop streams on other devices.",
        "Test another supported player.",
        "Provide an error screenshot.",
      ],
    },
    {
      paragraphs: [
        "Problems caused only by an unsupported device, local network or third-party app do not normally qualify.",
      ],
    },
    {
      id: "third-party-payments",
      title: "Third-Party Player Payments",
      paragraphs: [
        "Payments made to app developers are separate.",
        "Trex IPTV cannot refund charges collected by Apple, Google, Amazon or another app provider. Contact the company that collected the payment.",
      ],
    },
    {
      id: "submit-request",
      title: "Submit a Refund Request",
      paragraphs: ["Use the Contact page and select Refund Request.", "Include:"],
      items: [
        "Order email",
        "Payment date",
        "Access period",
        "Transaction reference",
        "Device and player",
        "Description of the problem",
        "Troubleshooting completed",
        "Screenshots with credentials hidden",
      ],
    },
    {
      paragraphs: ["Incomplete requests may take longer to investigate."],
    },
    {
      id: "approved-refunds-process",
      title: "Approved Refunds",
      paragraphs: [
        "Approved refunds are returned through the available original payment method where possible.",
        "Your bank or payment provider controls when the credit appears.",
        "Access connected to a fully refunded order may be disabled.",
      ],
    },
    {
      id: "payment-disputes",
      title: "Payment Disputes",
      paragraphs: [
        "Contact support before opening a payment dispute when possible.",
        "False information submitted during a dispute may result in account suspension and preservation of relevant records.",
      ],
    },
    {
      id: "contact-refund",
      title: "Contact Refund Support",
      paragraphs: [
        "Submit eligible activation-related requests within seven days unless applicable law provides a longer period.",
      ],
    },
  ],
  cta: {
    label: "Submit a Refund Request",
    href: "/free-trial-contact/#support-form",
  },
};
