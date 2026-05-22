import { templateSlugFromTitle } from "./resources/paths";
import { CompanyPolicies } from "./marketing-data/PolicyTemplateConstants";
import { JobDescriptions } from "./marketing-data/DescriptionTemplateConstants";
import { offerTemplates } from "./marketing-data/OfferTemplateConstants";
import { interviewTemplates } from "./marketing-data/InterviewTemplateConstants";
import { rejectionTemplates } from "./marketing-data/RejectionTemplateConstants";

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

export const offerTemplateSlugs: string[] = offerTemplates.map((t) => t.path.replace(/^\//, ""));

export const interviewTemplateSlugs: string[] = interviewTemplates.map((t) => t.path.replace(/^\//, ""));

export const rejectionTemplateSlugs: string[] = rejectionTemplates.map((t) => t.path.replace(/^\//, ""));

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
  for (const t of offerTemplates) {
    m.set(t.path.replace(/^\//, ""), t.title);
  }
  return m;
})();

export const interviewTitleBySlug: Map<string, string> = (() => {
  const m = new Map<string, string>();
  for (const t of interviewTemplates) {
    m.set(t.path.replace(/^\//, ""), t.title);
  }
  return m;
})();

export const rejectionTitleBySlug: Map<string, string> = (() => {
  const m = new Map<string, string>();
  for (const t of rejectionTemplates) {
    m.set(t.path.replace(/^\//, ""), t.title);
  }
  return m;
})();
