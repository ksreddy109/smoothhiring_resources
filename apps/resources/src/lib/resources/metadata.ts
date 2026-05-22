import type { Metadata } from "next";
import { getCmsResourcePage } from "@/lib/cms/payload-client";
import { getProgrammaticSeoPageBySlug } from "@/lib/programmatic-seo-data";
import { getSiteUrl, sitePath } from "@/lib/site";
import { getResourcePageUrl, resolveResourcePage } from "./page-registry";
import { resourcePath } from "./paths";

const ORG = "SmoothHiring";
const DEFAULT_DESC =
  "Free hiring resources, interview kits, and HR templates to help teams hire better and faster.";

function resolveTitle(
  fallback: string,
  cmsTitle?: string | null,
  cmsMetaTitle?: string | null
): string {
  if (cmsMetaTitle?.trim()) return cmsMetaTitle.trim();
  if (cmsTitle?.trim()) return cmsTitle.trim();
  return fallback;
}

function resolveDescription(
  fallback: string,
  cmsDescription?: string | null,
  cmsMetaDescription?: string | null
): string {
  if (cmsMetaDescription?.trim()) return cmsMetaDescription.trim();
  if (cmsDescription?.trim()) return cmsDescription.trim();
  return fallback;
}

function buildMetadata(path: string[], title: string, description: string): Metadata {
  const url = sitePath(getResourcePageUrl(path));
  const isHub = path.length === 0;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: isHub ? "website" : "article",
      url,
      title,
      description,
      siteName: "SmoothHiring Resources",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}

export async function buildResourceRouteMetadata(path: string[]): Promise<Metadata> {
  const page = resolveResourcePage(path);

  if (page?.kind === "programmatic") {
    const slug = path[0];
    const row = getProgrammaticSeoPageBySlug(slug);
    if (row) {
      const cms = await getCmsResourcePage(path);
      const metaTitle = resolveTitle(row.metaTitle, cms?.title, cms?.meta?.title);
      const metaDesc = resolveDescription(
        row.metaDesc,
        cms?.description,
        cms?.meta?.description
      );
      return {
        title: { absolute: metaTitle },
        description: metaDesc,
        alternates: { canonical: sitePath(resourcePath(path)) },
        openGraph: {
          type: "website",
          url: sitePath(resourcePath(path)),
          title: metaTitle,
          description: metaDesc,
          siteName: "SmoothHiring Resources",
        },
        twitter: {
          card: "summary_large_image",
          title: metaTitle,
          description: metaDesc,
        },
        robots: { index: true, follow: true },
      };
    }
  }

  const cms = await getCmsResourcePage(path);
  const fallbackTitle = page?.title ?? (path.length ? path.join(" ") : "Resources");
  const fallbackDesc = page?.description ?? DEFAULT_DESC;
  const title = resolveTitle(fallbackTitle, cms?.title, cms?.meta?.title);
  const description = resolveDescription(fallbackDesc, cms?.description, cms?.meta?.description);

  return buildMetadata(path, title, description);
}

export async function getResourcePageCopy(path: string[]) {
  const cms = await getCmsResourcePage(path);
  if (!cms) return null;
  return {
    h1: cms.h1?.trim() || undefined,
    subheadline: cms.subheadline?.trim() || undefined,
    title: cms.title,
    description: cms.description,
  };
}

export async function loadProgrammaticCopy(path: string[]) {
  const slug = path[0];
  const row = getProgrammaticSeoPageBySlug(slug);
  if (!row) return undefined;
  const cms = await getResourcePageCopy(path);
  return {
    h1: cms?.h1 ?? row.h1,
    subheadline: cms?.subheadline,
  };
}

export function buildWebSiteJsonLd() {
  const base = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SmoothHiring Resources",
    url: base,
    description: DEFAULT_DESC,
    publisher: {
      "@type": "Organization",
      name: ORG,
      url: "https://www.smoothhiring.com",
    },
    inLanguage: "en-US",
  };
}
