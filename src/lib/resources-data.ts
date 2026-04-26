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

export const JOB_TEMPLATE_SLUGS = [
  "software-engineer",
  "sales-manager",
  "human-resources-manager",
  "customer-support-specialist",
  "marketing-coordinator",
];

export const POLICY_TEMPLATE_SLUGS = [
  "attendance-policy",
  "code-of-conduct",
  "remote-work-policy",
  "leave-policy",
  "anti-harassment-policy",
];
