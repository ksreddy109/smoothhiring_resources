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

export const SITE_URL = "https://resources.smoothhiring.com";

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
  add(["email-templates"]);
  add(["rejection-letter-templates"]);
  add(["interview-letter-templates"]);
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
