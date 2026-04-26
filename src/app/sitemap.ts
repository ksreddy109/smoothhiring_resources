import type { MetadataRoute } from "next";
import { SITE_URL, allResourceCatchAllPathParams } from "@/lib/resources-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const baseRoutes = [""];
  for (const { path } of allResourceCatchAllPathParams()) {
    const seg = path.length ? `/resources/${path.join("/")}` : "/resources";
    baseRoutes.push(seg);
  }

  return baseRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/resources" ? 1 : 0.8,
  }));
}
