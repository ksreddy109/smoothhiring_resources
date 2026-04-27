import { getSiteUrl } from "./site";
import {
  interviewTemplateSlugs,
  jobDescriptionTemplateSlugs,
  offerTemplateSlugs,
  policyTemplateSlugs,
  rejectionTemplateSlugs,
} from "./deriveTemplateSlugs";

export type ResourceCategory = "generator" | "template";

export type ResourceItem = {
  slug: string;
  title: string;
  description: string;
  category: ResourceCategory;
};

export const SITE_URL = getSiteUrl();

export const RESOURCE_ITEMS: ResourceItem[] = [
  {
    slug: "ai-job-description",
    title: "AI Job Description Generator",
    description: "Generate optimized job descriptions that attract qualified candidates.",
    category: "generator",
  },
  {
    slug: "ai-interview-kit",
    title: "AI Interview Kit Generator",
    description: "Build structured interview kits with role-specific questions and scorecards.",
    category: "generator",
  },
  {
    slug: "job-description-templates",
    title: "Job Description Templates",
    description: "Browse hiring-ready templates for common roles and departments.",
    category: "template",
  },
  {
    slug: "offer-letter-templates",
    title: "Offer Letter Templates",
    description: "Use editable offer letter formats to speed up candidate close workflows.",
    category: "template",
  },
  {
    slug: "policy-templates",
    title: "Policy Templates",
    description: "Access policy templates to standardize HR communication and operations.",
    category: "template",
  },
  {
    slug: "rejection-letter-templates",
    title: "Rejection Letter Templates",
    description: "Streamline your rejection process with our collection of rejection letter templates.",
    category: "template",
  },
  {
    slug: "interview-letter-templates",
    title: "Interview Letter Templates",
    description: "Streamline your interview process with our collection of interview letter templates.",
    category: "template",
  },
  {
    slug: "email-templates",
    title: "Email Templates",
    description: "Use ready-to-send hiring email templates for outreach, interviews, and follow-ups.",
    category: "template",
  },
];

const unique = (values: string[]) => [...new Set(values)];

export const JOB_TEMPLATE_SLUGS = unique(jobDescriptionTemplateSlugs);
export const POLICY_TEMPLATE_SLUGS = unique(policyTemplateSlugs);
export const OFFER_TEMPLATE_SLUGS = unique(offerTemplateSlugs);
export const INTERVIEW_TEMPLATE_SLUGS = unique(interviewTemplateSlugs);
export const REJECTION_TEMPLATE_SLUGS = unique(rejectionTemplateSlugs);

export function allResourceCatchAllPathParams(): { path: string[] }[] {
  const items: { path: string[] }[] = [];
  const add = (p: string[]) => {
    items.push({ path: p });
  };
  add([]);
  for (const it of RESOURCE_ITEMS) {
    add([it.slug]);
  }
  for (const s of JOB_TEMPLATE_SLUGS) {
    add(["job-description-templates", s]);
  }
  for (const s of POLICY_TEMPLATE_SLUGS) {
    add(["policy-templates", s]);
  }
  for (const s of OFFER_TEMPLATE_SLUGS) {
    add(["offer-letter-templates", s]);
  }
  for (const s of INTERVIEW_TEMPLATE_SLUGS) {
    add(["interview-letter-templates", s]);
  }
  for (const s of REJECTION_TEMPLATE_SLUGS) {
    add(["rejection-letter-templates", s]);
  }
  return items;
}
