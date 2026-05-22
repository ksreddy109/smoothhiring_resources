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
    title: "AI Job Description Generator",
    description: "Generate optimized job descriptions that attract qualified candidates.",
    pageKey: "generator:ai-job-description",
  },
  {
    slug: "ai-interview-kit",
    title: "AI Interview Kit Generator",
    description: "Build structured interview kits with role-specific questions and scorecards.",
    pageKey: "generator:ai-interview-kit",
  },
  {
    slug: "job-description-templates",
    title: "Job Description Templates",
    description: "Browse hiring-ready templates for common roles and departments.",
    pageKey: "template-hub:job-description",
  },
  {
    slug: "offer-letter-templates",
    title: "Offer Letter Templates",
    description: "Use editable offer letter formats to speed up candidate close workflows.",
    pageKey: "template-hub:offer",
  },
  {
    slug: "policy-templates",
    title: "Policy Templates",
    description: "Access policy templates to standardize HR communication and operations.",
    pageKey: "template-hub:policy",
  },
  {
    slug: "rejection-letter-templates",
    title: "Rejection Letter Templates",
    description:
      "Streamline your rejection process with our collection of rejection letter templates.",
    pageKey: "template-hub:rejection",
  },
  {
    slug: "interview-letter-templates",
    title: "Interview Letter Templates",
    description:
      "Streamline your interview process with our collection of interview letter templates.",
    pageKey: "template-hub:interview",
  },
  {
    slug: "email-templates",
    title: "Email Templates",
    description: "Use ready-to-send hiring email templates for outreach, interviews, and follow-ups.",
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
  title: "Hiring Resources and Templates",
  description:
    "Free hiring resources, interview kits, and HR templates to help teams hire better and faster.",
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
