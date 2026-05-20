import type { MetadataRoute } from "next";
import { getAllProgrammaticSeoPages } from "@/lib/programmatic-seo-data";
import { allResourceCatchAllPathParams } from "@/lib/resources-data";
import { programmaticPublicPath } from "@/lib/programmatic-seo-data";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = getSiteUrl().replace(/\/$/, "");

  const rows: { path: string; depth: number; base?: string }[] = [
    { path: "/", depth: 0 },
  ];
  for (const { path } of allResourceCatchAllPathParams()) {
    const seg = path.length ? `/resources/${path.join("/")}/` : "/resources/";
    rows.push({ path: seg, depth: seg.split("/").filter(Boolean).length });
  }

  for (const p of getAllProgrammaticSeoPages()) {
    const seg = programmaticPublicPath(p.slug);
    rows.push({ path: seg, depth: seg.split("/").filter(Boolean).length });
  }

  return rows.map(({ path, depth, base: rowBase }) => {
    const origin = rowBase ?? base;
    const url = path === "/" ? `${origin}/` : `${origin}${path}`;
    const priority =
      path === "/resources/" ? 1 : path === "/" ? 0.8 : depth <= 2 ? 0.85 : depth === 3 ? 0.75 : 0.65;
    const changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] =
      depth <= 1 ? "weekly" : "monthly";
    return { url, lastModified: now, changeFrequency, priority };
  });
}
