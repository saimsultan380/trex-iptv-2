export type VerifiedReview = {
  id: string;
  displayName: string;
  location?: string;
  device: string;
  player: string;
  date: string;
  rating: number;
  feedback: string;
};

/** Add verified reviews here after manual verification. Leave empty until then. */
export const verifiedReviews: VerifiedReview[] = [];

export const reviewDisplayFields = [
  "Customer first name or approved initials",
  "General location, with permission",
  "Device used",
  "IPTV player used",
  "Date of experience",
  "Rating",
  "Verified-customer label",
  "Original feedback",
];

export const helpfulReviewTopics = [
  "Whether setup was easy",
  "Which device and player were used",
  "General picture and sound quality",
  "Type of internet connection",
  "How the app menus performed",
  "Whether support understood the question",
  "How the service performed over time",
];

export const verificationCriteria = [
  "The email matches an order or trial",
  "The account was active during the stated period",
  "The customer used the named device",
  "The feedback describes a relevant experience",
  "No private login information is exposed",
];

export const criticalFeedbackExamples = [
  "Difficult installation",
  "Buffering on the customer’s network",
  "A missing channel",
  "Slow device menus",
  "A support problem",
  "An experience that did not meet expectations",
];

export const rejectedReviewReasons = [
  "Login credentials",
  "Private information",
  "Threats",
  "Spam",
  "Unrelated advertising",
  "Copied content",
  "Feedback unrelated to a real experience",
];

export const performanceVariables = [
  "Device age",
  "Available memory",
  "Wi-Fi strength",
  "Internet-provider routing",
  "Player settings",
  "Local congestion",
  "VPN use",
  "Simultaneous streams",
];
