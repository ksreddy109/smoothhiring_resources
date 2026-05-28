import { offerTemplates } from "@/lib/marketing-data/OfferTemplateConstants";
import { allProgrammaticSeoSlugs, getProgrammaticSeoPageBySlug } from "@/lib/programmatic-seo-data";
import {
  interviewTemplateSlugs,
  interviewTitleBySlug,
  jobDescriptionTemplateSlugs,
  jobDescriptionTitleBySlug,
  policyLabelBySlug,
  policyTemplateSlugs,
  rejectionTemplateSlugs,
  rejectionTitleBySlug,
} from "@/lib/deriveTemplateSlugs";
import { pathKey, resourcePath } from "./paths";

export const RESOURCE_HUB_ITEMS = [
  {
    slug: "ai-job-description",
    title: "Free AI Job Description Generator",
    description: "Use SmoothHiring's free AI job description generator to create optimized, inclusive job descriptions in seconds. Attract qualified candidates — Free Trial.",
    pageKey: "generator:ai-job-description",
  },
  {
    slug: "ai-interview-kit",
    title: "Free AI Interview Kit Generator — Questions & Scorecards",
    description: "Use SmoothHiring's free AI interview kit generator to build structured interview kits with role-specific questions and scorecards in seconds.",
    pageKey: "generator:ai-interview-kit",
  },
  {
    slug: "job-description-templates",
    title: "Free Job Description Templates & Examples for Every Role",
    description:
      "Browse free job description templates and examples for 100+ roles. Copy, customize, and post hiring-ready job descriptions in minutes.",
    pageKey: "template-hub:job-description",
  },
  {
    slug: "offer-letter-templates",
    title: "Free Offer Letter Templates & Examples",
    description:
      "Free, editable offer letter templates and examples for every role and employment type. Copy, customize, and send a professional job offer letter in minutes.",
    pageKey: "template-hub:offer",
  },
  {
    slug: "policy-templates",
    title: "Free HR Policy Templates & Examples",
    description:
      "Free HR policy templates and examples — PTO, remote work, code of conduct, and more. Download, customize, and standardize your company policies in minutes.",
    pageKey: "template-hub:policy",
  },
  {
    slug: "rejection-letter-templates",
    title: "Candidate Rejection Email & Letter Templates (Free)",
    description:
      "Free candidate rejection email and letter templates for every stage of hiring — from application to final interview. Reject candidates professionally and kindly in minutes. No sign-up required.",
    pageKey: "template-hub:rejection",
  },
  {
    slug: "interview-letter-templates",
    title: "Interview Invitation Email Templates (Free)",
    description:
      "Free interview invitation email templates for phone, video, panel, and in-person interviews. Invite candidates professionally and schedule faster — copy, customize, and send.",
    pageKey: "template-hub:interview",
  },
  {
    slug: "email-templates",
    title: "Free Recruiting & Hiring Email Templates",
    description:
      "Free recruiting and hiring email templates for every stage — candidate outreach, interview invitations, follow-ups, offers, and rejections. Copy, customize, and send in seconds.",
    pageKey: "template-hub:email",
  },
] as const;

export type ResourcePageKind =
  | "hub"
  | "generator"
  | "template-hub"
  | "job-description-detail"
  | "policy-detail"
  | "offer-detail"
  | "interview-detail"
  | "rejection-detail"
  | "programmatic";

export type ResourcePageDefinition = {
  /** Path segments after `/resources/` (empty = hub). */
  path: string[];
  kind: ResourcePageKind;
  /** Stable key used to select the page component. */
  pageKey: string;
  title: string;
  description: string;
  /** Dynamic route params for client pages (e.g. templateName). */
  params: Record<string, string>;
};

const HUB_PAGE: ResourcePageDefinition = {
  path: [],
  kind: "hub",
  pageKey: "hub",
  title: "Free Hiring Resources, Templates & AI Tools",
  description:
    "Free job description templates, interview kits, offer letters & AI generators. Practical hiring resources for recruiters — Free Trial, no credit card required.",
  params: {},
};

function detailTitle(
  category: string,
  slug: string,
  lookup: Map<string, string>,
  fallbackSuffix: string
): string {
  const label = lookup.get(slug);
  if (label) return label;
  const humanized = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return `${humanized} ${fallbackSuffix}`;
}

function buildRegistryPages(): ResourcePageDefinition[] {
  const pages: ResourcePageDefinition[] = [HUB_PAGE];

  for (const item of RESOURCE_HUB_ITEMS) {
    pages.push({
      path: [item.slug],
      kind: item.slug.startsWith("ai-") ? "generator" : "template-hub",
      pageKey: item.pageKey,
      title: item.title,
      description: item.description,
      params: {},
    });
  }

  for (const slug of jobDescriptionTemplateSlugs) {
    const title = detailTitle(
      "job-description-templates",
      slug,
      jobDescriptionTitleBySlug,
      "Job Description Template"
    );
    pages.push({
      path: ["job-description-templates", slug],
      kind: "job-description-detail",
      pageKey: "detail:job-description",
      title,
      description: `${title}. Free hiring template from SmoothHiring.`,
      params: { templateName: slug },
    });
  }

  for (const slug of policyTemplateSlugs) {
    const title = detailTitle("policy-templates", slug, policyLabelBySlug, "HR Policy Template");
    pages.push({
      path: ["policy-templates", slug],
      kind: "policy-detail",
      pageKey: "detail:policy",
      title,
      description: `${title}. Free HR policy template from SmoothHiring.`,
      params: { templateName: slug },
    });
  }

  for (const t of offerTemplates) {
    const slug = t.path.replace(/^\//, "");
    pages.push({
      path: ["offer-letter-templates", slug],
      kind: "offer-detail",
      pageKey: `offer:${slug}`,
      title: t.title,
      description: t.description,
      params: {},
    });
  }

  for (const slug of interviewTemplateSlugs) {
    const title = interviewTitleBySlug.get(slug) ?? slug;
    pages.push({
      path: ["interview-letter-templates", slug],
      kind: "interview-detail",
      pageKey: "detail:interview",
      title,
      description: `${title}. Free interview letter template from SmoothHiring.`,
      params: { interviewLetterName: slug },
    });
  }

  for (const slug of rejectionTemplateSlugs) {
    const title = rejectionTitleBySlug.get(slug) ?? slug;
    pages.push({
      path: ["rejection-letter-templates", slug],
      kind: "rejection-detail",
      pageKey: "detail:rejection",
      title,
      description: `${title}. Free rejection letter template from SmoothHiring.`,
      params: { rejectionLetterName: slug },
    });
  }

  for (const slug of allProgrammaticSeoSlugs()) {
    const row = getProgrammaticSeoPageBySlug(slug);
    if (!row) continue;
    pages.push({
      path: [slug],
      kind: "programmatic",
      pageKey: `programmatic:${slug}`,
      title: row.metaTitle,
      description: row.metaDesc,
      params: { slug },
    });
  }

  return pages;
}

let registryCache: ResourcePageDefinition[] | null = null;

export function getResourcePageRegistry(): ResourcePageDefinition[] {
  if (!registryCache) registryCache = buildRegistryPages();
  return registryCache;
}

const registryByKey = () => new Map(getResourcePageRegistry().map((p) => [pathKey(p.path), p]));

export function resolveResourcePage(path: string[]): ResourcePageDefinition | undefined {
  return registryByKey().get(pathKey(path));
}

export function allResourceStaticPaths(): { path: string[] }[] {
  return getResourcePageRegistry().map((p) => ({ path: p.path }));
}

/** @deprecated Use `resourcePath` from `./paths` in client code. */
export function getResourcePageUrl(path: string[]): string {
  return resourcePath(path);
}

export { resourcePath };
