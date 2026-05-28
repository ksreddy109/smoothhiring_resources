import { templateSlugFromTitle } from "./resources/paths";
import { CompanyPolicies } from "./marketing-data/PolicyTemplateConstants";
import { JobDescriptions } from "./marketing-data/DescriptionTemplateConstants";
import {
  offerTemplates,
  offerTemplatesByEmploymentType,
  offerTemplatesByRole,
  jobOfferEmailTemplates,
} from "./marketing-data/OfferTemplateConstants";
import {
  interviewTemplates,
  interviewTemplatesByStage,
  interviewTemplatesByType,
  interviewRelatedEmailTemplates,
} from "./marketing-data/InterviewTemplateConstants";
import {
  rejectionTemplates,
  rejectionTemplatesBySituation,
  rejectionTemplatesByStage,
} from "./marketing-data/RejectionTemplateConstants";
import { emailTemplateCatalog } from "./marketing-data/emailTemplateCatalog";

function uniqueSlugsFromPaths(items: { path: string; title: string }[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const item of items) {
    const slug = item.path.replace(/^\//, "");
    if (!slug || seen.has(slug)) continue;
    seen.add(slug);
    out.push(slug);
  }
  return out;
}

export const jobDescriptionTemplateSlugs: string[] = (() => {
  const out: string[] = [];
  for (const titles of Object.values(JobDescriptions)) {
    for (const title of titles) {
      out.push(templateSlugFromTitle(title));
    }
  }
  return out;
})();

export const policyTemplateSlugs: string[] = (() => {
  const out: string[] = [];
  for (const list of Object.values(CompanyPolicies)) {
    for (const policy of list) {
      out.push(templateSlugFromTitle(policy));
    }
  }
  return out;
})();

export const offerTemplateSlugs: string[] = uniqueSlugsFromPaths([
  ...offerTemplates,
  ...offerTemplatesByEmploymentType,
  ...offerTemplatesByRole,
  ...jobOfferEmailTemplates,
]);

export const interviewTemplateSlugs: string[] = uniqueSlugsFromPaths([
  ...interviewTemplates,
  ...interviewTemplatesByType,
  ...interviewTemplatesByStage,
  ...interviewRelatedEmailTemplates,
]);

export const rejectionTemplateSlugs: string[] = uniqueSlugsFromPaths([
  ...rejectionTemplates,
  ...rejectionTemplatesByStage,
  ...rejectionTemplatesBySituation,
]);

export const emailTemplateSlugs: string[] = emailTemplateCatalog.map((e) => e.slug);

export const jobDescriptionTitleBySlug: Map<string, string> = (() => {
  const m = new Map<string, string>();
  for (const titles of Object.values(JobDescriptions)) {
    for (const title of titles) {
      m.set(templateSlugFromTitle(title), title);
    }
  }
  return m;
})();

export const policyLabelBySlug: Map<string, string> = (() => {
  const m = new Map<string, string>();
  for (const list of Object.values(CompanyPolicies)) {
    for (const policy of list) {
      m.set(templateSlugFromTitle(policy), policy);
    }
  }
  return m;
})();

export const offerTitleBySlug: Map<string, string> = (() => {
  const m = new Map<string, string>();
  for (const t of [...offerTemplates, ...offerTemplatesByEmploymentType, ...offerTemplatesByRole, ...jobOfferEmailTemplates]) {
    m.set(t.path.replace(/^\//, ""), t.title);
  }
  return m;
})();

/** Maps SEO variant slugs to the canonical offer page component slug */
export const offerSlugToBaseSlug: Record<string, string> = {
  'part-time-offer-letter-template': 'general-job-offer-template',
  'internship-offer-letter-template': 'informal-job-offer-template',
  'contract-freelance-offer-letter-template': 'general-job-offer-template',
  'remote-employee-offer-letter-template': 'general-job-offer-template',
  'software-engineer-offer-letter-template': 'general-job-offer-template',
  'entry-level-offer-letter-template': 'informal-job-offer-template',
  'hourly-retail-offer-letter-template': 'general-job-offer-template',
  'job-offer-email-template': 'informal-job-offer-template',
  'verbal-offer-follow-up-letter-template': 'informal-job-offer-template',
};

export const interviewTitleBySlug: Map<string, string> = (() => {
  const m = new Map<string, string>();
  for (const t of [...interviewTemplates, ...interviewTemplatesByType, ...interviewTemplatesByStage, ...interviewRelatedEmailTemplates]) {
    m.set(t.path.replace(/^\//, ""), t.title);
  }
  return m;
})();

export const rejectionTitleBySlug: Map<string, string> = (() => {
  const m = new Map<string, string>();
  for (const t of [...rejectionTemplates, ...rejectionTemplatesByStage, ...rejectionTemplatesBySituation]) {
    m.set(t.path.replace(/^\//, ""), t.title);
  }
  return m;
})();

export const emailTitleBySlug: Map<string, string> = new Map(
  emailTemplateCatalog.map((e) => [e.slug, e.title])
);
