export type LegalSection = {
  id?: string;
  title?: string;
  paragraphs?: string[];
  items?: string[];
};

export type LegalPageContent = {
  lastUpdated: string;
  intro: string[];
  sections: LegalSection[];
  contactNote?: string;
  cta?: {
    label: string;
    href: string;
  };
};

export const LEGAL_LAST_UPDATED = "September 1, 2026";
