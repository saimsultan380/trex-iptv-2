import { SITE_EMAIL, SITE_NAME, WHATSAPP_NUMBER } from "@/lib/site";
import type { LegalPageContent } from "./types";
import { LEGAL_LAST_UPDATED } from "./types";

const dmcaPhone = `+1 (${WHATSAPP_NUMBER.slice(1, 4)}) ${WHATSAPP_NUMBER.slice(4, 7)}-${WHATSAPP_NUMBER.slice(7)}`;

export const dmcaContent: LegalPageContent = {
  lastUpdated: LEGAL_LAST_UPDATED,
  intro: [
    "Trex IPTV respects intellectual-property rights and expects customers, resellers and website visitors to do the same.",
    "This policy explains how a copyright owner can report allegedly infringing material and how an affected party can submit a counter-notification.",
    "This information is not legal advice.",
  ],
  sections: [
    {
      id: "scope",
      title: "Scope of This Policy",
      paragraphs: [
        "This process applies to material, links or accounts that Trex IPTV can reasonably control.",
        "We cannot remove material directly from an unrelated website, broadcaster, app or third-party platform.",
        "When a valid notice concerns something outside our control, we may explain that limitation or take appropriate action relating to our own systems or customer accounts.",
      ],
    },
    {
      id: "notice-requirements",
      title: "Required DMCA Notice Information",
      paragraphs: [
        "A copyright owner or authorized representative should provide:",
      ],
      items: [
        "A physical or electronic signature",
        "Identification of the copyrighted work",
        "Identification of the allegedly infringing material",
        "Enough information to locate the material",
        "The reporting party’s name",
        "Mailing address",
        "Telephone number",
        "Email address",
        "A good-faith statement that the use is not authorized",
        "A statement that the notice is accurate",
        "A statement under penalty of perjury that the sender is authorized to act for the rights owner",
      ],
    },
    {
      paragraphs: [
        "A representative list may be supplied when several copyrighted works are involved.",
        "General claims that do not identify the work and location may be insufficient.",
      ],
    },
    {
      id: "submit-notice",
      title: "Submit a Copyright Notice",
      paragraphs: ["Send formal notices to:"],
      items: [
        `Legal business name: ${SITE_NAME}`,
        "Designated agent: Copyright Compliance Department",
        "Mailing address: Contact the designated copyright email for correspondence address details if required.",
        `Telephone: ${dmcaPhone}`,
        `Email: ${SITE_EMAIL}`,
      ],
    },
    {
      paragraphs: [
        "The Contact page may also include a DMCA or Copyright Notice category.",
        "Do not send installation, billing or account-support questions to the copyright agent.",
      ],
    },
    {
      id: "response",
      title: "Response to a Notice",
      paragraphs: ["After receiving a sufficiently complete notice, Trex IPTV may:"],
      items: [
        "Confirm receipt.",
        "Review the reported location.",
        "Request missing information.",
        "Remove or restrict material within its control.",
        "Notify an affected account holder.",
        "Preserve relevant records.",
        "Take action under the repeat-infringer policy.",
      ],
    },
    {
      paragraphs: ["Receiving a notice does not automatically prove infringement."],
    },
    {
      id: "counter-notification",
      title: "Counter-Notification",
      paragraphs: [
        "A person who believes material was removed by mistake may submit a counter-notification containing:",
      ],
      items: [
        "A physical or electronic signature",
        "Identification of the removed material",
        "Its previous location",
        "A statement under penalty of perjury that removal resulted from a mistake or incorrect identification",
        "Full name",
        "Mailing address",
        "Telephone number",
        "Email address",
        "Consent to the jurisdiction required by applicable rules",
        "Agreement to accept service from the reporting party",
      ],
    },
    {
      paragraphs: ["Send the counter-notification to the designated copyright agent."],
    },
    {
      id: "restoration",
      title: "Restoration Process",
      paragraphs: [
        "A valid counter-notification may be shared with the original reporting party.",
        "Material may be restored during the period allowed by law unless the copyright owner confirms that legal action has been filed.",
        "Material may remain restricted when another legal or policy reason applies.",
      ],
    },
    {
      id: "repeat-infringer",
      title: "Repeat-Infringer Policy",
      paragraphs: [
        "Trex IPTV may suspend or terminate accounts linked to repeated copyright violations.",
        "The review may consider:",
      ],
      items: [
        "Number and quality of notices",
        "Separate reported incidents",
        "Counter-notifications",
        "Evidence of intentional redistribution",
        "Attempts to avoid previous restrictions",
        "Applicable legal requirements",
      ],
    },
    {
      paragraphs: [
        "Immediate action may be taken when necessary to protect users, systems or legal rights.",
      ],
    },
    {
      id: "false-notices",
      title: "False Notices",
      paragraphs: [
        "Knowingly submitting a false notice or counter-notification may result in legal liability.",
        "Before reporting material, consider whether its use may be covered by:",
      ],
      items: [
        "Permission",
        "A license",
        "Fair use",
        "Public-domain status",
        "Another legal exception",
      ],
    },
    {
      paragraphs: ["Fraudulent, abusive or incomplete notices may be rejected."],
    },
    {
      id: "privacy-disclosure",
      title: "Privacy and Disclosure",
      paragraphs: ["Information supplied in a notice may be shared with:"],
      items: [
        "The affected account holder",
        "The reporting party",
        "Legal advisers",
        "Service providers",
        "Courts or regulators when required",
      ],
    },
    {
      paragraphs: ["Do not include unrelated confidential information."],
    },
    {
      id: "other-complaints",
      title: "Other Intellectual-Property Complaints",
      paragraphs: [
        "Trademark, impersonation and other intellectual-property concerns may be submitted through the Contact page.",
        "Include:",
      ],
      items: [
        "The protected right",
        "The reported material",
        "Its exact location",
        "Your relationship to the owner",
        "The action requested",
      ],
    },
    {
      id: "contact-agent",
      title: "Contact the Copyright Agent",
      paragraphs: [
        "Use the designated-agent details above for formal copyright notices.",
        "Customer-support requests sent to the copyright agent may be redirected.",
      ],
    },
  ],
  cta: {
    label: "Submit a Copyright Notice",
    href: "/free-trial-contact/#support-form",
  },
};
