import type { PolicyTemplate } from "Modules/Marketing/Resources/Templates/TemplateModel";

export function policyTemplateSlug(s: string): string {
  return s
    .toLowerCase()
    .replace(/[\s()]/g, "")
    .replace(/-/g, "");
}

export function resolveListLabelToPolicySlug(
  listLabel: string,
  allTemplates: PolicyTemplate[],
): string | null {
  if (allTemplates.length === 0) return null;
  const direct = policyTemplateSlug(listLabel);
  for (const t of allTemplates) {
    if (policyTemplateSlug(t.title) === direct) return direct;
  }
  const norm = (v: string) => v.toLowerCase().replace(/\s*template$/i, "").trim();
  const nLabel = norm(listLabel);
  for (const t of allTemplates) {
    if (norm(t.title) === nLabel) return policyTemplateSlug(t.title);
  }
  for (const t of allTemplates) {
    if (t.title.toLowerCase() === listLabel.toLowerCase()) {
      return policyTemplateSlug(t.title);
    }
  }
  return null;
}

export async function loadAllPolicyTemplates(): Promise<PolicyTemplate[]> {
  const mod = await import(
    "Modules/Marketing/Resources/Templates/PolicyTemplates/PolicyTemplatePageConstants/CompanyPoliciesConstants"
  );
  const typed = mod as Record<string, unknown>;
  const out: PolicyTemplate[] = [];
  for (const key of Object.keys(typed)) {
    const v = typed[key] as { title?: string; sections?: unknown };
    if (
      v &&
      typeof v === "object" &&
      typeof v.title === "string" &&
      Array.isArray(v.sections)
    ) {
      out.push(v as PolicyTemplate);
    }
  }
  return out;
}
