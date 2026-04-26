import type { MetadataRoute } from "next";
import { JOB_TEMPLATE_SLUGS, POLICY_TEMPLATE_SLUGS, RESOURCE_ITEMS, SITE_URL } from "@/lib/resources-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const baseRoutes = [
    "",
    "/resources",
    ...RESOURCE_ITEMS.map((item) => `/resources/${item.slug}`),
    ...JOB_TEMPLATE_SLUGS.map((slug) => `/resources/job-description-templates/${slug}`),
    ...POLICY_TEMPLATE_SLUGS.map((slug) => `/resources/policy-templates/${slug}`),
  ];

  return baseRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/resources" ? 1 : 0.8,
  }));
}
