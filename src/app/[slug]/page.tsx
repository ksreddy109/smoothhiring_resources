import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProgrammaticSeoPage } from "@/components/programmatic-seo/ProgrammaticSeoPage";
import {
  allProgrammaticSeoSlugs,
  getProgrammaticSeoPageBySlug,
} from "@/lib/programmatic-seo-data";
import { getMarketingSiteUrl } from "@/lib/site";

export const dynamic = "force-static";

export function generateStaticParams() {
  return allProgrammaticSeoSlugs().map((slug) => ({ slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

function canonicalUrl(urlPath: string) {
  const base = getMarketingSiteUrl();
  const p = urlPath.startsWith("/") ? urlPath : `/${urlPath}`;
  return `${base}${p}`;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getProgrammaticSeoPageBySlug(slug);
  if (!page) return {};

  const url = canonicalUrl(page.urlPath);
  return {
    title: page.metaTitle,
    description: page.metaDesc,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: page.metaTitle,
      description: page.metaDesc,
      siteName: "SmoothHiring",
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDesc,
    },
    robots: { index: true, follow: true },
  };
}

export default async function ProgrammaticSeoRoute({ params }: PageProps) {
  const { slug } = await params;
  const page = getProgrammaticSeoPageBySlug(slug);
  if (!page) notFound();
  return <ProgrammaticSeoPage page={page} />;
}
