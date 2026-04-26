import type { MetadataRoute } from "next";
import { allResourceCatchAllPathParams } from "@/lib/resources-data";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = getSiteUrl().replace(/\/$/, "");

  const rows: { path: string; depth: number }[] = [
    { path: "/", depth: 0 },
  ];
  for (const { path } of allResourceCatchAllPathParams()) {
    const seg = path.length ? `/resources/${path.join("/")}/` : "/resources/";
    rows.push({ path: seg, depth: seg.split("/").filter(Boolean).length });
  }

  return rows.map(({ path, depth }) => {
    const url = path === "/" ? `${base}/` : `${base}${path}`;
    const priority =
      path === "/resources/" ? 1 : path === "/" ? 0.8 : depth <= 2 ? 0.85 : depth === 3 ? 0.75 : 0.65;
    const changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] =
      depth <= 1 ? "weekly" : "monthly";
    return { url, lastModified: now, changeFrequency, priority };
  });
}
